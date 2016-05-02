function Tank() {
    MovingObject.call(this);

    this.actions = [];
    this.width = 20;
    this.height = 30;
    this.currentRotationVelocity = 0;
    this.maxRotationVelocity = 150;
    this.rotationAcceleration = 25;
    this.rotationBraking = 25;
    this.forwardAcceleration = 15;
    this.backwardAcceleration = 5;
    this.braking = 8;
    this.maxVelocity = 120;
    this.fired = false;
}

Tank.prototype = new MovingObject;

Tank.prototype.setAction = function (action) {
    if (this.actions.indexOf(action) == -1) {
        this.actions.push(action);
    }
};

Tank.prototype.unsetAction = function (action) {
    var index = this.actions.indexOf(action);
    if (index > -1) {
        this.actions.splice(index, 1);
    }
};

Tank.prototype.updateState = function () {
    MovingObject.prototype.updateState.call(this);

    if (this.actions.indexOf('fire') != -1 && !this.fired) {
        game.addObject(new Bullet(this));
        this.fired = true;
        self = this;
        setTimeout(function () {
            self.fired = false;
        }, 700);
    }

    if (this.actions.indexOf('up') != -1) {
        this.currentVelocity = Math.min(this.currentVelocity + this.forwardAcceleration, this.maxVelocity);
    } else if (this.actions.indexOf('down') != -1) {
        this.currentVelocity = Math.max(this.currentVelocity - this.backwardAcceleration, -this.maxVelocity);
    } else {
        if (Math.abs(this.currentVelocity) < 2 * this.braking) {
            this.currentVelocity = 0;
        } else if (this.currentVelocity > 0) {
            this.currentVelocity -= this.braking;
        } else if (this.currentVelocity < 0) {
            this.currentVelocity += this.braking;
        }
    }

    if (this.actions.indexOf('rotateLeft') != -1) {
        if (this.actions.indexOf('down') != -1) {
            this.currentRotationVelocity = Math.min(this.currentRotationVelocity + this.rotationAcceleration, this.maxRotationVelocity);
        } else {
            this.currentRotationVelocity = Math.max(this.currentRotationVelocity - this.rotationAcceleration, -this.maxRotationVelocity);
        }
    } else if (this.actions.indexOf('rotateRight') != -1) {
        if (this.actions.indexOf('down') != -1) {
            this.currentRotationVelocity = Math.max(this.currentRotationVelocity - this.rotationAcceleration, -this.maxRotationVelocity);
        } else {
            this.currentRotationVelocity = Math.min(this.currentRotationVelocity + this.rotationAcceleration, this.maxRotationVelocity);
        }
    } else {
        if (Math.abs(this.currentRotationVelocity) < 2 * this.rotationBraking) {
            this.currentRotationVelocity = 0;
        } else if (this.currentRotationVelocity > 0) {
            this.currentRotationVelocity -= this.rotationBraking;
        } else if (this.currentRotationVelocity < 0) {
            this.currentRotationVelocity += this.rotationBraking;
        }
    }

    this.currentAngle = (this.currentAngle + this.currentRotationVelocity * this.dt) % 360;

    if (this.actions.indexOf('maxRotationVelocityUp') != -1) {
        this.maxRotationVelocity++;
    } else if (this.actions.indexOf('maxRotationVelocityDown') != -1 && this.maxRotationVelocity > 0) {
        this.maxRotationVelocity--;
    }

    if (this.actions.indexOf('rotationAccelerationUp') != -1) {
        this.rotationAcceleration++;
    } else if (this.actions.indexOf('rotationAccelerationDown') != -1 && this.rotationAcceleration > 0) {
        this.rotationAcceleration--;
    }

    if (this.actions.indexOf('rotationBrakingUp') != -1) {
        this.rotationBraking++;
    } else if (this.actions.indexOf('rotationBrakingDown') != -1 && this.rotationBraking > 0) {
        this.rotationBraking--;
    }

    if (this.actions.indexOf('maxVelocityUp') != -1) {
        this.maxVelocity++;
    } else if (this.actions.indexOf('maxVelocityDown') != -1 && this.maxVelocity > 0) {
        this.maxVelocity--;
    }

    if (this.actions.indexOf('forwardAccelerationUp') != -1) {
        this.forwardAcceleration++;
    } else if (this.actions.indexOf('forwardAccelerationDown') != -1 && this.forwardAcceleration > 0) {
        this.forwardAcceleration--;
    }

    if (this.actions.indexOf('backwardAccelerationUp') != -1) {
        this.backwardAcceleration++;
    } else if (this.actions.indexOf('backwardAccelerationDown') != -1 && this.backwardAcceleration > 0) {
        this.backwardAcceleration--;
    }

    if (this.actions.indexOf('brakingUp') != -1) {
        this.braking++;
    } else if (this.actions.indexOf('brakingDown') != -1 && this.braking > 0) {
        this.braking--;
    }
};