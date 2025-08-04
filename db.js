// import mongoose from "mongoose";

// const mongoURL = "mongodb+srv://muhammadshehbaz:muhammadshehbaz@cluster0.zgwluyf.mongodb.net/mern-pizza"

// mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser: true})

// var db = mongoose.connection;

// db.on('connected', () => {
//     console.log('MongoDB Connection Successful');
// });
// db.on('error', () => {
//     console.log('MongoDB Connection Failed');
// });

// export default mongoose;

import mongoose from "mongoose";

const mongoURL= "mongodb+srv://muhammadshehbaz:muhammadshehbaz@cluster0.zgwluyf.mongodb.net/mern-pizza"

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on('connected', () => {
    console.log('MongoDB Connection Successful');
});
db.on('error', () => {
    console.log('MongoDB Connection Failed');
});

export default mongoose;