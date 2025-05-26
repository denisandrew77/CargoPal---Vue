import { orderDetails } from '../db.js';
export const getOrders = () => {
  return orderRecords;
}
export const getOrder = async (orderNumber, carPlate) => {
  /* const foundOrder = orderRecords.find(order => order.Order_number === orderNumber && order.Plate === carPlate)
   if (!foundOrder) return false;
   return foundOrder;
   console.log(orderNumber, carPlate);
   return foundOrder !== undefined ? foundOrder : false;*/
  const foundOrder = await orderDetails.findOne({ where: { Order_number: orderNumber, Plate: carPlate } });
  return foundOrder;
}
export const editOrder = async (orderNumber, status) => {
  /*orderRecords.forEach(order => {
    if (order.Order_number === orderNumber) {
      order.Status = status;
    }
  });*/
  await orderDetails.update(
    { Status: status },
    {
      where: {
        Order_number: orderNumber,
      },
    },
  );

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
