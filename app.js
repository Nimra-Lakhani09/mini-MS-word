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




let hPlus = document.getElementById('hPlus');
let hMinus = document.getElementById('hMinus');
let hItalic = document.getElementById('hItalic');
let hUnderline = document.getElementById('hUnderline');
let hClear = document.getElementById('hClear');
let hColor = document.getElementById('hColor');
let hFont = document.getElementById('hFont');
let heading = document.getElementById('heading');
let hsize = 3;

let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let bold = document.getElementById('bold');
let italic = document.getElementById('italic');
let underline = document.getElementById('underline');
let clear = document.getElementById('clear');
let color = document.getElementById('color');
let font = document.getElementById('font');
let bg = document.getElementById('bg');
let size = 1;

hPlus.addEventListener('click' , ()=>{
    hsize = hsize + 0.1;
    heading.style.fontSize = hsize + 'em';
})

hMinus.addEventListener('click' , ()=>{
   hsize = hsize - 0.1;
//    if(hsize < 0.1) + 0.1;
   heading.style.fontSize = hsize + 'em';
})

hItalic.addEventListener('click' , ()=>{
    heading.style.fontStyle = 'italic';
})

hUnderline.addEventListener('click' , ()=>{
    heading.style.textDecoration = 'underline';
})


hClear.addEventListener('click' , ()=>{
    heading.style = 'none';
})

hColor.addEventListener('input' , ()=>{
    heading.style.color = hColor.value;
})
hFont.addEventListener('click' , ()=>{
    heading.style.fontFamily = hFont.value;
})


plus.addEventListener('click' , ()=>{
    size = size + 0.1;
    para.style.fontSize = size + 'em';
})

minus.addEventListener('click' , ()=>{
    size = size - 0.1;
    // if(size < 0.1) + 0.1;
    para.style.fontSize = size + 'em';
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
    document.body.style.backgroundColor = bg.value;
})