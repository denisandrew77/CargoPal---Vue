import { Router } from "express"
import { getOrder, getOrders, editOrder } from "../service/service.js"
import { getOrdersByPlate, getOrdersByLocation, getOrdersByCarrier, deleteRecordByCarPlate, deleteRecordByOrderNumber } from "../service/service.js";
export const router = Router();
//GET
router.get("/get-orders", (req, res) => {
  res.send(JSON.stringify(getOrders()));
})
router.get("/get-order", async (req, res) => {
  const orderNumber = parseInt(req.query.orderNumber, 10);
  const { plateNumber } = req.query;
  if (await getOrder(orderNumber, plateNumber) === false)
    res.send(JSON.stringify("Incorect credentials"));
  else res.send(JSON.stringify(await getOrder(orderNumber, plateNumber)))
})
//POST
//PUT
router.put("/edit-order", async (req, res) => {
  const { orderNumber } = req.body.data;
  const { status } = req.body.data;
  await editOrder(orderNumber, status);
  res.send(status, orderNumber);
})
//DELETE
//CREATE
////////OTHERS
//GET
router.get("/get-order-by-plate", (req, res) => {
  const { plateNumber } = req.query;
  res.send(JSON.stringify(getOrdersByPlate(plateNumber)));
});
router.get("/get-order-by-location", (req, res) => {
  const { location } = req.query;
  res.send(JSON.stringify(getOrdersByLocation(location)));
});
router.get("/get-order-by-carrier", (req, res) => {
  const { carrier } = req.query;
  res.send(JSON.stringify(getOrdersByCarrier(carrier)));
});
//POST
//PUT
//DELETE
router.delete("/delete-by-plate", (req, res) => {
  const { plateNumber } = req.body;
  deleteRecordByCarPlate(plateNumber);
  res.send("Deleted record");
})
router.delete("/delete-by-order-number", (req, res) => {
  const { orderNumber } = req.body;
  deleteRecordByCarPlate(orderNumber);
  res.send("Deleted record");
})
