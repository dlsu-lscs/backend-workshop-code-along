import express from 'express';
import usersRouter from './src/routes/users.js';
import { errorHandler } from './src/middleware/errorHandler.js';
import { authenticateApiSecret} from './src/middleware/authenticateApiSecret.js';


const app = express();
app.use(express.json());

app.use(authenticateApiSecret); // Before all routes

app.use('/api/users', usersRouter);
// Error handling middleware (should be after all routes)
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
