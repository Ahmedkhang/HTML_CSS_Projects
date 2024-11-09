var form = document.getElementById("form");
var resume_display = document.getElementById("resume-display");
var shareable_link_div = document.getElementById("shareable-link-div");
var shareable_link = document.getElementById("shareable-link");
var download_btn = document.getElementById("download-btn");
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills,
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    //  Edits
    var resume_HTML = "\n       \n       <h2><b>Resume</b></h2>\n       <h3>Personal Infromation</h3>\n      <p><b>UserName:</b><span contenteditable=\"true\">".concat(username, "</span></p>\n      <p><b>Name:</b><span contenteditable=\"true\">").concat(name, "</span></p>\n      <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n      <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n       <h3>Education</h3>\n\n       <p contenteditable=\"true\">").concat(education, "</p>\n\n\n       <h3>Work Experience</h3>\n\n       <p contenteditable=\"true\">").concat(experience, "</p>\n\n       <h3>Skills</h3>\n\n\n       <p contenteditable=\"true\">").concat(skills, "</p>\n       ");
    resume_display.innerHTML = resume_HTML;
    var shareableURL = "\n       ".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    shareable_link_div.style.display = 'block';
    shareable_link.href = shareableURL;
    shareable_link.textContent = shareableURL;
});
download_btn.addEventListener('click', function () {
    window.print();
});
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
