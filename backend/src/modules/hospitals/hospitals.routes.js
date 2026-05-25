import { Router } from "express";
import { query } from "../../config/db.js";
import { authenticate } from "../../middlewares/authMiddleware.js";

const router = Router();
router.use(authenticate);

router.get("/migrate", async (req, res) => {
  try {
    // Add columns if they don't exist
    await query("ALTER TABLE hospitals ADD COLUMN latitude REAL;").catch(() => {});
    await query("ALTER TABLE hospitals ADD COLUMN longitude REAL;").catch(() => {});
    return res.json({ success: true, message: "Migration attempted" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res, next) => {
  try {
    const result = await query("SELECT id, name, city, latitude, longitude FROM hospitals ORDER BY name ASC");
    return res.json(result.rows);
  } catch (err) {
    if (err.message && (err.message.includes('latitude') || err.message.includes('no such column'))) {
      const fallback = await query("SELECT id, name, city FROM hospitals ORDER BY name ASC");
      return res.json(fallback.rows);
    }
    return next(err);
  }
});

export default router;
