MiniApp
MiniApp is a simple task-management web application built with
React and Vite. It helps users add tasks, keep short
descriptions, view their task list, and remove tasks when they are no
longer needed.
Features
- Add tasks: Create a task with a title and description.
- Form validation: Task titles and descriptions are required, must
  not contain only whitespace, and have maximum character limits.
- View tasks: See all tasks and the total number of tasks in the
  list.
- Delete tasks: Remove a task instantly without refreshing the
  page.
- Navigation: Move between the Home, My Tasks, and About pages
  using React Router.
- Active navigation state: The navigation bar highlights the
  current page.
- Starter tasks: The app begins with two example tasks to
  demonstrate the task list.
Tech Stack
- React
- Vite
- React Router DOM
- React Hook Form
- CSS
Getting Started
Prerequisites
Install Node.js and npm.
Installation
1. Clone the repository or download the project.
2. Open a terminal in the project directory.
3. Install dependencies:
   npm install
4. Start the development server:
   npm run dev
5. Open the local URL printed in the terminal.
How to Use
1. Open My Tasks from the navigation bar.
2. Enter a task title and description in the form.
3. Submit the form using Add Task.
4. View the new task in the task list.
5. Click Delete on a task to remove it.
6. Use the navigation bar to switch between Home, My Tasks, and
   About.
Project Structure
Your exact folder structure may vary, but the app is organized around
these main files:
src/
├── pages/
│   ├── Home.jsx
│   ├── Tasks.jsx
│   └── About.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
- main.jsx mounts the React application and wraps it in
  BrowserRouter.
- App.jsx contains the shared task state, navigation bar, and route
  definitions.
- pages/Home.jsx renders the Home page.
- pages/Tasks.jsx contains the task form, validation, task list, and
  delete behavior.
- pages/About.jsx describes the application.
- App.css and index.css provide styling.
Data Storage Note
Tasks are currently stored in React state in the browser session. They
are not saved to a database or local storage, so refreshing the page
resets the list to the two starter tasks. Tasks are shared across the
app's routes while the app remains loaded.
Future Improvements
- Save tasks using localStorage or a backend API.
- Add task editing and completion status.
- Add search, filtering, and sorting.
- Add a dedicated task-details page.
