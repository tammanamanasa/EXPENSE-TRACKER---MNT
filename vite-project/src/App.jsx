// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import SignInPage from './components/SignInPage'
import SignUpPage from './components/SignUpPage'
import Dashboard from './components/Dashboard'
import About from './components/About'
import Profile from './components/Profile'
import AccountsPage from './components/AccountsPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />  
        <Route path="/accounts" element={<AccountsPage />} />
      </Routes>
    </>
  )
}

export default App