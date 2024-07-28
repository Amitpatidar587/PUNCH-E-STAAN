const mongoose=require('mongoose');
const Event=require('../model/events');
const Scheme =require('../model/scheme');
const {events,schemes}=require('./data');



MONGO_URL = "mongodb://127.0.0.1:27017/punch";
main()
  .then(() => {
    console.log("connect to db");
  })
  .catch((error) => {
    console.log(error);
  });
async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDb=async()=>{
  await Event.deleteMany({});
  await Scheme.deleteMany({});

  await Event.insertMany(events)
  await Scheme.insertMany(schemes)
  .then(res=>console.log('initial data is add successfully'))
  .catch(err=>console.log(err));

}

// console.log(events);
initDb();