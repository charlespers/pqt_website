document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("content-container");
    if (container) {
      const newElement = document.createElement("p");
      newElement.textContent = "Dynamic content loaded!";
      container.appendChild(newElement);
  
      return () => {
        if (container.contains(newElement)) {
          container.removeChild(newElement);
        } else {
          console.error("The node to be removed is not a child of this node.");
        }
      };
    }
  });
  