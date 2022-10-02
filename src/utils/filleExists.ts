const fs = require('fs');

const fileExists = (filePath: string ) => { 
  return fs.existsSync(filePath);
};

export default fileExists;
