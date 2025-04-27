import React, { useState } from "react";
import './App.css'
function LoanEMICalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [emi, setEmi] = useState(null);

  const calculateEMI = (e) => {
    e.preventDefault(); // Prevent form submission
    
    const P = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate);
    const N = parseInt(loanTerm) * 12; // Convert years to months
    const R = annualRate / 12 / 100; // Monthly interest rate

    // EMI formula calculation
    const calculatedEMI =
      (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEmi(calculatedEMI.toFixed(2)); // Format EMI to 2 decimal places
  };

  return (
    <main className="flex bg-amber-300 h-screen">
      <section className="h-full bg-amber-950 flex items-center justify-center w-1/2 p-6">
        <div className="text-white text-center">
          <h1 className="text-3xl font-bold mb-4">
            Be aware of your money through the loan EMI calculator
          </h1>
          <p className="text-lg">
            Use this amazing calculator to know your monthly EMI for any loan.
          </p>
        </div>
      </section>

      <form
        className="h-full bg-white p-8 flex flex-col justify-center items-center w-1/2"
        onSubmit={calculateEMI}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Loan EMI Calculator</h2>

        <div className="w-full mb-4">
          <label className="block text-gray-700 font-medium mb-2">Loan Amount (₹)</label>
          <input
            type="number"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
            placeholder="Enter loan amount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </div>

        <div className="w-full mb-4">
          <label className="block text-gray-700 font-medium mb-2">Interest Rate (%)</label>
          <input
            type="number"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
            placeholder="Enter interest rate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </div>

        <div className="w-full mb-4">
          <label className="block text-gray-700 font-medium mb-2">Loan Term (Years)</label>
          <input
            type="number"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
            placeholder="Enter loan term in years"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-amber-500 text-white py-3 rounded-lg hover:bg-amber-600 transition duration-300"
        >
          Discover EMI
        </button>

        {emi && (
          <div className="mt-6 text-center text-gray-700">
            <h2 className="text-2xl font-semibold">Your Monthly EMI: ₹{emi}</h2>
          </div>
        )}
      </form>
    </main>
  );
}

export default LoanEMICalculator;
