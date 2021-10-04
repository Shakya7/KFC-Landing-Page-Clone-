/* Offer selection code */

let para=document.querySelectorAll('.bottom p');
let buttn=document.querySelectorAll('.bottom button');
console.log(buttn);
/*for(let i=0;i<buttn.length;i++)
{
    console.log(buttn[i]);
}*/
for(let i =0; i<buttn.length;i++)
{
    buttn[i].addEventListener('click',function(e){       
        buttn[i].textContent="Availed";           /*Simply change text of the button clicked*/
        para[i].style.display='none';             /*Don't display the Offer name when corr buttn clicked*/     
    })
}


