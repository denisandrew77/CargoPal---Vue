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
    primaryKey: true,
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
    primaryKey: true,
    autoIncrement: true,
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
export const vehicles = sequelize.define("vehicles", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
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
  plate_number: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  vehicle_type: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  weight_category: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  car_weight: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  usable_weight: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  lift: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  length: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  width: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  height: {
    type: DataTypes.INTEGER,
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
export const vehicleLocation = sequelize.define("vehicle_location", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    validate: {
      notEmpty: true
    },
  },
  plate_number: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      notEmpty: true
    },
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      notEmpty: true
    },
  },
  postal_code: {
    type: DataTypes.STRING,
    allowNull: true,
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
companies.hasMany(vehicles);
vehicles.belongsTo(companies);

vehicles.hasOne(vehicleLocation);
vehicleLocation.belongsTo(vehicles);
