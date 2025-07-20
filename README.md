# Securelytix

Securelytix is a full-stack web application designed to manage client and employee data with a strong focus on security and user experience. The app uses a React.js frontend and a Node.js/Express backend, providing a responsive UI, secure authentication, and real-time data dashboards.

---

## 🚀 Key Features

- **Secure Authentication**  
  JWT-based authentication system with protected routes.

- **Client Management**  
  Comprehensive client data management and analytics.

- **Employee Management**  
  Employee data tracking and role-based access.

- **Interactive Dashboard**  
  Real-time data visualization and smart insights.

- **Responsive Design**  
  Mobile-friendly UI with modern React components.

---

## 🛠 Prerequisites

Before you begin, ensure the following are installed:

- [Node.js 16+](https://nodejs.org/)
- npm or yarn (comes with Node.js)
- [Git](https://git-scm.com/)

---

## 📦 Installation

### 1. Clone the repository
```bash
git clone https://github.com/Chandan-singh-15/securelytix-app.git
cd securelytix-app
```

### 2. Install Backend Dependencies
```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

---

## 🔗 Dependencies

### Frontend (`frontend/package.json`)
```bash
npm install react@^18.2.0 react-dom@^18.2.0 react-router-dom@^6.8.0 axios@^1.3.0 react-scripts@5.0.1
npm install --save-dev @types/react @types/react-dom prettier eslint
```

### Backend (`backend/package.json`)
```bash
npm install express cors dotenv jsonwebtoken bcryptjs express-validator helmet morgan
npm install --save-dev nodemon concurrently
```

---

## ⚙️ Running in Development

### Start Backend Server
```bash
cd backend
npm start
```

### Start Frontend Server (in a new terminal)
```bash
cd frontend
npm start
```

- Frontend: http://localhost:3000  
- Backend API: http://localhost:5000  

---

## 🚢 Running in Production

### Build Frontend
```bash
cd frontend
npm run build
```

### Start Backend Server
```bash
cd ../backend
npm start
```

---

## ✅ Testing

### Frontend Tests
```bash
cd frontend
npm test
```

### Backend Tests
```bash
cd backend
npm test
```

---

## 🔐 Environment Variables

### Backend (`backend/.env`)
```env
PORT=5000
JWT_EXPIRE=7d
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
JWT_SECRET=your_secret_key_here
```

### Frontend (`frontend/.env`)
```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_API_BASE_URL=http://localhost:5000/api
REACT_APP_ENV=development
```

---

## 🧩 Common Issues

### Port Already in Use

```bash
# Kill process using port 5000
lsof -ti:5000 | xargs kill -9

# Kill process using port 3000
lsof -ti:3000 | xargs kill -9
```

### CORS Errors

- Ensure `CORS_ORIGIN` in backend `.env` is correct
- Verify frontend `.env` has correct `REACT_APP_API_URL`

### JWT Token Issues

- Ensure `JWT_SECRET` is set in backend `.env`
- Check token storage and usage in frontend `AuthContext`

---

## 📂 Project Structure

```
securelytix-app/
├── backend/             # Node.js/Express backend
│   ├── routes/
│   ├── controllers/
│   └── ...
├── frontend/            # React frontend
│   ├── src/
│   ├── public/
│   └── ...
└── README.md
```

---

## 📃 License

This project is licensed under the MIT License.

---

## 👤 Author

- **Chandan Singh**  
  GitHub: [@Chandan-singh-15](https://github.com/Chandan-singh-15)