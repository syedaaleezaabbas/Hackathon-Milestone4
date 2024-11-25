// Get refrences to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // prevent page reload

    //Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const languages = (document.getElementById('languages') as HTMLInputElement).value;

    // Generate the resume content dynamically
    const resumeHTML = `
<h2><b>Editable Resume</b></h2>

<h3 style="background-color:#9966cc">Personal Information<h3>
<p>Name: <span contenteditable="true">${name}</span></p>
<p>Email: <span contenteditable="true">${email}/<span></p>
<p>Phone: <span contenteditable="true">${phone}<span></p>
<p>Address: <span contenteditable="true">${address}<span></p>

<h3 style="background-color:#9966cc">Education<h3>
<p contenteditable="true">${education}</p>

<h3 style="background-color:#9966cc">Experience<h3>
<p contenteditable="true">${experience}</p>

<h3 style="background-color:#9966cc">Skills<h3>
<p contenteditable="true">${skills}</p>

<h3 style="background-color:#9966cc">Languages<h3>
<p contenteditable="true">${languages}</p>
`
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error('The resume display element is missing.')
    }
})