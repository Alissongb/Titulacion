import express from 'express';
import LoginRegisterRoute from './routes/LoginRegisterRoute.js';
import UserRoute from './routes/UserRoute.js';
import CarrerRoute from './routes/CarrerRoute.js';
import ProjectRoute from './routes/ProjectRoute.js';
import ContributionRoute from './routes/ContributionRoute.js';
import { Observations } from './models/Observation.js';
const app = express();
app.use(express.json());
app.use(LoginRegisterRoute)
app.use(UserRoute)
app.use(CarrerRoute)
app.use(ProjectRoute)
app.use(ContributionRoute)
app.use(Observations)
app.set('port', process.env.PORT || 4000);
export default app;