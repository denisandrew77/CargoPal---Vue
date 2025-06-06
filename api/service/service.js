import { orderDetails, vehicles } from '../db.js';
import { companies, vehicleLocation } from '../db.js';
export const getOrders = () => {
  return orderRecords;
}
export const getOrder = async (orderNumber, carPlate) => {
  const foundOrder = await orderDetails.findOne({ where: { Order_number: orderNumber, Plate: carPlate } });
  return foundOrder;
}
export const editOrder = async (orderNumber, status) => {
  await orderDetails.update(
    { Status: status },
    {
      where: {
        Order_number: orderNumber,
      },
    },
  );
}
export const createCompany = async (companyName, email, password) => {
  const findCompany = await companies.findOne({ where: { company_name: companyName } });
  if (findCompany === null) {
    const company = await companies.create(
      {
        company_name: companyName,
        email: email,
        password: password,
      },
    );
    return company;
  }
  else {
    return false;
  }
};
export const getCompany = async (email, password) => {
  const findCompany = await companies.findOne({ where: { email: email, password: password } });
  if (findCompany === null) {
    return false;
  }
  else return findCompany;
}
export const createVehicle = async (vehicle) => {
  const createdVehicle = await vehicles.create({
    company_name: vehicle.company_name,
    plate_number: vehicle.plate_number,
    vehicle_type: vehicle.vehicle_type,
    weight_category: vehicle.weight_category,
    car_weight: vehicle.car_weight,
    usable_weight: vehicle.usable_weight,
    lift: vehicle.lift,
    length: vehicle.length,
    width: vehicle.width,
    height: vehicle.height,
  })
  return createdVehicle;
}
export const getVehiclesByCompany = async (company_name) => {
  const { count, rows } = await vehicles.findAndCountAll({
    where: {
      company_name: company_name
    }
  });
  if (count === 0) {
    return false;
  }
  else return rows;
};
export const editLocation = async (plate_number, city, country, postal_code) => {
  const [count] = await vehicleLocation.update(
    {
      city: city,
      country: country,
      postal_code: postal_code
    },
    {
      where: {
        plate_number: plate_number
      }
    });
  return count;
};
export const getVehicleLocation = async (plate_number) => {
  const location = await vehicleLocation.findOne({ where: { plate_number: plate_number } });
  return location;
}
////others
///CREATE
//GET
export const getOrdersByPlate = (plate) => {
  const list = [];
  orderRecords.forEach(order => {
    if (order.Plate === plate) {
      list.push(order);
    }
  });
  return list;
}
export const getOrdersByLocation = (location) => {
  const list = [];
  orderRecords.forEach(order => {
    if (order.Loading_at_company === location) {
      list.push(order);
    }
  });
  return list;
}
export const getOrdersByCarrier = (carrier) => {
  const list = [];
  orderRecords.forEach(order => {
    if (order.Carrier === carrier) {
      list.push(order);
    }
  });
  return list;
}
//DELETE
export const deleteRecordByOrderNumber = (orderNumber) => {
  const updatedArray = orderRecords.filter(item => { item.Order_number !== orderNumber });
  orderRecords = updatedArray;
}
export const deleteRecordByCarPlate = (carPlate) => {
  const updatedArray = orderRecords.filter(item => { item.Plate !== carPlate });
  orderRecords = updatedArray;
}
