📝 Practicing Forms in React

After completing a React course, I built a hands-on project to deepen my understanding of form handling in React. This practice involved implementing both controlled and uncontrolled components, as well as using libraries like React Hook Form and React Router for better state management, validation, and navigation.

🔹 1. Controlled Components

✅ Completed: Created forms using controlled components where form data is managed by the component's local state using useState.

🧠 Concept:

In controlled components, each input field (e.g., <input>, <textarea>, <select>) is connected to a React state variable.

User input updates the state via onChange handlers, and the form input reflects the state.

This allows full control over the form behavior, validations, and user interaction.

🛠️ Implementation:

Created registration and login forms with controlled inputs.

Used useState to manage each form field.

Handled form submission with custom validation and error handling.

🔹 2. React Router

✅ Completed: Implemented routing in my application using React Router.

🧠 Concept:

React Router allows for navigation between views in a single-page application (SPA) without full-page reloads.

Used BrowserRouter, Route, Switch/Routes, and Link/NavLink to create seamless page navigation.

🛠️ Implementation:

Set up pages for login, signup, and home/dashboard.

Enabled route-based component rendering.

Used dynamic route parameters and navigation guards where needed.

🔹 3. Uncontrolled Components

✅ Completed: Created forms using uncontrolled components, where the form data is accessed via DOM using useRef.

🧠 Concept:

In uncontrolled components, input values are accessed directly using references rather than React state.

useRef provides a reference to DOM elements, allowing retrieval of values during form submission.

🛠️ Implementation:

Used useRef to access input values on form submission.

Applied this approach to forms where real-time validation or state tracking wasn't needed.

For gender radio buttons, used useState for managing selection, ensuring flexibility in data handling.

🔹 4. React Hook Form (useForm)

✅ Completed: Integrated React Hook Form to simplify form handling and validation.

🧠 Concept:

useForm is a hook from react-hook-form, a popular library for building performant, flexible forms in React.

Provides utilities like register, handleSubmit, reset, and built-in validation support.

📦 Setup:

Installed the react-hook-form package (Note: Not built-in like useState, needs manual installation).

Imported required hooks and functions.

🛠️ Implementation:

Registered input fields using register().

Used handleSubmit() to manage form submission and validation.

Applied built-in and custom validation rules (e.g., required fields, email formats).

Used reset() to clear form fields after successful submission.

Built login and signup forms using React Hook Form for more efficient form state management.

✅ Final Outcome

By combining controlled, uncontrolled, and hook-based form approaches along with React Router for navigation, I successfully created functional forms with validation and routing in a React application. This practice improved my understanding of:

Form handling strategies in React

State vs. refs in form management

Navigation in SPAs using React Router



