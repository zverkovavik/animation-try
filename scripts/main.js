let captionsList = document.querySelectorAll('.caption-item');
let unitsList = document.querySelectorAll('.unit');

captionsList.forEach((item, index) => {
  item.addEventListener('mouseover', () => {
     unitsList[index].classList.add('hovered');
  });
  
  item.addEventListener('mouseout', () => {
     unitsList[index].classList.remove('hovered');
  });
});