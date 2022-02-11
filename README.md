# (Application Name)

#### (Brief Description of Application)

#### By Anastasiia Riabets

## Technologies Used

* CSS
* HTML
* JavaScript
* jQuery
* Node.js
* Eslint
* Babel
* Popper

## Description

## Setup/Installation Requirements

* Click on or copy and paste this [GitHub Page](https://anastasiia-ria.github.io/template/) into your preferred browser:<br>https://anastasiia-ria.github.io/template/

  ***OR***

* Clone this repository to your Desktop:
  1. Your computer will need to have GIT installed. If you do not currently have GIT installed, follow [these](https://docs.github.com/en/get-started/quickstart/set-up-git) directions for installing and setting up GIT.
  2. Once GIT is installed, clone this repository by typing following commands in your command line:
      ```
      ~ $ cd Desktop
      ~/Desktop $ git clone https://github.com/anastasiia-ria/template.git
      ~/Desktop $ cd template
      ```
  3. Get API key:
     * Instructions
  4. Create .env file with your API key:
     ```
      ~/Desktop/template $ touch .env
      ~/Desktop/template $ echo "API_KEY={YOUR API KEY}" > .env 
      ```
     Replace {YOUR API KEY} with your API key, remove curly brackets.
  5. Add ".env" to the .gitignore file
     ```
      ~/Desktop/template $ echo ".env" >> .gitignore
     ```
  6. (Optional) If you are planing to push your repository to the GitHub, push .gitignore file to your GitHub repository first:
     ```
      ~/Desktop/template $ git init
      ~/Desktop/template $ git remote add origin https://github.com/{your github username}/{your repository name}.git
      ~/Desktop/template $ git add .gitignore
      ~/Desktop/template $ git commit -m "add .gitignore"
      ~/Desktop/template $ git push origin main
     ```
     Replace {your github username} with your github username, {your repository name} with your repository name, remove curly brackets.
  6. Install necessary dependencies: 
      ```
      ~/Desktop/template $ npm install
      ```
  7. Run: 
      ```
      ~/Desktop/template $ npm run start
      ```

## Known Bugs

* 

## License

[ISC](https://opensource.org/licenses/ISC)

Copyright (c) Date Anastasiia Riabets
