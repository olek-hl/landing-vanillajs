
window.onload = function(){

  var scrollModule = (function() {

  	var headerNav = document.querySelector('.header__nav');
  	var goToContact = document.querySelector('.go-to-contact');
  	var contact = document.querySelector('.btn-contact');
  	var goToTop = document.querySelector('.go-to-top');

  	headerNav.addEventListener('click', function(e) {
    	e.preventDefault();
    	var target = e.target;
    	var scrollToElem = target.dataset.to;
	
    	if (target.tagName != 'A') return;

    	scrollTo("." + scrollToElem);
  	});
  	goToContact.addEventListener('click', function() {
  		scrollTo('.contacts')
  	});
  	contact.addEventListener('click', function() {
  		scrollTo('.contacts')
  	});
  	goToTop.addEventListener('click', function() {
  		scrollTo('.jambotron');
  	})

  })()

  var scaleModule = (function() {

  	var serviceIcons = document.querySelectorAll('.job__icon');
  	var jobIcons = document.querySelectorAll('.job-method__item__icon');
  	var advantagesIcon = document.querySelectorAll('.about__advantages__icon')

  	toogleSize(serviceIcons, jobIcons, advantagesIcon);


  	function toogleSize() {
  		for (var i = 0; i < arguments.length; i++) {
  			[].forEach.call(arguments[i],function(item) {
  				item.addEventListener('mouseover', function() {
  					makeBigger(this);
  				});
  				item.addEventListener('mouseout', function() {
  					makeNormal(this);
  				});
  			});   			
  		}; 		
  	};

  })();

  var filterModule = (function() {

  	var portfolioNav = document.querySelector('.portfolio__navigation');
  	var gallery = document.querySelectorAll('.portfolio__gallery__item');

  	portfolioNav.addEventListener('click', function(e) {
  		var target = e.target;
  		var data = target.dataset.type;
  		if (target.tagName != 'LI') return;

  		[].forEach.call(gallery,function(item) {
  			var dataType = item.dataset.type;
  			if (data == dataType || data == 'all') {
  				item.style.display = 'block';
  			} else {
  				item.style.display = 'none';
  			};
  		});

  	}) 
  })();

  var formValidate = (function() {

  	var name = document.querySelector('#form__name'),
  		mail = document.querySelector('#form__mail'),
  		subject = document.querySelector('#form__subject');
  	var warning = document.querySelector('.form__warning__name'),
  		mailWarning = document.querySelector('.warning__mail'),
  		subjectWarning = document.querySelector('.form__warning__subject');
  	var regName = /^[A-Za-z][A-Za-z]*$/,
  		regMail = /^[A-Za-z][A-Za-z0-9/@/_]*$/,
  		regSubject = /^[A-Za-z][A-Za-z0-9]*$/;

  	validate(name, regName, warning);
  	validate(mail, regMail, mailWarning);
  	validate(subject, regSubject, subjectWarning);

  })();

  var counting = (function() {

  	var runOnse = true;
  	var CLIENTS = 1600,
  		PROJECT = 3200,
  		AWARDS = 40,
  		COFFE = 20000;
  	var clientsNumber = document.querySelector('.clients__number'),
  		projectNumber = document.querySelector('.project__number'),
  		awardsNumber = document.querySelector('.awards__number'),
  		coffeeNumber = document.querySelector('.coffee__number');

  	document.addEventListener('scroll', function() {
  		var screenWidth = document.documentElement.clientHeight;
  		var anchorPos = clientsNumber.getBoundingClientRect().top;
  		if (anchorPos - screenWidth < 0 && runOnse) {
  			counting(clientsNumber, CLIENTS);
  			counting(projectNumber, PROJECT);
  			counting(awardsNumber, AWARDS);
  			counting(coffeeNumber, COFFE);
  		}
  	});

  	function counting(elem, value) {
  		var count = 0;
  		var timerId = setInterval(function() {
  			if (++count == value) clearInterval(timerId);
  			elem.innerHTML = count;
  		}, 3000/value);
  		runOnse = false;
  	}

  })();

  var quotes = (function() {

  	var controls = document.querySelector('.blockquote__controls');
  	var control = document.querySelectorAll('.blockquote__controls span');
  	var quotes = document.querySelectorAll('.clients__quote');
  	var author = document.querySelectorAll('.quote__author');
  	var quotesLength = quotes.length;

  	controls.addEventListener('click', function(e) {
  		if (e.target.tagName != 'SPAN') return;
  		for (var i = 0; i < quotesLength; i++) {
  			if (e.target.dataset.index == i) {
  				quotes[i].style.display = 'block';
  				author[i].style.display = 'block';
  				[].forEach.call(control,function(item) {
  					item.style.backgroundColor = "#fff";
  				});
  				e.target.style.backgroundColor = '#ffe600';
  			} else {
  				quotes[i].style.display = 'none';
  				author[i].style.display = 'none';
  			};
  		};
  	});

  })();

  var teamToogleView = (function() {

  	var members = document.querySelector('.team');
  	var membersName = document.querySelectorAll('.team__member__description__name');
  	var membersDescription = document.querySelectorAll('.team__member__description__text');

  	members.addEventListener('click', function(e) {
  		if (e.target.tagName != 'IMG') return;

  		for (var i = 0; i < membersName.length; i++) {
  			if (e.target.dataset.index == i) {
  				membersName[i].style.display = 'block';
  				membersDescription[i].style.display = 'block';  			
  			} else {
   				membersName[i].style.display = 'none';
  				membersDescription[i].style.display = 'none';  				
  			}
  		}
  	})

  })();

  var previewHover = (function() {
  	var galleryPhoto = document.querySelectorAll('.portfolio__gallery__item');
  	var preview = document.querySelectorAll('.preview');
  		for(var i = 0; i < galleryPhoto.length; i++) {
  			galleryPhoto[i].addEventListener('mouseover', function() {
  				this.children[1].style.display = 'block';
  			})
  			galleryPhoto[i].addEventListener('mouseout', function() {
  				this.children[1].style.display = 'none';
  			})
  		}
  })();

  var loopClients = (function() {

  	var clientsSlides = document.querySelectorAll('.clients__list__item');
	var list = document.querySelector('.clients__list');
	var margin = 0;
	var index = 0;

	//for responsive

	for (var i = 0; i < clientsSlides.length; i++) {
		var containerWidth = document.querySelector('.clients .container').offsetWidth;
		clientsSlides[i].style.width = (containerWidth/6) + 'px';
	};
	var slideWidth = clientsSlides[1].offsetWidth;

		setInterval(function() {
			margin = margin - slideWidth;
			list.style.marginLeft = margin + 'px';
			
			var firstSlideTmp = clientsSlides[index];
			list.appendChild(firstSlideTmp);
			if (index > (list.children.length-2)) {
				index = 0;			
			} else {
				index++;
			}
	
			console.log(index)
	
			margin = 0;
		}, 2000)

  })();

  var graphics = (function() {

  	var graphicsContainer = document.querySelector('.member__skills__category');
 	var canvas = document.querySelectorAll('canvas');
 	var runOnse = true;

	for (var i = 0; i < canvas.length; i++) {
		var canvasWidth = canvas[i].width;
		canvas[i].height = canvasWidth;
	}
	
	window.addEventListener('resize', function() {
		for (var i = 0; i < canvas.length; i++) {
			var canvasWidth = canvas[i].width;
			canvas[i].height = canvasWidth;
		}
	})

	var data = [	
					{
						id:1,
						value:324
					},
					{
						id:2,
						value:345
					},
					{
						id:3,
						value: 306
					},
					{
						id:4,
						value: 338
					}
				];

  	var html = document.querySelector(".member__skills__category_html");
  	var js = document.querySelector(".member__skills__category_js");
  	var ps = document.querySelector(".member__skills__category_ps");
  	var php = document.querySelector(".member__skills__category_photography");

  	function runCanvas(elem) {
   		var context = elem.getContext("2d");
 	
  		var Width = elem.width;
  		var Height = elem.height;
 	
  		var degrees = 0;
  		var new_degrees = 0;
  		var difference = 0;
  		var color = "#ffe600"; 
  		var bgcolor = "#fff";
  		var text;
  		var animation_loop, redraw_loop;
  		
  		function init() {
	
  		  context.clearRect(0, 0, Width, Height);
  		  
  		  context.beginPath();
  		  context.strokeStyle = bgcolor;
  		  context.lineWidth = 8;
  		  context.arc(Width/2, Height/2, Width/2 - context.lineWidth, 0, Math.PI*2, false); 
  		  context.stroke();
  		  
  		  var radians = degrees * Math.PI / 180;
  		  context.beginPath();
  		  context.strokeStyle = color;
  		  context.lineWidth = 8;
	
  		  context.arc(Width/2, Height/2, Width/2 - context.lineWidth, 0 - 90*Math.PI/180, radians - 90*Math.PI/180, false); 
	
  		  context.stroke();
  		  
	
  		  context.fillStyle = color;
  		  context.font = "200 70px Oswald";
  		  text = Math.floor(degrees/360*100) + "%";
	
  		  text_width = context.measureText(text).width;
  		  text_height = context.measureText(text).height;
	
  		  context.fillText(text, Width/2 - text_width/2, Height/2 + 25);
  		}
  		
  		return function draw() {
	
  		  if(typeof animation_loop != undefined) clearInterval(animation_loop);
  		  
	
  		  new_degrees = 276;
  		  difference = new_degrees - degrees;
	
  		  animation_loop = setInterval(animate_to, 1000/difference);
  		  runOnse = false;
  		}
  		
	
  		function animate_to() {
	
  		  if(degrees == new_degrees) 
  		    clearInterval(animation_loop);
  		  
  		  if(degrees < new_degrees)
  		    degrees++;
  		  else
  		    degrees--;
  		    
  		  init();
  		} 		
  	}

  	document.addEventListener('scroll', function() {
  		var screenWidth = document.documentElement.clientHeight;
  		var anchorPos = graphicsContainer.getBoundingClientRect().top;
  		if (anchorPos - screenWidth < 0 && runOnse) {
			runCanvas.call(data[1],html)();
			runCanvas.call(data[1],js)();
			runCanvas.call(data[1],ps)();
			runCanvas.call(data[1],php)();
  		}
  	});
   	
  })();

  function makeBigger(elem) {
  	var transform = 0;
  	animate({
  		duration: 300,
  		timing: function(timeFraction) {
  			return timeFraction;
  		},
  		draw: function(progress) {
  			transform = (progress*10).toFixed(0);
  			if (transform != 10) elem.style.transform = 'scale(1.0' + transform + ')';
  		}
  	})
  }

  function makeNormal(elem) {
  	animate({
  		duration: 300,
  		timing: function(timeFraction) {
  			return timeFraction;
  		},
  		draw: function(progress) {
  			transform = (10 - (progress*10)).toFixed(0);
  			if (transform != 10) elem.style.transform = 'scale(1.0' + transform + ')';
  		}
  	})
  }

  function scrollTo(toElem) {
  	var anchorPos = document.querySelector(toElem).getBoundingClientRect().top - document.body.getBoundingClientRect().top;
  	var currentPos = window.pageYOffset;
    animate({
      duration: 2000,
      timing: function(timeFraction) {
        return timeFraction;
      },
      draw: function(progress) {
      	window.scrollTo(0,currentPos*(1-progress) + anchorPos*progress);       
      }
    });
  };

  function validate(input, req, message) {
  	input.addEventListener('keyup', function() {
  		var inputVal = input.value;
  		if (!req.test(inputVal)){
  			message.style.display = 'block';
  			message.style.top = 0 - message.offsetHeight + 'px';
  		} else {
  			message.style.display = 'none';
  		};
  	});
  };

  function animate(setup) {

  	var start = performance.now();

  	requestAnimationFrame(function animate(time) {
  	  var timeFraction = (time - start) / setup.duration;
  	  if (timeFraction > 1) timeFraction = 1;
	
  	  var progress = setup.timing(timeFraction)
	
  	  setup.draw(progress);
	
  	  if (timeFraction < 1) {
  	    requestAnimationFrame(animate);
    	}
  	});
  };

}
