var live_url = "http://jackmoxon.com/json_test";
var flag = [];
function check_json_flag() {
    $.ajax({
	url: live_url,
	    async: false,
	    dataType: 'json',
	    success: function(json) {
	    flag = json.name;
	}
    });
return flag
};

//this works, but only if you reload the extension each time...so perhaps we have to have this at a lower level
chrome.webRequest.onBeforeRequest.addListener(
					      function(foo) {
						  if (check_json_flag() == "okay") {
							  }						      
						  else {
						      return {redirectUrl: "http://essayr.com"};
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