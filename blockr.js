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
							"<all_urls>"
							 ],
						      types: ["main_frame"]
						      },
					      //extrainfospec                                                                           
					      ["blocking"]);