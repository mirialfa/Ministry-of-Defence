const { Sequelize } = require("sequelize");

// Create a new Sequelize instance
const sequelize = new Sequelize("Shop", "root", "Aa123456", {
  host: "localhost",
  dialect: "mysql",
});

// Test the database connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

// Export the Sequelize instance
module.exports =  sequelize;
