#!/usr/bin/env python
# coding: utf-8

# # Retraitements de la BDD 2023
# 
# 
# ## Traitements 
# 
# 1. Chargemement du fichier CSV de BDD 2023
# 2. Suppression des bénéficiaires CNOUS
# 3. Suppression des anciens codes
# 4. Applications des critères d'éligibilité
# 5. Génération des codes
# 6. Création d'un CSV pour 2024
# 
# ## Critères d'éligibilités
# 
# - Nés entre le 16 septembre 2006 et le 31 décembre 2018 et bénéficient de l’allocation de rentrée scolaire ;
# - Nés entre le 1er juin 2004 et le 31 décembre 2018 et bénéficient de l’allocation d’éducation de l’enfant handicapé ;
# - Nés entre le 16 septembre 1993 et le 31 décembre 2008 et bénéficient de l’allocation aux adultes handicapés ;
# - Étudiants, âgés de 28 ans révolus au plus, et bénéficient au plus tard le 15 octobre 2024, d’une bourse de l’état de l’enseignement supérieur sous conditions de ressources, d’une aide annuelle du CROUS ou d’une bourse régionale pour les formations sanitaires et sociales pour l’année universitaire 2024 – 2025.

# In[84]:


import pandas as pd
from dotenv import load_dotenv
import os
load_dotenv()

pathfile_benef_2023 = os.environ['BENEF_2023_PATHFILE']
pathfile_benef_2023_without_crous = os.environ['BENEF_2023_WITHOUT_CROUS_PATHFILE']
pathfile_benef_2024 = os.environ['BENEF_2024_PATHFILE']


# In[85]:


# c parser is faster and correctly decode special char in json csv column
df_main = pd.read_csv(pathfile_benef_2023, index_col=0, engine='c', on_bad_lines='skip', sep=',')


# In[86]:


# suppression des bénéficiaires CNOUS
mask_without_cnous = df_main['organisme'] != 'cnous'
df_main_without_cnous = df_main[mask_without_cnous]

# suppression des anciens codes
del df_main_without_cnous["id_psp"]


# In[87]:


# suppression des précédents exercices
mask_2023 = df_main['exercice_id'] == 2
df_main_without_cnous = df_main_without_cnous[mask_2023]


# In[88]:


# serialisation d'un fichier intermédiaire sans les bénéficiaires CNOUS
df_main_without_cnous.to_csv(pathfile_benef_2023_without_crous)


# In[89]:


# start from here if without_cnous file is already generated
df_main_without_cnous = pd.read_csv(pathfile_benef_2023_without_crous, index_col=0, on_bad_lines='skip', sep=',')


# In[90]:


# Casting to a datetime to apply crterias 
df_main_without_cnous['date_naissance'] = pd.to_datetime(df_main_without_cnous['date_naissance'].astype(str).apply(lambda v: v[:10]), format='%Y-%m-%d', errors='coerce')
mask_wrong_datetime_format = pd.isnull(df_main_without_cnous.date_naissance)
print('Number of wrong birthdate time rows that while not be processed', len(df_main_without_cnous[mask_wrong_datetime_format]))


# In[128]:


from datetime import datetime

# ARS

start_date = datetime(2006, 9, 16).date()
end_date = datetime(2018, 12, 31).date()

caf_or_msa_filter = (df_main_without_cnous['organisme'] == 'CAF') | (df_main_without_cnous['organisme'] == 'MSA')
date_naissace_within = (df_main_without_cnous['date_naissance'].dt.date >= start_date) & (df_main_without_cnous['date_naissance'].dt.date <= end_date)
situation_jeune = ((df_main_without_cnous['situation'] == 'Jeune') | (df_main_without_cnous['situation'] == 'jeune'))

ars_situation_mask = (caf_or_msa_filter & date_naissace_within & situation_jeune)


# In[129]:


# AEEH

start_date = datetime(2004, 6, 1).date()
end_date = datetime(2018, 12, 31).date()

date_naissace_within = (df_main_without_cnous['date_naissance'].dt.date >= start_date) & (df_main_without_cnous['date_naissance'].dt.date <= end_date)

aeeh_situation_mask = (caf_or_msa_filter & date_naissace_within & situation_jeune)


# In[130]:


# AAH

start_date = datetime(1993, 9, 16).date()
end_date = datetime(2008, 12, 31).date()

date_naissace_within = (df_main_without_cnous['date_naissance'].dt.date >= start_date) & (df_main_without_cnous['date_naissance'].dt.date <= end_date)
sitation_aah =(df_main_without_cnous['situation'] == 'AAH')

aah_situation_mask = (caf_or_msa_filter & date_naissace_within & sitation_aah)


# In[131]:


# filtering on criterias
df_main_without_cnous_filtered = df_main_without_cnous[aah_situation_mask | ars_situation_mask | aeeh_situation_mask]


# In[132]:


# rebuild date as initial string formated object 
pd.options.mode.chained_assignment = None
df_main_without_cnous_filtered['date_naissance'] = df_main_without_cnous_filtered['date_naissance'].dt.strftime('%Y-%m-%d %H:%M:%S')


# In[133]:


# création d'un nouvel exercice
df_main_without_cnous_filtered["exercice_id"] = 4

timestamp_with_custom_tz = pd.Timestamp.now(tz='Europe/Paris')
df_main_without_cnous_filtered["created_at"] = timestamp_with_custom_tz


# In[127]:


# création d'un fichier csv intérmédiaire sans les codes
# df_main_without_cnous_filtered.to_csv(pathfile_benef_2024)


# In[ ]:


# df_main_without_cnous_filtered = pd.read_csv(pathfile_benef_2024, index_col=0, on_bad_lines='skip', sep=',')


# In[151]:


import random
import string
import datetime


current_date = datetime.datetime.now()
current_year = str(current_date.year)[-2:]

def get_characters_set(size = 4):
    return ''.join(random.choices([c for c in string.ascii_uppercase if c not in 'OI'], k=size))
    
def generate_code():
    return f"{current_year}-{get_characters_set(4)}-{get_characters_set(4)}"

def generate_unique_codes(n):
    unique_codes = set()
    while len(unique_codes) < n:
        code = generate_code()
        unique_codes.add(code)
    return list(unique_codes)

codes = generate_unique_codes(len(df_main_without_cnous_filtered.index))


# In[152]:


# Ensure uniquenes of codes
assert (len(codes) == len(set(codes)))


# In[149]:


df_main_without_cnous_filtered.insert(0, 'id_psp', codes)


# In[150]:


df_main_without_cnous_filtered.to_csv(pathfile_benef_2024)

