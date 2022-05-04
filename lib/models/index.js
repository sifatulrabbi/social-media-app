const tables = {
    User: require('./User').User,
    Profile: require('./Profile').Profile,
    Post: require('./Post').Post,
    Organization: require('./Organization').Organization,
    Like: require('./Like').Like,
    Comment: require('./Comment').Comment,
    Media: require('./Media').Media,
};

/**
 * Stablish the relations between the tables
 */

// Profile 1-1 User
tables.User.hasOne(tables.Profile, {
    onDelete: 'CASCADE',
    onUpdate: 'RESTRICT',
});
tables.Profile.belongsTo(tables.User, {
    foreignKey: 'userId',
});

// Organization n-n Profile
tables.Organization.hasMany(tables.Profile);
tables.Profile.belongsTo(tables.Organization, {
    foreignKey: 'orgId',
});

// TODO: Profile 1-n Colleague

// TODO: Profile 1-1 Media

// Post 1-n Comments
tables.Post.hasMany(tables.Comment);
tables.Comment.belongsTo(tables.Post, {
    foreignKey: 'postId',
});

// Post 1-1 Media
tables.Post.hasOne(tables.Media);
tables.Media.belongsTo(tables.Post, {
    foreignKey: 'postId',
});

// User n-1 Post
tables.User.hasMany(tables.Post);
tables.Post.belongsTo(tables.User, {
    foreignKey: 'userId',
});

// Post 1-n Comment
tables.Post.hasMany(tables.Comment);
tables.Comment.belongsTo(tables.Post, {
    foreignKey: 'postId',
});

// TODO: Post 1-n Like

/**
 * Synchronize all the tables
 */
(function () {
    try {
        Object.values(tables).map(async (value) => {
            await value.sync();
        });
        console.debug('Synchronized all the tables');
    } catch (err) {
        console.error('\nError occurred while synchronizing the tables: ', err);
    }
})();

// export all the tables
module.exports = tables;
