var live_url = "http://www.blockr.me/flag/";
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


chrome.webRequest.onBeforeRequest.addListener(
					      function(foo) {
						  if (check_json_flag() == "True") {
							  }						      
						  else {
						      return {redirectUrl: "http://www.blockr.me/write/"};
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