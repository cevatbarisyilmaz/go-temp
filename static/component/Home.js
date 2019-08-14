let template = document.createElement("template");

template.innerHTML = `

<div id="main">
	Hi there!
</div>
<style>
</style>
`;

export default class Home extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({mode: "open"}).appendChild(template.content.cloneNode(true));
	}
}

customElements.define("app-home", Home);