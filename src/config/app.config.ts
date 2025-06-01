
export const EnvConfiguration = () => ({
    NODE_ENV: process.env.NODE_ENV || "dev",
    MONGODB: process.env.MONGODB,
    PORT: +(process.env.PORT || 3000),
})