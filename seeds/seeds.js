const sequelize = require('../config/connection');
const { Dog, Kennel, Owner, User } = require('../models');
const dogData = require('./dog-seeds.json');
const ownerData = require('./owner-seeds.json');
const userData = require('./user-data.json');
const kennelData = require('./kennel-seeds.json');


const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const owners = await Owner.bulkCreate(ownerData, {
        returning: true,
    });

    const users = await User.bulkCreate(userData, {
        returning: true,
    });

    for (const dogs of dogData) {
        await Dog.create({
            ...dogs,
            owner_id: owners[Math.floor(Math.random() * owners.length)].id,
        });
    };

    const kennels = await Kennel.bulkCreate(kennelData, {
        returning: true,
    });

    process.exit(0);
};

seedDatabase();