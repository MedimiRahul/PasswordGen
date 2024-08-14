let rangeSlider=document.querySelector(".rangeslider");
let displaycharacters=document.querySelector('.length');
let numberOfCharacters=4;
let settingsbuttons=document.querySelectorAll(".slider");
let stateOfButtons=[true,false,false,false];
let variations=[0,1,2,3];     //[uppercase,lowercase,nums,symbols]
let countOfTrue=1;
let countOfFalse=3;
let passwordtextDisplay=document.querySelector('.passwordtext');
let copypassword=document.querySelector(".copyimg");
let copiednotify=document.querySelector('.copiednotify');

let symbolsi=['#','?','{','}','[',']','@','$','%','&','*','(',')','!'];




let generatepass=document.querySelector('.generate');
generatepass.addEventListener('click',(e)=>{
    passwordGenerator()
})

rangeSlider.addEventListener("input",(e)=>{
    numberOfCharacters=e.target.value;
    displaycharacters.textContent=`Length:${numberOfCharacters}`;
    // e.textContent=e.target.value;
});

rangeSlider.addEventListener("load",(e)=>{
     e.textContent=e.target.value
})




for(let i=1;i<settingsbuttons.length;i++){
    settingsbuttons[i].addEventListener("click",(e)=>{
        if (stateOfButtons[i]==false){
            stateOfButtons[i]=true;
            countOfTrue+=1;
            countOfFalse-=1;
            console.log(stateOfButtons[i]);
        }
        else{
            stateOfButtons[i]=false;
            countOfFalse+=1;
            countOfTrue-=1;
            console.log(stateOfButtons[i]);

        }
    })

}


function passwordGenerator(){
    let selection;
    let result=[];
    let count=0;
    let charac;
    let finalresult;
    while (count<numberOfCharacters && countOfTrue!=0)
        {
            selection=Math.floor(Math.random()*4);
            // console.log(selection)
            if (stateOfButtons[selection]==true && selection==0)
            {
                let x=Math.floor((Math.random()*(90-65))+65);
                charac=String.fromCharCode(x);
                result.push(charac);
                count+=1
             }
             else if (stateOfButtons[selection]==true && selection==1)
             {
                let x=Math.floor((Math.random()*(122-97))+97);
                charac=String.fromCharCode(x);
                result.push(charac);
                count+=1
             }
             else if (stateOfButtons[selection]==true && selection==2)
             {
                let x=Math.floor((Math.random()*(9)));
                result.push(String(x));
                count+=1
             }
             else if (stateOfButtons[selection]==true && selection==3)
             {
                let x=Math.floor(Math.random()*(symbolsi.length));
                // console.log(symbolsi[x])
                result.push(symbolsi[x]);
                count+=1
             }
            
             
        }
    finalresult=result.join("");
    console.log(finalresult);
    passwordtextDisplay.textContent=`${finalresult}`
    console.log(stateOfButtons);
    copypassword.addEventListener("click",()=>{
    navigator.clipboard.writeText(`${finalresult}`);
    copiednotify.classList.remove('unvisiblecopied')
        setTimeout(()=>{
            copiednotify.classList.add('unvisiblecopied')
        },2000);

    });
}






