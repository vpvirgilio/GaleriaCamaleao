jQuery(document).ready(function(){
	cont = 0;
	var img = Array();
	img[1] ="tetas_400_300.jpg";
	img[2] ="nus_400_300.jpg";
	img[3] ="ivancaipira_400_300.jpg";
	
	jQuery("#dir").click(function(){
		//alert
		//altura = (jQuery("#gde").height());
		//topo = (400 - altura)/2;
		//jQuery.("#gde").css("top", topo);
		if(cont==3) cont = 1; else cont++;
		//jQuery("#gde").fadeOut();
		jQuery("#gde").fadeOut();
		jQuery("#gde").attr("src","img/"+img[cont]);
		jQuery("#gde").fadeIn();
	});
	
	jQuery("#dir").trigger("click");
	
	jQuery("#esq").click(function(){
		//alert
		//altura = (jQuery("#gde").height());
		//topo = (400 - altura)/2;
		//jQuery.("#gde").css("top", topo);
		if(cont==1) cont = 3; else cont--;
		jQuery("#gde").fadeOut();
		jQuery("#gde").attr("src","img/"+img[cont]);
		jQuery("#gde").fadeIn();
	});
	
	
});