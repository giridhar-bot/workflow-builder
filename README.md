# 🚀 Workflow Automation Builder

## 📌 Project Overview
This is a **React-based Workflow Automation Builder** that allows users to create, visualize, and manage workflows. Users can **drag and drop nodes**, **edit node properties**, and **view workflow details in a table**.

## 🎯 Features
✅ **Drag-and-drop workflow canvas** (React Flow)
✅ **Node configuration panel** (React Hook Form)
✅ **Editable workflow table** (React Table)
✅ **Undo/Redo functionality** (Custom state management)
✅ **Dynamic updates across components**

---

## 🛠️ Technologies Used
- **React + Vite** (Fast development & rendering)
- **React Flow** (Interactive workflow visualization)
- **React Hook Form** (Form handling)
- **React Table** (Workflow data management)
- **CSS (global.css)** (Styling & layout)

---

## 📂 Project Structure
```
📂 workflow-builder
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 WorkflowCanvas.jsx
 ┃ ┃ ┣ 📜 NodeConfigPanel.jsx
 ┃ ┃ ┣ 📜 WorkflowTable.jsx
 ┃ ┣ 📂 hooks
 ┃ ┃ ┣ 📜 useWorkflowState.js
 ┃ ┃ ┣ 📜 useUndoRedo.js
 ┃ ┣ 📂 styles
 ┃ ┃ ┣ 📜 global.css
 ┃ ┣ 📜 App.jsx
 ┃ ┣ 📜 main.jsx
 ┣ 📜 package.json
 ┣ 📜 vite.config.js
 ┣ 📜 README.md
```

---

## 🚀 Getting Started
### 1️⃣ Install Dependencies
```sh
npm install
```

### 2️⃣ Run the Development Server
```sh
npm run dev
```

### 3️⃣ Build for Production
```sh
npm run build
```

---

## 🎨 Styling
The app is styled using **CSS (global.css)**. You can customize the styles in:
```
src/styles/global.css
```

---

## 🛠️ How It Works
### ➕ **Adding a Node**
1. Click the **"➕ Add Node"** button.
2. A new node appears on the canvas.
3. The table updates automatically.

### 📝 **Editing a Node (Side Panel)**
1. Click on a node.
2. The **NodeConfigPanel** opens.
3. Modify the label and **Save**.

### 📝 **Editing a Node (Table)**
1. Locate the node in the **WorkflowTable**.
2. Modify the label in the input field.
3. **OnBlur event updates the node**.

### 🔄 **Undo/Redo**
- **Undo** restores the last state.
- **Redo** reapplies an undone action.


