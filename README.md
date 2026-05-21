# 💡 IdeaVault - Startup Idea Sharing Platform

Live Site: https://idea-vault-munaimpro.vercel.app/

## 📌 Overview

IdeaVault is a modern startup idea sharing platform where users can post, explore, interact, and manage innovative startup ideas. The platform enables creators to share their concepts, receive feedback, and collaborate with others through a clean and interactive UI.

This project is built with a focus on authentication, idea management (CRUD), and real-world full-stack application structure using Next.js and modern web technologies.

---

## 🚀 Features

### 👤 Authentication
- Email & Password login
- Google OAuth login
- Protected routes (middleware-based access control)

### 💡 Idea Management
- Create new startup ideas
- Update existing ideas (modal-based editing)
- Delete ideas with confirmation
- View detailed idea pages

### 🔥 Idea Interaction
- Like system for ideas
- Trending ideas section
- Interacted ideas tracking

### 👥 User Features
- Profile view and update system
- User-specific idea dashboard ("My Ideas")

### 🎨 UI/UX
- Fully responsive design (mobile, tablet, desktop)
- Modern card-based layout
- Dark mode support (Next Themes)
- Smooth hover interactions and animations

---

## 🛠️ Tech Stack

### Frontend
- Next.js (App Router)
- React.js
- Tailwind CSS
- HeroUI Components
- next-themes

### Backend
- Node.js (API layer / server)
- MongoDB (Database)
- Better Auth (Authentication system)

### Other Tools
- Vercel (Deployment)
- React Hot Toast (Notifications)

---

## 🔐 Authentication Flow

- Users can sign up using email/password or Google
- Session is managed using `authClient`
- Protected routes ensure only authenticated users can access dashboard features

---

## 📂 Core Pages

- `/` → Home (Trending Ideas)
- `/ideas/[id]` → Idea Details
- `/add-idea` → Create Idea
- `/my-ideas` → User’s Ideas
- `/interactions` → Interacted Ideas
- `/profile` → User Profile

---

## ⚙️ Key Functionalities

- Server + Client Component Hybrid Architecture
- Secure API communication with Bearer token
- Dynamic modals for editing and deleting ideas
- Optimized UI rendering with reusable card components
- Middleware-based route protection

---

## 🌐 Deployment

Project is deployed on Vercel:

👉 https://idea-vault-munaimpro.vercel.app/

---

## 📌 Future Improvements

- Advanced search & filtering system
- Comment system for ideas
- Bookmark/favorite ideas
- Pagination & infinite scroll
- Admin dashboard

---

## 👨‍💻 Developer

Built by **Munaim Khan**

