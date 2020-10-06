const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri:
    process.env.MONGODB_URI ||
    "mongodb+srv://tarunyadav:tarunyadav@cluster0.6emvt.mongodb.net/rest?retryWrites=true&w=majority",
};

export default config;
