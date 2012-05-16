var live_url = "http://simple-sky-4304.herokuapp.com/flag/";
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
						      return {redirectUrl: "http://simple-sky-4304.herokuapp.com/write/"};
						  };
					      }
						  ,
					      {
						  urls: [
							 "*://*.jackmoxon.com/*", "<all_urls>"
							 ],
						      types: ["main_frame"]
						      },
					      //extrainfospec                                                                           
					      ["blocking"]);