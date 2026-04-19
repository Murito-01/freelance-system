# Freelance OS

A web application designed to help freelancers manage clients, projects, and tasks in one place.

This project is built as a portfolio to demonstrate fullstack development skills using **React (Vite + TypeScript)** and **Supabase** (PostgreSQL, Auth, API).

---

## ✨ Features

### ✅ Current

- Client management: create and list clients (connected to Supabase `clients` table)

### 🚧 Planned

- Authentication (Supabase Auth)
- Project & task management
- Progress tracking & simple analytics

---

## 🛠 Tech Stack

| Layer | Technology |
|--------|-----------|
| Frontend | React 19, Vite 8, TypeScript |
| Backend / BaaS | Supabase (PostgreSQL, Auth, REST/Realtime) |
| State | React Hooks |
| Database | PostgreSQL (melalui Supabase) |

---

## 🧱 Database

The application uses a relational structure:

- **Clients** → belong to a user
- **Projects** → belong to a client
- **Tasks** → belong to a project

---

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) version 20 or newer (recommended for Vite 8)
- [Supabase](https://supabase.com/) account with a project

---

## Setup

### 1. Clone repository

```bash
git clone https://github.com/<username>/<nama-repo>.git
cd <nama-repo>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment variables

Copy the environment template and fill in your Supabase credentials (from Settings → API):

cp .env.example .env

Edit .env:

VITE_SUPABASE_URL=https://<project-ref>.supabase.co
VITE_SUPABASE_ANON_KEY=<anon_public_key>

### 4. Run application

```bash
npm run dev
```

---

## 🎯 Goals

- Build a real-world freelance management system
- Demonstrate fullstack integration (React + Supabase)
- Maintain clean and scalable project structure

---

## Roadmap

- [x] Project setup (Vite + React + TypeScript) and Supabase client
- [x] Client: create & read (list + add)
- [ ] Authentication
- [ ] Project management
- [ ] Task management
- [ ] Dashboard & analytics

---

## 🚀 Live Preview (Coming Soon)

---

## 🤝 Contributing

This is a personal portfolio project by Risto, built to demonstrate fullstack development skills using React and Supabase.

Contributions, suggestions, and feedback are welcome for learning and improvement purposes.
Feel free to fork this repository or submit a pull request.
