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

    // Display the responses in a list
    updateSectionData('anxiety', responses);
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

    // Display the responses in a list
    updateSectionData('depression', responses);
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

    // If no data element exists, create it
    if (!listElement) {
        const newListElement = document.createElement('div');
        newListElement.id = section + '-list';
        document.getElementById(section + '-section').appendChild(newListElement);
    }

    // Create a new list item for each response
    data.forEach(item => {
        const newItem = document.createElement('div');
        newItem.classList.add('data-item');
        newItem.innerHTML = `Question ${item.question}: ${item.answer}`;
        document.getElementById(section + '-list').appendChild(newItem);
    });
}

// Function to handle adding data for other sections (hospital, vaccination, etc.)
function addData(section, inputId) {
    const data = document.getElementById(inputId).value;
    if (data) {
        const listElement = document.getElementById(section + '-list');
        if (!listElement) {
            const newListElement = document.createElement('div');
            newListElement.id = section + '-list';
            document.getElementById(section + '-section').appendChild(newListElement);
        }

        const newItem = document.createElement('div');
        newItem.classList.add('data-item');
        newItem.textContent = data;
        document.getElementById(section + '-list').appendChild(newItem);

        // Reset the input field
        document.getElementById(inputId).value = '';
        alert(`${section.charAt(0).toUpperCase() + section.slice(1)} data added.`);
    } else {
        alert(`Please enter ${section} data.`);
    }
}

// Example for other sections (vaccination, medication, etc.)
function addHospitalData() {
    addData('hospital', 'hospital-input');
}

function addVaccinationData() {
    addData('vaccination', 'vaccination-input');
}

function addMedicationData() {
    addData('medication', 'medication-input');
}

function addImplantData() {
    addData('implant', 'implant-input');
}

function addAllergyData() {
    addData('allergy', 'allergy-input');
}

function addAppointmentData() {
    addData('appointment', 'appointment-input');
}

function addDisorderData() {
    addData('disorder', 'disorder-input');
}

function addInsuranceData() {
    addData('insurance', 'insurance-input');
}
