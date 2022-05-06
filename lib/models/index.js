const {db} = require('../db');

const tables = {
    User: require('./User').User,
    Post: require('./Post').Post,
    Organization: require('./Organization').Organization,
    Like: require('./Like').Like,
    Comment: require('./Comment').Comment,
    Media: require('./Media').Media,
    Profile: require('./Profile').Profile,
    Connection: require('./Connection').Connection,
    Share: require('./Share').Share,
};

/**
 * Stablish the relations between the tables
 */

// User 1-1 Profile
tables.User.hasOne(tables.Profile, {
    foreignKey: {
        name: 'userId',
        allowNull: false,
    },
});

// User 1-n Like
tables.User.hasMany(tables.Like, {
    foreignKey: {
        name: 'userId',
        allowNull: false,
    },
});

// User 1-n Comment
tables.User.hasMany(tables.Comment, {
    foreignKey: {
        name: 'userId',
        allowNull: false,
    },
});

// User 1-n Post
tables.User.hasOne(tables.Post, {
    foreignKey: {
        name: 'userId',
        allowNull: false,
    },
});

// Media 1-1 Profile
tables.Media.hasOne(tables.Profile, {
    foreignKey: {
        name: 'mediaId',
        allowNull: false,
    },
});

// Media 1-1 Post
tables.Media.hasOne(tables.Post, {
    foreignKey: {
        name: 'mediaId',
        allowNull: false,
    },
});

// Post 1-n Comment
tables.Post.hasMany(tables.Comment, {
    foreignKey: {
        name: 'postId',
        allowNull: false,
    },
});

// Post 1-n Like
tables.Post.hasMany(tables.Like, {
    foreignKey: {
        name: 'postId',
        allowNull: false,
    },
});

// Post 1-1 Share
tables.Post.hasMany(tables.Share, {
    foreignKey: {
        name: 'postId',
        allowNull: false,
    },
});

// User 1-1 Share
tables.User.hasMany(tables.Share, {
    foreignKey: {
        name: 'userId',
        allowNull: false,
    },
});

// User 1-1 Connection
tables.User.hasOne(tables.Connection, {
    foreignKey: {
        name: 'userId',
        allowNull: false,
    },
});

/**
 * Synchronize all the tables
 */
(async function () {
    try {
        // Only for testing purpose.
        // This will recreate all the tables
        // every time the application is restarted.
        // await db.sync({alter: true});
        await db.sync();

        console.debug('\nSynchronized all the tables');
    } catch (err) {
        console.error('\nError occurred while synchronizing the tables: ', err);
    }
})();

// export all the tables
module.exports = tables;
