
document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href="http://127.0.0.1:5500/blog.html"
})
// fuction to get the input area value/////

function getElementInputValue(elementId){
    const element= document.getElementById(elementId);
    const elementInputStr= element.value;
    const elementInput=parseFloat(elementInputStr);
     return elementInput;
}
// calculate triangle area and fixed the value in area section///////
document.getElementById('trigngle-btn').addEventListener('click',function(){
            const triangleBase=getElementInputValue('triangle-base');
            const triangleHeight=getElementInputValue('triangle-height');
            const triangleArea=0.5*triangleBase*triangleHeight;
            const  triangleAreaDecimal=triangleArea.toFixed(2);
            if(isNaN(triangleAreaDecimal)){
                alert('please input valid number');
            }
            else{
                addToCalculationEntry('triangle', triangleAreaDecimal);
            }   
             
})

// calculate rectangle area and fixed the value in area section///////
document.getElementById('rectangle-btn').addEventListener('click',function(){
    const rectangleWidth= getElementInputValue('rectangle-width');
    const rectangleLength= getElementInputValue('rectangle-length');
    const rectangleArea=rectangleLength*rectangleWidth;

    const rectangleAreaDecimal= rectangleArea.toFixed(2);
    if(isNaN(rectangleAreaDecimal)){
        alert("please !!! input the valid number")
    }
    else{
        addToCalculationEntry('rectangle', rectangleAreaDecimal);
    }
})
// ////calculat parallelogram area and fixed the value in area section//////
document.getElementById('parallelogram-btn').addEventListener('click',function(){
    const parallelogramBase=getElementInputValue('parallelogram-base');
    const parallelogramHeight=getElementInputValue('parallelogram-height');
    const parallelogramArea=parallelogramBase*parallelogramHeight;
    const  parallelogramAreaDecimal=parallelogramArea.toFixed(2);
    if(isNaN(parallelogramAreaDecimal)){
        alert('please input valid number');
    }
    else{
        addToCalculationEntry('parallelogram', parallelogramAreaDecimal);
    }   
     
})
// ////calculat rhombus area and fixed the value in area section//////
document.getElementById('rhombus-btn').addEventListener('click',function(){
    const d1=getElementInputValue('d1');
    const d2=getElementInputValue('d2');
    const rhombusArea=d1*d2;
    const  rhombusAreaDecimal=rhombusArea.toFixed(2);
    if(isNaN(rhombusAreaDecimal)){
        alert('please input valid number');
    }
    else{
        addToCalculationEntry('rhombus', rhombusAreaDecimal);
    }   
     
})

// ////calculat pentagon area and fixed the value in area section//////
document.getElementById('pentagon-btn').addEventListener('click',function(){
    const pentagonPeremeter=getElementInputValue('pentagon-perameter');
    const pentagonBase=getElementInputValue('pentagon-base');
    const pentagonArea=0.5*pentagonPeremeter*pentagonBase;
    const  pentagonAreaDecimal=pentagonArea.toFixed(2);
    if(isNaN(pentagonAreaDecimal)){
        alert('please input valid number');
    }
    else{
        addToCalculationEntry('pentagon', pentagonAreaDecimal);
    }   
     
})
// ////calculat ellipse area and fixed the value in area section//////
document.getElementById('ellipse-btn').addEventListener('click',function(){
    const ellipseExisA=getElementInputValue('ellipse-a-axis');
    const ellipseExisB= getElementInputValue('ellipse-b-axis');
    const pi=3.1416;
    const ellipseArea=pi*ellipseExisA*ellipseExisB;
    const ellipseAreaDecimal=ellipseArea.toFixed(2);
    if(isNaN(ellipseAreaDecimal)){
        alert("please !! input the valid number")
    }
    else{
        addToCalculationEntry("ellipse",ellipseAreaDecimal);
    }
})

//function to calculation result display /////
function addToCalculationEntry(areaType, area){
    console.log(areaType+ ' '  + area)
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType}: ${area} cm<sup>2</sup> <span><button class=" bg-blue-500 px-1 rounded">Convert m<sup>2</sup></button></span>`;

    calculationEntry.appendChild(p);
}

///.....function to generate random background color.....////////////
function generateColor(){
    const color=Math.floor(Math.random()*16777215).toString(16);
    const randomColor="#" + color;
    return randomColor;
}
// //......use random color to the card when hover.......//////////
const cards=document.getElementsByClassName('cards');
for(card of cards){
    // card.addEventListener('mouseover',function(){
    //     this.style.backgroundColor=generateColor();
    // })
    card.addEventListener('mouseenter',function(){
        this.style.backgroundColor=generateColor();
    })
}

