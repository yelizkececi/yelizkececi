function openProduct(evt, productName) {
		var i, tabcontent, tablinks;
		tabcontent = document.getElementsByClassName("tabcontent");
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		}
		tablinks = document.getElementsByClassName("tablinks");
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(" active", "");
		}
		document.getElementById(productName).style.display = "block";
		evt.currentTarget.className += " active";
	}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


/***/
function openProductDetail(evt, ProductDetailName) {
	var i, detailstabcontent, detailstablinks;
	detailstabcontent = document.getElementsByClassName("detailstabcontent");
	for (i = 0; i < detailstabcontent.length; i++) {
		detailstabcontent[i].style.display = "none";
	}
	detailstablinks = document.getElementsByClassName("detailstablinks");
	for (i = 0; i < detailstablinks.length; i++) {
		detailstablinks[i].className = detailstablinks[i].className.replace(" active", "");
	}
	document.getElementById(ProductDetailName).style.display = "block";
	evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultProduct").click();