import express from 'express';

const app = express();
const port = 9013;;

app.use(express.json())

function getRandom0Or1(): number {
    return Math.round(Math.random());
  }

app.post('/classify',(req,res)=>{
    const result = getRandom0Or1();
    res.json({result})
})

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})


module.exports = app
