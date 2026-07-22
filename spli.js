function splitQuestions() {
    const questionsInput = document.getElementById("questions");
    const container = document.getElementById("container");

    if (!questionsInput || !container) {
        console.error("Required elements missing from DOM.");
        return;
    }

    const questions = questionsInput.value;
    const qonly = document.createElement("div");
    const qanda = document.createElement("div");
    
    // Split text by "Security"
    const splitted = questions.split("Security");

    // Header message
    let txt = document.createTextNode("I will gladly assist you with this, I just require verification with the following security questions before I can proceed:");
    qonly.appendChild(txt);
    qonly.appendChild(document.createElement("br"));

    // Populate qanda section
    splitted.forEach(function(element) {
        txt = document.createTextNode("-" + element);
        qanda.appendChild(txt);
        qanda.appendChild(document.createElement("br"));
    });

    qanda.appendChild(document.createElement("br"));

    // Populate qonly section for items containing "Question"
    for (let i = 0; i < splitted.length; i++) {
        if (splitted[i].includes("Question")) {
            txt = document.createTextNode("-" + splitted[i]);
            qonly.appendChild(txt);
            qonly.appendChild(document.createElement("br"));
        }
    }

    // Append output containers
    container.appendChild(qanda);
    container.appendChild(qonly);
}
