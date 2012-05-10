var live_url = "http://floating-dusk-6889.herokuapp.com/flag/";
var flag = [];
function check_json_flag() {
    $.ajax({
	url: live_url,
	    async: false,
	    dataType: 'json',
	    success: function(json) {
	    flag = json.flag;
	}
    });
return flag
};

//this works, but only if you reload the extension each time...so perhaps we have to have this at a lower level
chrome.webRequest.onBeforeRequest.addListener(
					      function(foo) {
						  if (check_json_flag() == "True") {
							  }						      
						  else {
						      return {redirectUrl: "http://floating-dusk-6889.herokuapp.com/write/"};
						  };
					      }
						  ,
					      {
						  urls: [
							"<all_urls>"
							 ],
						      types: ["main_frame"]
						      },
					      //extrainfospec                                                                           
					      ["blocking"]);