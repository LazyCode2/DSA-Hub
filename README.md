DSA Learning Hub
A web-based learning platform designed to help users master Data Structures and Algorithms (DSA) with interactive content and intuitive design. The project features a responsive frontend built with HTML, Tailwind CSS, and JavaScript, served by a Node.js/Express backend. The initial focus is on arrays, with plans to expand to other data structures like linked lists, stacks, and queues.
Features

Interactive UI: Clean, modern interface with a sidebar for navigation and dark mode support.
Educational Content: Detailed explanations of DSA concepts, time complexity analysis, and code examples in Python.
Responsive Design: Optimized for both desktop and mobile devices using Tailwind CSS.
Content Security Policy (CSP): Securely configured to allow external resources (e.g., Tailwind CSS, Google Fonts) and inline scripts.
Practice Problems: Includes easy, medium, and hard problems to reinforce learning.

Project Structure
dsa-learning-hub/
├── public/                   # Static assets
│   ├── chapter.html          # Main content page (Arrays)
│   ├── index.html            # Landing page
│   ├── favicon.ico           # Favicon
│   └── array.png             # Image for array illustration
├── server.js                 # Express server
├── package.json              # Node.js dependencies and scripts
└── README.md                 # Project documentation

Prerequisites

Node.js (v14 or higher)
npm (v6 or higher)
A modern web browser (e.g., Chrome, Firefox)

Setup Instructions

Clone the Repository:
git clone <repository-url>
cd dsa-learning-hub


Install Dependencies:
npm install

This installs required packages: express, helmet.

Prepare Static Assets:

Ensure the public directory contains:
index.html: Landing page.
chapter.html: Arrays content page.
favicon.ico: Favicon file.
array.png: Image for array illustration.


If favicon.ico or array.png are missing, either add them or remove references in chapter.html.


Run the Server:
node server.js

The server will start at http://localhost:5000.

Access the Application:

Open http://localhost:5000 for the landing page.
Visit http://localhost:5000/learn for the Arrays content.



Usage

Navigation: Use the sidebar to explore topics (currently Arrays; more to be added).
Code Examples: View Python code snippets and copy them using the "Copy" button.
Dark Mode: Toggle between light and dark themes (configured via Tailwind CSS).
Practice Problems: Solve the provided easy, medium, and hard problems to test your understanding.

Content Security Policy (CSP)
The project uses helmet to enforce a CSP that:

Allows scripts from https://cdn.tailwindcss.com and specific inline scripts (via SHA-256 hashes).
Permits styles from https://fonts.googleapis.com and inline styles.
Enables fonts from https://fonts.gstatic.com.
Restricts images and connections to the same origin ('self') and data URIs.

To modify the CSP, edit the helmet configuration in server.js.
Development Notes

External Resources:
Tailwind CSS is loaded via CDN (https://cdn.tailwindcss.com).
Google Fonts (Inter) is used for typography.


Favicon: Ensure favicon.ico is in the public directory to avoid 404 errors.
Images: The array.png image must be in the public directory for the Arrays section.
Inline Scripts: Two inline scripts (Tailwind config and sidebar/copy-button logic) are allowed via CSP hashes. Move to external files for better maintainability in production.

Future Improvements

Add content for additional data structures (Linked Lists, Stacks, Queues).
Implement a backend API for dynamic content or user progress tracking.
Enhance interactivity with live code editors for practice problems.
Replace CDN dependencies with local assets for better performance and security.

Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a feature branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Open a pull request.

License
This project is licensed under the MIT License.
