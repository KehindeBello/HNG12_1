# **Public API Project**

This project provides a simple public API that returns the following information in JSON format:
- My registered email address
- The current datetime as an ISO 8601 formatted timestamp
- The GitHub URL of the project's codebase

---

## **Setup Instructions**

Follow these steps to set up and run the project locally.

---

### **Prerequisites**
Before you begin, ensure you have the following installed on your machine:
1. **Node.js** (v16 or higher) - [Download Node.js](https://nodejs.org/)
2. **npm** (comes with Node.js)
3. **Git** - [Download Git](https://git-scm.com/)

---

### **Step 1: Clone the Repository**
Clone the project repository to your local machine:
```bash
git clone https://github.com/KehindeBello/HNG12_1.git
cd HNG12_1.git
```

### **Step 2: Install Dependencies**
Install the required dependencies using npm

```bash
npm install
```

### **Step 3: Run the project**

```bash
npm start
```
The server will start running at http://localhost:3000

### **Step 4: Test the API**
You can test the API by sending a `GET` request to the root endpoint `/`:

```bash
curl http://localhost:3000/
```
Or directly in your browser

### Sample Response
```
{
    "email": "adedotunomomeji@gmail.com",
    "current_datetime": "2025-01-30T12:00:00.000Z",
    "github_url": "https://github.com/KehindeBello/HNG12_1.git"
}
```

---
### API Documentation

The API documentation is available at the following endpoint:
- **URL:** `http://localhost:3000/docs`

---

### **Step 5: Stop the Server**
To stop the server, press `Ctrl + C` in the terminal where the server is running.

---

### **Hire Node.js Developer**
Looking for experienced Node.js developers? Visit [HNG.tech](https://hng.tech/hire/nodejs-developers)