var somejson = '{"name":"jack","age":36}';
var bla = JSON.parse(somejson);

var test = "The law of caus";
var flag =jQuery.getJSON("http://127.0.0.1:8000/json_test", function(jsonla) {
    })

    console.log(flag);

//this works, but only if you reload the extension each time...so perhaps we have to have this at a lower level
jQuery.getJSON("http://127.0.0.1:8000/json_test", function(jsonla) {
	chrome.webRequest.onBeforeRequest.addListener(
					      function(foo) {
						  console.log("foo bar: "+foo.url);
								  if (jsonla.name == "jack")
						       {
							   alert(jsonla.name)
						      return {redirectUrl: "http://clothesliner.com"}
						      alert("lasdlfk")
						  }						      
						  else {
						      alert("the flag is not jack!")
						      return {redirectUrl: "http://essayr.com"};
						  };
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
    })