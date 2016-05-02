function Bullet(tank) {
    MovingObject.call(this);

    this.tank = tank;
    this.currentVelocity = 600;
    this.currentAngle = this.tank.currentAngle;
    this.width = 5;
    this.height = 10;
    this.tankX = this.tank.x;
    this.tankY = this.tank.y;
}

Bullet.prototype = new MovingObject;

Bullet.prototype.updateState = function () {
    MovingObject.prototype.updateState.call(this);

    var self = this;
    setTimeout(function () {
        game.removeObject(self);
    }, 3000);
};