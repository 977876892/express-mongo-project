const mongoose = require( "mongoose" );
const md5 = require( "md5" );
const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;
autoIncrement.initialize(mongoose.connection);

const userSchema = new Schema( {
    id: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    age: { type: Number, required: true, min: 18 },
    sex: { type: String, required: true, enum: [ "male", "female" ] },
}, {
    timestamps: true,
} );

userSchema.methods.setPass = function( password ) {
    this.password = md5( password );
};

userSchema.methods.checkPass = function( password ) {
    return this.password === md5( password );
};

userSchema.plugin(autoIncrement.plugin, {
    model: 'User',
    field: 'id',
    startAt: 1,
    incrementBy: 1
});

module.exports = mongoose.model( "User", userSchema );
