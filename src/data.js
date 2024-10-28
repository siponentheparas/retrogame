const fs = require('fs');
const path = require('path');
const dataFilePath = path.join(__dirname, '../game_data.json');

// Default data object
let data = {};

// Load data from disk when the application starts
function loadData() {
  try {
    const rawData = fs.readFileSync(dataFilePath, 'utf8');
    data = JSON.parse(rawData);
    console.log('Data loaded from disk');
  } catch (err) {
    console.error('Error loading data:', err);
    process.exit(1)
  }
}

// Save data to disk
function saveData() {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
    console.log('Data saved to disk');
  } catch (err) {
    console.error('Error saving data:', err);
  }
}

// Initialize data on startup
loadData();

// Export data and save/load functions
module.exports = { data, saveData };
