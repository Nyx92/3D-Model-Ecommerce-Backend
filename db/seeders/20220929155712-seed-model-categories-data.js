"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const categoriesData = [
      {
        category_name: "Toys",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_name: "Household",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_name: "Fashion",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    const modelData = [
      {
        model_name: "Clicky",
        model_description:
          "A fidget gadget for when your fingers are itching to make something move",
        category_id: 1,
        price_per_unit: 15,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        model_name: "Spiral Planter Pot",
        model_description: "A simple pot for cacti and other houseplants",
        category_id: 2,
        price_per_unit: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        model_name: "Ring",
        model_description: "Nice ring you can wear on your finger",
        category_id: 3,
        price_per_unit: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        model_name: "Ghosties Trio",
        model_description:
          "Set of 3 printed ghosts for you to decorate with for Halloween. Legs optional. Spooky!",
        category_id: 1,
        price_per_unit: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    await queryInterface.bulkInsert("categories", categoriesData, {
      returning: true,
    });

    await queryInterface.bulkInsert("models", modelData, {
      returning: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("models", null, {});
    await queryInterface.bulkDelete("categories", null, {});
  },
};
