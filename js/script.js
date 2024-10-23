(function($) { 
"use strict";

/*================================================================= 
    cursor 
==================================================================*/
// var cursor = {
//   delay: 8,
//   _x: 0,
//   _y: 0,
//   endX: window.innerWidth / 2,
//   endY: window.innerHeight / 2,
//   cursorVisible: true,
//   cursorEnlarged: false,
//   $dot: document.querySelector(".cursor-dot"),
//   $outline: document.querySelector(".cursor-dot-outline"),

//   init: function () {
//     // Set up element sizes
//     this.dotSize = this.$dot.offsetWidth;
//     this.outlineSize = this.$outline.offsetWidth;

//     this.setupEventListeners();
//     this.animateDotOutline();
//   },

//   setupEventListeners: function () {
//     var self = this;

//     // Anchor hovering
//     document.querySelectorAll("a").forEach(function (el) {
//       el.addEventListener("mouseover", function () {
//         self.cursorEnlarged = true;
//         self.toggleCursorSize();
//       });
//       el.addEventListener("mouseout", function () {
//         self.cursorEnlarged = false;
//         self.toggleCursorSize();
//       });
//     });

//     // Click events
//     document.addEventListener("mousedown", function () {
//       self.cursorEnlarged = true;
//       self.toggleCursorSize();
//     });
//     document.addEventListener("mouseup", function () {
//       self.cursorEnlarged = false;
//       self.toggleCursorSize();
//     });

//     document.addEventListener("mousemove", function (e) {
//       // Show the cursor
//       self.cursorVisible = true;
//       self.toggleCursorVisibility();

//       // Position the dot
//       self.endX = e.pageX;
//       self.endY = e.pageY;
//       self.$dot.style.top = self.endY + "px";
//       self.$dot.style.left = self.endX + "px";
//     });

//     // Hide/show cursor
//     document.addEventListener("mouseenter", function (e) {
//       self.cursorVisible = true;
//       self.toggleCursorVisibility();
//       self.$dot.style.opacity = 1;
//       self.$outline.style.opacity = 1;
//     });

//     document.addEventListener("mouseleave", function (e) {
//       self.cursorVisible = true;
//       self.toggleCursorVisibility();
//       self.$dot.style.opacity = 0;
//       self.$outline.style.opacity = 0;
//     });
//   },

//   animateDotOutline: function () {
//     var self = this;

//     self._x += (self.endX - self._x) / self.delay;
//     self._y += (self.endY - self._y) / self.delay;
//     self.$outline.style.top = self._y + "px";
//     self.$outline.style.left = self._x + "px";

//     requestAnimationFrame(this.animateDotOutline.bind(self));
//   },

//   toggleCursorSize: function () {
//     var self = this;

//     if (self.cursorEnlarged) {
//       self.$dot.style.transform = "translate(-50%, -50%) scale(0.85)";
//       self.$outline.style.transform = "translate(-50%, -50%) scale(1.1)";
//     } else {
//       self.$dot.style.transform = "translate(-50%, -50%) scale(1)";
//       self.$outline.style.transform = "translate(-50%, -50%) scale(1)";
//     }
//   },

//   toggleCursorVisibility: function () {
//     var self = this;

//     if (self.cursorVisible) {
//       self.$dot.style.opacity = 1;
//       self.$outline.style.opacity = 1;
//     } else {
//       self.$dot.style.opacity = 0;
//       self.$outline.style.opacity = 0;
//     }
//   },
// };

// cursor.init();

/*================================================================= 
    Navbar fixed top
==================================================================*/
$(document).ready(function () {

    var menu = $('.site-header nav');
    var origOffsetY = $('.hero-area').height();

    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('.site-header nav').addClass('fixed-top');
            
        } else {
            $('.site-header nav').removeClass('fixed-top');
           
        }
    }

    document.onscroll = scroll;

});


/*================================================================= 
    Contact form 
==================================================================*/
$(function() {
  
    var form = $('#my-contact');
    var formMessages = $('.form-message p');
  $(form).submit(function(event) {
      event.preventDefault();
    var sender = $("#inputEmail").val();
    var message = $("#inputMessage").val();
    var name = $("#inputName").val();
    var sendEmail = 'Name : ' + name + '\n' + 'Email : ' + sender + '\n' + 'Message : ' + message;


    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "shahzaibsubhani28@gmail.com",
      Password: "2B5DB4B1958ECFCCAAA9538706085E572467",
      To: "shahzaibsubhani28@gmail.com",
      From: "shahzaibsubhani28@gmail.com",
      Subject: "Contact us Form",
      Body: sendEmail,
    }).then((message) => {
      if (message == 'OK') {
          $(formMessages).removeClass("error");
          $(formMessages).addClass("success");
          $(formMessages).text('Message Sent Successfully');
          $("#inputName").val("");
          $("#inputEmail").val("");
          $("#inputMessage").val("");
          setTimeout(() => {
            $(formMessages).hide(2000);
        }, "1000");
      }

      else {
        $(formMessages).removeClass("success");
        $(formMessages).addClass("error");
        $(formMessages).text("Something went wrong !");
        $("#inputName").val("");
        $("#inputEmail").val("");
        $("#inputMessage").val("");
        setTimeout(() => {
          $(formMessages).hide(2200);
        }, "1800");
      }
    });


     
        

  });

});




/*================================================================= 
    Animate on scroll initialization
==================================================================*/
AOS.init({
  once: true,
});

})(jQuery);

