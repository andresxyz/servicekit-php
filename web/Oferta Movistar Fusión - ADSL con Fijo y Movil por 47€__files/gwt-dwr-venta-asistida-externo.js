

function log(message)
{
	/*
	if (window.console) 
	{
		console.log(message);
	}
	*/
	
}

function DwrOnCallError(reason)
{
	log("DwrOnCallError");
	window.GwtOnCallError(reason);
	
}
function DwrOnPlatformHungUp()
{
	log("DwrOnPlatformHungUp");
	window.GwtOnPlatformHungUp();
}

function DwrOnSiatvoxOutboundCallFailed(names, values)
{
	log("DwrOnSiatvoxOutboundCallFailed");
	window.GwtOnSiatvoxOutboundCallFailed(names, values);
}

function DwrOnSiatvoxOutboundCallSuccess(names, values)
{
	log("DwrOnSiatvoxOutboundCallSuccess");
	window.GwtOnSiatvoxOutboundCallSuccess(names, values);
}

function DwrOnTerminalHungUp()
{
	log("DwrOnTerminalHungUp");
	window.GwtOnTerminalHungUp();
}

function DwrOnMaxDayOperation(operation)
{
	log("DwrOnMaxDayOperation");
	window.GwtOnMaxDayOperation(operation);
}

function DwrOnServiceValidation(code)
{
	log("DwrOnServiceValidation");
	window.GwtOnServiceValidation(code);
}

function DwrOnURL(url)
{
	log("DwrOnURL");
	window.GwtOnURL(url);
}

function DwrOnCallAgentSuccess(names, values)
{
	log("DwrOnCallAgentSuccess");
	window.GwtOnCallAgentSuccess(names, values);
}


function DwrOnCallLater(code)
{
	log("DwrOnCallLater");
	window.GwtOnCallLater(code);
}

function DwrOnStart(names, values)
{
	log("DwrOnStart");
	window.GwtOnStart(names, values);
}

