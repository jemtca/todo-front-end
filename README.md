# To-Do Project
Repository to upload the to-do project (front-end) and explain how to run it on **macOS**.

## About
Web application implementing the MERN stack (MongoDB - Express - React - Node) / CRUD operations (create - read - update - delete).

* Initial idea
    * Allow a user to add a task.
    * Allow a user to edit a task.
    * Allow a user to delete a task.

* Improvements/fixes once the app was finished
	* Use of Hooks (useState and useEffect).
	* Fixed an issue where a user could create a task without any description.
	* Fixed an issue where a user could get the description of an unexisting task.
	* Fixed an issue where a user could update an unexisting task.
	* Fixed an issue where a user could delete an unexisting task.
	* Error handling improved to get error messages and avoid the app crashing.
	* Use of dependency injection.
	* Use of environmental variables.

## Screenshot
![](https://github.com/jemtca/todo-front-end/blob/master/screenshots/todo.gif)

## Technologies Used
* HTML, CSS, JavaScript.
* npm (packages used): [create-react-app](https://www.npmjs.com/package/create-react-app), [nodemon](https://www.npmjs.com/package/nodemon), [express](https://www.npmjs.com/package/express), [cors](https://www.npmjs.com/package/cors), [monk](https://www.npmjs.com/package/monk), [joi](https://www.npmjs.com/package/joi).
* Frameworks: [Bootstrap 4.0](https://getbootstrap.com/docs/4.0/getting-started/introduction/).
* APIs: [Insomnia](https://insomnia.rest/).
* Database: [MongoDB](https://www.mongodb.com/).
* Cloud service: [???]().

## How to run the project (front-end)
* Open the terminal.
* Clone the repository: **`git clone https://github.com/jemtca/todo-front-end.git`**
* Go to the project folder: **`cd todo-front-end`**
* Install dependencies/packages: **`npm install`**
* Run the app: **`npm start`**

## How to create a database and how to run the whole project
* Explained [here](https://github.com/jemtca/todo-back-end).