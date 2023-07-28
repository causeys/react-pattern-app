# Custom Fit Pattern Generator App
This full-stack application provides users with different crochet and knit patterns where they can select a pattern, enter their own measurements in, and receive a customized pattern according to their measurements.

<img width="700" alt="Screenshot 2023-07-25 at 9 59 32 PM" src="https://github.com/causeys/pattern_app/assets/61594780/0c2d8145-a33d-4304-bb27-0791b38502f4">

<img width="700" alt="Screenshot 2023-07-25 at 10 00 20 PM" src="https://github.com/causeys/pattern_app/assets/61594780/c42042db-7448-4fba-a5f7-9994b7217de9">

<img width="700" alt="Screenshot 2023-07-26 at 8 55 40 PM" src="https://github.com/causeys/pattern_app/assets/61594780/a014492c-2e3f-474e-86f4-139048841d0d">

<img width="700" alt="Screenshot 2023-07-28 at 10 05 59 AM" src="https://github.com/causeys/react-pattern-app/assets/61594780/58fd1c06-1ab4-4e81-94ad-83230da58db2">


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
















