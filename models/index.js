const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistacks', {
    logging : false
});
const Page = db.define('page', {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    slug: {
      type: Sequelize.STRING,
      allowNull: false
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    status: {
      type: Sequelize.ENUM('open', 'closed')
    }
  });

  Page.beforeValidate((instance, options) => {
    instance.slug=instance.title.replace(/\s+/g, '_').replace(/\W/g, '')
  })

  const User = db.define('user', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
          isEmail: true
      }
    }
  });



module.exports = {
  db, Page, User
}
