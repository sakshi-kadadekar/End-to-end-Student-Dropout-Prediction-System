from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pickle
import pandas as pd

app = FastAPI()

# CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load trained model
model = pickle.load(open("model.pkl", "rb"))

# Training columns
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

    # Default values for missing features
    default_input = {col: 0 for col in columns}

    # Update with frontend values
    default_input.update(data)

    # Convert to dataframe
    df = pd.DataFrame([default_input])

    # Match training columns
    df = df.reindex(columns=columns, fill_value=0)

    # Prediction
    pred = model.predict(df)[0]
    prob = model.predict_proba(df)[0][1]

    return {
        "prediction": int(pred),
        "probability": float(prob)
    }