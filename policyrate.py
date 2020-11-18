import streamlit as st
import pandas as pd
import altair as alt
from altair import datum
import requests
import io
from vega_datasets import data

url="https://raw.githubusercontent.com/CMU-IDS-2020/fp-squirrels-in-my-pants/main/police_policies.csv"
s=requests.get(url).content
c=pd.read_csv(io.StringIO(s.decode('utf-8')))

trial = alt.Chart(c).mark_circle().encode(
    alt.X('City:N', bin=True),
    alt.Y('Total:Q', bin=True),
    #size='count()'
)
st.write(trial)
