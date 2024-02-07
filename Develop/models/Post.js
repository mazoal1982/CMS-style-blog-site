const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

// create our Post model
class Post extends Model {}

// definee table columns and configuration
Post.init(
    {
        // define an id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        // define a postname column
        title: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },

        // define a password column
        body: {
            type: DataTypes.STRING,
            allowNull:false,
            validate: {
                // this means the password must be at least four characters long
                len: [4]
            }
        },
    },
    {
        hooks: {
            async beforeCreate(newPostData) {
                newPostData.password = await bcrypt.hash(newPostData.password, 10);
                return newPostData;
            },
            async beforeUpdate(updatedPostData) {
                updatedPostData.password = await bcrypt.hash(updatedPostData.password, 10);
                return updatedPostData;
            }

        },

        // pass in our imported sequelize connection (the direct connection to our database
        sequelize,
        // suppress automatic creation of createdAt/updatedAt timestamp fields
        timestamps: false,
        // suppress pluralization of database table name
        freezeTableName: true,
        // use underscores instead of camel-casing (i.e. `comment_text` instead of `commentText`)
        underscored: true,
        // make our model name stay lowercase in the database
        modelName: 'post'
    }
);

module.exports = Post;
