module.exports = (sequelize, Sequelize) => {
    const Enquiry = sequelize.define("enquiry", {
     country_code: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      message: {
        type: Sequelize.STRING,
        allowNull: false
       },
       phone:{
        type: Sequelize.STRING,
        allowNull: false,
       },
       selectedPlan: {
        type: Sequelize.STRING,
        allowNull: false,
    }
    });
    return Enquiry;
  };