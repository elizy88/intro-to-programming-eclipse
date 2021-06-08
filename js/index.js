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
let messageForm=document.getElementsByName('leave_message')
leave_message.addEventListener('submit',function(e){
    let Name=e.target.name.value
    let Email=e.target.email.value
    let Message=e.target.message.value
    console.log(Name)
    console.log(Email)
    console.log(Message);
    let newMessage = document.createElement('li');
    e.preventDefault()
    let messageSection = document.getElementById("messages");
    let  messageList = document.querySelector('ul')
    let newMessage = document.createElement('li');
    e.preventDefault()
newMessage.innerHTML=`<a href="mailto:elizit88@gmail.com">${Name}</a>
 wrote <span>${Message}</span>`

console.log(newMessage)
messages.appendChild(newMessage);
let removeButton= document.createElement("button")
removeButton.innerHTML = "remove";
removeButton.type = "button";
messages.appendChild(removeButton)
removeButton.addEventListener("click",(e)=> {
let entry = document.getElementById("messages").parentNode
entry.remove();

})
})


//    let entry = document.querySelector("button").parentNode.nodeName
//    entry.remove();
//   button.appendChild(newMessage)
//   messages.appendChild(newMessage)

// })
// })
