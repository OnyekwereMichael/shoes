const scrollBehaviour = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".container h1", {
  ...scrollBehaviour,
  origin: "top",
});

ScrollReveal().reveal(".shoes_2024", {
  ...scrollBehaviour,
  origin: "right",
  delay: 500,
});

ScrollReveal().reveal(".buy_now", {
  ...scrollBehaviour,
  origin: "left",
});
ScrollReveal().reveal(".items h1", {
  ...scrollBehaviour,
  origin: "top",
  delay: 300,
  duration: 1500,
});

ScrollReveal().reveal(".items p", {
  ...scrollBehaviour,
  origin: "left",
  delay: 300,
  duration: 1500,
});

ScrollReveal().reveal(".number", {
  ...scrollBehaviour,
  origin: "left",
  delay: 700,
  duration: 2000,
});

ScrollReveal().reveal(".order p", {
  ...scrollBehaviour,
  origin: "left",
  delay: 900,
  duration: 2500,
});

ScrollReveal().reveal("ul li", {
  ...scrollBehaviour,
  origin: "top",
  interval: 300,
  delay: 1200,
  duration: 2700,
});
ScrollReveal().reveal(".footer p", {
  ...scrollBehaviour,
  origin: "bottom",
  duration: 3000,
  delay: 1500,
});
