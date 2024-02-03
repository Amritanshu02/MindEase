# MindEase Website

## 📌 Technologies Used:

* HTML
* CSS
* JavaScript
* Nodejs
* Express
* MongoDB
* Fontawesome icons


## 📌 Dependencies Used:

* express (version - 4.18.2)
* mongoose (version - 8.1.1)
* nodemon (version - 3.0.3)
* dotenv (version - 16.4.1)
* crypto-js (version - 4.2.0)
* cors (version - 2.8.5)
* jsonwebtoken (version - 9.0.2)

## 📌 How to install and run project:

1. Open the terminal and run the below given commands.
2. To clone the project used `git clone https://github.com/Amritanshu02/MindEase.git`
3. Install the dependencies by running `npm i express mongoose nodemon dotenv crypto-js cors jsonwebtoken`
4. Navigate to backend folder using `cd backend` or `cd ./backend`
5. Start the backend by running `npm start`
6. Open the browser on `localhost:3000`

## 📌 Video Demonstration:



https://github.com/Amritanshu02/MindEase/assets/78687085/af2e04b4-954e-44f4-9544-f7c0dc556e38


## Project Overview

### 📌 Design Philosophy

This project embraces a simple and minimalistic design ethos to ensure an intuitive and user-friendly experience. The focus is on easy navigation, enhancing the overall usability of the application.

### 📌 Technologies Used in Backend

- **Node.js:** The backend is built on Node.js, providing a robust and scalable server environment.

- **Express:** Express.js is employed to streamline the development of the server and facilitate efficient routing.

- **MongoDB Atlas:** MongoDB Atlas is utilized as the cloud database solution, ensuring seamless data storage and retrieval.

- **Crypto-js:** Passwords are securely hashed using the crypto-js library, enhancing user data protection.

### 📌 Authentication Workflow

1. **User Signup:**
   - Users register through a straightforward form, providing necessary details, including a password.
   - Passwords are hashed using the robust SHA-256 algorithm from the crypto-js library.
   - User information, including the hashed password, is stored securely in the MongoDB Atlas database.

2. **User Login:**
   - During login, the server searches for the user in the database.
   - If the user is not found, a JSON response of "user not found" is returned.
   - Upon locating the user, the server compares the hashed current password with the hashed registration password.
   - Successful matching results in redirection to the home page, while incorrect credentials prompt a JSON response indicating "wrong credentials."

### 📌 Seamless User Experience

After successful registration, users are seamlessly redirected to the login page. The login process ensures a smooth experience, providing immediate feedback for user awareness.


