# Myedu project

A responsive web application built using **Angular**, **Ionic** and **TypeScript** as part of a technical job assignment.

---

## **Table of Contents**

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Installation and Setup](#installation-and-setup)
5. [Running the Project](#running-the-project)
6. [Testing](#testing)
7. [Project Structure](#project-structure)
8. [Code Quality and Linting](#code-quality-and-linting)
9. [Assumptions and Considerations](#assumptions-and-considerations)
10. [Challenges Faced](#challenges-faced)
11. [Future Improvements](#future-improvements)

---

## **Project Overview**

This project is a responsive web application created from a provided Figma design. The goal is to demonstrate expertise in **TypeScript**, **Angular** and **Ionic**, following industry best practices for code structure, testing and design.

---

## **Features**

- Fully responsive UI (mobile-first).
- Interactive forms with validation.
- Dynamic data binding and UI updates.
- Linting and unit tests using **Jasmine + Karma**.
- Cross-browser compatibility.

---

## **Tech Stack**

- **Framework:** Angular, Ionic
- **Languages:** TypeScript, HTML, SCSS
- **Testing Frameworks:** Jasmine, Karma
- **Version Control:** Git, GitHub
- **Code Quality:** ESLint, Angular ESLint, Prettier

---

## **Installation and Setup**

### **Prerequisites**

- **Node.js:** v20.x or higher
- **npm:** v10.x or higher
- **Angular CLI:** v18.x or higher
- **Chromium:** Installed on Linux (Manjaro)

### **Installation Steps**

1. Clone the repository:
   ```bash
   git clone git@github.com:ramyahm2010/myedu.git
   ```
2. Navigate to the project folder:
   ```bash
   cd myedu
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

---

## **Running the Project**

### Development Server

```bash
ionic serve
```

- The application runs on `http://localhost:8100/`

---

## **Testing**

- **Unit Tests:** Jasmine + Karma
- **Running Tests:**
  ```bash
  npm run test
  ```

---

## **Project Structure**

```plaintext
src/
  ├── app/
  │   ├── components/    # Reusable components
  │   ├── pages/         # App pages
  │   └── services/      # API and logic services
  ├── assets/            # Static assets (fonts, images)
  └── theme/variables.scss # Custom styles
```

---

## **Code Quality and Linting**

- **Linting Tools:** ESLint, Angular ESLint
- **Run Linting:**
  ```bash
  npm run lint
  ```

---

## **Assumptions and Considerations**

- The app is designed with a mobile-first approach.
- All required form fields have appropriate validation.
- **Chromium** is used instead of Chrome due to platform preference.

---

## **Challenges Faced**

- Ensuring **Karma + Chromium** integration on Manjaro Linux.
- Custom toolbar height adjustments and page content alignment.
- Responsive layout adjustments based on Figma design.

---

## **Future Improvements**

- Implement backend API integration.

---

## **Contact Information**

**Author:** Ramy Ahmed
**Email:** ramy.ahm2010@gmail.com
**Website:** https://ramyahmed.com

---

> This project was developed as part of a frontend technical assessment. Thank you for reviewing!
