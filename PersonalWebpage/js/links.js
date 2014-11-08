
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var link_options = [["Home","index.html"],
	    	    ["CMS","cms.html"],
		    ["Supersymmetry","supersymmetry.html"],
	    	    ["Trigger","trigger.html"],
		   ]
				
function links( current ){


    document.write( "<div id='linkContainer'>" );


	for (var i = link_options.length - 1; i>=0; i--){
	    document.write( "<a href='"+link_options[i][1]+"'><div class='no_button'>" );
	    document.write( link_options[i][0] );
	    document.write( "</div></a>" );
	}
    document.write( "</div>" );

//	if ( i != current )
//		{
//			document.write( "<div class='no_button'><a href='"+link_options[i][1]+"'>" );
//			document.write( link_options[i][0] );
//			document.write( "</a></div>" );
//		}
//		else
//		{
//			document.write( "<div class='button'>" );
//			document.write( "	<div class='button_l'></div>" );
//			document.write( "	<div class='button_m'>" + link_options[i][0] + "</div>" );
//			document.write( "	<div class='button_r'></div>" );
//			document.write( "</div>" );		
//		}

}
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var counter=0;

function header( string )
{
	document.write( "<div class='heading'>" );	
	if( counter%2 )
	{
		document.write( "	<div class='heading_r_text'>"+string+"</div>" );	
		document.write( "	<div class='heading_r_angle'></div>" );	
	}else{
		document.write( "	<div class='heading_l_text'>"+string+"</div>" );	
		document.write( "	<div class='heading_l_angle'></div>" );	
	}
	document.write( "</div>" );
	counter++;
}
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
