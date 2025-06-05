const button = document.getElementById("buttonCollapsePartMenu");
  const partMenu = document.getElementById("partMenu");
  const rifleViewer = document.getElementById("rifleViewer");

  button.addEventListener("click", () => {
    const isVisible = partMenu.classList.contains("active");

    if (isVisible) {
      partMenu.classList.remove("active");
      rifleViewer.classList.remove("shrinked");
    } else {
      partMenu.classList.add("active");
      rifleViewer.classList.add("shrinked");
    }
  });