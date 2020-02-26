const app = require('./app');
const PORT= process.env.PORT ||5000;

app.listen(PORT,()=>{
  console.log(`you are listen to the port http://localhost:${PORT}`)
})