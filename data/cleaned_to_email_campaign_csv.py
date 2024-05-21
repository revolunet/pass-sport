#!/usr/bin/env python
# coding: utf-8

# # Génération d'un export de données pour les campagnes de mails
# 
# ## Traitements 
# 
# 1. Chargemement du fichier CSV 2024
# 2. Extraction du json d'allocataire en columns 
# 3. Mapping des données et suppression des données inutiles
# 4. Génération de l'url du qr code avec les paramètres encryptés
# 5. Sérialisation en 2 fichiers .csv distinct pour les cas allocataire = bénéficiaire and allocataire != bénéficiaire
# 
# 

# In[ ]:


import pandas as pd
from dotenv import load_dotenv
import os
import json

load_dotenv()

pathfile_benef_2024 = os.environ['BENEF_2024_PATHFILE']
qr_code_secret_key = os.environ['BENEF_2024_QR_CODE_URL_SECRET']
qr_code_base_url = os.environ['BENEF_2024_QR_CODE_BASE_URL']
pathfile_campaign_csv_output_b = os.environ['CAMPAIGN_CSV_OUTPUT_B']
pathfile_campaign_csv_output_b_and_a = os.environ['CAMPAIGN_CSV_OUTPUT_B_AND_A']


# In[ ]:


df_main = pd.read_csv(pathfile_benef_2024, index_col=0, sep=',')


# In[ ]:


df_json_normalized = pd.json_normalize(df_main['allocataire'].apply(json.loads))
df_json_normalized = df_json_normalized.add_prefix('allocataire_')


# In[ ]:


df_main.index = pd.RangeIndex(start=0, stop=len(df_main), step=1)


# In[ ]:


df_unwrapped_alloc = pd.merge(df_main, df_json_normalized, left_index=True, right_index=True)


# In[ ]:


column_mapping = {
    'allocataire_courriel': 'email',
    'allocataire_qualite': 'allocataire_qualite',
    'allocataire_nom': 'allocataire_nom',
    'allocataire_prenom': 'allocataire_prenom',
    'prenom': 'beneficiaire_prenom',
    'nom': 'beneficiaire_nom',
    'genre': 'beneficiaire_genre',
    'date_naissance': 'beneficiaire_date_naissance',
    'id_psp': 'code',
    'allocataire_telephone': 'telephone'
}

# df_formatted = df_unwrapped_alloc.rename(columns=column_mapping) 
df_unwrapped_alloc.columns = df_unwrapped_alloc.columns.to_series().replace(column_mapping)


# In[ ]:


df_campaign = df_unwrapped_alloc[['email',
'allocataire_nom',
'allocataire_prenom','beneficiaire_prenom', 'beneficiaire_nom', 'beneficiaire_genre', 'beneficiaire_date_naissance', 'code', 'telephone']]


# In[ ]:


# new format for birth date
df_campaign['beneficiaire_date_naissance'] = pd.to_datetime(df_campaign['beneficiaire_date_naissance'].apply(lambda v: v[:10]), format='%Y-%m-%d')
df_campaign['beneficiaire_date_naissance'] = df_campaign['beneficiaire_date_naissance'].dt.strftime('%d/%m/%Y')


# In[ ]:


# Ajout d'une colonne pour le sexe 
df_campaign['neele'] = 'Né le'
mask_girl = df_campaign['beneficiaire_genre'] == 'F'
df_campaign.loc[mask_girl, 'neele'] =  'Née le'


# In[ ]:


df_campaign['allocataire_prenom'] = df_campaign['allocataire_prenom'].astype(str).apply(lambda x: x.capitalize())
df_campaign['allocataire_nom'] = df_campaign['allocataire_nom'].astype(str).apply(lambda x: x.capitalize())
df_campaign['beneficiaire_prenom'] = df_campaign['beneficiaire_prenom'].astype(str).apply(lambda x: x.capitalize())
df_campaign['beneficiaire_nom'] = df_campaign['beneficiaire_nom'].astype(str).apply(lambda x: x.capitalize())


# In[ ]:


df_campaign['telephone'] = df_campaign['telephone'].replace('^0', '+33', regex=True)


# In[ ]:


# # Génération des URLs pour le QR code
import hmac
import hashlib
import urllib.parse
import base64

from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
from Crypto.Random import get_random_bytes

base_64_key = base64.b64decode(qr_code_secret_key)
key_mapping = { 'beneficiaire_prenom': 'bp', 'beneficiaire_nom': 'bn', 'beneficiaire_genre' : 'bg', 'beneficiaire_date_naissance': 'bdn', 'code': 'c'}

def encrypt(data):
    cipher = AES.new(base_64_key, AES.MODE_CBC)
    ct_bytes = cipher.encrypt(pad(data.encode('utf-8'), AES.block_size))
    iv = cipher.iv
    ct = base64.b64encode(iv + ct_bytes).decode('utf-8')
    return ct


def generate_encrypted_url_column(row):
    params = {key_mapping.get(column): row[column] for column in df_campaign.columns}
    cleaned_params = {k: v for k, v in params.items() if k is not None}
    encoded_params = urllib.parse.urlencode(cleaned_params)
    encoded_encrypted_params = encrypt(encoded_params)
    full_url_string = f"{qr_code_base_url}/{encoded_encrypted_params}"
    return full_url_string
    
if 'url_qr_code' in df_campaign:
    del df_campaign['url_qr_code']

df_campaign['url_qr_code'] = df_campaign.apply(generate_encrypted_url_column, axis=1)


# In[ ]:


# # AES decryption test
# def generate_decrypted_url_column(row):
#     encrypted_part = row['url_qr_code'].replace(qr_code_base_url+'?', '')
#     return decrypt(encrypted_part)

# def decrypt(data):
#     enc_data_bytes = base64.b64decode(data)
#     iv = enc_data_bytes[:AES.block_size]
#     ct = enc_data_bytes[AES.block_size:]
#     decrypt_cipher = AES.new(base_64_key, AES.MODE_CBC, iv)
#     decrypted_ct = decrypt_cipher.decrypt(ct)
#     pt = unpad(decrypted_ct, AES.block_size)
#     url_param = pt.decode('utf-8')
#     return url_param

# df_campaign['query_params_decrypted'] = df_campaign.apply(generate_decrypted_url_column, axis=1)


# In[ ]:


# Génération csv dans le cas allocataire = bénéficiaire
mask_alloc_diff_benef = df_campaign['beneficiaire_prenom'].str.lower() != df_campaign['allocataire_prenom'].str.lower()
df_alloc_diff_benef = df_campaign[mask_alloc_diff_benef]


# In[ ]:


# Génération csv dans le cas allocataire != bénéficiaire
mask_alloc_eq_benef = df_campaign['beneficiaire_prenom'].str.lower() == df_campaign['allocataire_prenom'].str.lower()
df_alloc_eq_benef = df_campaign[mask_alloc_eq_benef]


# In[ ]:


# (Opt) Ajout de la taille de l'URL
# df_campaign['url_qr_code_len'] = df_campaign['url_qr_code'].apply(lambda x: len(x))


# In[ ]:


# (Opt) Check sur la longueur des URLs
# mask_max_len_filter = df_campaign['url_qr_code'].apply(lambda x: len(x)) > 255
# df_excedeed = df_campaign[mask_max_len_filter]


# In[ ]:


df_alloc_eq_benef.to_csv(pathfile_campaign_csv_output_b, index=False)
df_alloc_diff_benef.to_csv(pathfile_campaign_csv_output_b_and_a, index=False)

