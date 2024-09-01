
# AI Content Gen

Welcome to the **AI Content Generator** app! This application leverages cutting-edge AI technology to generate high-quality, customizable content with ease. Built with a robust tech stack, it ensures efficient performance, scalability, and an intuitive user experience.

## Features
- **AI-Powered Content Generation:** Powered by **Gemini**, the AI model generates a wide range of content for various use cases (blogs, articles, social media, etc.).
- **User Authentication:** Secure user authentication and management via **Clerk**.
- **Scalable Backend:** Built on **Postgres SQL**, ensuring a reliable and scalable database structure.
- **Modern Frontend:** The app is developed using **Next.js** for server-side rendering, making it fast and SEO-friendly.
- **Responsive Design:** Styled with **Tailwind CSS** for a modern, responsive design that works across all devices.

## Tech Stack
- **Next.js**: For server-side rendering and static site generation.
- **Clerk**: User authentication and session management.
- **Postgres SQL**: Robust and scalable database management.
- **Tailwind CSS**: A utility-first CSS framework for fast and responsive UI design.
- **Gemini AI**: The core AI engine for content generation.

## Installation

1. Clone the repository:
   ```bash
   git clone https://https://github.com/11anil/AI-Content-Gen
   ```

2. Navigate to the project directory:
   ```bash
   cd ai-content-generator
   ```

3. Install dependencies:
   ```bash
   npm install --force
   ```

4. Set up environment variables for **Postgres SQL** and **Clerk**:
   - Create a `.env.local` file in the project root directory.
   - Add your Postgres and Clerk credentials as environment variables in the `.env.local` file, e.g.:
     ```plaintext
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
     CCLERK_SECRET_KEY
     NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
     NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
     NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY
     NEXT_PUBLIC_DRIZZLE_DB_URL
     ```

5. Start the development server:
   ```bash
   npm run dev
   ```

   The app will now be running locally at `http://localhost:3000`.

## Usage
1. Sign up or log in with your account using Clerk.
2. Select the type of content you'd like to generate.
3. Customize the parameters as needed (length, tone, format, etc.).
4. Let **Gemini** work its magic and generate your content!

## Contribution
Feel free to fork the repository and submit pull requests. We welcome all improvements and bug fixes!

## License
This project is licensed under the MIT License.



