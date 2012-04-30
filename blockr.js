var somejson = '{"name":"jack","age":24}';
var bla = JSON.parse(somejson);

var test = "The law of caus";

function alertMsg(){
    alert("You've spent too much time on this site!");
};
function timerRun(){
    var clock = setTimeout("alertMsg()", 3000);
};

chrome.webRequest.onBeforeRequest.addListener(
  function(foo) {
    console.log("foo bar: "+foo.url);
    if (test.length > 1) {	
	alert(bla.name+" "+bla.age)}
    else {
	alert("not enough writing, "+bla.name+"!");
	return {redirectUrl: "http://essayr.com"}};
  }
,
  {
      urls: [
	     "http://*.roommater.us/*",
	     "http://*.jackmoxon.com/*",
	     ],
	  types: ["main_frame"]
	  },
  //extrainfospec
  ["blocking"]);

$(document).ready(function() {
	alert("hello");
    })