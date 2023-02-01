import app from './app.js';
import { sequelize } from './database/database.js';
import './models/User.js'
import './models/Carrer.js'
import './models/Projects.js'
import './models/Contribution.js'
import './models/StateContribution.js'
import './models/Observation.js'

async function main() {
   try {
    await sequelize.sync({ force: false });
    console.log('Database is connected');
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
    } catch (error) {
        console.log(error);
    }
}
export default main();
