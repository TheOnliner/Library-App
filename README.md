
### Description

This Library-App is a simple single page application (SPA) that lets you buy, rate and leave your comment for all the books that are available in the store. You can also see all of your purchased books history or create your own favorite books list.

Please follow the below instructions to run this App locally:

### Installation

Library-App requires 
* [MongoDB](https://www.mongodb.com/download-center#community) v3.6+
* [NodeJS](https://nodejs.org/en/) v8+

To start the database (port: 27017): Install MongoDB, open new cmd window (in project root) and run

```sh
$ cd server
$ start-mongodb
```

To add initial seeding: (do this step once only the first time you start the app)
After you start MondoDB open new cmd window (in project root) and run

```sh
$ cd server
$ seedBooks
```

To start the server (port: 8000): open new cmd window (in project root) and run

```sh
$ cd server
$ npm install (if you havent already installed the dependencies)
$ npm start
```

To start the client (port: 4200): open new cmd window (in project root) and run

```sh
$ cd client
$ npm install (if you havent already installed the dependencies)
$ ng serve
```

### Features

- Anonymous users
    - Login/Register
    - View all books
    - View books details, rating and comments

- Authenticated users
    - Buy books
    - Rate books
    - Comment books
    - View user profiles
    - View his own purchases history
    - Create favorite books list
    - Can change his own avatar

- Admin users
    - Add books to the store
    - Edit books
    - Delete books
    - Edit/Delete offensive user comments
    - Block/Unblock user from commenting
    - Change unappropriate user avatars

### Tech

This Project incudes:
* [MongoDB](https://www.mongodb.com)
* [Mongoose](http://mongoosejs.com/index.html)
* [NodeJS](https://nodejs.org/en/) for the backend
* [ExpressJS](https://expressjs.com)
* [JSONWebToken](https://jwt.io) - Used for authorization
* [Angular](https://angular.io)

GitHub Hosted Link: https://theonliner.github.io/Library-App/

Heroku Hosted Link: https://assignment-02-library-app.herokuapp.com/
