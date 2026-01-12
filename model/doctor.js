import mongoose from 'mongoose';

const DoctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  specialty: {
    type: String,
    required: true
  },
  workedHours: {
    type: Number,
    required: true
  },
  patientsAttended: {
    type: Number,
    required: true
  },
  consultationFee: {
    type: Number,
    required: true
  },
  baseSalary: {
    type: Number,
    required: true
  },
  active: {
    type: Boolean
  },
  totalSalary: {
    type: Number
  },
  monthlyIncome: {        
    type: Number
  }
});

export default mongoose.model('Doctor', DoctorSchema);
