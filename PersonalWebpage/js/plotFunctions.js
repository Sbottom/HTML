
    // ------------------------------------------------------------
    //                          togglePlotSrc
    // ------------------------------------------------------------
    //
    // Toggles the src of a plot between two states
    //
    // Arguments: id of plot to modify, id of button clicked,
    //            toggle state 1 string and text,
    //            toggle state 2 string and text
    //

/*
    function togglePlot(plotID, buttonID, str1, str1Text, str2, str2Text)
    {   
        var str=document.getElementById(plotID).src; 
	var newStr;
	var newStrText;
	var buttonText;

	if (str.indexOf(str1) !== -1){
	    newStr=str.replace(str1,str2);
	    buttonText=str2Text;
	}
	else{
	    newStr=str.replace(str2,str1);
	    buttonText=str1Text;
	}

	document.getElementById(plotID).src=newStr;    
	document.getElementById(buttonID).innerHTML=buttonText;
    
    }
*/

    function togglePlot(plotID, str1, str2, element){   

	// Get all objects of specified class
        var objArr = document.getElementsByClassName(plotID);

  
	for(var i = 0; i < objArr.length; i++) {

	    var str;	
	    var newStr;

	    if (element == "src"){
	        str=objArr[i].src;
            }
            else if (element == "innerHTML"){
                str=objArr[i].innerHTML;	
	    }	
	    else if (element == "href"){
                str=objArr[i].href;	
	    }	

	    if (str.indexOf(str1) !== -1){
	        newStr=str.replace(str1,str2);
	    }
	    else{
	        newStr=str.replace(str2,str1);
	    }

	    if (element == "src"){
	        objArr[i].src=newStr;    
	    }
	    else if (element == "innerHTML"){
	        objArr[i].innerHTML=newStr;    
	    }	
	    else if (element == "href"){
	        objArr[i].href=newStr;    
	    }
        }	


/*
        var str;
	var newStr;

	if (element == "src"){
	    str=document.getElementById(plotID).src;
	}
	else if (element == "innerHTML"){
            str=document.getElementById(plotID).innerHTML;	
	}	
	else if (element == "href"){
            str=document.getElementById(plotID).href;	
	}	

	if (str.indexOf(str1) !== -1){
	    newStr=str.replace(str1,str2);
	}
	else{
	    newStr=str.replace(str2,str1);
	}

	if (element == "src"){
	    document.getElementById(plotID).src=newStr;    
	}
	else if (element == "innerHTML"){
	    document.getElementById(plotID).innerHTML=newStr;    
	}	
	else if (element == "href"){
	    document.getElementById(plotID).href=newStr;    
	}	
*/

    }


    function toggle1DLog(){

	togglePlot('1Dlog','_Log.png','.png','src');
	togglePlot('1Dlog_link','_Log.png','.png','href');
	togglePlot('1Dlog_link_pdf','_Log.pdf','.pdf','innerHTML');
	togglePlot('1Dlog_link_pdf','_Log.pdf','.pdf','href');

    }