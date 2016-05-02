function GameManager() {
    this.objects = [];
    this.renderEngine = new RenderEngine();

    var renderEngine = this.renderEngine;

    this.render = function () {
        renderEngine.clear();
        renderEngine.drawInfo();
        renderEngine.drawStats(tank1);

        this.objects.forEach(function (element) {
            element.updateState();
            renderEngine.draw(element);
        });
    };

    this.addObject = function (obj) {
        this.objects.push(obj);
    };

    this.removeObject = function (obj) {
        var index = this.objects.indexOf(obj);
        if (index > -1) {
            this.objects.splice(index, 1);
        }
    };

    var tank1 = new Tank();
    this.addObject(tank1);
    var player1 = new Player(tank1);
}