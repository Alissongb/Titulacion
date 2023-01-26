import express from 'express';
import LoginRegisterRoute from './routes/LoginRegisterRoute.js';
import roleRoutes from './routes/roleRoutes.js';
import UserRoute from './routes/UserRoute.js';
import CarrerRoute from './routes/CarrerRoute.js';
import ProjectRoute from './routes/ProjectRoute.js';
const app = express();
app.use(express.json());
app.use(LoginRegisterRoute)
app.use(UserRoute)
app.use(roleRoutes)
app.use(CarrerRoute)
app.use(ProjectRoute)
app.set('port', process.env.PORT || 4000);
export default app;