# Login demo

[![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?logo=supabase&logoColor=fff)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff)](#)
[![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB)](#)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?logo=react-router&logoColor=white)](#)
[![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-EC5990?logo=reacthookform&logoColor=fff)](#)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000?logo=shadcnui&logoColor=fff)](#)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff)](#)
[![npm](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=fff)](#)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?logo=gmail&logoColor=white)](#)

This application is a demo showcasing a basic login and registration system. Users can sign in or register either by using their email and password or via their Google account. The login functionality is powered by Supabase, which provides a simple and secure backend for authentication and user management.

The frontend is built with React.js, leveraging React Router for navigation, React Hook Form for form management, and Zod for schema validation. The project is fully typed with TypeScript, ensuring a robust development experience. The UI is styled using Shadcn UI, offering a clean and modern design.

This project demonstrates how to implement modern authentication methods efficiently, making it a great starting point for web applications that require user authentication.

## Requirements

- Node.js & NPM.
- Docker.
- Google cloud.

## Setup project

1. Install dependencies `npm install`.
2. Configure your google credentials (`GOOGLE_CLIENT_ID` & `GOOGLE_SECRET`) in `.env` file.
3. Start Supabase `npx supabase start`.
4. Start demo `npm run dev`.

## Stop project

1. Stop server `Ctrl + c`.
2. Stop Supabase `npx supabase stop`.
