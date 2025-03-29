const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carousel = document.querySelector('.carousel');
const images = Array.from(carousel.children); // Seleciona as imagens do carrossel

let currentIndex = 0; // Índice inicial
const totalImages = images.length;

// Função para mover o carrossel
function moveToIndex(index) {
    const offset = -index * 100; // A largura de cada imagem ocupa 100% do contêiner
    carousel.style.transform = `translateX(${offset}%)`; // Move o carrossel para a posição da imagem
}

// Navegação para a próxima imagem (loop infinito)
nextButton.addEventListener('click', () => {
    currentIndex++;
    moveToIndex(currentIndex);

    // Quando chegar ao final (a última imagem), volta para a primeira imagem
    if (currentIndex === totalImages) {
        setTimeout(() => {
            carousel.style.transition = 'none'; // Desativa a transição temporariamente
            currentIndex = 0; // Volta para o primeiro item
            moveToIndex(currentIndex);
            setTimeout(() => {
                carousel.style.transition = 'transform 0.5s ease'; // Reativa a transição
            }, 20);
        }, 500); // Espera a transição acabar
    }
});

// Navegação para a imagem anterior (loop infinito)
prevButton.addEventListener('click', () => {
    currentIndex--;
    moveToIndex(currentIndex);

    // Quando chegar ao início (a primeira imagem), vai para a última imagem
    if (currentIndex < 0) {
        setTimeout(() => {
            carousel.style.transition = 'none'; // Desativa a transição temporariamente
            currentIndex = totalImages - 1; // Vai para a última imagem
            moveToIndex(currentIndex);
            setTimeout(() => {
                carousel.style.transition = 'transform 0.5s ease'; // Reativa a transição
            }, 20);
        }, 500); // Espera a transição acabar
    }
});
