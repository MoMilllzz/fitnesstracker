js
   mongoose.connect(
     process.env.MONGODB_URI || 'mongodb://localhost/fitnesstracker',
     {
       useNewUrlParser: true,
       useUnifiedTopology: true,
       useCreateIndex: true,
       useFindAndModify: false
     }
   );
   