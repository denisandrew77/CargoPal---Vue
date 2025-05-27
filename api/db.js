import { Sequelize, DataTypes } from "sequelize";
const db = {
  NAME: "cargopal",
  USERNAME: "cargopal",
  PASSWORD: "cargopal",
  options: {
    dialect: "mysql",
    timezone: "+00:00",
    host: "mysql",
    port: 3306,
    logging: function (str) {
      console.log(str);
    },
  },
};
export const sequelize = new Sequelize(db.NAME, db.USERNAME, db.PASSWORD, db.options)
export const orderDetails = sequelize.define("order_details", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  Order_number: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  Plate: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  Carrier: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  Client_number: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  Client: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  Status: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  Info: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  Vehicle_type: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  Loading: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  Delivery: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  Loading_contact: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  Loading_date: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  Loading_time: {
    type: DataTypes.TIME,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  Loading_reference: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  Goods_type: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  Goods_number: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  Goods_length: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  Goods_width: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  Goods_height: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  Loading_at_company: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  Loading_postalcode: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  Loading_city: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  Loading_country: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  Delivery_at_company: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  Delivery_postalcode: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  Delivery_city: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  Delivery_country: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  Delivery_contact: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  Goods_weight: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  Delivery_date: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  Delivery_time: {
    type: DataTypes.TIME,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  Delivery_reference: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true,
    validate: {
      notEmpty: true
    },
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    validate: {
      notEmpty: true
    },
  },
  deletedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    validate: {
      notEmpty: true
    },
  },
},
  {
    sequelize,
    freezeTableName: true,
    paranoid: true,
    timestamps: true
  })
export const companies = sequelize.define("companies", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  company_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true,
    validate: {
      notEmpty: true
    },
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    validate: {
      notEmpty: true
    },
  },
  deletedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    validate: {
      notEmpty: true
    },
  },
})
