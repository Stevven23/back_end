import Doctor from '../model/doctor.js';

// CREATE
export const createDoctor = async (req, res) => {
  const d = req.body;

  // Rule 1: base salary + worked hours
  let totalSalary = d.baseSalary + d.workedHours * 10;

  // Rule 2: bonus by number of patients
  if (d.patientsAttended > 50) {
    totalSalary *= 1.15;
  }

  // Rule 3: active status
  d.active = d.workedHours >= 20;

  // Rule 4: monthly income (NOW STORED)
  d.monthlyIncome = d.patientsAttended * d.consultationFee;

  d.totalSalary = totalSalary;

  const doctor = await Doctor.create(d);

  res.json(doctor);
};


// READ ALL
export const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ BY ID
export const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    res.json(doctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
export const updateDoctor = async (req, res) => {
  const d = req.body;

  let totalSalary = d.baseSalary + d.workedHours * 10;
  if (d.patientsAttended > 50) totalSalary *= 1.15;

  d.active = d.workedHours >= 20;

  // Rule 4 recalculated
  d.monthlyIncome = d.patientsAttended * d.consultationFee;

  d.totalSalary = totalSalary;

  const doctor = await Doctor.findByIdAndUpdate(
    req.params.id,
    d,
    { new: true }
  );

  res.json(doctor);
};


// DELETE
export const deleteDoctor = async (req, res) => {
  try {
    await Doctor.findByIdAndDelete(req.params.id);
    res.json({ message: 'Doctor deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
