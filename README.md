# Personal Finance API - Documentation

## Project Overview

The **Personal Finance API** is a study project designed to manage financial transactions, including income and expenses, with categorization and filtering capabilities. It also includes authentication features and CSV export functionality.

### Target Sectors

- Fintechs
- SaaS (Software as a Service)
- Financial Consultancies

---

## API Routes

### **Authentication**

| Method | Route       | Action           |
|--------|-------------|------------------|
| POST   | `/login`    | User login       |

---

### **Income Transactions**

| Method | Route                          | Action                     |
|--------|--------------------------------|----------------------------|
| POST   | `/transactions/incomes`        | Create a new income entry   |
| GET    | `/transactions/incomes`        | List all income entries    |
| GET    | `/transactions/income/:id`     | Retrieve a specific income |
| PUT    | `/transactions/income/:id`     | Update an income entry     |
| DELETE | `/transactions/income/:id`     | Delete an income entry     |
