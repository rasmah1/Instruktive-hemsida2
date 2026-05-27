function runCode() {
    const codeInput = document.querySelector("code-input");
    const code = codeInput.value;
    const outputElement = document.getElementById("output");
    
    outputElement.textContent = "";
    let capturedOutput = "";

    //Hijack console.log
    const originalLog = console.log;
    console.log = function(...args) {
        const text = args.join(" ");
        capturedOutput += text; // Store for validation
        outputElement.textContent += text + "\n"; // Show to user
    };

    //Execute user code
    try {
        eval(code); 
    } catch (error) {
        outputElement.textContent += "Error: " + error.message;
    }

    //Restore console IMMEDIATELY
    console.log = originalLog;

    // 4. Validate the text
    checkAnswer(capturedOutput); 
}