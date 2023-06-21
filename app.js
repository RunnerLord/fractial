const elements = document.querySelectorAll(".option");

elements.forEach((element) => {
  let animationAdded = false;

  element.addEventListener("mouseenter", () => {
    if (!element.style.animation === "none") {
      element.style.animation = "none";
    }
  });

  element.addEventListener("mousemove", (e) => {
    rotateElement(e, element);
  });

  element.addEventListener("mouseleave", () => {
    if (element.style.animation === "none") {
      element.style.animation = "transform 0.3s ease";
    }
    resetRotation(element);
    element.style.animation = "none"
  });
});

function rotateElement(event, element) {
  const x = event.clientX;
  const y = event.clientY;

  const rect = element.getBoundingClientRect();
  const middleX = rect.left + rect.width / 2;
  const middleY = rect.top + rect.height / 2;

  const offsetX = ((x - middleX) / middleX) * 50;
  const offsetY = ((y - middleY) / middleY) * 50;

  element.style.transform = `rotateX(${offsetY}deg) rotateY(${-1 * offsetX}deg)`;
}

function resetRotation(element) {
  element.style.transform = "rotateX(0deg) rotateY(0deg)";
}
