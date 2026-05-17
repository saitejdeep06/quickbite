import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      _id: 1,
      name: "Burger",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    },
    {
      _id: 2,
      name: "Pizza",
      price: 250,
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    },
    {
      _id: 3,
      name: "Pasta",
      price: 180,
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
    },
    {
      _id: 4,
      name: "French Fries",
      price: 90,
      image:
        "https://images.unsplash.com/photo-1576107232684-1279f390859f",
    }
  ]);
});

export default router;