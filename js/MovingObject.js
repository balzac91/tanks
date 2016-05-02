function MovingObject() {
    GameObject.call(this);

    this.currentVelocity = 0;
    this.currentAngle = 0;
    this.lastStateUpdate = new Date();
}

MovingObject.prototype = new GameObject;

MovingObject.prototype.updateState = function () {
    this.dt = (new Date().getTime() - this.lastStateUpdate.getTime()) / 1000;

    this.x += this.currentVelocity * this.dt * Math.sin(this.currentAngle * Math.PI / 180);
    this.y -= this.currentVelocity * this.dt * Math.cos(this.currentAngle * Math.PI / 180);
    this.lastStateUpdate = new Date();

    GameObject.prototype.updateState.call(this);
};