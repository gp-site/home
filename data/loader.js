document.addEventListener('DOMContentLoaded', function() {
    // Detectar iOS
    function isIOS() {
        return /iPhone|iPad|iPod/i.test(navigator.userAgent);
    }

    if (isIOS()) {
        var gameDiv = document.getElementById('game');
        if (gameDiv) {
            // Cria o novo div
            var game2Div = document.createElement('div');
            game2Div.id = 'game2';

            // Insere o game2 antes do game
            gameDiv.parentNode.insertBefore(game2Div, gameDiv);

            // Oculta o game original
            gameDiv.style.display = 'none';
        }
    }
});
