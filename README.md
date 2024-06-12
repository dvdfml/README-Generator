# README Generator

## Description
README Generator is a command-line application that easily generates a README file, allowing project creators to devote more time to working on the project. 
The application dinamically generates a README.md file from the user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4).

## Installation
This application requires [Node.js](https://nodejs.org/) and the package manager [npm](https://www.npmjs.com/).  
Open the terminal in the root directory of the application and run the following command:

```bash
npm i
```
This will install the [Inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4) package needed to run the application.

## Usage
To run the application, open the terminal in the root directory of the application and run the following command:
```bash
node index.js
```
If the application was initiated succesfully, you will be prompted for the project title.
```bash
$ node index.js
? What is the project title?
```
Answer that and all the questions to follow.
After doing so, the README.md file will be generated and stored in the results folder of the root directory.  

> [!CAUTION]
> Running the application again will overwrite the README.md file.
  