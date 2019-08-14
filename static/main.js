//URLs
const STATIC = "/static/";
const COMPONENT = STATIC + "component/";
const DATA = STATIC + "data/";
const IMAGE = STATIC + "image/";

//Divs
let content = document.getElementById("content");

navigate();

function navigate() {
	if(document.location.pathname === "/"){
		import(COMPONENT + "Home.js").then(function (module) {
			content.appendChild(new module.default());
		})
	}
}