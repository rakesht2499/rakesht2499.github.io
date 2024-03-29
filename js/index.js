window.addEventListener(
  'scroll',
  function () {
    checkSkillAnimation();
    checkAnimation();
    checkprojectsAnimation();
  },
  true
);

window.onload = function () {
  typeWriter();
  checkSkillAnimation();
  checkAnimation();

  // For Type-Write
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  var css = document.createElement('style');
  css.type = 'text/css';
  css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff}';
  document.body.appendChild(css);
};

function typeWriter() {
  if (i < txt.length) {
    document.getElementById('demo').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 20);
  }
}

function gotoMyIntro() {
  document.querySelector('#aboutmeRow').scrollIntoView({
    behavior: 'smooth',
  });
}

function gotoExperience() {
  document.querySelector('#experience').scrollIntoView({
    behavior: 'smooth',
  });
}

function gotoSkills() {
  document.querySelector('#skills').scrollIntoView({
    behavior: 'smooth',
  });
}

function gotoProjects() {
  document.querySelector('#projects').scrollIntoView({
    behavior: 'smooth',
  });
}

function gotoHobbies() {
  document.querySelector('#hobbies').scrollIntoView({
    behavior: 'smooth',
  });
}

function isElementInViewport(elem) {
  var $elem = $(elem);

  // Get the scroll position of the page.
  var scrollElem =
    navigator.userAgent.toLowerCase().indexOf('webkit') != -1 ? 'body' : 'html';
  var viewportTop = $(scrollElem).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  // Get the position of the element on the page.
  var elemTop = Math.round($elem.offset().top);
  var elemBottom = elemTop + $elem.height();

  return elemTop < viewportBottom && elemBottom > viewportTop;
}

function checkAnimation() {
  var $elem = $('#experience');
  var $exp0 = $('.exp0');
  var $exp1 = $('.exp1');
  var $exp2 = $('.exp2');
  var $exp3 = $('.exp3');
  var $exp4 = $('.exp4');

  if (isElementInViewport($elem)) {
    $exp0.removeClass('visib');
    $exp0.addClass('animated fadeIn');
    $.each([$exp1, $exp2, $exp3, $exp4], function (index, value) {
      setTimeout(function () {
        value.removeClass('visib');
        value.addClass('animated fadeInRightBig');
      }, 200 * (index + 1));
    });
  }
}

function checkSkillAnimation() {
  var $elementSkill = $('#skills');
  var $skill0 = $('.skill0');
  var $skill1 = $('.skill1');
  var $skill2 = $('.skill2');
  var $skill3 = $('.skill3');
  var $skill4 = $('.skill4');
  var $skill5 = $('.skill5');

  if (isElementInViewport($elementSkill)) {
    $skill0.removeClass('visib');
    $skill0.addClass('animated fadeIn');
    $.each(
      [$skill1, $skill2, $skill3, $skill4, $skill5],
      function (index, value) {
        setTimeout(function () {
          value.removeClass('visib');
          value.addClass('animated fadeInLeftBig');
        }, 200 * (index + 1));
      }
    );
  }
}

function checkprojectsAnimation() {
  var $elementSkilll = $('#projects');
  var $proj0 = $('.proj0');
  var $proj1 = $('.proj1');
  var $proj2 = $('.proj2');
  var $proj3 = $('.proj3');
  var $proj4 = $('.proj4');
  var $proj5 = $('.proj5');
  var $proj6 = $('.proj6');
  var $proj7 = $('.proj7');

  if (isElementInViewport($elementSkilll)) {
    $proj0.removeClass('visib');
    $proj0.addClass('animated fadeIn');
    $.each(
      [$proj1, $proj2, $proj3, $proj4, $proj5, $proj6, $proj7],
      function (index, value) {
        setTimeout(function () {
          value.removeClass('visib');
          value.addClass('animated fadeInLeftBig');
        }, 200 * (index + 1));
      }
    );
  }
}

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 500;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
