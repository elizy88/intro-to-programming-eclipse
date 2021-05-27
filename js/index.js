let today = new Date()
console.log(today)
let thisYear=today.getFullYear()
//var f = document.createElement("FOOTER");
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
    //console.log(skill.innerHTML)
    
skillsSection.appendChild(skill)
    
}