# TaskFlow: Your Personal Task Manager 🚀
TaskFlow is a simple, yet powerful, task management web application built with **React.js**. It helps users efficiently manage their to-do lists by adding, editing, deleting, and marking tasks as completed. With **local storage integration**, your tasks remain saved even after a page refresh.

## Features
### Task Management
- **Add Tasks**: Quickly add new tasks to your list.
- **Edit Tasks**: Modify an existing task when needed.
- **Delete Tasks**: Remove tasks that are no longer needed.
- **Mark Tasks as Completed**: Keep track of completed tasks.

### Persistent Storage
- The app uses **local storage**, ensuring tasks are saved even after browser refreshes.

### Responsive Design
- **Mobile & Desktop Friendly**: Optimized for all screen sizes.
- **Adaptive Input Fields**: Prevents layout breakage when adding long tasks.

## Installation Guide
To set up **TaskFlow** on your local machine, follow these steps:

1. **Clone the Repository**:
    https://github.com/Harshal-SL/TaskFlow/edit/main/README.md
2. **Install Dependencies**:
   npm install
3. **Start the Development Server**:
   npm run dev

4. **Open in Browser**:
Visit `http://localhost:3000`.

## How TaskFlow Works
- **Adding a Task**: Type a task into the input field. Click the Save button or press Enter to add the task. The task appears in the list.
- **Editing a Task**: Click the Edit button (✏️) next to a task. The task moves back to the input field for modification. Save the updated task.
- **Deleting a Task**: Click the Delete button (🗑️) next to a task. The task is removed from the list and local storage.
- **Marking a Task as Completed**: Click the checkbox next to a task. The task text is crossed out, indicating completion. Uncheck it if you want to mark it as incomplete again.

## Fixes & Enhancements
### Fixed Issues
- Last task not deleting – Issue resolved.
- Latest task not saving in local storage – Now updates correctly.
- Long task input breaking layout – Now properly wraps text.

### Improvements
- Better mobile view – UI optimized for small screens.
- Performance optimization – Improved state management.

## Technologies Used
| Technology | Purpose |
|------------|---------|
| **React.js** | Frontend framework |
| **Tailwind CSS** | Styling for responsive UI |
| **Local Storage API** | Persistent data storage |
| **React Icons** | Icons for buttons |
| **UUID** | Unique ID generation for tasks |

## Future Enhancements
- **Task Due Dates**: Set due dates for tasks.
- **Task Categories**: Group tasks into categories.
- **Task Notifications**: Reminders for pending tasks.
- **Sync Across Devices**: Save tasks in a cloud-based database.

**PR request From Kishanmc**
