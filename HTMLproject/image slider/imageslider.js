const images = ["groot wallpaper.jpg",
                "keep-smiling-anime-girl-4k-rd.jpg",
                "spiderman-noway-home-an.jpg",    
                "i-am-levitating.jpg",
                "beast-mode-5k-pr.jpg",
                "biker-girl-minimal-5k-yd.jpg",
                "deadpool-2-fan-made-art-g4.jpg",
                "the-god-of-thunder-h4.jpg",
                "the-spiderman-far-from-home-5k-ae.jpg"
  ];
  let currentIndex = 0;
  let slideshowInterval;
  
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  const currentImage = document.getElementById('currentImage');
  const startButton = document.getElementById('startButton');
  const stopButton = document.getElementById('stopButton');
  
  function updateCurrentImage() {
    currentImage.src = images[currentIndex];
  }
  
  function startSlideshow() {
    slideshowInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      updateCurrentImage();
    }, 2000);
  }
  
  function stopSlideshow() {
    clearInterval(slideshowInterval);
  }
  
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCurrentImage();
  });
  
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCurrentImage();
  });
  
  startButton.addEventListener('click', () => {
    startSlideshow();
  });
  
  stopButton.addEventListener('click', () => {
    stopSlideshow();
  });
  updateCurrentImage();
  