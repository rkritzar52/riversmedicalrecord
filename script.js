// Function to handle form submissions and dynamic list creation
document.addEventListener("DOMContentLoaded", function() {
    // Hospital Visits Section
    const hospitalForm = document.getElementById("hospital-form");
    const hospitalList = document.getElementById("hospital-list");
    hospitalForm.addEventListener("submit", handleHospitalSubmit);

    // Vaccination Section
    const vaccinationForm = document.getElementById("vaccination-form");
    const vaccinationList = document.getElementById("vaccination-list");
    vaccinationForm.addEventListener("submit", handleVaccinationSubmit);

    // Medication Section
    const medicationForm = document.getElementById("medication-form");
    const medicationList = document.getElementById("medication-list");
    medicationForm.addEventListener("submit", handleMedicationSubmit);

    // Implants Section
    const implantForm = document.getElementById("implant-form");
    const implantList = document.getElementById("implant-list");
    implantForm.addEventListener("submit", handleImplantSubmit);

    // Allergy Section
    const allergyForm = document.getElementById("allergy-form");
    const allergyList = document.getElementById("allergy-list");
    allergyForm.addEventListener("submit", handleAllergySubmit);

    // Depression Questionnaire Section
    const depressionForm = document.getElementById("depression-form");
    depressionForm.addEventListener("submit", handleDepressionSubmit);

    // Anxiety Questionnaire Section
    const anxietyForm = document.getElementById("anxiety-form");
    anxietyForm.addEventListener("submit", handleAnxietySubmit);

    // Function to handle Hospital Form submission
    function handleHospitalSubmit(event) {
        event.preventDefault();

        const date = event.target.querySelector('input[name="visit-date"]').value;
        const hospitalName = event.target.querySelector('input[name="hospital-name"]').value;
        const reason = event.target.querySelector('textarea[name="visit-reason"]').value;

        const hospitalItem = document.createElement("div");
        hospitalItem.innerHTML = `
            <p>Date: ${date}</p>
            <p>Hospital: ${hospitalName}</p>
            <p>Reason: ${reason}</p>
            <button onclick="deleteItem(this)">Delete</button>
            <button onclick="editItem(this)">Edit</button>
        `;
        hospitalList.appendChild(hospitalItem);

        // Reset the form after submission
        hospitalForm.reset();
    }

    // Function to handle Vaccination Form submission
    function handleVaccinationSubmit(event) {
        event.preventDefault();

        const vaccineName = event.target.querySelector('input[name="vaccine-name"]').value;
        const date = event.target.querySelector('input[name="vaccine-date"]').value;
        const administeredBy = event.target.querySelector('input[name="administered-by"]').value;

        const vaccinationItem = document.createElement("div");
        vaccinationItem.innerHTML = `
            <p>Vaccine: ${vaccineName}</p>
            <p>Date: ${date}</p>
            <p>Administered By: ${administeredBy}</p>
            <button onclick="deleteItem(this)">Delete</button>
            <button onclick="editItem(this)">Edit</button>
        `;
        vaccinationList.appendChild(vaccinationItem);

        vaccinationForm.reset();
    }

    // Function to handle Medication Form submission
    function handleMedicationSubmit(event) {
        event.preventDefault();

        const medicationName = event.target.querySelector('input[name="medication-name"]').value;
        const dosage = event.target.querySelector('input[name="dosage"]').value;

        const medicationItem = document.createElement("div");
        medicationItem.innerHTML = `
            <p>Medication: ${medicationName}</p>
            <p>Dosage: ${dosage}</p>
            <button onclick="deleteItem(this)">Delete</button>
            <button onclick="editItem(this)">Edit</button>
        `;
        medicationList.appendChild(medicationItem);

        medicationForm.reset();
    }

    // Function to handle Implant Form submission
    function handleImplantSubmit(event) {
        event.preventDefault();

        const implantType = event.target.querySelector('input[name="implant-type"]').value;
        const date = event.target.querySelector('input[name="implant-date"]').value;

        const implantItem = document.createElement("div");
        implantItem.innerHTML = `
            <p>Implant Type: ${implantType}</p>
            <p>Date: ${date}</p>
            <button onclick="deleteItem(this)">Delete</button>
            <button onclick="editItem(this)">Edit</button>
        `;
        implantList.appendChild(implantItem);

        implantForm.reset();
    }

    // Function to handle Allergy Form submission
    function handleAllergySubmit(event) {
        event.preventDefault();

        const allergen = event.target.querySelector('input[name="allergen"]').value;
        const reaction = event.target.querySelector('input[name="reaction-severity"]').value;

        const allergyItem = document.createElement("div");
        allergyItem.innerHTML = `
            <p>Allergen: ${allergen}</p>
            <p>Reaction Severity: ${reaction}</p>
            <button onclick="deleteItem(this)">Delete</button>
            <button onclick="editItem(this)">Edit</button>
        `;
        allergyList.appendChild(allergyItem);

        allergyForm.reset();
    }

    // Function to handle Depression Questionnaire
    function handleDepressionSubmit(event) {
        event.preventDefault();
        const responses = Array.from(event.target.querySelectorAll('input[type="radio"]:checked'));
        let score = 0;

        responses.forEach(response => {
            score += parseInt(response.value);
        });

        const result = calculateDepressionRisk(score);
        displayRiskLevel(result, "depression-result");
    }

    // Function to handle Anxiety Questionnaire
    function handleAnxietySubmit(event) {
        event.preventDefault();
        const responses = Array.from(event.target.querySelectorAll('input[type="radio"]:checked'));
        let score = 0;

        responses.forEach(response => {
            score += parseInt(response.value);
        });

        const result = calculateAnxietyRisk(score);
        displayRiskLevel(result, "anxiety-result");
    }

    // Function to calculate Depression Risk Level
    function calculateDepressionRisk(score) {
        if (score >= 0 && score <= 4) return "Minimal";
        if (score >= 5 && score <= 9) return "Mild";
        if (score >= 10 && score <= 14) return "Moderate";
        if (score >= 15 && score <= 19) return "Moderately Severe";
        return "Severe";
    }

    // Function to calculate Anxiety Risk Level
    function calculateAnxietyRisk(score) {
        if (score >= 0 && score <= 4) return "Minimal";
        if (score >= 5 && score <= 9) return "Mild";
        if (score >= 10 && score <= 14) return "Moderate";
        return "Severe";
    }

    // Function to display the Risk Level
    function displayRiskLevel(result, resultElementId) {
        const resultElement = document.getElementById(resultElementId);
        resultElement.innerHTML = `<p>Risk Level: ${result}</p>`;
    }

    // Delete Item Function
    window.deleteItem = function (button) {
        const item = button.parentElement;
        item.remove();
    };

    // Edit Item Function
    window.editItem = function (button) {
        const item = button.parentElement;
        const inputs = item.querySelectorAll('p');
        
        // Example of how to fill inputs for editing
        const editedText = prompt("Edit the item:", inputs[0].innerText); // Just an example, you may need to fill it with other fields

        if (editedText !== null) {
            inputs[0].innerText = editedText; // Change the first input's text to the edited one
        }
    };
});
