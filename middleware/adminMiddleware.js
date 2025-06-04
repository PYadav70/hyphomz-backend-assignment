import jwt from 'jsonwebtoken';

const adminMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ success: false, message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the user has admin role
    if (decoded.role !== "admin") {
      return res.status(403).json({ success: false, message: "Access denied. Admins only." });
    }

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};

export default adminMiddleware;
