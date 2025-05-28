import { orderDetails } from '../db.js';
import { companies } from '../db.js';
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
