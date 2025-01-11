let codeTags = Array.from(document.getElementsByTagName("code"));

for(let codeIndex in codeTags) {
	codeTags[codeIndex].addEventListener("click", function () {
		navigator.clipboard.writeText(codeTags[codeIndex].innerHTML);
	});
}


let preCompDivs = Array.from(document.getElementsByClassName("pre-comp"));

for(let elementIndex in preCompDivs) {
	let children = Array.from(preCompDivs[elementIndex].children);
	
	children[0].innerHTML += "<em>(Click to show)</em>";
	children[1].style.display = "none";
	
	children[0].addEventListener("click", function () {
		children[1].style.display = "contents";
		
		children[0].innerHTML = children[0].innerHTML.slice(0,-24);
	}, {
		once: true
	});
}