# JLabs React Frontend

A Vite + React app for the JLabs internship assessment. Provides Login, Registration, and Home pages.

---

## 📋 Requirements

* Node.js v18+ (LTS recommended)

---

## 🚀 Setup & Run (Local)

1. **Clone the repo**

```bash
git clone https://github.com/francoduenas11/web-repo
cd web-repo
```

2. **Install dependencies**

```bash
npm install
```

3. **Environment variables**
   Create a `.env` file in the project root:

```env
VITE_API_URL=http://localhost:4000
```

4. **Run the frontend**

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 🔑 Test User (from API seed)

* Email: `test@example.com`
* Password: `Password123!`

---

## 🌐 Pages

* `/login` — Sign in
* `/register` — Create account
* `/` — Shows authenticated user info and logout

---

## 🎨 UI Styling

* Background: light gray `#f0f2f5`
* White card container with shadow
* Primary actions use Facebook blue `#1877f2`
* Global styles in `src/styles.css`
