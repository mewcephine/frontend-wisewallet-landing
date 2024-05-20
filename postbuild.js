const fs = require('fs');

// Copy dns CNAME to docs build folder
fs.copyFile('./dns/CNAME', './docs/CNAME', (err) => {
  if (err) {
    console.error('Error copying CNAME record to docs build folder', err);
  }
});
