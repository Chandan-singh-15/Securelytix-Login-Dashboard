import React, { useState } from 'react';
import { login } from '../../services/api';
import { validateEmail, validatePassword } from '../../utils/validation';
import { FiLock, FiUnlock } from 'react-icons/fi';
import './Login.css';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters with letters and numbers';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      const response = await login(formData);
      
      if (response.data.success) {
        const { token, user } = response.data.data;
        localStorage.setItem('token', token);
        onLogin(user);
      } else {
        setErrors({ general: response.data.message || 'Login failed' });
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrors({ 
        general: error.response?.data?.message || 'Login failed. Please try again.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-background">
        <div className="login-card">
          <div className="login-header">
            <div className="logo">
              <div className="flex flex-col items-center space-y-2">
                <h1 className="logo"> 
                <img src="/Logo.svg" alt="" className="logo-img" /> 
                </h1>
                <p className="login-subtitle">Sign In to your Account</p>
                </div>
                </div>
                </div>
          
          <form onSubmit={handleSubmit} className="login-form">
            {errors.general && (
              <div className="error-message general-error">
                {errors.general}
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor="email" style={{
    display: 'block',
    fontSize: '1rem',
    fontWeight: 600,
    color: '#ffffff',
    marginBottom: '0.5rem'}}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-input ${errors.email ? 'error' : ''}`}
                placeholder="Enter your email"
                disabled={isLoading}
              />
              {errors.email && (
                <div className="error-message">{errors.email}</div>
              )}
            </div>
            
            <div className="form-group">
              <label htmlFor="password" style={{
    display: 'block',
    fontSize: '1rem',
    fontWeight: 600,
    color: '#ffffff',
    marginBottom: '0.5rem'
  }}>
                Password
              </label>
              <div className="password-input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`form-input ${errors.password ? 'error' : ''}`}
                  placeholder="Enter your password"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={togglePasswordVisibility}
                  disabled={isLoading}
                >
                  {showPassword ? <FiUnlock /> : <FiLock />}
                </button>
              </div>
              {errors.password && (
                <div className="error-message">{errors.password}</div>
              )}
            </div>
            
            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  disabled={isLoading}
                />
                <span className="checkbox-text">Remember me</span>
              </label>
            </div>
            
            <button
              type="submit"
              className="btn btn-primary login-button"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
           
        </div>
      </div>
    </div>
  );
};

export default Login;