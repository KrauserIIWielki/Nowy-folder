#pragma strict
var wyswietlanie : GameObject;
var moneta : GameObject;
function OnTriggerEnter()
{
	var script : wyswietlanie;
	script = wyswietlanie.GetComponent("wyswietlanie");
	script.punktyplus();
}
function Start () {

}

function Update () {

}