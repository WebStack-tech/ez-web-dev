#! /usr/bin/env node
import ora from "ora";
import { input } from "@inquirer/prompts";
import fs from "fs";
import path from "path";
import ansi from "ansi-colors"
const folderName = input({
  default: "my-app",
  message: "√ What is your project named?",
});
folderName.then((data) => {
  let s = ora("Creating app").start();
  if (!fs.existsSync(path.join(process.cwd(), data))) {
    fs.mkdir(path.join(process.cwd(), data), () => {
    
      fs.mkdir(path.join(process.cwd(), data, "scss"), () => {
        fs.writeFileSync(
          path.join(process.cwd(), data, "scss", "styles.scss"),
          ""
        );
      });
      fs.mkdir(path.join(process.cwd(), data, "css"), () => {
        fs.writeFileSync(
          path.join(process.cwd(), data, "css", "styles.css"),
          ""
        );
      });
      fs.writeFileSync(path.join(process.cwd(), data, "index.html"),`
      <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EZ WEB DEV | Boilerplate</title>
    <link rel="shortcut icon" href="https://raw.githubusercontent.com/exploresahil/ez-web-dev/main/public/favicon.ico" type="image/x-icon">

    <meta name="description" content="Generated by ez web dev">
    <link rel="stylesheet" href="./css/styles.css">
</head>

<body>
    <main>

    </main>
    <script src="./js/app.js"></script>
</body>

</html>
      `,()=>{})
      fs.writeFileSync(path.join(process.cwd(), data, "package.json"),`
      {
        "name": "${data}",
        "version": "1.0.0",
        "description": "Live compile SCSS files to CSS and serve index.html",
        "scripts": {
          "init": "node -e \\"const fs = require('fs'); if (!fs.existsSync('scss')) { fs.mkdirSync('scss'); } if (!fs.existsSync('scss/styles.scss')) { fs.writeFileSync('scss/styles.scss', ''); }\\"",
          "compile:scss": "sass --no-source-map --watch scss:css --poll",
          "start:scss": "npm run init && npm run compile:scss",
          "serve": "browser-sync start --server --port 3000 --files 'css/*.css, *.html'",
          "dev": "concurrently \\"npm run start:scss\\" \\"npm run serve\\"",
          "prebuild": "npm run compile:scss"
        },
        "devDependencies": {
            "browser-sync": "^3.0.2",
            "concurrently": "^8.2.2",
            "sass": "^1.70.0"
          }
      }
      
      `,()=>{})
      fs.mkdir(path.join(process.cwd(), data, "js"),()=>{
        fs.writeFileSync(path.join(process.cwd(), data, "js","app.js"),`
      
      `,()=>{})
      })
  console.log(ansi.green(`cd ${data},\nRun npm update than npm install\nnpm run dev`));
        
    });
  }else{
    s.stop()
    console.log(
        ansi.red("Folder already exists")
    );
  }

  s.stop()
});
