function slider(el, options) {
  // TODO: Перелистывание слайдов по таймеру 
  // TODO: Нужно сохранять направление листания (после нажатия на стрелку перелистывания) для использования при автоматическом листании 
  
  const next_btn = options.next_btn
  const prev_btn = options.prev_btn
  const slides = options.slides
  
  let current_slide = 0

  function render() {
    /* Функция отрисовки текущего слайда */
    slides.forEach(element => element.style.display = 'none')
    slides[current_slide].style.display = 'block'
  }

  function next() {
    /* Функция установки следующего слайда */
    current_slide += 1
    if (current_slide >= slides.length) {
      current_slide = 0
    }
    render()
  }

  function prev() {
    /* Функция установки предидущего слайда */
    current_slide -= 1
    if (current_slide < 0) {
      current_slide = slides.length - 1
    }
    render()
  }

  prev_btn.onclick = prev
  next_btn.onclick = next
}

const slider_el = document.querySelector('.section__galery')

slider(
  slider_el,
  {
    next_btn: slider_el.querySelector('.slider__next'),
    prev_btn: slider_el.querySelector('.slider__prev'),
    slides: Array.from(slider_el.querySelectorAll('.slide'))
  }
)