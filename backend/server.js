require('dotenv').config()
const app= require('./src/app')
const PORT= 7000;


app.listen(PORT, () => console.log(`server is running on :${PORT}`))