var actions = {
    32: 'fire',
    37: 'rotateLeft',
    38: 'up',
    39: 'rotateRight',
    40: 'down',
    49: 'maxVelocityDown',
    50: 'maxVelocityUp',
    51: 'maxRotationVelocityDown',
    52: 'maxRotationVelocityUp',
    53: 'forwardAccelerationDown',
    54: 'forwardAccelerationUp',
    55: 'backwardAccelerationDown',
    56: 'backwardAccelerationUp',
    57: 'rotationAccelerationDown',
    48: 'rotationAccelerationUp',
    189: 'brakingDown',
    187: 'brakingUp',
    219: 'rotationBrakingDown',
    221: 'rotationBrakingUp'
};

function Player(tank) {
    window.onkeydown = function (event) {
        if (event.keyCode in actions) {
            tank.setAction(actions[event.keyCode]);
        }
    };

    window.onkeyup = function (event) {
        tank.unsetAction(actions[event.keyCode]);
    };

    window.onblur = function () {
        for (var i in tank.actions) {
            delete tank.actions[i];
        }
    };
}