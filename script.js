// Wait until content is loaded
document.addEventListener('DOMContentLoaded', () => {
  loadAppointments();
  loadMedicalRecords();
  loadReminders();
});

// Load and render appointments
function loadAppointments() {
  const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
  const appointmentsList = document.getElementById('appointmentsList');
  appointmentsList.innerHTML = '';
  appointments.forEach((appointment, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${appointment.doctor} on ${appointment.appointmentDate} at ${appointment.appointmentTime} - Reason: ${appointment.reason} 
      <button onclick="deleteAppointment(${index})">Delete</button>`;
    appointmentsList.appendChild(li);
  });
}

// Load and render medical records
function loadMedicalRecords() {
  const records = JSON.parse(localStorage.getItem('medicalRecords')) || [];
  const recordsList = document.getElementById('medicalRecordsList');
  recordsList.innerHTML = '';
  records.forEach((record, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${record.diagnosis} diagnosed on ${record.dateDiagnosed} by ${record.diagnosedBy}
      <button onclick="deleteMedicalRecord(${index})">Delete</button>`;
    recordsList.appendChild(li);
  });
}

// Load and render reminders
function loadReminders() {
  const reminders = JSON.parse(localStorage.getItem('reminders')) || [];
  const remindersList = document.getElementById('remindersList');
  remindersList.innerHTML = '';
  reminders.forEach((reminder, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${reminder.reminderText} on ${reminder.reminderDate}
      <button onclick="deleteReminder(${index})">Delete</button>`;
    remindersList.appendChild(li);
  });
}

// Open appointment form
document.getElementById('addAppointmentButton').addEventListener('click', () => {
  document.getElementById('appointmentFormModal').style.display = 'flex';
});

// Open medical record form
document.getElementById('addRecordButton').addEventListener('click', () => {
  document.getElementById('medicalRecordFormModal').style.display = 'flex';
});

// Open reminder form
document.getElementById('addReminderButton').addEventListener('click', () => {
  document.getElementById('reminderFormModal').style.display = 'flex';
});

// Close modal
document.querySelectorAll('.closeModal').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.form-modal').forEach(modal => {
      modal.style.display = 'none';
    });
  });
});

// Add appointment
document.getElementById('appointmentForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const appointment = {
    doctor: document.getElementById('doctor').value,
    appointmentDate: document.getElementById('appointmentDate').value,
    appointmentTime: document.getElementById('appointmentTime').value,
    reason: document.getElementById('reason').value,
  };
  const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
  appointments.push(appointment);
  localStorage.setItem('appointments', JSON.stringify(appointments));
  loadAppointments();
  document.getElementById('appointmentFormModal').style.display = 'none';
});

// Add medical record
document.getElementById('medicalRecordForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const record = {
    diagnosis: document.getElementById('diagnosis').value,
    dateDiagnosed: document.getElementById('dateDiagnosed').value,
    diagnosedBy: document.getElementById('diagnosedBy').value,
    whereDiagnosed: document.getElementById('whereDiagnosed').value,
    description: document.getElementById('description').value,
  };
  const medicalRecords = JSON.parse(localStorage.getItem('medicalRecords')) || [];
  medicalRecords.push(record);
  localStorage.setItem('medicalRecords', JSON.stringify(medicalRecords));
  loadMedicalRecords();
  document.getElementById('medicalRecordFormModal').style.display = 'none';
});

// Add health reminder
document.getElementById('reminderForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const reminder = {
    reminderText: document.getElementById('reminderText').value,
    reminderDate: document.getElementById('reminderDate').value,
  };
  const reminders = JSON.parse(localStorage.getItem('reminders')) || [];
  reminders.push(reminder);
  localStorage.setItem('reminders', JSON.stringify(reminders));
  loadReminders();
  document.getElementById('reminderFormModal').style.display = 'none';
});

// Delete appointment
function deleteAppointment(index) {
  const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
  appointments.splice(index, 1);
  localStorage.setItem('appointments', JSON.stringify(appointments));
  loadAppointments();
}

// Delete medical record
function deleteMedicalRecord(index) {
  const records = JSON.parse(localStorage.getItem('medicalRecords')) || [];
  records.splice(index, 1);
  localStorage.setItem('medicalRecords', JSON.stringify(records));
  loadMedicalRecords();
}

// Delete reminder
function deleteReminder(index) {
  const reminders = JSON.parse(localStorage.getItem('reminders')) || [];
  reminders.splice(index, 1);
  localStorage.setItem('reminders', JSON.stringify(reminders));
  loadReminders();
}
