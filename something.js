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
					      //extrainfospec                                                                                    \

					      ["blocking"]);
