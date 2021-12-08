/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 


// var i = 0;
// var txt =  [" Satyabrata Das","Full Stack developer","Back End Developer","Front End Developer"];
// var speed = 50;


const TypeWriter = function (txtElement, words, wait=3000){
    this.txtElement=txtElement;
    this.words=words;
    this.txt="";
    this.wordIndex=0;
    this.wait=parseInt(wait, 10);
    this.type();
    this.isDeleting=false;
}
TypeWriter.prototype.type= function () {
    // console.log("Type")
    const current = this.wordIndex % this.words.length;
   const fulltxt = this.words[current];
   
   if(this.isDeleting){
    this.txt=fulltxt.substring(0,this.txt.length -1)
   }
   else{
        this.txt=fulltxt.substring(0,this.txt.length +1)
   }

   this.txtElement.innerHTML= `<span class="txt">${this.txt}</span>`
//    console.log(fulltxt);
   // type speed
   let typeSpeed = 300;
   if(this.isDeleting){
       typeSpeed /= 2;

   }

   // if ward is complete

   if(!this.isDeleting  && this.txt === fulltxt){
    // make a pouse at the end
    typeSpeed=this.wait;
    // Set delet to true

    this.isDeleting = true;
   }
   else if(this.isDeleting && this.txt === '')
   {
       this.isDeleting = false;
       // Move to next 
       this.wordIndex++;

       // pause before start typying
       typeSpeed=500;
   }

    setTimeout(() => this.type(),typeSpeed)
    
}

document.addEventListener("DOMContentLoaded",init);

function init() {
    const txtElement = document.querySelector('.txt-type');
    // const words = JSON.parse(txtElement.getAttribute('data-words'));
    const words = [" Satyabrata Das " , " Full Stack developer " , " Back End Developer " , " Front End Developer " ]
    const wait = txtElement.getAttribute('data-wait');


    new TypeWriter(txtElement, words, wait)
}