const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

//calls viewport-determined number of boxes as soon as the page loads. Without it none of the boxes roll in until a scroll event is detected 
checkBoxes()

function checkBoxes() {
   const triggerBottom = window.innerHeight / 5 * 4;

   boxes.forEach(box => {
       const boxTop = box.getBoundingClientRect().top

       if(boxTop < triggerBottom) {
           box.classList.add(`show`)
       } else {
           box.classList.remove('show')
       }
   })
}