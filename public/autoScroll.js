export function autoScrollContainers(selector = ".auto-scroll", scrollStep = 270, interval = 2000) {
    const containers = document.querySelectorAll(selector);
  
    containers.forEach((container) => {
      let scrollAmount = 0;
  
      setInterval(() => {
        if (!container) return;
  
        const isEndReached = container.scrollLeft + container.clientWidth >= container.scrollWidth - 1;
  
        if (isEndReached) {
          container.scrollTo({ left: 0, behavior: "smooth" });
          scrollAmount = 0;
        } else {
          scrollAmount += scrollStep;
          container.scrollTo({ left: scrollAmount, behavior: "smooth" });
        }
      }, interval);
    });
  }
  