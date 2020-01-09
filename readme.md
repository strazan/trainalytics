# Webpack Boilerplate - Tools to automate your development
This folder contains a boilerplate to a project containing tools for helping you automating:
* **Formatting** - Make your code look nice and easy to read
* **Minification/Uglifying** - Compress your code and make it ready for production
* **Autoprefixing** - Adding browser prefixes to support older browsers

## Requirements
* **Node.js** and **NPM** installed (https://nodejs.org/en/download/)
* **Git** installed

## Setup
Node & NPM are programs that doesn't have a GUI meaning that they can only be run through the terminal.

### Using the terminal
The terminal is a text-based interface to your computer. Basically you can do anything you usually do within the terminal (+ a lot more).

The terminal is centered around running small commands from a specific location. Like running commands in a folder in your file browser. To navigate around in the terminal we have 3 common commands:
* `pwd` - Outputs where you currently are `/Users/eskilfogelstrom`
* `ls` - Lists all files and folders in the directory your currently in
* `cd <path to folder>` - Navigates to a folder
 
 `cd` takes an argument specifiying where you want to go `cd Desktop`. You can also chain folders together `cd Desktop/Projects`. In case you want to move up one level you use `cd ../` (which can also be chained `cd ../../../` to move up multiple levels.
 
### Installing dependencies
This project requires some additional dependencies to work. These are installed via NPM. To install them make sure you're in the right folder in the terminal (using above commands) and then run: `npm install`. This will create a new folder called `node_modules` with all the dependencies.

#### Windows users
In order to get this to work on Windows you need to install some additional things:
```
npm install -g webpack-cli
npm install -g webpack-dev-server
npm install -g prettier
```

## Running
The project contains a `src` folder which is where you would add all of your code. The rest of the files you can ignore unless you want to fiddle around with the configuration of things.

Basically the project consists of three commands:
* `npm run format` - Formats all the files in the `src` folder to look nice
* `npm run build` - Minifies your CSS and JS and adds browser prefixes. This will then be put in the `dist/` folder.
* `npm run start` - Starts a local server for your website, with autoreload.

## How to use this (in-depth)
These steps will take you from starting a new project, setup GIT/GitHub for your project and finally using Netlify to deploy your code.

### 1. Getting the code/boilerplate
You can either get the code by downloading this repository as a zip-file or using the terminal. For the terminal, start by navigating to the place where you want to place your project. Then run:
```
git clone https://github.com/eskilfogelstrom/webpack-boilerplate.git
```
This will create a new folder called `webpack-boilerplate` containing all the code. Let's navigate there using:
```
cd webpack-boilerplate
````
If you used `git clone` do get the code, we need to remove the connection to this repository. We do that by removing GIT from the folder:
```
rm -rf .git/
```

### 2. Setup GIT for the project
The second step is to setup GIT for your project. We start by initializing a new git repository
```
git init
```
Now we need to create our first commit containing all the files that we want to start tracking. We first add all files in the folder and then make a commit:
```
git add --all
git commit -m "Initial commit"
```
That's it! GIT is now tracking any modifications that happens within this folder.

### 3. Start developing your site
This project contains a bunch of tools to make your development smoother and deployment easier. The actual website code is all contained within the `src/` directory. The rest you shouldn't have to care about.

In order for this to work the `src/` folder needs to contain at least (named exactly the same):
```
/src
  - index.html
  - script.js
  - style.css
```
The `script.js` file also needs to contain this part in the very top:
```
import 'style.css';
```
#### 3.1 Installing dependencies
To make all the tools work in this project you need to install some dependencies using NPM. This is done by running:
```
npm install
```
**NOTE:** Make sure you're in the project folder (where the package.json is) in the terminal.

#### 3.2 Running the local server
To view your website and start the local server you run the command:
```
npm run start
```
This will make your site accessible at `http://localhost:3000`.

You might've noticed that the `index.html` doesn't have any `<script>`s or `<link>`s to the JS & CSS. This is added automatically when running the server.

#### 3.3 Formatting your code
To format your code you run:
```
npm run format
```
This will format all of your HTML, CSS and JS in the `src/` folder, making it easier to read and easier to catch potential errors.

#### 3.4 Committing a change
Once you've feel like you have a change that you want to keep (I added feature X) you can create a commit to add it to the history. To create a commit we first have to specify which files we want to commit. You do this with:
```
git add src/<my file>
```
If you want to add multiple files you do this multiple times:
```
git add src/index.html
git add src/script.js
```
You can also add all the files in the entire folder:
```
git add src/
```
Once you've added the files you want, you need to create a commit to actually store it in the history. This is done with:
```
git commit -m "Message describing the change you did"
```

### 4. Pushing your code to GitHub
GitHub works kind of like a Google Drive for your code. It's a place you can push your code to using GIT.

#### 4.1 Creating a new repository on GitHub
1. You start by creating a new repository.
![](https://help.github.com/assets/images/help/repository/repo-create.png)

2. Give it a title
![](https://help.github.com/assets/images/help/repository/create-repository-name.png)

3. Select if other people can view it or not
![](https://help.github.com/assets/images/help/repository/create-repository-public-private.png)

4. Click **Create repository**

#### 4.2 Connecting your local repository to GitHub
For us to be able to push to our new GitHub Repo, we need to connect them:
```
git remote add origin <url to repository>.git
```

#### 4.3 Pushing your code
The last step is to actually push the history of your local repository to the GitHub one. This is done using:
```
git push -u origin master
```
**NOTE:** Once you've done this once, you only need to run `git push` whenever you want to push new code

### 5. Deploy to Netlify
The last step is to put this up on the webz. To do this we can use a service called Netlify (https://www.netlify.com/). Netlify offers free hosting of static website (only HTML, CSS & JS). 

#### Deploying manually
The easiest way is to just run `npm run build` locally and drag and drop the `dist/` folder into their UI. This will create a site and upload your files.

#### Deploying using CI (Continuous Integration)
The other way is to connect your Netlify site to GitHub. This means every time you push something we can trigger a build and automatically upload the code. This is a great timesaver and allows for rapid development.

1. Create **New site from Git**
2. Select **GitHub**
![](https://user-images.githubusercontent.com/11599741/65688779-f3ec8f80-e06b-11e9-8511-d4f4c35f002c.png)
3. After authorizing, pick the repository we just created.
![](https://user-images.githubusercontent.com/11599741/65688782-f3ec8f80-e06b-11e9-96ae-5f4ccb86079e.png)
4. Setup to run `npm run build` on every push and upload the files from the created `dist/` folder
![](https://user-images.githubusercontent.com/11599741/65688783-f3ec8f80-e06b-11e9-98fe-b5ef539fa10d.png)
5. Press deploy and *voila*, your site should now be live. It also will rebuild everytime you push to GitHub.

