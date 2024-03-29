const {db} = require('../db');

const tables = {
  User: require('./User').User,
  Post: require('./Post').Post,
  Like: require('./Like').Like,
  Comment: require('./Comment').Comment,
  Profile: require('./Profile').Profile,
  Connection: require('./Connection').Connection,
  Share: require('./Share').Share,
  Media: require('./Media').Media,
};

// export all the tables
module.exports = tables;

/**
 * Synchronize all the tables
 */
module.exports.syncModels = async function () {
  try {
    // Only for testing purpose.
    // This will recreate all the tables
    // every time the application is restarted.
    // await db.sync({force: true});
    await db.sync();

    console.debug('\nSynchronized all the tables');
  } catch (err) {
    console.error('\nError occurred while synchronizing the tables: ', err);
  }
};
