# 🎓 Student Dropout Prediction & Intervention System

An **End-to-End AI-powered Student Dropout Prediction System** designed to identify students at risk of dropping out using **Machine Learning**, **Explainable AI**, and a **modern web-based dashboard**.

The system predicts student dropout risk using academic, demographic, and institutional features and provides a probability score for early intervention and decision-making.

---

## 🚀 Project Overview

Student dropout is a major challenge in higher education institutions. Early identification of at-risk students can help institutions take preventive measures and improve student retention.

This project leverages an **XGBoost Machine Learning model** trained on student performance and demographic data to predict dropout probability. The prediction system is integrated with a **FastAPI backend** and a **React-based premium frontend dashboard** for real-time risk analysis.

The project also integrates **SHAP (SHapley Additive exPlanations)** to improve model transparency and explainability.

---

## ✨ Key Features

✅ **AI-Based Student Risk Prediction**  
Predicts whether a student is likely to dropout or continue.

✅ **Real-Time Prediction Dashboard**  
Modern React frontend for interactive student risk assessment.

✅ **FastAPI Backend Integration**  
REST API for real-time communication between frontend and ML model.

✅ **Explainable AI with SHAP**  
Visualizes feature importance to explain model decisions.

✅ **Probability-Based Risk Score**  
Returns confidence score for better academic intervention.

✅ **Professional End-to-End Architecture**  
Complete ML pipeline from prediction to frontend visualization.

---

## 🏗️ System Architecture

```text
React Frontend
        ↓
FastAPI Backend
        ↓
XGBoost ML Model
        ↓
Prediction Output
```

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Framer Motion
- Axios
- Lucide React

### Backend
- FastAPI
- Python

### Machine Learning
- XGBoost
- Scikit-learn
- SHAP
- Pandas
- NumPy

### Development Tools
- Git & GitHub
- VS Code
- Jupyter Notebook

---

## 📊 Machine Learning Workflow

The system follows an **end-to-end machine learning pipeline**:

### 1️⃣ Data Collection
Student demographic and academic data collected from dataset.

### 2️⃣ Data Preprocessing
- Handling missing values
- Feature selection
- Data transformation
- Feature engineering

### 3️⃣ Model Training
The model is trained using:

**XGBoost Classifier**

Why XGBoost?
- High prediction accuracy
- Efficient gradient boosting
- Strong performance on structured/tabular data

### 4️⃣ Explainability using SHAP
SHAP analysis is used to explain:
- Important features
- Feature contribution
- Model decision behavior

### 5️⃣ Deployment
Prediction system exposed via:

**FastAPI REST API**

Connected to:

**React Frontend Dashboard**

---

## 🎯 Features Used for Prediction

The model was trained on **34+ academic and demographic features**, including:

- Marital Status
- Application Mode
- Previous Qualification
- Tuition Fees Status
- Scholarship Holder
- Academic Performance
- Semester Approved Units
- Semester Grades
- GDP
- Inflation Rate
- Student Attendance
- Educational Needs

For usability, the frontend currently uses selected high-impact features identified through SHAP analysis.

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/student-dropout-ml.git
cd student-dropout-ml
```

---

### 2️⃣ Backend Setup (FastAPI)

Create virtual environment:

```bash
python -m venv venv
```

Activate environment:

**Windows**
```bash
venv\Scripts\activate
```

**Mac/Linux**
```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run backend server:

```bash
uvicorn app.main:app --reload --port 8001
```

Backend URL:

```text
http://127.0.0.1:8001
```

Swagger Documentation:

```text
http://127.0.0.1:8001/docs
```

---

### 3️⃣ Frontend Setup (React)

Move to frontend folder:

```bash
cd frontend
```

Install packages:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

## 📌 API Endpoint

### Predict Student Dropout

**POST** `/predict`

### Sample Request

```json
{
  "Age at enrollment": 18,
  "Tuition fees up to date": 1,
  "Curricular units 1st sem (approved)": 6,
  "Curricular units 2nd sem (approved)": 5,
  "Scholarship holder": 1
}
```

### Sample Response

```json
{
  "prediction": 0,
  "probability": 0.4867
}
```

Where:

- `0` → Student likely to continue
- `1` → High dropout risk

---

## 📈 Model Performance

| Metric | Score |
|--------|------|
| Accuracy | ~85% |
| Algorithm | XGBoost |
| Explainability | SHAP |

---

## 🔮 Future Enhancements

- 🔹 Docker Containerization
- 🔹 Cloud Deployment (AWS / Render)
- 🔹 Student Analytics Dashboard
- 🔹 Authentication System
- 🔹 Advanced Risk Visualization
- 🔹 Model Retraining Pipeline
- 🔹 Real-Time Database Integration

---

## 👩‍💻 Author

**Sakshi Kadadekar**

📧 Email: sakshisantosh0305@gmail.com

💼 LinkedIn:  
https://www.linkedin.com/in/sakshi-kadadekar-231311365

💻 GitHub:  
https://github.com/sakshi-kadadekar

---
