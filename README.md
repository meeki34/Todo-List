📝 Offline To-Do List App (Using LocalStorage)
A simple, offline-capable To-Do List web app built with HTML, CSS, and JavaScript that stores tasks in the browser's LocalStorage .

✅ No server required
✅ Works completely offline
✅ Tasks persist across page reloads
✅ Easy to customize or extend

🧾 Features
Add new tasks
Mark tasks as completed/uncompleted
Delete tasks
All data saved in browser using localStorage
Fully responsive and works on desktop and mobile
📁 Folder Structure


1
2
3
4
todo-app/
├── index.html      # Main HTML file
├── style.css       # Styling for the app
└── script.js       # JavaScript logic
🚀 How to Run the App
Option 1: Open in Browser (Recommended)
Save all files (index.html, style.css, script.js) in the same folder.
Double-click index.html or right-click → "Open with" your preferred browser (Chrome, Firefox, Edge, etc.)
Start adding tasks!
Option 2: Use a Local Server (Optional)
If you want to test via localhost:

bash


1
npx live-server
Or Python:

bash


1
python -m http.server 8000
Then open http://localhost:8000 in your browser.

💾 Data Persistence
All tasks are stored in the browser’s LocalStorage , so:

✅ Your tasks remain even after refreshing the page
❌ Clearing browser cache will delete the tasks
🔧 Technologies Used
HTML5
CSS3
JavaScript (Vanilla)
LocalStorage API
🛠 Want to Customize?
Feel free to:

Add due dates or categories
Export/import tasks as JSON
Turn it into a PWA (Progressive Web App)
Let me know if you'd like help with any of these features!

📦 Download & Share
Since this app runs entirely in the browser, you can:

Zip the folder and share it
Upload it to GitHub Pages
Host it on Netlify or Vercel for free
🙋‍♂️ Having Trouble?
Make sure:

All files are in the same directory
You're opening index.html in a browser (not running via Node.js)
JavaScript is enabled in your browser
📄 License
MIT License – feel free to use, modify, and distribute this code.
