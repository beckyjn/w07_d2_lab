const typewriter = function (element, text) {
  let i = 0;
  const speed = 70;

  (function action() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(action, speed);
    }
  })();

};

module.exports = typewriter;
