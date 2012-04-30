var pattern=/\bIWSS/
var hnold = /news.ycombinator.com/
var imgur = /imgur.com/
var new_image = "http://sbhat.me/u/fetch_images.php?ImgUrl="
var newurl

    if (pattern.test(window.document.title)) // if it matches pattern defined above
	{

	    if (window.location.href.match(hnold))  // redirect from news.ycombinator to hackerne.ws
		{
		    newurl = window.location.href.replace(hnold,"hackerne.ws");
		}
	    else if (window.location.href.match(imgur))
		{
		    newurl = new_image + window.location.href;
		}


	    chrome.extension.sendRequest({redirect: newurl}); // send message to redirect

	}