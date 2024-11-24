// Get refrences to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    //Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var languages = document.getElementById('languages').value;
    // Generate the resume content dynamically
    var resumeHTML = "\n<h2><b>Editable Resume</b></h2>\n\n<h3 style=\"background-color:#9966cc\">Personal Information<h3>\n<p>Name: <span contenteditable=\"true\">".concat(name, "</span></p>\n<p>Email: <span contenteditable=\"true\">").concat(email, "/<span></p>\n<p>Phone: <span contenteditable=\"true\">").concat(phone, "<span></p>\n<p>Address: <span contenteditable=\"true\">").concat(address, "<span></p>\n\n<h3 style=\"background-color:#9966cc\">Education<h3>\n<p contenteditable=\"true\">").concat(education, "</p>\n\n<h3 style=\"background-color:#9966cc\">Experience<h3>\n<p contenteditable=\"true\">").concat(experience, "</p>\n\n<h3 style=\"background-color:#9966cc\">Skills<h3>\n<p contenteditable=\"true\">").concat(skills, "</p>\n\n<h3 style=\"background-color:#9966cc\">Languages<h3>\n<p>").concat(languages, "</p>\n");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
