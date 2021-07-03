const fs = require('fs');

const FILE_PATH = './app.json';

const newVersionString = process.argv[2]; // '3.1.12'
const newVersionNumber = parseInt(process.argv[3]); // 30112

const file = fs.readFileSync(FILE_PATH);
const parsedFile = JSON.parse(file);

parsedFile.expo.version = newVersionString;
parsedFile.expo.ios.buildNumber = newVersionString;
parsedFile.expo.android.versionCode = newVersionNumber;

fs.writeFileSync(FILE_PATH, JSON.stringify(parsedFile, null, 2) + '\n');
