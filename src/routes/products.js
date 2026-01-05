import { Router } from "express";
const router = Router();
router.get("/", (req, res) => {
  console.log("Cookie header:", req.headers.cookie);
  console.log("Parsed cookies:", req.cookies);

  if (req.cookies?.DataSets === "IP-32UHE8N") {
    return res.send([{ id: 123, name: "Chicken Breast", price: 5.99 }]);
  }

  return res.status(403).json({ msg: "Forbidden Access" });
});
export default router;