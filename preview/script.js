const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function(){
//     alert('Hail');
// };

// btn.onclick = function(){
//     alert('Second click');
// };
let i = 0;
const deleteElement = (e) =>{
    console.log(e.target);
    console.log(e.type);
    // e.target.remove();
    // i++;
    // if (i == 1){
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
  btn.addEventListener('click', deleteElement, {once:true});  
});


const link = document.querySelector('a');

link.addEventListener('click', function(event){
    event.preventDefault();
    console.log(event.target);
});