module.exports =

  {
    "development": {
      "username": process.env.DB_DEV_user,
      "password": process.env.DB_DEV_pass,
      "database": process.env.DB_DEV,
      "host": process.env.DB_DEV_host,
      "dialect": "mysql"
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "testdb",
      "host": "localhost",
      "dialect": "mysql",
      "logging": false
    },
    "production": {
      //not sure we need these
      // "use_env_variable": process.env.GB_API_KEY,
      // "use_env_variable": process.env.TD_API_KEY,
      "use_env_variable": "JAWSDB_URL",
      "dialect": "mysql"
    }
  }