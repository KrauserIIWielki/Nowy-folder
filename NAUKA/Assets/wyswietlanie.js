#pragma strict
var punkty : int;
function punktyplus()
{
	punkty+=10;
}
function OnGUI()
{
	GUI.Label(Rect(100, 10, 100, 20), punkty.ToString("f0"));
}
function Start () {

}

function Update () {

}