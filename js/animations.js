
function animateMobileIntro(){
  const sec = $('section.mobileIntro');
  const secText = $(sec.find('div') );
  const secBtn = $( sec.find('button.btn'));
  const tl = new window.TimelineLite();

  // make orange lines expand outwards
  tl.to(sec, 1.5 , {width: '100%' })
    // make orange lines spread apart  vertically
    .to( sec, 1 , {height: '100%' }, 0.5)
    //fade in button and text
    .to( [ secText, secBtn ], 1 , { scale: 1, opacity: 1}, 1.25 );
} // end animateMobileIntro

window.onload = () =>{ setTimeout( animateMobileIntro , 1000 ) };
