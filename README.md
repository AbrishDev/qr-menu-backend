# 📌 QR Code-Based Hotel Menu System

## 🏠 Overview
This is a **backend API** for a hotel menu system where:
- **Admins** can log in and manage menu items.
- **Customers** can scan a **QR code** to view the menu.

## 🚀 Features
✅ Admin authentication (Signup & Login)  
✅ Menu management (Add, View, Update, Delete)  
✅ QR code generation for menus  

---

## 📂 Project Structure
```
/hotel-menu-backend
│── /src
│   ├── /controllers       # Handles request logic
│   ├── /models            # Defines MongoDB schemas
│   ├── /routes            # Defines API endpoints
│   ├── /middlewares       # Authentication & validation middleware
│   ├── /services          # Business logic (e.g., QR code generation)
│── .env                   # Environment variables
│── server.js              # Main server entry point
│── package.json           # Dependencies & scripts
```

---

## 🛠 Installation & Setup

### 1⃣ Clone the Repository
```sh
git clone https://github.com/AbrishDev/qr-menu-backend.git
cd hotel-menu-backend
```

### 2⃣ Install Dependencies
```sh
npm install
```

### 3⃣ Configure Environment Variables
Create a `.env` file and add:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/Hotel
JWT_SECRET=HelloWorld
```

### 4⃣ Run the Server
```sh
npm start
```
Server will run at: **`http://localhost:5000`** 🚀

---

## 💼 API Endpoints

### 🔒 Authentication (Admin)
| Method | Endpoint          | Description             |
|--------|------------------|-------------------------|
| POST   | `/api/auth/signup`  | Register a new admin   |
| POST   | `/api/auth/login`   | Login an admin         |

### 🍽 Menu Management
| Method | Endpoint        | Description             |
|--------|----------------|-------------------------|
| POST   | `/api/menu`     | Add a new menu item     |
| GET    | `/api/menu`     | Get all menu items      |
| GET    | `/api/menu/:id` | Get a specific menu item |

### 📱 QR Code
| Method | Endpoint            | Description                  |
|--------|----------------------|------------------------------|
| GET    | `/api/qrcode/:menuId` | Generate a QR code for a menu |

---

## 📌 Technologies Used
- **Node.js & Express.js** - Backend framework  
- **MongoDB & Mongoose** - Database  
- **JWT (JSON Web Tokens)** - Authentication  
- **QR Code Generator** - Generates menu QR codes  

---

## 🛠 Future Improvements
- 📝 Customer ordering system  
- 🛒 Online payments integration  
- 📊 Admin dashboard for analytics  

---

## 🏆 Contributors
👤 **Your Name** - [GitHub Profile](https://github.com/AbrishDev)  

---

## 📝 License
This project is **MIT Licensed**.

