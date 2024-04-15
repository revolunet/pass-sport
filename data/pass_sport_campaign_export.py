#!/usr/bin/env python
# coding: utf-8

# # Génération d'un export de données pour les campagnes de mails
# 
# ## Traitements 
# 
# 1. Chargemement du fichier CSV 2024
# 2. Extraction du json d'allocataire en columns 
# 3. Mapping des données et suppression des données inutiles
# 4. Génération de l'url et de sa signature pour éviter les altérations
# 5. Sérialisation en .csv
# 

# In[ ]:


import pandas as pd
from dotenv import load_dotenv
import os
import json

load_dotenv()

pathfile_benef_2024 = os.environ['BENEF_2024_PATHFILE']
qr_code_signature_secret = os.environ['BENEF_2024_QR_CODE_URL_SECRET']
qr_code_base_url = os.environ['BENEF_2024_QR_CODE_BASE_URL']
pathfile_campaign_csv_output = os.environ['CAMPAIGN_CSV_OUTPUT']


# In[ ]:


df_main = pd.read_csv(pathfile_benef_2024, index_col=0, encoding='iso-8859-1', on_bad_lines='skip', sep=',')


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
}

# df_formatted = df_unwrapped_alloc.rename(columns=column_mapping) 
df_unwrapped_alloc.columns = df_unwrapped_alloc.columns.to_series().replace(column_mapping)


# In[ ]:


df_unwrapped_alloc = df_unwrapped_alloc[['allocataire_email', 'allocataire_qualite', 'allocataire_nom', 'allocataire_prenom',
'beneficiaire_prenom', 'beneficiaire_nom', 'beneficiaire_genre', 'beneficiaire_date_naissance', 'code']]


# In[ ]:


# Génération des URLs pour le QR code

import hmac
import hashlib
import urllib.parse


def generate_signature(secret_key, data):
    secret_key_bytes = secret_key.encode('utf-8')
    data_bytes = data.encode('utf-8')

    signature = hmac.new(secret_key_bytes, data_bytes, hashlib.sha256).hexdigest()

    return signature

def generate_url_column(row):
    params = {column: row[column] for column in df_unwrapped_alloc.columns}
    encoded_params = urllib.parse.urlencode(params)
    unencoded_string = f"{qr_code_base_url}?{encoded_params}"
    signature_hash = generate_signature(qr_code_signature_secret, unencoded_string)
    url_with_signature = f"{unencoded_string}&signature={signature_hash}"
    return url_with_signature
    
# del df_unwrapped_alloc['url_qr_code']

df_unwrapped_alloc['url_qr_code'] = df_unwrapped_alloc.apply(generate_url_column, axis=1)


# In[ ]:


df_unwrapped_alloc.to_csv(pathfile_campaign_csv_output, index=False)

