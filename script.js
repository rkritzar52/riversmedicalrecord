// Function to show the form based on the section clicked
function showForm(section) {
    const sectionId = section + '-questions';
    const messageId = section + '-message';
    const formId = section + '-form';

    // Hide the message and show the form
    document.getElementById(messageId).style.display = 'none';
    document.getElementById(sectionId).style.display = 'block';
}

// Function to show the anxiety form
function showAnxietyForm() {
    document.getElementById('anxiety-section').style.display = 'block';
    document.getElementById('anxiety-questions').style.display = 'block';
    document.getElementById('anxiety-message').style.display = 'none';
}

// Function to show the depression form
function showDepressionForm() {
    document.getElementById('depression-section').style.display = 'block';
    document.getElementById('depression-questions').style.display = 'block';
    document.getElementById('depression-message').style.display = 'none';
}

// Function to submit the anxiety questionnaire
function submitAnxietyQuestionnaire() {
    const responses = [];
    for (let i = 1; i <= 10; i++) {
        const response = document.querySelector(`input[name="anxiety${i}"]:checked`);
        if (response) {
            responses.push({
                question: i,
                answer: response.value
            });
        } else {
            alert(`Please answer question ${i}.`);
            return;
        }
    }

    // Save responses (example, could be saved to a database or local storage)
    console.log('Anxiety Responses:', responses);
    alert('Anxiety Questionnaire Submitted');
    resetForm('anxiety');
}

// Function to submit the depression questionnaire
function submitDepressionQuestionnaire() {
    const responses = [];
    for (let i = 1; i <= 7; i++) {
        const response = document.querySelector(`input[name="depression${i}"]:checked`);
        if (response) {
            responses.push({
                question: i,
                answer: response.value
            });
        } else {
            alert(`Please answer question ${i}.`);
            return;
        }
    }

    // Save responses (example, could be saved to a database or local storage)
    console.log('Depression Responses:', responses);
    alert('Depression Questionnaire Submitted');
    resetForm('depression');
}

// Function to reset the form and hide questions
function resetForm(section) {
    const sectionId = section + '-questions';
    const messageId = section + '-message';

    // Hide questions and show message
    document.getElementById(sectionId).style.display = 'none';
    document.getElementById(messageId).style.display = 'block';

    // Reset radio button selections
    const radios = document.querySelectorAll(`input[name^="${section}"]`);
    radios.forEach(radio => {
        radio.checked = false;
    });
}

// Function to update the section with submitted data
function updateSectionData(section, data) {
    const listElement = document.getElementById(section + '-list');
    const newItem = document.createElement('div');
    newItem.classList.add('data-item');
    newItem.textContent = data;
    listElement.appendChild(newItem);
}

// Function to handle adding data for other sections (hospital, vaccination, etc.)
function addData(section, data) {
    const listElement = document.getElementById(section + '-list');
    const newItem = document.createElement('div');
    newItem.classList.add('data-item');
    newItem.textContent = data;
    listElement.appendChild(newItem);

    // Hide the form and show the success message
    document.getElementById(section + '-message').style.display = 'none';
    document.getElementById(section + '-list').style.display = 'block';
}

// Example of how data might be added from the form (like hospital data)
function addHospitalData() {
    const hospitalData = document.getElementById('hospital-input').value;
    if (hospitalData) {
        addData('hospital', hospitalData);
    } else {
        alert('Please enter hospital data.');
    }
}

// Example for other sections (vaccination, medication, etc.)
function addVaccinationData() {
    const vaccinationData = document.getElementById('vaccination-input').value;
    if (vaccinationData) {
        addData('vaccination', vaccinationData);
    } else {
        alert('Please enter vaccination data.');
    }
}

function addMedicationData() {
    const medicationData = document.getElementById('medication-input').value;
    if (medicationData) {
        addData('medication', medicationData);
    } else {
        alert('Please enter medication data.');
    }
}

function addImplantData() {
    const implantData = document.getElementById('implant-input').value;
    if (implantData) {
        addData('implant', implantData);
    } else {
        alert('Please enter implant data.');
    }
}

function addAllergyData() {
    const allergyData = document.getElementById('allergy-input').value;
    if (allergyData) {
        addData('allergy', allergyData);
    } else {
        alert('Please enter allergy data.');
    }
}

function addAppointmentData() {
    const appointmentData = document.getElementById('appointment-input').value;
    if (appointmentData) {
        addData('appointment', appointmentData);
    } else {
        alert('Please enter appointment data.');
    }
}

function addDisorderData() {
    const disorderData = document.getElementById('disorder-input').value;
    if (disorderData) {
        addData('disorder', disorderData);
    } else {
        alert('Please enter disorder data.');
    }
}

function addInsuranceData() {
    const insuranceData = document.getElementById('insurance-input').value;
    if (insuranceData) {
        addData('insurance', insuranceData);
    } else {
        alert('Please enter insurance data.');
    }
}
