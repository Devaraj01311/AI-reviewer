# 🧑‍💻 AI Code Review Platform

This project is a full-stack **AI-based Code Review Platform** built using **React**, **Express.js**, and **Google Generative AI**. It allows developers to submit code snippets and receive professional, senior-level code review feedback automatically.

---

##  Features

### Frontend

* **Code Editor** using `react-simple-code-editor` and `Prism.js` for syntax highlighting.
* Submit code to the backend for AI-powered review.
* Display AI-generated review in real-time.

### Backend

* **Express.js API** for receiving code and returning reviews.
* Integrates with **Google Generative AI (Gemini API)** for reviewing code.
* Handles errors gracefully and returns meaningful responses.
* Supports CORS for frontend communication.

###  AI Review Engine

* Uses **Google Gemini 2.0 Flash** model.
* Configured with system instructions to act as a **Senior Code Reviewer (7+ years experience)**.
* Reviews code for:

  * Code Quality & Maintainability
  * Best Practices & Industry Standards
  * Efficiency & Performance
  * Error Detection & Security
  * Scalability & Readability
  * Proper Documentation
* Provides constructive feedback, refactored code suggestions, and improvement tips.

---

##  Installation & Setup

###  Clone Repository

```bash
git clone https://github.com/your-username/ai-code-review.git
cd ai-code-review
```

###  Backend Setup

```bash
cd src
npm install
```

Create a `.env` file in the `src` folder:

```
GOOGLE_GEMINI_KEY=your_google_gemini_api_key
```

Run the backend server:

```bash
node server.js
```

###  Frontend Setup

```bash
cd ../frontend
npm install
```

Set environment variable in `.env`:

```
VITE_BASE_URL=http://localhost:7000
```

Run frontend server:

```bash
npm run dev
```

---

## Folder Structure

```
ai-code-review/
├── frontend/
│   ├── src/
│   ├── vite.config.js
│   └── package.json
├── src/
│   ├── app.js
│   ├── server.js
│   ├── controllers/
│   │   └── ai.controller.js
│   ├── services/
│   │   └── ai.service.js
│   ├── routes/
│   │   └── ai.routes.js
│   └── .env
├── README.md
└── package.json
```

---

##  Backend API Documentation

### `POST /ai/get-review`

**Description:** Submit code and get AI-generated review.

**Request Body:**

```json
{
  "code": "function hello() { console.log('Hello World'); }"
}
```

**Response:**

```json
{
  "review": "Detailed review of code quality, best practices, potential improvements, and refactored examples."
}
```

**Error Responses:**

* `400 Bad Request`: If code is missing.
* `500 Internal Server Error`: If AI service fails.

---

## 🛠 Technologies Used

* **Frontend:** React, react-simple-code-editor, Prism.js
* **Backend:** Node.js, Express.js
* **AI:** Google Generative AI (Gemini API)
* **Other:** Axios, CORS, dotenv

---

##  How It Works

1. User writes or pastes code in the editor.
2. User clicks "Review" button.
3. Frontend sends POST request to backend `/ai/get-review`.
4. Backend sends code to Google Gemini AI model.
5. AI returns detailed review.
6. Review is displayed in the frontend.

---

## Contact

For questions or contributions:
✉️ [your-email@example.com](mailto:your-email@example.com)
🔗 [GitHub Profile](https://github.com/your-username)

---

*Replace placeholders like `your-username` and `your-email@example.com` with your actual information before publishing.*
