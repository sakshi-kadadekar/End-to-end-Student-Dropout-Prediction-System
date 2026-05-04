from fastapi import FastAPI
import pickle
import pandas as pd

app = FastAPI()

# Load model
model = pickle.load(open("model.pkl", "rb"))
columns = [
'Marital status', 'Application mode', 'Application order', 'Course',
'Daytime/evening attendance', 'Previous qualification', 'Nacionality',
"Mother's qualification", "Father's qualification",
"Mother's occupation", "Father's occupation", 'Displaced',
'Educational special needs', 'Debtor', 'Tuition fees up to date',
'Gender', 'Scholarship holder', 'Age at enrollment', 'International',
'Curricular units 1st sem (credited)',
'Curricular units 1st sem (enrolled)',
'Curricular units 1st sem (evaluations)',
'Curricular units 1st sem (approved)',
'Curricular units 1st sem (grade)',
'Curricular units 1st sem (without evaluations)',
'Curricular units 2nd sem (credited)',
'Curricular units 2nd sem (enrolled)',
'Curricular units 2nd sem (evaluations)',
'Curricular units 2nd sem (approved)',
'Curricular units 2nd sem (grade)',
'Curricular units 2nd sem (without evaluations)',
'Unemployment rate', 'Inflation rate', 'GDP'
]

@app.get("/")
def home():
    return {"message": "API is running"}

@app.post("/predict")
def predict(data: dict):
    df = pd.DataFrame([data])
    df = pd.get_dummies(df)
    df = df.reindex(columns=columns, fill_value=0)

    pred = model.predict(df)[0]
    prob = model.predict_proba(df)[0][1]

    return {
        "prediction": int(pred),
        "probability": float(prob)
    }
