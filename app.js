// let name = prompt("Enter your Name:");
// let fathername = prompt("Enter Your Father Name:");
// let rollno= prompt("Enter Your Roll no:");
// let course = prompt("Enter Your Course name:");
// let hobby = prompt("Whats Your current hobby?");


//  document.writeln("Name:" , name);
//  document.writeln("<br>Father Name:" , fathername);
//  document.writeln("<br>Roll no:" , rollno);
//  document.writeln("<br>Course name:" , course);
//  document.writeln("<br>current hobby:" , hobby);

//  alert ("Assalam O Alaikum🙋‍♀️");

// alert ("Error! Please enter a valid password.");
// alert ("Welcome to JS Land...\nHappy Coding!")

//  alert ("Welcome to JS Land...");

// alert ("Hello... I can run JS through my web browser's console");
// alert ("Happy Coding!\n Prevent this page from creating additional dialogs.");

// let pizza1 = 'PIZZA';
// let pizz2 = 'PIZZ';
// let piz3 = 'PIZ';
// let pi4 = 'PI';
// let p5 = 'P';


// alert (pizza1)/n (pizz2);
// alert (pizz2);
// alert (piz3);
// alert (pi4);
// alert (p5);


let size = document.getElementById('size');
let bold = document.getElementById('bold');
let italic = document.getElementById('italic');
let underline = document.getElementById('underline');
let clear = document.getElementById('clear');
let color = document.getElementById('color');
let font = document.getElementById('font');
let bg = document.getElementById('bg');
let left = document.getElementById('left');
let center = document.getElementById('center');
let right = document.getElementById('right');
let justify = document.getElementById('justify');


size.addEventListener('click' , ()=>{
    para.style.fontSize = size.value + 'px';
})

bold.addEventListener('click' , ()=>{
    para.style.fontWeight = 'bold';
})

italic.addEventListener('click' , ()=>{
    para.style.fontStyle = 'italic';

})

underline.addEventListener('click' , ()=>{
    para.style.textDecoration = 'underline';
})

clear.addEventListener('click' , ()=>{
    para.style = 'none';

})

color.addEventListener('input' , ()=>{
  para.style.color = color.value;
})

font.addEventListener('click' , ()=>{
    para.style.fontFamily = font.value;
})

bg.addEventListener('input' , ()=>{
    para.style.backgroundColor = bg.value;
})

left.addEventListener('click' , ()=>{
    para.style.textAlign = 'left';
})

center.addEventListener('click' , ()=>{
    para.style.textAlign = 'center';
})

right.addEventListener('click' , ()=>{
    para.style.textAlign = 'right';
})

justify.addEventListener('click' , ()=>{
    para.style.textAlign = 'justify';
})