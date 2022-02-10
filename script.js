const slider = document.querySelector('.slider'),
      active = document.querySelector('#active'),
      line1 = document.querySelector('#line1'),
      line2 = document.querySelector('#line2'),
      line3 = document.querySelector('#line3'),
      line4 = document.querySelector('#line4'),
      sliderCol = document.querySelectorAll('.slider-col'),
      controller = document.querySelector('.controller'),
      container = document.querySelector('.container');

line1.addEventListener('click', () => {
  slider.style.transform = "translateX(0)";
  active.style.top = "0";
  container.style.background = '#ffcc22'
  remove()
  sliderCol[0].classList.add('animation')

  controller.style.cssText =
  `
    box-shadow: rgb(217, 255, 0)  0px -5px 10px 0px inset, rgb(217, 255, 0) 0px -5px 10px 0px inset;
  `
  active.style.background = 'rgb(253, 194, 0)'
})
line2.addEventListener('click', () => {
  slider.style.transform = "translateX(-25%)";
  active.style.top = "80px";
  container.style.background = '#00aa60'
  remove()
  sliderCol[1].classList.add('animation');
  controller.style.cssText =
  `
    box-shadow: rgb(3, 154, 255) 0px -5px 10px 0px inset, rgb(9, 163, 252) 0px -5px 10px 0px inset;
  `
  active.style.background = 'rgb(0, 38, 253)'
})
line3.addEventListener('click', () => {
  slider.style.transform = "translateX(-50%)";
  active.style.top = "160px";
  container.style.background = '#0050dd'
  remove()
  sliderCol[2].classList.add('animation')

  controller.style.cssText =
  `
  rgb(255, 100, 100)  0px -5px 10px 0px inset, rgb(255, 100, 100) 0px -5px 10px 0px inset;
  `
  active.style.background = 'rgb(253, 101, 100)'
})
line4.addEventListener('click', () => {
  slider.style.transform = "translateX(-75%)";
  active.style.top = "240px";
  container.style.background = '#ff1111';
  remove()
  sliderCol[3].classList.add('animation')

  controller.style.cssText =
  `
    box-shadow: rgb(51, 255, 0)  0px -5px 10px 0px inset, rgb(51, 255, 0) 0px -5px 10px 0px inset;
  `
  active.style.background = 'rgb(21, 253, 0)'
})

function remove() {
  sliderCol.forEach(col => {
    col.classList.remove('animation')
  })
}