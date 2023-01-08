const Dog = require('./Dog');
const Kennel = require('./Kennel');
const Owner = require('./Owner');
const User = require('./User');

Owner.hasMany(Dog, {
    foreignKey: 'dog_id',
    onDelete: 'CASCADE',
});

Dog.belongsTo(Owner, {
    foreignKey: 'dog_id',
});

Kennel.hasOne(Dog, {
    foreignKey: 'dog_id'
});

module.exports = { Dog, Owner, Kennel, User };


