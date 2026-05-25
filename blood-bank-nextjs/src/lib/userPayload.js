import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "default_secret";

export function formatUserForToken(user) {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    hospitalId: user.hospitalId ?? null,
    bloodGroup: user.bloodGroup ?? null,
    aadharNumber: user.aadharNumber ?? null,
    latitude: user.latitude ?? null,
    longitude: user.longitude ?? null
  };
}

export function signUserToken(user) {
  return jwt.sign(formatUserForToken(user), JWT_SECRET, { expiresIn: "1d" });
}
