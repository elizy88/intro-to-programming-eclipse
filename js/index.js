let today = new Date()
console.log(today)
let thisYear=today.getFullYear()
let footer = document.querySelector("footer");
let copyright = document.createElement('p');
copyright.innerHTML = `&copy Elsabeth ${thisYear} `;
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
document.addEventListener('submit',(e)=>{
    e.preventDefault()
    let Name=e.target.name.value
    let Email=e.target.email.value
    let Message=e.target.message.value
    console.log(Name)
    console.log(Email)
    console.log(Message);
    let newMessage = document.createElement('li');
    newMessage.innerHTML=`<a href="mailto:${Email}">${Name}</a>
    wrote :<span>${Message}</span>`

    let messageSection = document.getElementById("messages");
    let  messageList = messageSection.querySelector('ul')
let removeButton= document.createElement("button")
removeButton.innerText = "remove";
removeButton.type = "button";
removeButton.addEventListener("click",(e)=> {
//let entry = removeButton.parentNode
const entry = e.target.parentNode;
entry.remove();
})
newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);
e.target.reset();

})
// let githubRequest= new XMLHttpRequest();
// githubRequest.open("GET","https://api.github.com/users/elizy88/repos");
// githubRequest.send();
//     githubRequest.onload = function () {
//     let repositories=JSON.parse(this.response);
//     let projectSection=document.getElementById("projects");
//     let projectList=projectSection.querySelector('ul')
//     for(let i=0;i<repositories.length;i++){
       
//         let project = document.createElement('li');
//     project.innerHTML=`<a href=${`${repositories[i].clone_url}`}>${repositories[i].name}
//     </a>`
   
//     //console.log("api fetch",response.json)
//     //console.log("my repo",repositories[i]);

//     projectList.appendChild(project)
    
//     }
// }
fetch('https://api.github.com/users/elizy88/repos')
.then(response=>response.json())
.then(data=>repo(data))
 function repo(data) {
        //let repositories=JSON.parse(this.response);
        let projectSection=document.getElementById("projects");
        let projectList=projectSection.querySelector('ul')
        for(let i=0;i < data.length;i++){
           
           let project = document.createElement('li');
         project.innerHTML=`<a href=${`${data[i].clone_url}`}>${data[i].name}
         </a>`
        projectList.appendChild(project)
        
        } }
    
    

    
    