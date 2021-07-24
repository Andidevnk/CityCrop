const fs = require('fs');
const FILE_PATH = './app.json';

// Read file
const parsedFile = JSON.parse(fs.readFileSync(FILE_PATH));

// Create new version
const currentVersion = parsedFile.expo.version; // example: '3.1.12'
const [currentMajor, currentMinor, currentPatch] = currentVersion.split('.').map((part) => parseInt(part));
const [newMajor, newMinor, newPatch] = [currentMajor, currentMinor, currentPatch + 1];
const newVersionString = `${newMajor}.${newMinor}.${newPatch}`;
const newVersionNumber = parseInt(`${newMajor}${newMinor.toString().padStart(2, '0')}${newPatch.toString().padStart(2, '0')}`);

// Update version properties
parsedFile.expo.version = newVersionString;
parsedFile.expo.ios.buildNumber = newVersionString;
parsedFile.expo.android.versionCode = newVersionNumber;

// Write file
fs.writeFileSync(FILE_PATH, JSON.stringify(parsedFile, null, 2) + '\n');
