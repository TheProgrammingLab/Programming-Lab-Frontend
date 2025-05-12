# Programming Lab Frontend

This is the frontend for **Programming Lab**, a Learning Management System (LMS) designed to help students and instructors interact with educational content, complete assignments, track progress, and more. The application is built with **Next.js**, providing a seamless, modern, and responsive user experience.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The **Programming Lab Frontend** is a React-based application that powers the user interface for the LMS. It integrates with a backend to provide features like:

- **Authentication**: User registration, login, and session management.
- **Courses**: Students can browse, enroll, and participate in courses.
- **Assignments**: Students can complete and submit assignments, while instructors can grade them.
- **Progress Tracking**: Real-time updates on progress for both students and instructors.
- **Responsive Design**: The app is designed to be mobile-friendly and accessible on various devices.

## Features

- **User Authentication**: Secure user login and registration with JWT authentication.
- **Course Catalog**: Browse available courses and enroll.
- **Assignments**: View and submit assignments, complete with deadlines.
- **Grading System**: Instructors can grade assignments and provide feedback.
- **Progress Dashboard**: Real-time progress tracking for students and instructors.
- **Admin Panel**: For managing users, courses, and assignments.
- **Responsive UI**: Optimized for both mobile and desktop users.

## Technologies Used

- **Next.js** - React framework used for building the frontend with server-side rendering (SSR) and static site generation (SSG).
- **JWT** - JSON Web Tokens for user authentication.
- **Axios** - HTTP client for making API requests.
- **Redux** (optional) - For global state management (if applicable).
- **TypeScript** - For static typing and improved developer experience (if applicable).

## Installation

To get started with this project, follow the steps below:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/TheProgrammingLab/Programming-Lab-Frontend.git


2. **Navigate to the project directory:**
    ```bash
    cd programming-lab-frontend

3. Install the dependencies:
    ```bash
    npm install

or if you're using yarn
    ```bash
    yarn add

4. Getting Started
To run the project locally in development mode:
    ```bash
    npm run dev

## Project Structure
### Here’s a breakdown of the project's directory structure:
    ```pgsql
    /pages                    - Page components, including routes for courses, assignments, login, etc.
    /components               - Reusable components (header, footer, forms, etc.)
    /public                   - Public assets (images, fonts, etc.)
    /styles                   - Global CSS styles and Tailwind config
    /utils                    - Utility functions and API helpers
    /services                 - API calls to interact with the backend
    /context                  - Context providers for global state management (if using Context API)
    /hooks                    - Custom React hooks for various features
    /next.config.js           - Next.js configuration
    /package.json             - Project metadata and dependencies

