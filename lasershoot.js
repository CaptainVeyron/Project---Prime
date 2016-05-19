#pragma strict
var prefabBullet:Rigidbody;
var shootForce:float;
var shootPosition:Transform;

function Update()
{
    if(Input.GetButtonDown("Fire1"))
    {
        var instanceBullet = Instantiate(prefabBullet, transform.position, shootPosition.rotation);
        instanceBullet.GetComponent.<Rigidbody>().AddForce(shootPosition.right * shootForce);

    }}
