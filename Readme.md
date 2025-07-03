# 🌐 Portfolio Frontend

This repository contains the **frontend** of my personal portfolio website. Designed with a clean and modern UI, it showcases my projects, experience, and skills while allowing visitors to reach out directly via a secure contact form.

🔗 **Live Website**: [https://jabed1234.github.io/Portfolio-frontend/](https://jabed1234.github.io/Portfolio-frontend/)  
📦 **Backend API**: [Portfolio Backend Repo](https://github.com/Jabed1234/Portfolio-backend)  

---

## 🧑‍💻 Full-Stack Integration

This frontend is part of a complete **full-stack portfolio project**:  

- **Frontend (GitHub Pages)**  
  Displays an interactive contact form and handles API requests with JavaScript.  
- **Backend (Render)**  
  Node.js + Express API receives form data and processes it securely.  
- **Database (MongoDB Atlas)**  
  Persists visitor messages for future reference.  

🔁 **Workflow:**
Visitor fills contact form → Frontend sends API request → Backend validates & saves → Database stores data → Frontend shows success message

---

## ✨ Features

- 🎨 **Responsive Design** – Mobile-friendly and optimized for various screen sizes  
- 📝 **Contact Form** – Lets visitors send messages directly from the site  
- 🔗 **API Integration** – Sends form data to backend REST API  
- 💬 **Dynamic Feedback** – Displays success or error notifications after submission  
- ⚡ **Smooth Animations** – Enhanced user experience with CSS and JavaScript animations  
- 🖥️ **Static Hosting** – Deployed on GitHub Pages for fast global delivery  

---

## 🛠 Tech Stack

| Category        | Technologies              |
|------------------|---------------------------|
| **Languages**    | HTML5, CSS3, JavaScript   |
| **Hosting**      | GitHub Pages              |
| **API Requests** | Fetch API (AJAX)          |
| **Deployment**   | Git + GitHub              |
| **Design**       | Flexbox, CSS Grid, Animations |

---

## 🔗 Live Demo

🌍 **Website:** [jabed1234.github.io/Portfolio-frontend](https://jabed1234.github.io/Portfolio-frontend/)  
📡 **Backend API Endpoint:** [Render Backend API](https://portfolio-backend-vk0m.onrender.com)  

---

## 📂 Folder Structure

Portfolio-frontend/
├── index.html
├── styles.css
├── script.js
├── assets/
│ ├── images/
│ ├── icons/
└── README.md

---

## 📥 Running Locally

1. Clone the repository
   ```bash
   git clone https://github.com/Jabed1234/Portfolio-frontend.git
   cd Portfolio-frontend
Open index.html in your browser

bash
Copy
Edit
open index.html
📡 API Integration
The contact form sends data via POST to the backend API:

Endpoint:

bash
Copy
Edit
https://portfolio-backend-vk0m.onrender.com/submit-form
Example Payload:

{
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "message": "Hello Jabed, your portfolio is impressive!"
}
📈 Future Enhancements
🌱 Add dark mode toggle

📨 Inline form validation before submission

📷 Optimize images for faster load times

🌐 Add multi-language support

📄 License
All rights reserved © Jabed Miah
This repository is proprietary. Do not copy or redistribute without permission.

📬 Contact
📧 Email: jmiah5@fordham.edu

🌐 Portfolio: https://jabed1234.github.io/Portfolio-frontend/
