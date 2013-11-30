var wyjscie=false;
var level : int=1;
function OnMouseEnter()
	{
		renderer.material.color = Color.red;
	}
function OnMouseExit()
	{
		renderer.material.color = Color.green;
	}
function OnMouseUp()
	{
		if(wyjscie)
			{
				Application.Quit();
			}
		else
			{
				Application.LoadLevel(level);
			}
	}