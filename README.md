# Employee Management System

## Objective

The objective of this project is to develop an Employee Management System with features including filtering by department and gender, sorting based on salary, and pagination.

## API Details

Base URL: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees`

Query Parameters:
- `page`: (optional) Page number for pagination
- `limit`: (optional) Number of items per page
- `filterBy`: Filter by department or gender
- `filterValue`: Value for the filterBy parameter
- `sort`: Sort based on salary
- `order`: Sort order (ascending or descending)

Example API Calls:
- Filter by department: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=10&filterBy=department&filterValue=hr`
- Filter by gender and sort by salary: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=10&filterBy=gender&filterValue=female&sort=salary&order=asc`

## Core Features

### 1. Fetching and Displaying Data

The application fetches employee data from the provided API and displays it in a table format on the DOM. Each row represents an employee with the following columns:
- Serial number
- Name
- Gender
- Department
- Salary

### 2. Filtering by Department and Gender

Users can filter the data by department and gender using dropdown menus. The options for department are: HR, Finance, Marketing, Engineering, and Operations. The options for gender are: Male, Female, and Others.

### 3. Sorting by Salary

Users can sort the data based on salary using a dropdown menu. They can choose to sort in ascending (low to high) or descending (high to low) order.

### 4. Pagination

Pagination is implemented to navigate through the employee data. Users can move to the next or previous page, and pagination is compatible with filtering and sorting. Previous button is disabled on the first page, and next button is disabled on the last page.

## Usage

1. Clone this repository.
2. Open `index.html` in a web browser.
3. Use the dropdown menus to filter and sort the data.
4. Navigate through pages using pagination buttons.

## Technologies Used

- HTML
- CSS
- JavaScript
- Fetch API

## Contributors

- [Mihir Das]

---

Feel free to customize and expand upon this template as needed for your project!