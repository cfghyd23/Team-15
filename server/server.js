const express= require('express');
const mongoose= require('mongoose');
const cors= require('cors');

const app= express();

app.use(express.json());
app.use(cors());

// connect to db
mongoose.connect('mongodb+srv://team15:team15cfg@clusterdb.v9gpzq8.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(() => {
    console.log('Connected to the DB');
}).catch((err) => {
    console.error(err);
});

const UserRouter= require('./routes/UserRoutes');
const CaretakerRouter= require('./routes/CaretakerRoutes');

app.use('/api/v1/user', UserRouter);
app.use('api/v1/caretaker', CaretakerRouter);

app.listen(3402, () => {
    console.log(`Server up and running on PORT 3402`);
})