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

    // Detect iOS device
    const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);

    // If it's iOS, don't autoplay the video
    function changeVideo(videoUrl, shouldAutoplay = true) {
        if (videoUrl) {
            videoSource.src = videoUrl;
            videoSource.type = 'video/mp4';
            videoPlayer.innerHTML = '';
            videoPlayer.appendChild(videoSource);
            videoPlayer.load();

            // Only autoplay if it's not an iOS device
            if (isIOS && shouldAutoplay) {
                // Show a play button or alternative UI on iOS devices
                videoPlayer.innerHTML = `<button onclick="playVideo('${videoUrl}')">Play Video</button>`;
            } else {
                videoPlayer.play();
            }
        } else {
            videoPlayer.innerHTML = '';
        }
    }

    function playVideo(videoUrl) {
        videoSource.src = videoUrl;
        videoSource.type = 'video/mp4';
        videoPlayer.innerHTML = '';
        videoPlayer.appendChild(videoSource);
        videoPlayer.load();
        videoPlayer.play();
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
            changeVideo(firstLink.getAttribute('data-video'), !isIOS);  // Prevent autoplay on iOS
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const videoUrl = this.getAttribute('data-video');
            changeVideo(videoUrl, !isIOS);  // Prevent autoplay on iOS
        });
    });

    carouselLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const videoUrl = this.getAttribute('data-video');
            changeVideo(videoUrl, !isIOS);  // Prevent autoplay on iOS
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
