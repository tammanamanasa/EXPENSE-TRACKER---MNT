import React, { useState } from 'react';
import './Dashboard.css';
import IncomeExpensesSummary from "./IncomeExpensesSummary";
import CurrentBalance from "./CurrentBalance";
import CategoryExpenseChart from "./CategoryExpenseChart";
import MonthlySpendingGraph from './MonthlySpendingGraph';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => navigate('/');
  const handleProfile = () => navigate('/profile');
  const handleAccounts = () => navigate('/accounts');

  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode(prev => !prev);
  const themeClass = isDarkMode ? 'dark-mode' : 'light-mode';

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Petrol", date: "2025-05-02", amount: 1500 },
    { id: 2, description: "Snacks", date: "2025-05-02", amount: 300 },
  ]);

  const [newExpense, setNewExpense] = useState({ description: '', date: '', amount: '' });
  const [editExpense, setEditExpense] = useState(null);

  const handleAddInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense({ ...newExpense, [name]: value });
  };

  const handleAddExpense = () => {
    if (newExpense.description && newExpense.date && newExpense.amount) {
      const newEntry = {
        id: expenses.length + 1,
        ...newExpense,
        amount: parseFloat(newExpense.amount),
      };
      setExpenses([...expenses, newEntry]);
      setNewExpense({ description: '', date: '', amount: '' });
    }
  };

  const handleEditClick = (expense) => {
    setEditExpense({ ...expense });
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditExpense({ ...editExpense, [name]: value });
  };

  const handleUpdateExpense = () => {
    if (editExpense.description && editExpense.date && editExpense.amount) {
      const updatedExpenses = expenses.map(exp =>
        exp.id === editExpense.id ? { ...editExpense, amount: parseFloat(editExpense.amount) } : exp
      );
      setExpenses(updatedExpenses);
      setEditExpense(null);
    }
  };

  const handleDelete = (id) => {
    const updated = expenses.filter(exp => exp.id !== id);
    setExpenses(updated);
  };

  return (
    <div className={`dashboard ${themeClass}`}>
      <header className="dashboard-header">
        <h2>DASHBOARD</h2>
        <div>
          <button onClick={handleAccounts}>Accounts</button>
          <button onClick={handleProfile}>Profile</button>
          <button onClick={handleLogout}>Logout</button>
          <button onClick={toggleTheme}>
            {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </header>

      <section className="budget-summary">
        <h3>Available Budget in Month</h3>
        <h1>₹11460</h1>
      </section>

      <section className="feature-widgets">
        <div className="widget-row">
          <CurrentBalance />
          <IncomeExpensesSummary />
        </div>
        <div className="widget-row">
          <CategoryExpenseChart />
          <MonthlySpendingGraph />
        </div>
      </section>

      <section className="add-expense-form">
        <h4>Add Expense</h4>
        <input type="text" name="description" placeholder="Description" value={newExpense.description} onChange={handleAddInputChange} />
        <input type="date" name="date" value={newExpense.date} onChange={handleAddInputChange} />
        <input type="number" name="amount" placeholder="Amount" value={newExpense.amount} onChange={handleAddInputChange} />
        <button onClick={handleAddExpense}>Add Expense</button>
      </section>

      {editExpense && (
        <section className="edit-expense-form">
          <h4>Edit Expense</h4>
          <input type="text" name="description" value={editExpense.description} onChange={handleEditInputChange} />
          <input type="date" name="date" value={editExpense.date} onChange={handleEditInputChange} />
          <input type="number" name="amount" value={editExpense.amount} onChange={handleEditInputChange} />
          <button onClick={handleUpdateExpense}>Update Expense</button>
        </section>
      )}

      <section className="tables-section">
        <div className="income-table">
          <h4 style={{ color: "green" }}>Income</h4>
          <table>
            <thead>
              <tr><th>#</th><th>Description</th><th>Date</th><th>Amount</th><th>Edit</th><th>Delete</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>Salary</td><td>2025-05-01</td><td>30000</td><td>✏</td><td>🗑</td></tr>
            </tbody>
          </table>
        </div>

        <div className="expense-table">
          <h4 style={{ color: "red" }}>Expenses</h4>
          <table>
            <thead>
              <tr><th>#</th><th>Description</th><th>Date</th><th>Amount</th><th>Edit</th><th>Delete</th></tr>
            </thead>
            <tbody>
              {expenses.map((exp, index) => (
                <tr key={exp.id}>
                  <td>{index + 1}</td>
                  <td>{exp.description}</td>
                  <td>{exp.date}</td>
                  <td>₹{exp.amount}</td>
                  <td style={{ cursor: 'pointer' }} onClick={() => handleEditClick(exp)}>✏</td>
                  <td style={{ cursor: 'pointer' }} onClick={() => handleDelete(exp.id)}>🗑</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
