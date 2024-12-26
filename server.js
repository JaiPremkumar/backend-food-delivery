const app = require('./App');

const path = require('path');
const connectDatabase = require('./config/database'); 
const NodeGeocoder = require('node-geocoder')
const cors = require('cors') 



 
connectDatabase();      


const corsOptions = {
  origin: 'https://food-delivery-frontend-three-bice.vercel.app',
  credentials: true,
};

app.use(cors(corsOptions));

  //app.use(cors("*"))
  //app.use(cors()); 
 
//app.use(cors({ origin: '*' }));


app.listen(process.env.PORT,()=>{
    console.log(`Server listening to the port: ${process.env.PORT} in ${process.env.NODE_ENV}`)
})