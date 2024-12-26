const app = require('./App');

const path = require('path');
const connectDatabase = require('./config/database'); 
const NodeGeocoder = require('node-geocoder')
const cors = require('cors') 



 
connectDatabase();      


app.use(cors({
    origin: ['https://food-delivery-frontend-2srpt50l7-prems-projects-b6c27550.vercel.app','http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'], // Add required headers
    credentials: true 
  })); 

  //app.use(cors("*"))
  //app.use(cors()); 
 
//app.use(cors({ origin: '*' }));


app.listen(process.env.PORT,()=>{
    console.log(`Server listening to the port: ${process.env.PORT} in ${process.env.NODE_ENV}`)
})