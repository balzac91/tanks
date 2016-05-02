function RenderEngine() {
    this.game = document.getElementById('game');
    this.gameCtx = this.game.getContext('2d');
    this.stats = document.getElementById('stats');
    this.statsCtx = this.stats.getContext('2d');
    this.info = document.getElementById('info');
    this.infoCtx = this.info.getContext('2d');

    this.draw = function (obj) {
        this.gameCtx.save();
        if (obj instanceof Tank) {
            this.drawTank(obj);
        } else if (obj instanceof Bullet) {
            this.drawBullet(obj);
        }
        this.gameCtx.restore();
    };

    this.drawTank = function (tank) {
        this.gameCtx.translate(tank.x + tank.width / 2, tank.y + tank.height / 2);
        this.gameCtx.rotate(Math.PI * tank.currentAngle / 180);
        this.gameCtx.fillRect(-tank.width / 2, -tank.height / 2, tank.width, tank.height);
        this.gameCtx.fillRect(-2, -20, 4, 15);
    };

    this.drawBullet = function (bullet) {
        this.gameCtx.translate(bullet.x + bullet.tankX + bullet.tank.width / 2, bullet.y + bullet.tankY + bullet.tank.height / 2);
        this.gameCtx.rotate(Math.PI * bullet.currentAngle / 180);
        this.gameCtx.fillStyle = '#ff0000';
        this.gameCtx.fillRect(-bullet.width / 2, -bullet.height / 2, bullet.width, bullet.height);
    };

    this.clear = function () {
        this.gameCtx.clearRect(0, 0, this.game.width, this.game.height);
        this.statsCtx.clearRect(0, 0, this.stats.width, this.stats.height);
        this.infoCtx.clearRect(0, 0, this.info.width, this.info.height);
    };

    this.drawStats = function (tank) {
        this.statsCtx.save();
        this.statsCtx.font = '11px Arial';
        this.statsCtx.fillText('x: ' + parseInt(tank.x), 10, 15);
        this.statsCtx.fillText('y: ' + parseInt(tank.y), 10, 30);
        this.statsCtx.fillText('angle: ' + parseInt(tank.currentAngle), 10, 45);
        this.statsCtx.fillText('velocity: ' + parseInt(tank.currentVelocity), 10, 60);
        this.statsCtx.fillText('rotation velocity: ' + parseInt(tank.currentRotationVelocity), 10, 75);

        this.statsCtx.fillText('max velocity: ' + parseInt(tank.maxVelocity), 145, 15);
        this.statsCtx.fillText('max rotation velocity: ' + parseInt(tank.maxRotationVelocity), 145, 30);
        this.statsCtx.fillText('forward acceleration: ' + parseInt(tank.forwardAcceleration), 145, 45);
        this.statsCtx.fillText('backward acceleration: ' + parseInt(tank.backwardAcceleration), 145, 60);
        this.statsCtx.fillText('rotation acceleration: ' + parseInt(tank.rotationAcceleration), 145, 75);
        this.statsCtx.fillText('braking: ' + parseInt(tank.braking), 145, 90);
        this.statsCtx.fillText('rotation braking: ' + parseInt(tank.rotationBraking), 145, 105);
        this.statsCtx.restore();
    };

    this.drawInfo = function () {
        this.infoCtx.save();
        this.infoCtx.font = '11px Arial';
        this.infoCtx.fillText('left: rotate left', 10, 15);
        this.infoCtx.fillText('right: rotate right', 10, 30);
        this.infoCtx.fillText('up: move forward', 10, 45);
        this.infoCtx.fillText('down: move backward', 10, 60);
        this.infoCtx.fillText('space: fire', 10, 75);

        this.infoCtx.fillText('max velocity down: 1', 145, 15);
        this.infoCtx.fillText('max velocity up: 2', 145, 30);
        this.infoCtx.fillText('max rotation velocity down: 3', 145, 45);
        this.infoCtx.fillText('max rotation velocity up: 4', 145, 60);
        this.infoCtx.fillText('forward acceleration down: 5', 145, 75);
        this.infoCtx.fillText('forward acceleration up: 6', 145, 90);
        this.infoCtx.fillText('backward acceleration down: 7', 145, 105);
        this.infoCtx.fillText('backward acceleration up: 8', 145, 120);
        this.infoCtx.fillText('rotation acceleration down: 9', 145, 135);
        this.infoCtx.fillText('rotation acceleration up: 0', 145, 150);
        this.infoCtx.fillText('braking down: -', 145, 165);
        this.infoCtx.fillText('braking up: =', 145, 180);
        this.infoCtx.fillText('rotation braking down: [', 145, 195);
        this.infoCtx.fillText('rotation braking up: ]', 145, 210);
        this.infoCtx.restore();
    };
}