const fs = require("fs");
const backendConf = JSON.parse(fs.readFileSync("backendConfig.json"));
const backEndInternal = JSON.parse(
  fs.readFileSync("backEndInternalSettings.json")
);
const dbConf = JSON.parse(fs.readFileSync("dbConfig.json"));

const overallConf = {
  ...backendConf,
  ...backEndInternal,
  ...dbConf,
};

// Write the backend-configuration, which is everything
fs.writeFileSync(
  "backend/src/soile_resources/soile_config.json",
  JSON.stringify(overallConf, null, 2)
);

const frontEndVars = {
  BACKENDDOMAIN: backendConf.http_server.domain,
  BACKENDPORT: backendConf.http_server.port,
  HTTPS: backendConf.http_server.useSSL,
};

var envString = "";

for (const key of Object.keys(frontEndVars)) {
  envString += "VITE_" + key + "=" + frontEndVars[key].toString() + "\n";
}
fs.writeFileSync("experimentrunner/.env", envString);

const mongoVars = {
  MONGOHOST: dbConf.mongo.host,
  MONGOPORT: dbConf.mongo.port,
  DBLOCATION: __dirname + "/database",
  DBADMIN: dbConf.mongo.username,
  DBPASSWORD: dbConf.mongo.password,
};

var mongoEnvString = "";
for (const key of Object.keys(mongoVars)) {
  mongoEnvString += key + "=" + mongoVars[key] + "\n";
}
fs.writeFileSync(".mongoenv", mongoEnvString);
