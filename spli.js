function split() {
	const questions = document.getElementById("questions").value;
	let txt, i;
	const container = document.getElementById("container");
	const qonly = document.createElement("qonly");
	const qanda = document.createElement("qanda");
	const splitted = questions.split("Security");
		txt = document.createTextNode("I will gladly assist you with this, I just require verification with the following security questions before I can proceed:");
		qonly.appendChild(txt);
		qonly.appendChild(document.createElement("br"));
		splitted.forEach(function(element){
		txt = document.createTextNode("-"+element);
		qanda.appendChild(txt);
		qanda.appendChild(document.createElement("br"));
	});
	qanda.appendChild(document.createElement("br"));
	for(i = 0; i < splitted.length; i++ ){
		if(splitted[i].search("Question") > -1 ){
			txt = document.createTextNode("-"+splitted[i]);
			qonly.appendChild(txt);
			qonly.appendChild(document.createElement("br"));
		}
	}
	container.appendChild(qanda);
	container.appendChild(qonly);
