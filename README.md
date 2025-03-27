# Contact Management App

## Overview
This is a React-based contact management application integrated with Firebase Firestore for real-time data storage and retrieval. The app allows users to search, add, update, and display contacts dynamically.

## Features
- **Search Contacts**: Users can filter contacts using a search bar.
- **Add and Update Contacts**: Supports adding new contacts and updating existing ones.
- **Real-time Sync**: Utilizes Firebase Firestore's `onSnapshot` for real-time updates.
- **Toast Notifications**: Uses `react-toastify` for user-friendly notifications.

## Tech Stack
- **Frontend**: React, Tailwind CSS
- **Backend**: Firebase Firestore
- **Icons**: `react-icons`
- **State Management**: React hooks (`useState`, `useEffect`)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/AriyaArKa/Contact-Web-App.git
   ```
2. Navigate to the project directory:
   ```sh
   cd contact-management
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up Firebase:
   - Create a Firebase project.
   - Configure Firestore.
   - Add Firebase config to `config/firebase.js`.
5. Start the development server:
   ```sh
   npm run dev
   ```

## File Structure
```
📂 contact-management
├── 📂 src
│   ├── 📂 components
│   │   ├── Navbar.jsx
│   │   ├── ContactCard.jsx
│   │   ├── AddAndUpdateContact.jsx
│   │   ├── NotFoundContact.jsx
│   ├── 📂 config
│   │   ├── firebase.js
│   ├── 📂 hooks
│   │   ├── useDisclouse.js
│   ├── App.jsx
│   ├── index.jsx
│   ├── index.css
├── 📜 package.json
├── 📜 README.md
```

## Usage
- Click the **plus (+) icon** to add a new contact.
- Use the **search bar** to filter contacts dynamically.
- Contacts are displayed in real-time with Firestore integration.
- Toast notifications provide feedback on actions.

## Dependencies
```json
{
  "dependencies": {
    "firebase": "^9.x.x",
    "react": "^18.x.x",
    "react-icons": "^4.x.x",
    "react-toastify": "^9.x.x",
    "tailwindcss": "^3.x.x"
  }
}
```

## Contributing
Feel free to contribute by submitting issues or pull requests!

## License
This project is licensed under the MIT License.

