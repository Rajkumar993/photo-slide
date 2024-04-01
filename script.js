const btn=document.querySelectorAll('.btn');
const display=document.querySelector('.display')
const imglist=['gallery-1','gallery-2','gallery-3','gallery-4']

let index=0;

btn.forEach(res=>{
res.addEventListener('click',()=>{
 if(res.classList.contains('left-btn')){
  index--
  if(index<=-1){
    index=imglist.length-1;
    
  }

 } 
 else if(index==imglist.length-1){
   index=0
 }
 else
 index++
 
 
  display.style.backgroundImage=`url('${imglist[index]}.jpg')`
})
})
