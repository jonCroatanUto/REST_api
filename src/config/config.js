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
        },
        accessToken:{
            tokkenKey:ACCESS_TOKEN_SECRET
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
        },
        accessToken:{
            tokkenKey:ACCESS_TOKEN_SECRET
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
        },
        accessToken:{
            tokkenKey:ACCESS_TOKEN_SECRET
        }
    },
}
module.exports={
    config:config[NODE_ENV]
}