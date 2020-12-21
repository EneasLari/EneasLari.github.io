(function ($) {
  "use strict"; // Start of use strict

  // Floating label headings for the contact form
  $("body").on("input propertychange", ".floating-label-form-group", function (e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function () {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function () {
    $(this).removeClass("floating-label-form-group-with-focus");
  });

  // Show the navbar when the page is scrolled up
  var MQL = 992;

  //primary navigation slide-in effect
  if ($(window).width() > MQL) {
    var headerHeight = $('#mainNav').height();
    $(window).on('scroll', {
        previousTop: 0
      },
      function () {
        var currentTop = $(window).scrollTop();
        //check if user is scrolling up
        if (currentTop < this.previousTop) {
          //if scrolling up...
          if (currentTop > 0 && $('#mainNav').hasClass('is-fixed')) {
            $('#mainNav').addClass('is-visible');
          } else {
            $('#mainNav').removeClass('is-visible is-fixed');
          }
        } else if (currentTop > this.previousTop) {
          //if scrolling down...
          $('#mainNav').removeClass('is-visible');
          if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')) $('#mainNav').addClass('is-fixed');
        }
        this.previousTop = currentTop;
      });
  }

})(jQuery); // End of use strict

//MY SCRIPTS FROM NOW ON
function typeWriter(parentoftext, text, txtspeed, delay) {
  ChangeCharacterVisibility(0, parentoftext, text, 0, "hidden")
  setTimeout(function () {
    ChangeCharacterVisibility(0, parentoftext, text, txtspeed, "visible");
  }, delay)
}

function ChangeCharacterVisibility(i, parentoftext, text, textspeed, visibility) {
  if (textspeed == 0 && i < text.length) {
    if (i == 0) {
      parentoftext.innerHTML = ""
    }
    parentoftext.innerHTML += "<span style='visibility:" + visibility + "'>" + text.charAt(i) + "</span>";
    i++;
    ChangeCharacterVisibility(i, parentoftext, text, 0, visibility)

  } else if (textspeed > 0 && parentoftext.hasChildNodes() && i < parentoftext.childNodes.length) {

    setTimeout(function () {
      parentoftext.childNodes[i].style.visibility = "visible"
      i++;
      ChangeCharacterVisibility(i, parentoftext, text, textspeed, visibility)
    }, textspeed);
  }
}

document.addEventListener('DOMContentLoaded', function (event) {
  var speed = 50;

  var parentelement = document.getElementById("heading-title-animation")
  if(parentelement){
    var txt = parentelement.innerText;
    typeWriter(parentelement, txt, speed, 2000)
  }

});

var observer = new IntersectionObserver(function (entries) {
  for (let i = 0; i < entries.length; i++) {
    if (entries[i].isIntersecting === true) {
      if (!entries[i]['target'].classList.contains("scaled")) {
        entries[i]['target'].classList.add("scaled")
      }
    } else{
      if (entries[i]['target'].classList.contains("scaled")) {
        entries[i]['target'].classList.remove("scaled")
      }

    }

  }
}, {
   rootMargin:"-49.9% 0px -50% 0px"
});

Array.from(document.getElementsByClassName("observed")).forEach(element => {
  observer.observe(element);
});