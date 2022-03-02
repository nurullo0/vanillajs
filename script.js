const slider = document.querySelector('.slider'),
      active = document.querySelector('#active'),
      line1 = document.querySelector('#line1'),
      line2 = document.querySelector('#line2'),
      line3 = document.querySelector('#line3'),
      line4 = document.querySelector('#line4'),
      sliderCol = document.querySelectorAll('.slider-col'),
      controller = document.querySelector('.controller'),
      container = document.querySelector('.container');

  let slideId = 1;

line1.addEventListener('click', () => {
  slider.style.transform = "translateX(0)";
  active.style.top = "0";
  container.style.background = '#ffcc22'
  
  controller.style.cssText =
  `
  box-shadow: rgb(217, 255, 0)  0px -5px 10px 0px inset, rgb(217, 255, 0) 0px -5px 10px 0px inset;
  `
  active.style.background = 'rgb(253, 194, 0)'
  remove()
  animationBackForth(1);
})
line2.addEventListener('click', () => {
  slider.style.transform = "translateX(-25%)";
  active.style.top = "80px";
  container.style.background = '#00aa60'
  controller.style.cssText =
  `
  box-shadow: rgb(51, 255, 0)  0px -5px 10px 0px inset, rgb(51, 255, 0) 0px -5px 10px 0px inset;
  `
  active.style.background = 'rgb(21, 253, 150)'
  remove()
  animationBackForth(2);
})
line3.addEventListener('click', () => {
  slider.style.transform = "translateX(-50%)";
  active.style.top = "160px";
  container.style.background = '#0050dd'

  controller.style.cssText =
  `
  box-shadow: rgb(3, 154, 255) 0px -5px 10px 0px inset, rgb(9, 163, 252) 0px -5px 10px 0px inset;
  `
  active.style.background = 'rgb(0, 38, 253)';
  remove();
  animationBackForth(3);
})
line4.addEventListener('click', () => {
  slider.style.transform = "translateX(-75%)";
  active.style.top = "240px";
  container.style.background = '#ff1111';
  controller.style.cssText =
  `
  box-shadow: rgb(250, 0, 0)  0px -5px 10px 0px inset, rgb(250, 0, 0) 0px -5px 10px 0px inset;
  `
  active.style.background = 'rgb(200, 0, 0)'
  remove()
  animationBackForth(4);
})

function animationBackForth(arg) {

  if (arg < slideId) {
    
    sliderCol[arg-1].classList.add('animationBottom');

    slideId = arg

  }else {
    sliderCol[arg -1].classList.add('animation');

    slideId = arg;

  }
}

function remove() {
  sliderCol.forEach(col => {
    col.classList.remove('animation')
    col.classList.remove('animationBottom')
  })
}