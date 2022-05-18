var imageId, quoteId
for(let i=1; i<10; i++){
 imageId ="#image" + i;
 quoteId ="#quote" + i;
 /* set the quote in vinsible first*/
$(quoteId).css("display","none");
$(imageId).mouseover(function function_(){
	$(quoteId).css("display", "inline-block");
});
}

