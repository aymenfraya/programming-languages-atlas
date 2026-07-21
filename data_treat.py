import pandas as pd
import matplotlib.pyplot as plt
#_____________________________________functions________________________________________________ 


# filtering the data by primary paradigm name and create new dfs based on it : 


def new_dfs(df, paradigm_name):
    sub_df = df.query("primary_paradigm == @paradigm_name")
    sub_df = sub_df.reset_index(drop=True)
    return sub_df


# creating JSON files for dfs :


def convert_to_JSON(df, file_name):
    df.to_json(
        f"JSON/{file_name}.json",
        orient = 'records',    
        indent = 4
    )
#________________________________creating the dataframes __________________________________________________________________________________

data = pd.read_csv('CSV/languages_data.csv', encoding='utf-8') # the main one
lan_df = data #the one we are going to search with 

# sub dfs:
arr = [] #empty array we will append dfs to it so we can make the converting easier
names = [
    "oop_df",
    "proced_df",
    "script_df",
    "conc_df",
    "fun_df",
    "mul_df",
    "decl_df",
    "imp_df",
    "lan_df"
] #name of each JSON
oop_df = new_dfs(data, 'Object-Oriented')
arr.append(oop_df)
proced_df = new_dfs(data, 'Procedural')
arr.append(proced_df)
script_df = new_dfs(data, 'Scripting')
arr.append(script_df)
conc_df = new_dfs(data, 'Concurrent')
arr.append(conc_df)
fun_df = new_dfs(data, 'Functional')
arr.append(fun_df)
mul_df = new_dfs(data, 'Multi-paradigm')
arr.append(mul_df)
decl_df = new_dfs(data, "Declarative")
arr.append(decl_df)
imp_df = new_dfs(data, "Imperative")
arr.append(imp_df)
arr.append(lan_df)

#___________________________________converting to JSON files ______________________________

for i in range(len(arr)):
    convert_to_JSON(arr[i],names[i])
print("DONE SUCCESFULY !!! ")
