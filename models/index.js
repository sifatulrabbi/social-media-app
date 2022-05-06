const {db} = require('../db');

const tables = {
    User: require('./User').User,
    Post: require('./Post').Post,
    Organization: require('./Organization').Organization,
    Like: require('./Like').Like,
    Comment: require('./Comment').Comment,
    Profile: require('./Profile').Profile,
    Connection: require('./Connection').Connection,
    Share: require('./Share').Share,
    Media: require('./Media').Media,
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
tables.User.hasMany(tables.Post, {
    foreignKey: {
        name: 'userId',
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

// Media 1-1 Profile
tables.Profile.hasOne(tables.Media, {
    foreignKey: {
        name: 'profileId',
        allowNull: true,
    },
});

// Media 1-1 Post
tables.Post.hasOne(tables.Media, {
    foreignKey: {
        name: 'postId',
        allowNull: true,
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
