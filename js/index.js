let today = new Date()
console.log(today)
let thisYear=today.getFullYear()
let footer = document.querySelector("footer");
let copyright = document.createElement('p');
copyright.innerHTML = `Elsabeth ${thisYear}`;
footer.appendChild(copyright);

let skillsSection=document.getElementById("skills")
let skillsList=document.querySelector('ul')
let skills=['html','css','javscript','git','scrummaster','webdesign'];
console.log(skills)
for(let x=0 ;x <skills.length;x++){
    let skill = document.createElement('li');
    skill.innerHTML=skills[x];
skillsSection.appendChild(skill)
}
let messageForm = document.getElementsByName("leave_message");
    document.addEventListener("submit", (e) =>{
    e.preventDefault();
    const name = e.target.name.value
    const email = e.target.email.value
    const message = e.target.message.value
    console.log`(Name:${name} Email:${email} Message:${message})`;
    const newMessage = document.createElement("li")
    const messageSection = document.getElementById("messages")
    const messageList = messageSection.querySelector("ul")
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> wrote: <span>${message}</span> &nbsp;`
    const removeButton=document.createElement("button")
    removeButton.innerText = "remove";
    removeButton.type = "button";
    removeButton.addEventListener("click",(e)=>{
        const entry = removeButton.parentNode;
        entry.remove();
});
newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    e.target.reset();
});













