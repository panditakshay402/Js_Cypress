# Cypress Setup Guide

This repository contains the basic setup steps to initialize and run **Cypress** for end-to-end testing.

---

## Prerequisites

Make sure you have installed:

- Node.js
- npm (comes with Node.js)

Check installation:

```bash
node -v
npm -v
```

---

## Step 1: Initialize Project

Create a new Node.js project:

```bash
npm init -y
```

---

## Step 2: Install Cypress

Install Cypress dependency:

```bash
npm install cypress
```

---

## Step 3: Verify Installation

Check if Cypress is installed correctly:

```bash
npx cypress -y
```

---

## Step 4: Open Cypress

Launch Cypress Test Runner:

```bash
npx cypress open
```

---

## Step 5: Alternative Method

Run Cypress directly from local node modules:

```bash
node_modules/.bin/cypress open
```

---

## Project Structure

After opening Cypress for the first time, files will be generated like this:

```text
Js_Cypress/
│── cypress/
│   ├── e2e/
│   ├── fixtures/
│   ├── support/
│── node_modules/
│── package.json
│── package-lock.json
│── cypress.config.js
│── README.md
```

---

## Useful Commands

Run Cypress UI:

```bash
npx cypress open
```

Run all tests in headless mode:

```bash
npx cypress run
```

Run specific test file:

```bash
npx cypress run --spec cypress/e2e/loginTest.cy.js
```

---

## File Upload Plugin

Install plugin for file upload testing:

```bash
npm install cypress-file-upload
```

---

## Practice Tests Completed

- Login Test
- Checkbox Test
- Dropdown Test
- Input Field Test
- Button Click Test
- Alert Handling Test
- File Upload Test
- Table Validation Test
- API Testing

---

## Tech Stack

- JavaScript
- Node.js
- npm
- Cypress

---

Happy Testing 🚀
