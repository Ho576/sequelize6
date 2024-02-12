import express from 'express';
import userRouter from './src/modules/users/user.router.js'
const app = express();

app.use(userRouter);

app.listen(4000,()=>{
    console.log("server is running on port 4000 ");
}

)