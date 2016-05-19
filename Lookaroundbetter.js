#pragma strict
var lookSensitivity : float = 5;
var yRotation : float;
var xRotation : float;
var currentYRotation : float;
var currentXRotation : float;
var yRotationV : float;
var xRotationV : float;
var lockSmoothDamp : float = 10;
function Start () {
    Cursor.visible = false;
}

function Update () {
    xRotation -= Input.GetAxis("Mouse X") * lookSensitivity;
    yRotation += Input.GetAxis("Mouse Y") * lookSensitivity;

    xRotation = Mathf.Clamp(xRotation, -60, 17);

    currentXRotation = Mathf.SmoothDamp(currentXRotation, xRotation, xRotationV, lockSmoothDamp);
    currentYRotation = Mathf.SmoothDamp(currentYRotation, yRotation, yRotationV, lockSmoothDamp);

    transform.rotation = Quaternion.Euler(currentXRotation, currentYRotation, 0);
}