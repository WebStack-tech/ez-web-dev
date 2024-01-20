# SCSS Compiler with BrowserSync

This project provides a simple setup for live compiling SCSS files to CSS and serving an `index.html` file using BrowserSync. It's a convenient way to streamline your development workflow.

## Prerequisites

Make sure you have Node.js and npm installed on your machine. You can download and install them from [Node.js official website](https://nodejs.org/).

## Getting Started

---

### Method 1 (Clone)

1. Clone this repository to your local machine:

```bash
$ git clone https://github.com/exploresahil/sass-compile-npm.git
```

2. Navigate to the project directory:

```bash
$ cd sass-compile-npm
```

3. Install dependencies:

```bash
$ npm install
```

#### Usage

##### Initialize the Project

Create the necessary directories, initial SCSS file, Start the development server, which includes SCSS compilation and BrowserSync:

```bash
$ npm run dev
```

---

### Method 2 (Make your Own)

1. Make a project folder and create index.html and package.json files.

```bash
project-folder/
├── .gitignore             # Git ignore file (# optional)
├── LICENSE                # License file (# optional)
├── package.json           # NPM package configuration
├── README.md              # Project README file (# optional)
├── index.html             # Main HTML file
```

2. Copy the following code and paste it in package.json file.

```json
{
  "name": "html-scss-compiler",
  "version": "1.0.0",
  "description": "Live compile SCSS files to CSS and serve index.html",
  "scripts": {
    "init": "node -e \"const fs = require('fs'); if (!fs.existsSync('scss')) { fs.mkdirSync('scss'); } if (!fs.existsSync('scss/styles.scss')) { fs.writeFileSync('scss/styles.scss', ''); }\"",
    "compile:scss": "sass --no-source-map --watch scss:css --poll",
    "start:scss": "npm run init && npm run compile:scss",
    "serve": "browser-sync start --server --port 3000 --files 'css/*.css, *.html'",
    "dev": "concurrently \"npm run start:scss\"  \"npm run serve\"",
    "prebuild": "npm run compile:scss"
  }
}
```

3. Install latest dependencies as devDependencies.

```bash
$ npm i sass@latest browser-sync@latest concurrently@latest --save-dev
```

```bash
The Folder structure should look like this:
scss-compiler/
│
├── css/                   # Compiled CSS files
│   └── main.css
│
├── scss/                  # SCSS source files
│   └── styles.scss
│
├── node_modules/          # Node.js modules and packages
│
├── .gitignore             # Git ignore file (# optional)
├── LICENSE                # License file (# optional)
├── package.json           # NPM package configuration
├── README.md              # Project README file (# optional)
├── index.html             # Main HTML file
├── package-lock.json      # NPM package lock file
├── server.js              # Simple server file (if needed)
└── ...                    # Other project files and directories
```

#### Usage

##### Initialize the Project

Create the necessary directories, initial SCSS file, Start the development server, which includes SCSS compilation and BrowserSync:

```bash
$ npm run dev
```

This command will concurrently run the SCSS compilation and BrowserSync. The BrowserSync UI will be accessible at [http://localhost:3000](http://localhost:3000).

### Access the Development Server

Visit the development server in your browser at [http://localhost:3000](http://localhost:3000). BrowserSync will automatically reload the page whenever changes are made to your CSS or HTML files.

### Stop the Development Server

To stop the development server, press `Ctrl + C` in the terminal.

## Customization

Feel free to customize the project structure and SCSS files to suit your needs.

## Troubleshooting

If you encounter issues, refer to the following tips:

- Ensure proper termination of the development server.
- Check for running processes related to BrowserSync or Sass after stopping the server.
- Update npm packages:

  ```bash
  $ npm update
  ```

- Adjust the Sass watcher with the `--poll` option:
  ```json
  "compile:scss": "sass --no-source-map --watch scss:css --poll",
  ```
- Separate watch processes in the "dev" script:
  ```json
  "dev": "npm run start:scss & npm run serve",
  ```
- Change Port for BrowserSync:
  ```json
  "serve": "browser-sync start --server --port YOUR_NEW_PORT --files 'css/*.css, *.html'",
  ```

## License

[The MIT License.](https://opensource.org/licenses/MIT)
