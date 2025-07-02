# 💼 Portfolio Backend – Jabed Miah

This is the **backend server** of my full-stack personal portfolio website, built to power a contact form and securely handle user messages. It handles incoming API calls, validates and saves user data to MongoDB Atlas, and confirms success back to the frontend. This backend also logs activity live via Render and supports production deployment.

📍 Frontend Live: [https://jabed1234.github.io/Portfolio-frontend/](https://jabed1234.github.io/Portfolio-frontend/)

## 📦 Features

- ✅ REST API endpoint to handle contact form submissions
- 🧠 Validates and parses user-submitted data
- 🗄️ Stores messages in a cloud MongoDB Atlas database
- 🔄 Sends response to the frontend confirming success
- 🚀 Hosted on Render, auto-deploys on `git push`
- 🔐 Secured with environment variables (dotenv)

---

## 🛠 Tech Stack

| Layer          | Tech                     |
|----------------|--------------------------|
| Server         | Node.js + Express        |
| Database       | MongoDB Atlas + Mongoose |
| Deployment     | Render                   |
| Environment    | dotenv                   |
| API Style      | REST                     |

---

## 📡 Endpoint

POST /submit-form

pgsql
Copy
Edit

### Payload (JSON)
```json
{
  "name": "Jabed Miah",
  "email": "jmiah3153@cimsnyc.org",
  "message": "Hi there, this is my first message!",
  "phoneNumber": "3472697248",
  "subject": "First Email"
}
### Payload (JSON)

Response
json
Copy
Edit
{
  "status": "success",
  "message": "Form data saved successfully!"
}
🖥️ Render Live Logs Example
Here's a live capture of the server saving data on Render:


It confirms:

Server running on port 10000

Connected to MongoDB

Entry successfully saved with full metadata

🧾 MongoDB Document Example
Here's a saved document from the MongoDB Atlas collection:


Data saved includes:

name, email, message, phoneNumber, subject, and automatic ObjectId + timestamp

🚀 Deployment
This app is deployed using Render.

Environment Variables: stored securely in Render using .env

MONGO_URI: Your MongoDB Atlas connection string

PORT: The port Render assigns dynamically (e.g. 10000)

Build/Start Command:

bash
Copy
Edit
node server.js
🔗 Integration with Frontend
The backend is connected to my frontend hosted via GitHub Pages:

🔗 https://jabed1234.github.io/Portfolio-frontend/

When the user submits a form on that site:

The data is POSTed to the Render API endpoint.

The backend saves it to MongoDB.

A success message is returned and shown in the UI.

⚙️ Running Locally
Clone and run the backend locally:

bash
Copy
Edit
git clone https://github.com/Jabed1234/Portfolio-backend.git
cd Portfolio-backend
npm install
touch .env
# Add your MongoDB URI to .env:
# MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/portfolio
node server.js
📄 License
All rights reserved © Jabed Miah

This project is not open for redistribution or reuse. Do not copy, fork, or republish the code without written permission.

📌 Future Improvements
Add form rate-limiting to prevent spam

Add email notifications (e.g. Nodemailer integration)

Admin dashboard for viewing messages

Better schema validation with Joi or Zod

Full logging + monitoring setup (e.g. LogRocket, Sentry)

💬 Contact
Want to collaborate or have a question?

📧 jmiah3153@cimsnyc.org
🌐 Portfolio Frontend
