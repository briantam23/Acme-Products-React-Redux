const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme-products-react-redux', {
    logging: false
});

const Product = conn.define('product', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rating: Sequelize.INTEGER
})

const syncAndSeed = () => {
    conn.sync({ force: true })
        .then(() => { Promise.all([
            Product.create({ name: 'Laptop', rating: 4 }),
            Product.create({ name: 'Headphones', rating: 3 }),
            Product.create({ name: 'Backpack', rating: 4 })
        ])})
}

module.exports = {
    syncAndSeed,
    models: {
        Product
    }
}