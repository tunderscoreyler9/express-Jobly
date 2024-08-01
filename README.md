# Jobly Backend

This is the Express backend for Jobly, version 2.

## Project Description

This project is a multi-day exercise to practice Node, Express, and PostgreSQL with relationships by building "Jobly," a job searching API. The project is divided into multiple parts, each focusing on different aspects of backend development, including setting up the server, adding features, and ensuring security and testing.

### Goals & Requirements

- This is a pure API app, taking values from the query string (GET requests) or from a JSON body (other requests). It returns JSON.
- This project involves authentication/authorization with JWT tokens. Ensure that your additions only allow access as specified in the requirements.
- Be thoughtful about function and variable names, and write developer-friendly documentation for every function and route you write.
- The starter code is well-tested, with excellent coverage. Your new contributions should maintain good coverage.
- Model tests check the underlying database actions. Route tests check the underlying model methods and do not rely directly on the database changes. This is a useful testing design consideration that you should continue.
- Practice test-driven development. Write a test before writing a model method and a route. This can make the work of adding to an app like this easier and less bug-prone.

Take your time, be organized and clear, and test carefully. Have fun!

### Part One: Setup / Starter Code

- Download the starter code and do a quick skim to get a sense of the main components and the organization.
- Set up the provided `jobly.sql` to create a database with starter data and a test database. Some tables included are not currently used; you will add parts of the app that use those tables during the exercise.
- Read the tests to understand what the `beforeEach` and `afterEach` methods do for the tests.
- Run the tests with coverage using the `-i` flag for Jest to ensure tests run in order.
- Start the server on port 3001 and test the API in Insomnia.

### First Task: sqlForPartialUpdate

- Document and test the provided `sqlForPartialUpdate` method in `helpers/sql.js`.
- Write unit tests for this method and thoroughly document the function.

### Part Two: Companies

- The route for listing all companies (`GET /companies`) currently shows all companies. Add filtering based on the query string:
  - `name`: filter by company name (case-insensitive).
  - `minEmployees`: filter to companies with at least this number of employees.
  - `maxEmployees`: filter to companies with no more than this number of employees.
  - If `minEmployees` is greater than `maxEmployees`, respond with a 400 error.

- Ensure the filtering is done in the model, not the route.
- Write unit tests for the model and route to ensure different combinations of filtering work.
- Document all new code clearly.

### Part Three: Change Authorization

- Ensure appropriate authorization checks for routes:
  - Company routes: retrieving companies is open to everyone; creating, updating, and deleting companies are restricted to admins.
  - User routes: creating users is open to everyone; getting the list of users is restricted to admins; getting, updating, or deleting a user is restricted to admins or the user themselves.
- Implement these checks without changing the route code or selecting user information on every request.
- Update tests to demonstrate these security changes.

### Part Four: Jobs

- Add a feature for jobs, starting with a model and routes for jobs similar to the companies model.
- Ensure updating a job does not change its ID or associated company.
- Write tests for the job model and routes.
- Add filtering for jobs on the `GET /` route:
  - `title`: filter by job title (case-insensitive).
  - `minSalary`: filter to jobs with at least this salary.
  - `hasEquity`: if true, filter to jobs with non-zero equity; if false or not included, list all jobs regardless of equity.
- Document and test this filtering feature thoroughly.
- Modify the `GET /companies/:handle` route to include job information associated with the company.

### Step Five: Job Applications

- Incorporate the applications table by adding a method to the User model for applying to a job.
- Add a route at `POST /users/:username/jobs/:id` for users to apply for a job, returning `{ applied: jobId }`.
- Update the get-all-info methods and routes for users to include a field with a list of job IDs the user has applied for.
- Document and write tests for this feature carefully.

This project covers essential aspects of backend development, including API creation, authentication, authorization, filtering, and test-driven development. It aims to provide a comprehensive understanding of building and maintaining robust and secure Node.js applications.
