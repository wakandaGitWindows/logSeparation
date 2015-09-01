
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @Button
	var button4 = {};	// @Button
	var button2 = {};	// @Button
	var button3 = {};	// @Button
	var Login = {};	// @Button
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		xhr = new XMLHttpRequest();
		var a  = "http://127.0.0.1:8081/undefined";
		xhr.open('GET', a);
		xhr.send();
	};// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		location.href="http://127.0.0.1:8080/login/";
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		location.href="page404.html";
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		xhr = new XMLHttpRequest();
		var a  = "http://127.0.0.1:8081/exception";
		xhr.open('GET', a);
		xhr.send();
		
		
	};// @lock

	Login.click = function Login_click (event)// @startlock
	{// @endlock
		Login("hamza","123456");
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("button4", "click", button4.click, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button3", "click", button3.click, "WAF");
	WAF.addListener("Login", "click", Login.click, "WAF");
// @endregion
};// @endlock
