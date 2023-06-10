const express= require('express');
const cors= require('cors');

const app= express();

app.use(express.json());
app.use(cors());

app.listen(3402, () => {
    console.log(`Server up and running on PORT 3402`);
})