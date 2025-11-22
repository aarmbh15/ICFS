// Animated Divider – Triggers EVERY time it enters viewport
document.addEventListener("DOMContentLoaded", function () {
  const dividers = document.querySelectorAll(".animated-divider");

  // Instantly show (no animation) if user prefers reduced motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    dividers.forEach(d => d.classList.add("reduced-motion"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          // Remove the class when it leaves viewport → allows re-trigger
          entry.target.classList.remove("animate");
        }
      });
    },
    {
      threshold: 0.5,           // Trigger when 50% visible
      rootMargin: "0px 0px -10% 0px"  // Slight offset for smoother feel
    }
  );

  dividers.forEach((divider) => {
    // Ensure it starts hidden (scaleX: 0)
    divider.classList.remove("animate");
    observer.observe(divider);
  });
});