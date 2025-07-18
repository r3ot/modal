// const modalBtn = document.querySelector(".btn-modal");
// const modal = document.querySelector(".modal-overlay");
// const closeBtn = document.querySelector(".close-btn")

// modalBtn.addEventListener('click',function(){
//     modal.classList.add('open-modal')
// });
// closeBtn.addEventListener('click',function(){
//     modal.classList.remove('open-modal')
// });

const modalBtn = document.querySelector(".btn-modal");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener('click', function () {
  modal.classList.add('open-modal'); 
});

closeBtn.addEventListener('click', function () {
  modal.classList.remove('open-modal'); 
});

// document.activeElement('click', e=> {
//     if(modal.contains(e.target) && e.target !== modalBtn){
//         modal.classList.add('hide')
//     }
// })

modal.addEventListener('click', function (e) {
  if (e.target === modal) {
    modal.classList.remove('show-modal');
  }
});
