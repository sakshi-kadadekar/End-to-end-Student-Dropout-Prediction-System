# 🎓 End-to-end-Student-Dropout-Prediction-System

## 📌 Overview

The **Student Dropout Prediction System** is an end-to-end machine learning solution designed to identify students at risk of dropping out based on academic, demographic, and socioeconomic factors.

This project leverages **XGBoost** for prediction, integrates explainability using **SHAP**, and is deployed as a REST API using **FastAPI**.

---

## 🚀 Features

* 📊 Predicts student dropout risk with probability score
* 🧹 Data preprocessing using **pandas**
* 🧠 Model explainability using SHAP (feature contribution analysis)
* ⚡ Real-time predictions via FastAPI
* 🔌 Easy integration with frontend or other systems

---

## 🛠️ Tech Stack

| Category        | Tools         |
| --------------- | ------------- |
| Language        | Python        |
| Data Processing | Pandas, NumPy |
| ML Model        | XGBoost       |
| Evaluation      | Scikit-learn  |
| Explainability  | SHAP          |
| Backend         | FastAPI       |
| Server          | Uvicorn       |
| Version Control | Git & GitHub  |

---

## 📊 Model Performance

* **Accuracy:** ~85%
* **Recall (Dropout Class):** ~78–79%
* **Balanced precision-recall tradeoff**
* Optimized for identifying at-risk students

---

## 📁 Project Structure

```
student-dropout-ml/
│
├── data/
│   └── students.csv
│
├── notebooks/
│   └── eda.ipynb
│
├── app/
│   └── main.py        # FastAPI app
│
├── src/
│   ├── train.py
│   ├── predict.py
│
├── model.pkl
├── requirements.txt
├── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone <your-repo-link>
cd student-dropout-ml
```

### 2️⃣ Create Virtual Environment

```bash
python -m venv venv
venv\Scripts\activate   # Windows
```

### 3️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

---

## ▶️ Run the Application

```bash
uvicorn app.main:app --reload
```

Open in browser:

```
http://127.0.0.1:8000/docs
```

---

## 📡 API Endpoints

### 🔹 GET `/`

Check API status

### 🔹 POST `/predict`

Predict dropout risk

#### Example Input:

```json
{
  "Age at enrollment": 20,
  "Gender": 1,
  "Tuition fees up to date": 0,
  "Curricular units 1st sem (approved)": 3,
  "Curricular units 2nd sem (approved)": 2,
  "Unemployment rate": 10.8,
  "Inflation rate": 1.4,
  "GDP": 1.79
}
```

#### Example Output:

```json
{
  "prediction": 1,
  "probability": 0.99
}
```

---

## 🧠 Explainability (SHAP)

The system uses SHAP to:

* Interpret model predictions
* Identify key factors influencing dropout
* Provide transparency for decision-making

---

## 🎯 Use Case

* Early identification of at-risk students
* Institutional decision support
* Improving student retention strategies

---

## 💼 Resume Description

> Built an end-to-end student dropout prediction system using XGBoost with SHAP-based explainability and deployed it via FastAPI as a real-time REST API.

---

## 🔮 Future Enhancements

* 🔹 Docker containerization
* 🔹 Cloud deployment (AWS / Render)
* 🔹 MLflow integration for experiment tracking
* 🔹 Frontend dashboard (React)

---

## 👩‍💻 Author

**Sakshi Kadadekar**

---

# 🎉 Final Note

This project demonstrates a **complete ML lifecycle**:

> Data → Model → Evaluation → Explainability → Deployment

---

If you want next:
👉 I can create a **LinkedIn post to showcase this project**
👉 OR help you **deploy it on cloud (AWS / Render)** 🚀
