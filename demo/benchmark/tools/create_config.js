const fs = require('fs');
const path = require('path');

const distFolder = path.join(__dirname, '..', 'dist');
const directoryNames = fs.readdirSync(distFolder).filter(file => {
  const stat = fs.statSync(path.join(distFolder, file));
  return stat.isDirectory() && file !== '.' && file !== '..';
});

const configPath = path.join(__dirname, '..', 'dist', 'config.json');

const content = {
  versions: directoryNames
};

fs.writeFileSync(configPath, JSON.stringify(content, null, 2), 'utf8');

