document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('header nav ul li a');
    const carouselLinks = document.querySelectorAll('.carousel-item a');
    const videoPlayer = document.getElementById('consoleVideo');
    const videoSource = document.createElement('source');

    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;
    let currentIndex = 0;

    function changeVideo(videoUrl) {
        if (videoUrl) {
            videoSource.src = videoUrl;
            videoSource.type = 'video/mp4';
            videoPlayer.innerHTML = '';
            videoPlayer.appendChild(videoSource);
            videoPlayer.load();
            videoPlayer.play();
        } else {
            videoPlayer.innerHTML = '';
        }
    }

    function moveToIndex(index, shouldUpdateVideo = true) {
        currentIndex = index;
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;

        if (shouldUpdateVideo && carouselItems[currentIndex]) {
            const currentActiveLink = carouselItems[currentIndex].querySelector('a');
            if (currentActiveLink && currentActiveLink.getAttribute('data-video')) {
                changeVideo(currentActiveLink.getAttribute('data-video'));
            } else {
                changeVideo('');
            }
        }
    }

    if (carouselItems.length > 0) {
        const firstLink = carouselItems[0].querySelector('a');
        if (firstLink && firstLink.getAttribute('data-video')) {
            changeVideo(firstLink.getAttribute('data-video'));
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const videoUrl = this.getAttribute('data-video');
            changeVideo(videoUrl);
        });
    });

    carouselLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // event.preventDefault(); <---- REMOVA ESTA LINHA
            const videoUrl = this.getAttribute('data-video');
            changeVideo(videoUrl);
            carouselItems.forEach((item, index) => {
                if (item.contains(this)) {
                    moveToIndex(index);
                }
            });
        });
    });

    nextButton.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex === totalItems) {
            carousel.style.transition = 'none';
            currentIndex = 0;
            moveToIndex(currentIndex);
            setTimeout(() => {
                carousel.style.transition = 'transform 0.5s ease';
            }, 20);
        } else {
            moveToIndex(currentIndex);
        }
    });

    prevButton.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            carousel.style.transition = 'none';
            currentIndex = totalItems - 1;
            moveToIndex(currentIndex);
            setTimeout(() => {
                carousel.style.transition = 'transform 0.5s ease';
            }, 20);
        } else {
            moveToIndex(currentIndex);
        }
    });

    if (carouselItems.length > 0) {
        moveToIndex(0);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Detect iOS device
    const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);

    // Se for iOS, prevenimos a tela cheia no vídeo
    if (isIOS) {
        const videos = document.querySelectorAll('video');
        
        videos.forEach(video => {
            // Previne a tela cheia ao clicar no vídeo
            video.addEventListener('click', (event) => {
                if (document.fullscreenElement || document.webkitFullscreenElement) {
                    // Se o vídeo estiver em tela cheia, sai dela
                    document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen();
                }
            });
        });
    }
});
