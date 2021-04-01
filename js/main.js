TweenMax.to('.loading-screen', 2.2, {
  delay: 2,
  top: '-110%',
  ease: Expo.easeInOut,
});

TweenMax.from('#tagline', 4, {
  delay: 4.2,
  opacity: 0,
  // y: -30,
  ease: Expo.easeInOut,
});

TweenMax.from('.text-wrapper', 5, {
  delay: 1.7,
  opacity: 0,
  x: -1500,
  ease: Expo.easeInOut,
});
TweenMax.from('.bg-lines', 6, {
  delay: 1.8,
  opacity: 0,
  ease: Expo.easeInOut,
});

TweenMax.from('.logo', 4, {
  delay: 3.8,
  opacity: 1,
  y: -200,
  ease: Expo.easeInOut,
});

TweenMax.staggerFrom(
  '.menu ul li',
  4,
  {
    delay: 3.1,
    opacity: 0,
    x: 600,
    ease: Power3.easeInOut,
  },
  0.1
);
TweenMax.from('footer', 4, {
  delay: 2.1,
  opacity: 0,
  x: -2000,
  ease: Expo.easeInOut,
});
TweenMax.staggerFrom(
  '.media ul li',
  4,
  {
    delay: 3,
    opacity: 0,
    x: -100,
    ease: Power3.easeInOut,
  },
  0.1
);
TweenMax.from('.plus1-container', 3, {
  delay: 4.9,
  opacity: 0,
  ease: Expo.easeInOut,
});

TweenMax.from('.copyright', 5, {
  delay: 4.5,
  opacity: 0,
  // x: 600,
  ease: Expo.easeInOut,
});
TweenMax.from('.plus2-container', 4, {
  delay: 3.8,
  opacity: 1,
  y: -2000,
  ease: Expo.easeInOut,
});

// TweenMax.from('.options', 3, {
//   delay: 8.6,
//   opacity: 0,
//   y: 20,
//   ease: Expo.easeInOut,
// });

// TweenMax.from('.menu', 3, {
//   delay: 8.8,
//   opacity: 0,
//   x: 20,
//   ease: Expo.easeInOut,
// });

// TweenMax.from('.p2', 3, {
//   delay: 9.2,
//   opacity: 0,
//   y: 20,
//   ease: Expo.easeInOut,
// });

// let t1 = new TimelineMax();

// t1.from('.ringOne', 4, {
//   delay: 0.3,
//   opacity: 0,
//   y: 40,
//   ease: Expo.easeInOut,
// })
//   .from(
//     '.ringTwo',
//     4,
//     {
//       delay: 0.8,
//       opacity: 0,
//       y: 40,
//       ease: Expo.easeInOut,
//     },
//     '-=5'
//   )
//   .to('.ringOne', 4, {
//     delay: 0.4,
//     opacity: 0,
//     x: 42,
//     ease: Expo.easeInOut,
//   })
//   .to(
//     '.ringTwo',
//     4,
//     {
//       delay: 0.9,
//       opacity: 0,
//       x: 42,
//       ease: Expo.easeInOut,
//     },
//     '-=5'
//   );

const followMouse = document.querySelector('.follow-mouse');
const link = document.getElementsByTagName('a');

document.addEventListener('mousemove', e => {
  followMouse.setAttribute(
    'style',
    'top: ' + (e.pageY - 6) + 'px; left: ' + (e.pageX - 6) + 'px;'
  );
});

document.addEventListener('click', () => {
  followMouse.classList.add('expandBlip');

  setTimeout(() => {
    followMouse.classList.remove('expandBlip');
  }, 500);
});

// link.addEventListener('mouseover', () => {
//   cursor.classList.add('expand');
// });

// link.addEventListener('mouseleave', () => {
//   cursor.classList.remove('expand');
// });
