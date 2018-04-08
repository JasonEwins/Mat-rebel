const header = document.querySelector('.header')
const desktopHeader = document.querySelector('.header__desktop')

desktopHeader.innerHTML = header.innerHTML;

inView('.header')
  .on('enter', el => desktopHeader.classList.remove('visible'))
  .on('exit', el => desktopHeader.classList.add('visible'))


inView('.fade')
  .on('enter', img => img.classList.add('visible'))
  .on('exit', img => img.classList.remove('visible'))


inView('.classes')
  .on('enter', classes => classes.classList.add('bg-color'))
  .on('exit', classes => classes.classList.remove('bg-color'))


const anchors = document.querySelectorAll('a');

anchors.forEach(anchor => {
  anchor.addEventListener('click', event => {
    const href = anchor.getAttribute('href')
    if (href.charAt(0) === '#') {
      event.preventDefault()
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      })
    }
  })
})  

