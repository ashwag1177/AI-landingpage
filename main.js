document.getElementById('menu').onclick = function(e) {
  if (document.getElementById('mmenu').style.display === 'block') {
    document.getElementById('mmenu').style.display = 'none';
    document.getElementById('menucolor').style.color = "#14a96d";
  }
  else {
    document.getElementById('mmenu').style.display = 'block';
    document.getElementById('menucolor').style.color = "#6FEEBB";
  }
};





window.onscroll = () => {
    const nav = document.querySelector('#navbar');
   
    const navlogo = document.querySelector('nav .logo');
    const navUl = document.querySelector('.left-nav');
    let logo = document.querySelector(".logo .logo1");
    let logo2 = document.querySelector(".logo .logo-Iqom");
    if(this.scrollY <= 10){
    nav.className = 'disk'; 
    navUl.className='left-nav'; 
    logo.src = "imges/T-Valley-W.png";
    logo2.src="imges/Iqom-Logo-(1).png";
   
    
    
    
    navlogo.style.marginLeft='120px;';
   
  } 
  else {
    nav.classList.add('scroll');
    navUl.classList.add('scroll-left-nav'); 
    navUl.style.color="#1f194c";
    logo.src = "imges/TaibahValleyLogo-1.png";
    logo2.src="imges/icom2.png";
   
   
   
    
   
   
  }
};



/*$(function () { 
  $(window).scroll(function () {
     if ($(this).scrollTop() > 1000) { 
         $('.logo img').attr('src','imges/T-Valley-W.png');
      }
     if($(this).scrollTop() < 1000) { 
         $('.logo img').attr('src','imges/cropped-TaibahV_logo2-2.png');
     }
  })
});*/







const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
     const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
     // currentlyActiveAccordionItemHeader.nextElementSibling.style.background="red"
      
    
    }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      //accordionItemBody.style.background="red"
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});



const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));










(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "07/17/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "انتهى التسجيل ";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0)
  }());


