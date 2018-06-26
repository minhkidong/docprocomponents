// avcfn:	Advanced Click Function
// avfn: 	Advanced Function
// bfn: 		Basic Function
// jsb: 		Begin Js
// bte: 		Boostrap Tabs Event
// cfn: 		Click function
// rfn: 		Document Ready function
// sbc: 		Sys Browser code
// wcs: 		Warning console

function includeHTML() {
	jQuery('.include_html').each(function(){
		var content = $(this).attr('data-include-html');
		if(content !=''){
			$(this).after(window[content]);
			$(this).remove();
		}	
	});

}

//--DOCUMENT READY FUNCTION BEGIN
jQuery(document).ready(function () {
	includeHTML();
    SyntaxHighlighter.all();
});
//--DOCUMENT READY FUNCTION END

//--WINDOW LOADED FUNCTION BEGIN
jQuery(window).bind("load", function () {
    
});
//--WINDOW LOADED FUNCTION END

//--WINDOW RESIZE FUNCTION BEGIN
jQuery(window).resize(function () {
    
});
//--WINDOW RESIZE FUNCTION END