# 🚀 CI/CD Node.js Web App (GitHub Actions + Railway)

This project demonstrates a simple **CI/CD pipeline** using **GitHub Actions** and **Railway** for automated deployment.

## 🧩 Project Overview
- **Language:** Node.js (Express)
- **Containerization:** Docker
- **CI/CD Tool:** GitHub Actions
- **Deployment Platform:** Railway (Free Cloud Hosting)

## ⚙️ Setup Steps
```bash
git clone https://github.com/<your-username>/ci-cd-node-app.git
cd ci-cd-node-app
npm install
npm start
```
Visit 👉 http://localhost:3000

## 🧱 Docker Commands
```bash
docker build -t ci-cd-node-app .
docker run -p 3000:3000 ci-cd-node-app
```

## 🚀 CI/CD Setup
1. Push code to GitHub  
2. Add secrets in GitHub → Settings → Secrets → Actions:
   - `RAILWAY_API_KEY`
   - `RAILWAY_SERVICE_ID`
3. GitHub Actions automatically builds and deploys to Railway.

## ✅ Output Example
```
✅ Server started on port 3000
🚀 Hello from CI/CD Node.js App!
project is live
```
