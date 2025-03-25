# DT-Screening---Todo-List
Approach to Building the To-Do List Web App
To complete the challenge, I followed a structured approach, ensuring that all functional and technical requirements were met:

1. Setting Up the Project Structure
Created separate files for HTML (index.html), CSS (styles.css), and JavaScript (script.js) to maintain clean and modular code.

Ensured a responsive design using CSS media queries.

2. Implementing Core Features
Adding Tasks: Captured user input and displayed tasks dynamically in a list.

Marking Tasks as Completed: Used a checkbox to toggle a strike-through effect when checked.

Deleting Tasks: Added a ❌ button to remove tasks from the list.

"Enter" Key Functionality: Allowed users to add tasks by pressing "Enter" in the input field.

3. Enhancements and Additional Features
Dark Mode Toggle: Implemented a button to switch between light and dark themes with sun and moon icons.

UI Improvements: Aligned the checkboxes and task text to the left while keeping the delete button on the right for better user experience.

4. Handling Git Issues
Faced a Git push rejection error due to remote repository changes.

Resolved it by pulling the latest changes first (git pull --rebase) before pushing updates.

This structured approach ensured a functional, responsive, and user-friendly To-Do List web application while adhering to the given constraints. 🚀

# Difficulties Encountered
1. UI Challenges
Task Alignment: Initially, the checkbox and task text were centered. Adjusting the layout to align them to the left while keeping the delete button on the right required CSS modifications using flexbox.

Dark Mode Implementation: Ensuring that the text color changed properly in dark mode, especially the "To-Do List" title, required additional CSS handling.

Responsiveness: Making sure the UI remained functional and visually appealing across different screen sizes required fine-tuning of margins, padding, and @media queries.

2. Git Issues
Push Rejection Error (fetch first issue):

Git rejected the push because the remote repository had updates that were not present locally.

This was resolved using git pull --rebase before pushing the changes again.

Branch Confusion: Initially, there was uncertainty about whether the repository was on the main or master branch. Using git branch helped verify the current branch.

Despite these challenges, the To-Do List was successfully built with all required features and additional enhancements. 🚀
