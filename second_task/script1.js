const display = document.getElementById("display");

        function appendNumber(num) {
            display.value += num;
        }

        function appendOperator(operator) {
            if (display.value !== "") {
                display.value += " " + operator + " ";
            }
        }

        function calculateResult() {
            try {
                display.value = eval(display.value.replace(/×/g, "*").replace(/÷/g, "/"));
            } catch {
                display.value = "Error";
            }
        }

        function clearDisplay() {
            display.value = "";
        }

        function backspace() {
            display.value = display.value.slice(0, -1);
        }

        function copyToClipboard() {
            navigator.clipboard.writeText(display.value).then(() => {
                alert("Copied to clipboard!");
            });
        }

        // Enable keyboard support
        document.addEventListener("keydown", function(event) {
            const key = event.key;

            if (!isNaN(key) || key === ".") {
                appendNumber(key);
            } else if (["+", "-", "*", "/"].includes(key)) {
                appendOperator(key);
            } else if (key === "Enter") {
                calculateResult();
            } else if (key === "Backspace") {
                backspace();
            } else if (key === "Escape") {
                clearDisplay();
            }
        });