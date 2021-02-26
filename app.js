const targets = document.querySelectorAll("img");

const lazyLoad = (target) => {
  const io = newIntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      console.log("hey");

      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute("data-lazy");

        img.setAttribute("src", src);
        img.classList.add("fade");

        observer.disconnect();
      }
    });
  });

  io.observe(target);
};

targets.forEach(lazyLoad);
