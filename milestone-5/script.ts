const form = document.getElementById("form") as HTMLFormElement;
const resume_display = document.getElementById("resume-display") as HTMLDivElement;
const shareable_link_div = document.getElementById("shareable-link-div") as HTMLDivElement;
const shareable_link = document.getElementById("shareable-link") as HTMLAnchorElement;
const download_btn = document.getElementById("download-btn") as HTMLButtonElement;


form.addEventListener('submit', (event: Event) => {
       event.preventDefault();
       const username =(document.getElementById("username") as HTMLInputElement).value;
       const name = (document.getElementById("name") as HTMLInputElement).value;
       const email = (document.getElementById("email") as HTMLInputElement).value;
       const phone = (document.getElementById("phone") as HTMLInputElement).value;
       const education = (document.getElementById("education") as HTMLInputElement).value;
       const experience = (document.getElementById("experience") as HTMLInputElement).value;
       const skills = (document.getElementById("skills") as HTMLInputElement).value;

       const resumeData ={
              name,
              email,
              phone,
              education,
              experience,
              skills,
       }
       localStorage.setItem(username, JSON.stringify(resumeData));
//  Edits

       const resume_HTML = `
       
       <h2><b>Resume</b></h2>
       <h3>Personal Infromation</h3>
      <p><b>UserName:</b><span contenteditable="true">${username}</span></p>
      <p><b>Name:</b><span contenteditable="true">${name}</span></p>
      <p><b>Email:</b><span contenteditable="true">${email}</span></p>
      <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>

       <h3>Education</h3>

       <p contenteditable="true">${education}</p>


       <h3>Work Experience</h3>

       <p contenteditable="true">${experience}</p>

       <h3>Skills</h3>


       <p contenteditable="true">${skills}</p>
       `
       resume_display.innerHTML = resume_HTML;

       const shareableURL =`
       ${window.location.origin}?username=${encodeURIComponent(username)}`;

       shareable_link_div.style.display= 'block';
       shareable_link.href = shareableURL;
       shareable_link.textContent = shareableURL;
});
 download_btn.addEventListener('click', ()=>{
       window.print();
 })

 window.addEventListener('DOMContentLoaded', ()=>{
       const urlParams = new URLSearchParams(window.location.search);
       const username = urlParams.get('username');

       if(username) {
              const savedResumeData = localStorage.getItem(username);
              if(savedResumeData){
                     const resumeData = JSON.parse(savedResumeData);
                     (document.getElementById('username') as HTMLInputElement).value = username;

                     (document.getElementById('name') as HTMLInputElement).value = resumeData.name;

                     (document.getElementById('email') as HTMLInputElement).value = resumeData.email;

                     (document.getElementById('phone') as HTMLInputElement).value = resumeData.phone;

                     (document.getElementById('education') as HTMLInputElement).value = resumeData.education;

                     (document.getElementById('experience') as HTMLInputElement).value = resumeData.experience;

                     (document.getElementById('skills') as HTMLInputElement).value = resumeData.skills;
              }
       }
 });