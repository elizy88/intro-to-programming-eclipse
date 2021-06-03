let today = new Date()
console.log(today)
let thisYear=today.getFullYear()
//var f = document.createElement("FOOTER");
let footer = document.querySelector("footer");
let copyright = document.createElement('p');
copyright.innerHTML = `Elsabeth ${thisYear}`;
footer.appendChild(copyright);


let skills=['html','css','javscript','git','scrummaster','webdesign'];

let skillsSection=document.getElementById("skills")
//const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.getElementsByTagName('ul');
//let skillsList=document.querySelector('ul')

console.log(skills)
for(let x=0 ;x <skills.length;x++){
    let skill = document.createElement('li');
    
    skill.innerHTML=skills[x];
    //console.log(skill.innerHTML)
    
skillsSection.appendChild(skill)
    
}
