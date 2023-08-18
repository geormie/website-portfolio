document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const descriptions = document.querySelectorAll(".description");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabClass = tab.classList[1];
      descriptions.forEach((desc) => {
        if (desc.classList.contains("active")) {
          desc.style.opacity = "0"; // Hide the active description with fade-out animation
          setTimeout(() => {
            desc.classList.remove("active");
            desc.style.opacity = "1"; // Reset opacity for future animations
          }, 300); // Adjust the duration to match your CSS transition time
        }
      });
      const clickedDescription = document.querySelector(`.description.${tabClass}`);
      clickedDescription.style.transform = "translateY(20px)"; // Apply initial translation for animation
      setTimeout(() => {
        clickedDescription.classList.add("active");
        clickedDescription.style.transform = "translateY(0)"; // Apply final translation for animation
      }, 10); // Slight delay to allow for opacity transition
    });
  });

  const creationsTab = document.querySelector('.tab.creations');
  const creationsDescription = document.querySelector('.description.creations');

  creationsTab.addEventListener('click', () => {
    descriptions.forEach((desc) => {
      if (desc.classList.contains("active")) {
        desc.style.opacity = "0"; // Hide the active description with fade-out animation
        setTimeout(() => {
          desc.classList.remove("active");
          desc.style.opacity = "1"; // Reset opacity for future animations
        }, 300); // Adjust the duration to match your CSS transition time
      }
    });
    creationsDescription.style.transform = "translateY(20px)"; // Apply initial translation for animation
    setTimeout(() => {
      creationsDescription.classList.add("active");
      creationsDescription.style.transform = "translateY(0)"; // Apply final translation for animation
    }, 10); // Slight delay to allow for opacity transition
  });
});
