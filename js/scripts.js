function openNav(){
	var x = document.getElementById("navigation");
	if(x.className === "navigation"){
		x.className += " menujs";
		document.getElementById("icone-lista").innerHTML = "&Cross;";
	}else{
		x.className = "navigation";
		document.getElementById("icone-lista").innerHTML = "&#9776;";
	}
}