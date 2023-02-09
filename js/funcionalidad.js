
const images = document.querySelectorAll("#your-div img");

images.forEach(image => {
  image.addEventListener("click", function() {
    const src = this.src;
    const modalImage = document.createElement("img");
    modalImage.src = src;
    modalImage.style.display = "block";
    modalImage.style.width = "100%";
    modalImage.style.height = "auto";
    modalImage.style.maxWidth = "100%";
    modalImage.style.maxHeight = "100%";
    modalImage.style.objectFit = "contain";
    modalImage.style.transition = "all 0.5s ease-in-out";

    const modal = document.createElement("div");
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.position = "fixed";
    modal.style.top = 0;
    modal.style.left = 0;
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0,0,0,0.8)";
    modal.style.zIndex = 9999;
    modal.style.opacity = 0;
    modal.style.transition = "all 0.5s ease-in-out";
    modal.appendChild(modalImage);

    document.body.appendChild(modal);
    requestAnimationFrame(function() {
      modal.style.opacity = 1;
    });

    modal.addEventListener("click", function() {
      modal.style.opacity = 0;
      setTimeout(function() {
        modal.remove();
      }, 500);
    });
  });
});
