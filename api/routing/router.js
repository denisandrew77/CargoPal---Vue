import { Router } from "express"
import { getOrder, getOrders, editOrder } from "../service/service.js"
import { getOrdersByPlate, getOrdersByLocation, getOrdersByCarrier, deleteRecordByCarPlate, createCompany, getCompany, createVehicle, getVehiclesByCompany, editLocation, getVehicleLocation } from "../service/service.js";
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
router.get("/get-company", async (req, res) => {
  const { email, password } = req.query;
  const company = await getCompany(email, password);
  if (company === false) {
    res.send(JSON.stringify(false));
  }
  else res.send(JSON.stringify(company));
});
router.get("/get-vehicles", async (req, res) => {
  const { companyName } = req.query;
  const vehicleList = await getVehiclesByCompany(companyName);
  if (vehicleList === false) {
    res.send(JSON.stringify(false));
  }
  else res.send(JSON.stringify(vehicleList));

});
router.get("/get-vehicle-location", async (req, res) => {
  const { plateNumber } = req.query;
  const vehicleLocation = await getVehicleLocation(plateNumber);
  res.send(JSON.stringify(vehicleLocation));
});
//POST
router.post("/create-company", async (req, res) => {
  const { companyName, email, password } = req.body;
  const company = await createCompany(companyName, email, password);
  if (company === false) {
    res.send(JSON.stringify(false));
  }
  else res.send(JSON.stringify(company));
});
router.post("/create-vehicle", async (req, res) => {
  console.log(req.body);
  const { vehicle } = req.body;
  console.log(vehicle.company_name);
  const createdVehicle = await createVehicle(vehicle);
  res.send(JSON.stringify(createdVehicle));
});
//PUT
router.put("/edit-order", async (req, res) => {
  const { orderNumber } = req.body.data;
  const { status } = req.body.data;
  await editOrder(orderNumber, status);
  res.send(status, orderNumber);
});
router.put("/edit-location", async (req, res) => {
  const { plateNumber } = req.body.data;
  const { city, country, postal_code } = req.body.data;
  const rows = await editLocation(plateNumber, city, country, postal_code);
  res.send(JSON.stringify(rows));
})
//DELETE
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
