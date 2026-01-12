import express from 'express';
import cors from 'cors';
import doctorRoutes from './routes/doctorRoutes.js';
import conectarDB from './config/db.js';

const app = express();

// Middlewares
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));
app.use(express.json());

// Conexión DB
conectarDB();

// Rutas
app.use('/api/doctors', doctorRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
