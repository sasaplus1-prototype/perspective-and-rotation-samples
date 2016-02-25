(function(){

  'use strict';

  var button1 = document.getElementById('js-frame-1-button'),
      button2 = document.getElementById('js-frame-2-button');

  button1.addEventListener('click', function(event) {
    var images = document.querySelectorAll('#js-frame-1 img');

    Velocity(images, {
      rotateY: '+=360'
    }, {
      complete: function() {
        Velocity(images, {
          rotateY: 0
        }
        , {
          duration: 0
        });
      },
      easing: 'linear',
      duration: 5000
    });
  }, false);

  button2.addEventListener('click', function(event) {
    var images = document.querySelectorAll('#js-frame-2 img');

    Velocity(images, {
      rotateY: '+=360'
    }, {
      complete: function() {
        Velocity(images, {
          rotateY: 0
        }
        , {
          duration: 0
        });
      },
      easing: 'linear',
      duration: 5000
    });
  }, false);

}());
