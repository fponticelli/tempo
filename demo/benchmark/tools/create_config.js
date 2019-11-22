const fs = require('fs');
const path = require('path');

const distFolder = path.join(__dirname, '../../../docs/demo/benchmark');
const directoryNames = fs.readdirSync(distFolder).filter(file => {
  const stat = fs.statSync(path.join(distFolder, file));
  return stat.isDirectory() && file !== '.' && file !== '..';
});

const configPath = path.join(__dirname, '../../../docs/demo/benchmark', 'config.json');

const content = {
  versions: directoryNames
};

fs.writeFileSync(configPath, JSON.stringify(content, null, 2), 'utf8');

