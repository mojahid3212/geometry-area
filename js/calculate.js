
// fuction to get the input area value/////

function getElementInputValue(elementId){
    const element= document.getElementById(elementId);
    const elementInputStr= element.value;
    const elementInput=parseFloat(elementInputStr);
     return elementInput;
}
document.getElementById('tigngle-btn').addEventListener('click',function(){
            const triangleBase=getElementInputValue('triangle-base');
            const triangleHeight=getElementInputValue('triangle-height');
            const triangleArea=0.5*triangleBase*triangleHeight;
            const  triangleAreaDecimal=triangleArea.toFixed(2);
            addToCalculationEntry('triangle', triangleAreaDecimal);
          
            
})







// function to calculation result display /////
function addToCalculationEntry(areaType, area){
    console.log(areaType+ ' '  + area)
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <span><button class="btn btn-sm btn-success">Convertm<sup>2</sup></button></span>`;

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
