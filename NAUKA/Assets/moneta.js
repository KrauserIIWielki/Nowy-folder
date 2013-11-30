#pragma strict
var moneta : GameObject;
var efekt : Transform;
var dzwiek : AudioClip;
function OnTriggerEnter()
	{
		Destroy(moneta);
		Instantiate(efekt, transform.position, transform.rotation);
		AudioSource.PlayClipAtPoint(dzwiek, transform.position);
	}

function Update () {

} 