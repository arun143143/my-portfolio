# Arun Prasath L - Professional Portfolio

A stunning, high-performance portfolio website built with modern web technologies to showcase professional experience, projects, and skills in AI/ML and Backend Development.

## 🚀 Features

*   **Responsive Design**: Fully responsive layout that looks great on mobile, tablet, and desktop.
*   **Smooth Animations**: Powered by `Framer Motion` for premium feel (staggered reveals, scroll animations, hover effects).
*   **Interactive UI**: Custom navigation with smooth scrolling and active states.
*   **Contact Form**: Fully functional email form integrated with **EmailJS**.
*   **Dark Mode Aesthetic**: Sleek, professional dark theme using **Tailwind CSS**.
*   **Performance**: Built with **Vite** for lightning-fast loading and optimized assets.

---

## 🛠️ Tech Stack

*   **Framework**: React 18 (TypeScript)
*   **Build Tool**: Vite
*   **Styling**: Tailwind CSS
*   **Animations**: Framer Motion
*   **Icons**: Lucide React
*   **Email Service**: EmailJS
*   **Deployment**: Vercel

---

## 💻 Local Development Guide

Follow these steps to run the project on your local machine.

### 1. Prerequisites
Ensure you have the following installed:
*   [Node.js](https://nodejs.org/) (Version 18 or higher recommended)
*   [Git](https://git-scm.com/)

### 2. Clone the Repository
Open your terminal and run:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 3. Install Dependencies
Install the required node modules:
```bash
npm install
```

### 4. Configure Environment Variables (EmailJS)
To make the contact form work locally, you need to set up your API keys.

1.  Create a file named `.env` in the root directory of the project.
2.  Add the following lines to the `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

> **How to get these keys?**
> 1. Sign up at [EmailJS.com](https://www.emailjs.com/).
> 2. **Service ID**: Go to "Email Services" -> Add Service (e.g., Gmail). Copy the ID.
> 3. **Template ID**: Go to "Email Templates" -> Create New Template. Click "Settings" to get the ID.
>    *   *Tip*: In the template content, use `{{from_name}}`, `{{from_email}}`, `{{subject}}`, and `{{message}}`.
> 4. **Public Key**: Go to "Account" (Avatar top right) -> General -> Copy "Public Key".

### 5. Add Your Resume
Make sure you have your PDF resume file ready.
1.  Rename your resume to `resume.pdf`.
2.  Place it inside the `public/` folder.
    *   *Path should be:* `your-project/public/resume.pdf`

### 6. Start the Development Server
Run the following command:
```bash
npm run dev
```
Open your browser and visit `http://localhost:5173`. Changes you make to the code will update automatically.

---

## ☁️ Deployment Guide (Vercel)

Vercel is the recommended platform for deploying this Vite + React app. It is free and easy to set up.

### Step 1: Push to GitHub
1.  Create a new repository on [GitHub](https://github.com/new).
2.  Push your local code to this repository:
    ```bash
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    git push -u origin main
    ```

### Step 2: Import to Vercel
1.  Go to [Vercel.com](https://vercel.com/) and log in (or sign up using GitHub).
2.  Click **"Add New..."** -> **"Project"**.
3.  Find your `portfolio` repository in the list and click **"Import"**.

### Step 3: Configure Build Settings
Vercel usually detects these automatically, but verify them:
*   **Framework Preset**: Vite
*   **Root Directory**: ./
*   **Build Command**: `vite build` (or `npm run build`)
*   **Output Directory**: `dist`

### Step 4: Add Environment Variables (Crucial!)
Before clicking Deploy, expand the **"Environment Variables"** section. You must add the same keys you put in your `.env` file:

| Key | Value |
| :--- | :--- |
| `VITE_EMAILJS_SERVICE_ID` | *your_actual_service_id* |
| `VITE_EMAILJS_TEMPLATE_ID` | *your_actual_template_id* |
| `VITE_EMAILJS_PUBLIC_KEY` | *your_actual_public_key* |

### Step 5: Deploy
Click the **"Deploy"** button.
*   Vercel will build your project.
*   Once finished, you will get a live URL (e.g., `https://your-portfolio.vercel.app`).

---

## 📁 Folder Structure

```
├── public/              # Static assets
│   └── resume.pdf       # YOUR RESUME GOES HERE
├── src/
│   ├── components/      # UI Components
│   │   ├── Hero.tsx     # Landing page & Resume download
│   │   ├── Experience.tsx # Work history data
│   │   ├── Contact.tsx  # Form logic
│   │   └── ...
│   ├── types.ts         # TypeScript definitions
│   ├── App.tsx          # Main layout assembler
│   └── main.tsx         # Entry point
├── index.html           # HTML entry
├── vercel.json          # Vercel routing config
├── tailwind.config.js   # Styling config
└── vite.config.ts       # Build config
```

## ❓ Troubleshooting

**1. "Failed to send message" on the contact form:**
*   Check your Vercel Environment Variables. Did you paste the correct keys?
*   Check your EmailJS quota (the free tier has a monthly limit).
*   Check the console (F12) for specific error messages.

**2. Styles look broken or white:**
*   Ensure `tailwind.config.js` and `postcss.config.js` are present.
*   Ensure `index.css` contains the `@tailwind` directives.

**3. Resume download gives 404:**
*   Ensure the file is exactly named `resume.pdf` (lowercase).
*   Ensure it is in the `public` folder, not `src`.

---
© 2025 Arun Prasath L. All rights reserved.