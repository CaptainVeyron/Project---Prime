#pragma strict

var Health = 100;

function Update () {

	if(Health <= 0)
	{
		Dead();
	}
}

function ApplyDamage (damage : int) {

	Health -= damage;
}

function Dead() {

	Destroy (gameObject);

}