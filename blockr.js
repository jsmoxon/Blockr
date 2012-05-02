var somejson = '{"name":"jack","age":36}';
var bla = JSON.parse(somejson);

var test = "The law of caus";

chrome.webRequest.onBeforeRequest.addListener(
					      function(foo) {
						  console.log("foo bar: "+foo.url);
						  jQuery.getJSON("http://127.0.0.1:8000/json_test", function(jsonla) {
							      alert(jsonla.name)
								  if (jsonla.name == "jack")
						       {
							   alert("before")
						      return {redirectUrl: "http://clothesliner.com"}
						      alert("lasdlfk")
						  }						      
						  else {
						      alert("the flag is not jack!")
						      return {redirectUrl: "http://essayr.com"};
							  };
						      });
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
