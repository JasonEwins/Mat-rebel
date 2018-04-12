const header = document.querySelector('.header');
const desktopHeader = document.querySelector('.header__desktop');
const sectionContent = document.querySelector('.section--content');
const sectionTitle = document.querySelector('.section--title');

desktopHeader.innerHTML = header.innerHTML;

inView('.header')
  .on('enter', el => desktopHeader.classList.remove('visible'))
  .on('exit', el => desktopHeader.classList.add('visible'))


inView('.fade')
  .on('enter', img => img.classList.add('visible'))
  .on('exit', img => img.classList.remove('visible'))


inView('.section--content')
  .on('enter', sectionContent => sectionContent.classList.add('fadein'))
  .on('exit', sectionContent => sectionContent.classList.remove('fadein'))
  
 inView('.section--title') 
  .on('enter', sectionTitle => sectionTitle.classList.add('fadein'))
  .on('exit', sectionTitle => sectionTitle.classList.remove('fadein'))


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
        behavior: 'smooth',
      })
    }
  })
})  

