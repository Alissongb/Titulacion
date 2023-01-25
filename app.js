import express from 'express';
import LoginRegisterRoute from './routes/LoginRegisterRoute.js';
import UserRoute from './routes/UserRoute.js';
const app = express();
app.use(express.json());
app.use(LoginRegisterRoute)
app.use(UserRoute)
app.set('port', process.env.PORT || 4000);

export default app;