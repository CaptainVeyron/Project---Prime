#pragma strict
var speed : float = 1.0; //how fast the object should rotate
 
function Update(){
    transform.Rotate(Vector3(Input.GetAxis("Mouse Y"), Input.GetAxis("Mouse X"), 0) * Time.deltaTime * speed);

}
