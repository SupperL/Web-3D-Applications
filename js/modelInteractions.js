//adapted from example code 'benskitchen.com'
function cokeScene(){
    nSwitch = 0;
    document.getElementById('SceneSwitch').setAttribute('whichChoice', nSwitch);
}

function spriteScene(){
    nSwitch = 1;
    document.getElementById('SceneSwitch').setAttribute('whichChoice', nSwitch);
}

function pepperScene(){
    nSwitch = 2;
    document.getElementById('SceneSwitch').setAttribute('whichChoice', nSwitch);
}

function dcokeScenex(){
    nSwitch = 3;
    document.getElementById('SceneSwitch').setAttribute('whichChoice', nSwitch);
}
function coffeeScene(){
    nSwitch = 4;
    document.getElementById('SceneSwitch').setAttribute('whichChoice', nSwitch);
}
function AppleScene(){
    nSwitch = 5;
    document.getElementById('SceneSwitch').setAttribute('whichChoice', nSwitch);
}

var spinning = false;

function spinx()
{
	spinning = !spinning;
	document.getElementById('model__RotationTimerx').setAttribute('enabled', spinning.toString());
}
function spiny()
{
	spinning = !spinning;
	document.getElementById('model__RotationTimery').setAttribute('enabled', spinning.toString());
}

function spinz()
{
	spinning = !spinning;
	document.getElementById('model__RotationTimerz').setAttribute('enabled', spinning.toString());
}

function stopRotation()
{
	spinning = false;
	document.getElementById('model__RotationTimerx').setAttribute('enabled', spinning.toString());
	//spinning = false;
	document.getElementById('model__RotationTimery').setAttribute('enabled', spinning.toString());
	//spinning = false;
	document.getElementById('model__RotationTimerz').setAttribute('enabled', spinning.toString());
}

function animateModel()
{
    if(document.getElementById('model__RotationTimerx').getAttribute('enabled')!= 'true')
        document.getElementById('model__RotationTimerx').setAttribute('enabled', 'true');
    else
        document.getElementById('model__RotationTimerx').setAttribute('enabled', 'false');


}

function wireFrame()
{
	var e = document.getElementById('wire');
	e.runtime.togglePoints(true);
	e.runtime.togglePoints(true);
}

var lightOn = true;


function headLight()
{
	lightOn = !lightOn;
	document.getElementById('model__headlight').setAttribute('headlight', lightOn.toString());
	console.log(lightOn);
}

function omniLight()
{
	lightOn = !lightOn;
	document.getElementById('model__omniLight').setAttribute('headlight', lightOn.toString());
	console.log(lightOn);
}

function targetLight()
{
	lightOn = !lightOn;
	document.getElementById('model__targetLight').setAttribute('headlight', lightOn.toString());
	console.log(lightOn);
}


function cameraFront()
{
	document.getElementById('model__CameraFront').setAttribute('bind', 'true');
}

function cameraBack()
{
	document.getElementById('model__CameraBack').setAttribute('bind', 'true');
}

function cameraLeft()
{
	document.getElementById('model__CameraLeft').setAttribute('bind', 'true');
}

function cameraRight()
{
	document.getElementById('model__CameraRight').setAttribute('bind', 'true');
}

function cameraTop()
{
	document.getElementById('model__CameraTop').setAttribute('bind', 'true');
}

function cameraBottom()
{
	document.getElementById('model__CameraBottom').setAttribute('bind', 'true');
}