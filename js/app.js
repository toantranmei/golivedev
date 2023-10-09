
//  Window scroll sticky class add
function windowScroll() {
  const navbar = document.getElementById("navbar");
  if (navbar) {
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      navbar.classList.add("nav-sticky");
    } else {
      navbar.classList.remove("nav-sticky");
    }
  }
}

window.addEventListener("scroll", (ev) => {
  ev.preventDefault();
  windowScroll();
});

// client-slider

var slider = tns({
  container: ".client-slider",
  items: 1,
  loop: true,
  autoplay: true,
  navPosition: "bottom",
  controls: true,
  autoplay: true,
  autoplayButtonOutput: false,
  controlsText: [
    "<i class='mdi mdi-arrow-left'></i>",
    "<i class='mdi mdi-arrow-right'></i>",
  ],
  responsive: {
    640: {
      gutter: 20,
      items: 2,
    },
    700: {
      gutter: 30,
      items: 1,
    },
    900: {
      items: 2,
    },
  },
});

var sliderMembers = tns({
  container: '.team-members',
  items: 1,
  slideBy: 'page',
  autoplay: true,
  autoplayTimeout: 3000,
  nav: false,
  controlsPosition: 'bottom',
  autoplayButtonOutput: false,
  responsive: {
    640: {
      gutter: 20,
      items: 2,
    },
    700: {
      gutter: 30,
      items: 2,
    },
    900: {
      items: 3,
    },
  },
});


// Contact Form
// function validateForm() {
//   var name = document.forms["myForm"]["name"].value;
//   var email = document.forms["myForm"]["email"].value;
//   var subject = document.forms["myForm"]["subject"].value;
//   var comments = document.forms["myForm"]["comments"].value;
//   document.getElementById("error-msg").style.opacity = 0;
//   document.getElementById("error-msg").innerHTML = "";
//   if (name == "" || name == null) {
//     document.getElementById("error-msg").innerHTML =
//       "<div class='alert alert-warning error_message'>*Please enter a Name*</div>";
//     fadeIn();
//     return false;
//   }
//   if (email == "" || email == null) {
//     document.getElementById("error-msg").innerHTML =
//       "<div class='alert alert-warning error_message'>*Please enter a Email*</div>";
//     fadeIn();
//     return false;
//   }
//   if (subject == "" || subject == null) {
//     document.getElementById("error-msg").innerHTML =
//       "<div class='alert alert-warning error_message'>*Please enter a Subject*</div>";
//     fadeIn();
//     return false;
//   }
//   if (comments == "" || comments == null) {
//     document.getElementById("error-msg").innerHTML =
//       "<div class='alert alert-warning error_message'>*Please enter a Comments*</div>";
//     fadeIn();
//     return false;
//   }
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       document.getElementById("simple-msg").innerHTML = this.responseText;
//       document.forms["myForm"]["name"].value = "";
//       document.forms["myForm"]["email"].value = "";
//       document.forms["myForm"]["subject"].value = "";
//       document.forms["myForm"]["comments"].value = "";
//     }
//   };
//   xhttp.open("POST", "https://hocvienphanmem001-default-rtdb.firebaseio.com/", true);
//   xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//   xhttp.send(
//     "name=" +
//       name +
//       "&email=" +
//       email +
//       "&subject=" +
//       subject +
//       "&comments=" +
//       comments
//   );
//   return false;
// }
function fadeIn() {
  var fade = document.getElementById("error-msg");
  var opacity = 0;
  var intervalID = setInterval(function () {
    if (opacity < 1) {
      opacity = opacity + 0.5;
      fade.style.opacity = opacity;
    } else {
      clearInterval(intervalID);
    }
  }, 200);
}

/* Team carousel
  -----------------------------------------------*/
  $(document).ready(function() {
    $("#team-carousel").owlCarousel({
        items : 3,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
        slideSpeed: 300,
        itemsDesktop : [1199,2],
        itemsTablet: [768,1],
        itemsTabletSmall: [985,2],
        itemsMobile : [479,1],
    });
  });
  

  /* Back to Top
  -----------------------------------------------*/
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
          } else {
              $('.go-top').fadeOut(200);
         }
      });   
        // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
  });