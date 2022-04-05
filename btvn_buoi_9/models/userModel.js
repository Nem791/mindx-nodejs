const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    deleted: {
        type: Boolean,
        default: false
    }
});

userSchema.pre('save', async function (next) {
    // Ma hoa password truoc khi tao user moi 

    console.log('this.password ', this.password);
    // this.password = await bcrypt.hash(this.password, salt);
    if (!this.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        return next();
    } catch (error) {
        return next(error);
    }
})




const User = mongoose.model('User', userSchema);

module.exports = User;
