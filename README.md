# Custom Fit Pattern Generator App
This full-stack application provides users with different crochet and knit patterns where they can select a pattern, enter their own measurements in, and receive a customized pattern according to their measurements.

<img width="700" alt="Screenshot 2023-07-28 at 12 39 16 PM" src="https://github.com/causeys/react-pattern-app/assets/61594780/143b9b91-5894-4982-9050-4fd533ac9469">

<img width="700" alt="Screenshot 2023-07-28 at 12 33 15 PM" src="https://github.com/causeys/react-pattern-app/assets/61594780/8fa286dc-81a0-4301-9213-511ef4ac3802">

<img width="700" alt="Screenshot 2023-07-28 at 12 33 37 PM" src="https://github.com/causeys/react-pattern-app/assets/61594780/a5446f57-452f-4529-975d-ffb7e7ee318d">

<img width="700" alt="Screenshot 2023-07-28 at 12 33 51 PM" src="https://github.com/causeys/react-pattern-app/assets/61594780/2a6239ee-85f9-44a3-81f2-3bebbbe9e102">

## Technologies Used
- React
- Node.JS
- Express.JS
- MySQL
- Nodemon
- Axios
- dotenv
- react-router-dom

## Prerequisites
In order to run this application on your machine, you will need to have [Git](https://git-scm.com/downloads), [Node.JS](https://nodejs.org/en/download) and [MySQL](https://www.mysql.com/downloads/) installed. 

## How to Install
1. Clone repository using Git to get a local copy of the code:
```
$ git clone <https://github.com/causeys/react-pattern-app>
```
2. Set-up MySQL database
   - After MySQL installation and set-up, create a local instance on your machine
   - Run db.sql script
   - Create .env file in react-pattern-app directory and input your mySQL credentials
     ```
     // HOST ENV VAR
     HOST = "localhost"

     // USER ENV VAR
     USER = "root"

     // ENTER YOUR MYSQL PASSWORD, IF NONE LEAVE STRING BLANK
     PASSWORD = ""

     // DATABASE
     DATABASE = "pattern"
     ```
3. Install backend dependencies
```
// Navigate to react-pattern-app/server in terminal
$ cd react-pattern-app
$ cd server
$ npm install
```
4. Connect to server within react-pattern-app/server in terminal using nodemon
```
$ nodemon server.js
```
5. Install frontend dependencies
```
// Navigate to react-pattern-app/client in terminal
$ cd client
$ npm install
```
6. Start-up application
```
// In react-pattern-app/client in terminal
$ npm start
```
















