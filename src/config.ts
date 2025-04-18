const config = {
  env: process.env.APP_ENV || "development",
  debug: process.env.APP_DEBUG === "true",
  port: parseInt(process.env.PORT || "3000"),
};

export default config;
