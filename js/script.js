const btnHamburger = document.querySelector('#btnHamburger');
const overlay = document.querySelector('.overlay');
const headerMenu = document.querySelector('.header-menu ');
const body = document.querySelector('body');
const sections = document.querySelectorAll('section');
const ul = document.getElementById('links');
const menu = document.getElementById('menu');
const btn = document.querySelector('.btnScrollToTop');



// for creating the nav and menu list
sections.forEach(function(e,index){
  const data = sections[index].getAttribute('data-nav')
  const li = document.createElement('li');
  const menuLi = document.createElement('li');
  const a = document.createElement('a');
  const menuA = document.createElement('a');
  li.appendChild(a);
  menuLi.appendChild(menuA);
  menuA.textContent = data;
  a.textContent = data;
  a.addEventListener('click', function(){
    sections[index].scrollIntoView({behavior:'smooth',block:'end',inline:'nearest'})
  });
  menuA.addEventListener('click', function(){
    sections[index].scrollIntoView({behavior:'smooth',block:'end',inline:'nearest'})
  });
  ul.appendChild(li);
  menu.appendChild(menuA);
});



// Opening and closing the menu for mobile and tablets
const closeMenu = function(){
  btnHamburger.classList.remove('open');
  body.style.overflow="scroll";
  overlay.style.display="none";
  headerMenu.style.display="none";
}

btnHamburger.addEventListener('click',function(){
  if(btnHamburger.classList.contains('open')){//close the menu
    closeMenu();
  }else{//open the menu
    btnHamburger.classList.add('open');
    overlay.style.display="block";
    headerMenu.style.display="block";
    body.style.overflow="hidden";
    document.getElementById('menu').onclick =function(){
      closeMenu();
    };
  }
})


// back to top btn 

btn.addEventListener('click',function(){
  window.scroll({
    top:50,
    left:0,
    behavior:"smooth"
  });
})

window.addEventListener('scroll' ,function(){
  if(window.scrollY > 300){
    btn.classList.add('show');
      } else {
        btn.classList.remove('show');
      }
})

// section in view 
const callback = (entries)=>{
  if(entries[0].isIntersecting){
    sections.forEach((sec)=>{
      if(sec.classList.contains('active')){
        sec.classList.remove('active');
      }
    });
    entries[0].target.classList.add('active');
  }
};

let options = {
root:null,
rootMargin:'0px',
threshold:0.4
};

sections.forEach((section)=>{
  let observer = new IntersectionObserver(callback, options);
  observer.observe(section)
})
