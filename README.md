# Rizz App 🤩🎉

A revolutionary app that helps you generate the ultimate responses to flirt or impress based on your conversation screenshots! Powered by AI, this app ensures your chats always hit the mark while keeping it classy and non-creepy. 🗨️💬

This uses GPT 4o with good prompts and active fine tuning.

---

## ✨ Features

### 🔍 **AI-Powered Flirtation Generator**
- Upload a screenshot of your chat, and the app analyzes the conversation and context.
- Generates tailored responses to help you impress without being clingy or awkward.

### 🔐 **Authentication with GitHub, Slack, and Phone**
- Secure and seamless login with:
  - **GitHub**: Authenticate using your developer account. 💻
  - **Slack**: Log in via your work or community profile. 💼
  - **Phone**: Quick and easy OTP-based login for everyone. 📲

### 🌐 **Cloudinary Image Upload Integration**
- Easily upload screenshots using Cloudinary.
- Secure and efficient storage of your chat images.

### 🧠 **OCR Integration**
- Leverages advanced OCR to extract text from your conversation screenshots.
- Supports multiple languages, ensuring accurate understanding. 🌍

### ⚡ **Dynamic API Calls**
- Uses GPT-4 for natural, context-aware responses.
- Provides smooth and reliable functionality for a great user experience.

### 🛡️ **Privacy First**
- Your data is never stored permanently; the app processes and deletes it securely. 🛡️

---

## 🚀 How It Works

1. **Upload a Screenshot**  
   - Select a screenshot of your chat and upload it to the app.  
   - Ensure the screenshot contains text conversations for best results.

2. **Analyze the Text**  
   - The app uses OCR to extract text and understand the conversation context.

3. **Generate Your Rizz**  
   - AI generates the best possible response to impress the recipient.  
   - The response is designed to be smooth, clever, and perfectly tailored. 😏

4. **Authenticate to Save Responses**  
   - Log in with GitHub, Slack, or Phone for secure access to your response history.

---

## 🔧 Setup Guide

### Prerequisites
- Node.js and npm installed on your machine.
- A Cloudinary account for image uploads.
- API keys for the OCR and GPT services.

### Installation
1. Clone the repository:  
   ```bash
   git clone https://github.com/yourusername/rizz-app.git
   cd rizz-app
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Create an `.env` file in the root directory and add the following:
   ```env
   NEXT_PUBLIC_CLOUDINARY_API_KEY=your_cloudinary_api_key
   NEXT_PUBLIC_CLOUDINARY_PRESET=your_preset
   NEXT_PUBLIC_OCR_API_KEY=your_ocr_api_key
   NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key
   ```

4. Start the development server:  
   ```bash
   npm run dev
   ```

5. Open the app at `http://localhost:3000`.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Next.js  
- **Backend**: Node.js, Express  
- **Cloud Services**: Cloudinary, OCR.Space, OpenAI  
- **Authentication**: GitHub, Slack, Phone (OTP)

---

## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch:  
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:  
   ```bash
   git commit -m "Add your message"
   ```
4. Push to the branch:  
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## 🛡️ License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🌟 Acknowledgments

- Thanks to **Cloudinary**, **OpenAI**, and **OCR.Space** for their amazing APIs.
- Special thanks to contributors who made this project possible. 🙌

---

**Let's make chatting fun and smooth! 🚀**