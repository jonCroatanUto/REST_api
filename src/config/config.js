const dotenv = require("dotenv");
//const logger = require("loglevel");
dotenv.config();
const {
    NODE_ENV="development",
    MONGO_DB_URL_PRODUCTION,
    MONGO_DB_URL_DEVELOPMENT,
    MONGO_DB_URL_TEST,
    ACCESS_TOKEN_SECRET,
    PORT,
    ENCRYPTION_SALT_DEVELOPMENT,
    ENCRYPTION_SALT_PRODUCTION,
}=process.env;

const config = {
    development:{
        app:{
            port:PORT || 4000
        },
        db:{
            url:MONGO_DB_URL_DEVELOPMENT
        },
        encrypt:{
            salt:ENCRYPTION_SALT_DEVELOPMENT
        }
    },
    test:{
        app:{
            port:PORT || 4000
        },
        db:{
            url:MONGO_DB_URL_TEST
        },
        encrypt:{
            salt:ENCRYPTION_SALT_DEVELOPMENT
        }
    },
    production:{
        app:{
            port:PORT || 4000
        },
        db:{
            url:MONGO_DB_URL_PRODUCTION
        },
        encrypt:{
            salt:ENCRYPTION_SALT_PRODUCTION
        }
    },
}
module.exports={
    config:config[NODE_ENV]
}