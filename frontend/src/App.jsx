import axios from "axios";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, GraduationCap } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    age: "",
    tuition: "",
    approved1: "",
    approved2: "",
    scholarship: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const predictDropout = async () => {
    setLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8001/predict",
        {
          "Age at enrollment": Number(formData.age),
          "Tuition fees up to date": Number(formData.tuition),
          "Curricular units 1st sem (approved)": Number(formData.approved1),
          "Curricular units 2nd sem (approved)": Number(formData.approved2),
          "Scholarship holder": Number(formData.scholarship),
        }
      );

      setResult(response.data);
    } catch (error) {
      console.error(error);
      alert("Backend connection failed.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid lg:grid-cols-2 gap-8 w-full max-w-6xl"
      >
        {/* Left Card */}
        <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-800">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap size={32} />
            <div>
              <h1 className="text-3xl font-bold">
                Student Dropout Prediction
              </h1>
              <p className="text-slate-400">
                AI-powered academic risk analysis
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <input
              type="number"
              name="age"
              placeholder="Age at Enrollment"
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
              onChange={handleChange}
            />

            <select
              name="tuition"
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
              onChange={handleChange}
            >
              <option value="">Tuition Fees Up to Date</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>

            <input
              type="number"
              name="approved1"
              placeholder="1st Sem Approved Units"
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
              onChange={handleChange}
            />

            <input
              type="number"
              name="approved2"
              placeholder="2nd Sem Approved Units"
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
              onChange={handleChange}
            />

            <select
              name="scholarship"
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
              onChange={handleChange}
            >
              <option value="">Scholarship Holder</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>

            <button
              onClick={predictDropout}
              className="w-full bg-cyan-500 hover:bg-cyan-400 transition p-4 rounded-xl font-bold text-lg"
            >
              {loading ? "Predicting..." : "Predict Dropout Risk"}
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-800 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6">
            Prediction Result
          </h2>

          {result ? (
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="space-y-5"
            >
              {result.prediction === 1 ? (
                <div className="flex items-center gap-3 text-red-400">
                  <AlertTriangle size={34} />
                  <div>
                    <h3 className="text-3xl font-bold">
                      High Dropout Risk
                    </h3>
                    <p className="text-slate-400">
                      Intervention recommended
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3 text-green-400">
                  <CheckCircle size={34} />
                  <div>
                    <h3 className="text-3xl font-bold">
                      Low Dropout Risk
                    </h3>
                    <p className="text-slate-400">
                      Student likely to continue
                    </p>
                  </div>
                </div>
              )}

              <div className="bg-slate-800 rounded-2xl p-6">
                <p className="text-slate-400 mb-2">
                  Confidence Score
                </p>
                <h1 className="text-5xl font-bold">
                  {(result.probability * 100).toFixed(1)}%
                </h1>
              </div>
            </motion.div>
          ) : (
            <p className="text-slate-500">
              Fill the form and predict student risk.
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
}