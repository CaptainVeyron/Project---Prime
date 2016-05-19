#pragma strict
var forwardRate : float = 3;
var turnRate : float = 4;


function Update () {
    // Entity's forward speed in action
    var forwardMoveAmount = Input.GetAxis("Horizontal") * forwardRate;
    // Force of turret rotation
    var turnForce = Input.GetAxis("Vertical") * turnRate;
    // Rotation of turret in action
    transform.Rotate(0, turnForce, 0);
    transform.position += transform.forward * forwardMoveAmount * Time.deltaTime;
}