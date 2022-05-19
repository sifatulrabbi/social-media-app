const {startServer} = require('./app');
const {syncModels} = require('./models');

(async function () {
  await syncModels();
  startServer();
})();
