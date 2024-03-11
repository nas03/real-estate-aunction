import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import api from '@/routes/index';
dotenv.config();
const PORT = process.env.PORT || 5500;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
const server = app.listen(PORT, () => {
	console.log(`Server is running on port http://localhost:${PORT}🚀`);
});
