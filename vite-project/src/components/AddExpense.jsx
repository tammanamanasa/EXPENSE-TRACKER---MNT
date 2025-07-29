import React, { useState } from 'react';

const AddExpense = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount)
    };
    onAdd(newExpense);
    setTitle('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-expense-form">
      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default AddExpense;
