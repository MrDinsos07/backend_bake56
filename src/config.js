const config = {
    app:{
        port:process.env.port
    },

    db:{
        main:{
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            jwt: process.env.JWT_KEY,
            connectionLimit: 10
        }
    }
}

export default config;