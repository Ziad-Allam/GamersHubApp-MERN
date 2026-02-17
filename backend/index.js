const express = require('express')
const authRouter = require('./routes/authRoute')
const adminProductRoute = require('./routes/admin/adminProductRoute')
const adminBrandRouter = require('./routes/admin/adminBrandRoute')
const adminCategoryRouter = require('./routes/admin/adminCategoryRoute')
const adminBannerRouter = require('./routes/admin/adminBannerRoute')
const adminAuthRouter = require('./routes/admin/adminAuthRoute')

const productRoute = require('./routes/productRoutes')
const brandRoute = require('./routes/brandRoute')
const categoryRouter = require('./routes/categoryRoute')
const cartRouter = require('./routes/cartRoutes')
const addressRouter = require('./routes/addressRoutes')
const orderRouter = require('./routes/orderRoutes')
const paymentRouter = require('./controller/paymentCtrl')
const adminOrderRouter = require('./routes/admin/adminOrderRoutes')
const reviewRouter = require('./routes/reviewRoutes')
const bannarRouter = require('./routes/bannerRoutes')
const wishlistRouter = require('./routes/wishlistRoutes')
const checkoutRouter = require('./routes/checkoutRoutes')

const app = express()
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 4000;
const mongoose = require('mongoose')
const CustomError = require('./errorHandlers/CustomError')
const cookieParser = require('cookie-parser')
const cors = require("cors");

mongoose.connect(process.env.CONN_STR, {
    useNewUrlParser: true
}).then((conn) => {
    console.log('DB connection successful')
}).catch((error) => {
    console.log(error)
})
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma",
    ],
    credentials: true,
}));

app.use("/api/admin/product", adminProductRoute)
app.use("/api/admin/order", adminOrderRouter)
app.use("/api/admin/brands", adminBrandRouter)
app.use("/api/admin/category", adminCategoryRouter)
app.use("/api/admin/bannar", adminBannerRouter)
app.use("/api/admin/auth", adminAuthRouter)

app.use("/api/products", productRoute)
app.use("/api/user", authRouter)
app.use("/api/brands", brandRoute)
app.use("/api/category", categoryRouter)
app.use("/api/cart", cartRouter)
app.use("/api/address", addressRouter)
app.use("/api/order", orderRouter)
app.use("/api/review", reviewRouter)
app.use("/api/bannar", bannarRouter)
app.use("/api/wishlist", wishlistRouter)
app.use('/api/checkout', checkoutRouter);


app.all('*', (req, res, next) => {
    const err = new CustomError(`Cant find ${req.originalUrl} on the server`, 404)
    next(err)
})

app.listen(PORT, () => {
    console.log(`server is running at PORT ${PORT}`)
})