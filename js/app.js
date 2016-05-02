var game = new GameManager();

(function loop() {
    requestAnimationFrame(loop);
    game.render();
})();