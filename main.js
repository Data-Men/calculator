document.addEventListener("DOMContentLoaded", number);
const operator = ["-", "+", "x", "÷", "%", "."];

window.onload = (event) => {
  const textarea = document.getElementById("textarea");
  document.getElementById("ROD").addEventListener("click", clicked);

  let operators = ["plus", "minus", "multiply", "divide"];

  operators.forEach((value, index) => {
    document
      .getElementById(value)
      .addEventListener("click", () => addOperator(value));
  });

  document.getElementById("CE").addEventListener("click", () => {
    textarea.value = textarea.value.slice(0, textarea.value.length - 1);
    textarea.focus();
  });
  document.getElementById("ps").addEventListener("click", () => {
    textarea.value += "(";
    textarea.focus();
  });
  document.getElementById("pe").addEventListener("click", () => {
    textarea.value += ")";
    textarea.focus();
  });
  document.getElementById("factorial").addEventListener("click", () => {
    textarea.value += "!";
    textarea.focus();
  });
  document.getElementById("mod").addEventListener("click", () => {
    textarea.value += "%";
    textarea.focus();
  });
  document.getElementById("sin").addEventListener("click", () => {
    textarea.value += "sin(";
    textarea.focus();
  });
  document.getElementById("cos").addEventListener("click", () => {
    textarea.value += "cos(";
    textarea.focus();
  });
  document.getElementById("tan").addEventListener("click", () => {
    textarea.value += "tan(";
    textarea.focus();
  });
  document.getElementById("Nlog").addEventListener("click", () => {
    textarea.value += "ln(";
    textarea.focus();
  });
  document.getElementById("log").addEventListener("click", () => {
    textarea.value += "log(";
    textarea.focus();
  });
  document.getElementById("eularNo").addEventListener("click", () => {
    if (
      operator.includes(textarea.value.charAt(textarea.value.length - 1)) ||
      textarea.value.length == 0
    ) {
      textarea.value += "e";
    } else {
      textarea.value += "xe";
    }
    textarea.focus();
  });
  document.getElementById("pi").addEventListener("click", () => {
    if (
      operator.includes(textarea.value.charAt(textarea.value.length - 1)) ||
      textarea.value.length == 0
    ) {
      textarea.value += "π";
    } else {
      textarea.value += "xπ";
    }
    textarea.focus();
  });
  textarea.focus();
};

let count = 0;
function clicked() {
  const x = document.getElementById("ROD");
  if (count == 0) {
    count = 1;
    document.getElementById("ROD").innerHTML = "Red | <strong>Deg</strong>";
  } else {
    count = 0;
    document.getElementById("ROD").innerHTML = "<strong>Red</strong> | Deg";
  }
}

function number() {
  for (let index = 0; index < 10; index++) {
    const btn = document.getElementById(index.toString());
    btn.onclick = () => btnClick(index);
  }

  document.getElementById("dot").onclick = () => decimal();

  function btnClick(id) {
    const textarea = document.getElementById("textarea");
    textarea.value += id.toString();
    textarea.focus();
  }

  function decimal() {
    const textarea = document.getElementById("textarea");
    if (textarea.value.toString().charAt(textarea.value.length - 1) != ".") {
      textarea.value += ".";
      textarea.focus();
    }
  }
}

function addOperator(opration) {
  const textarea = document.getElementById("textarea");
  const len = textarea.value.toString().length;
  console.log(len);
  if (!operator.includes(textarea.value.toString().charAt(len - 1))) {
    switch (opration) {
      case "plus":
        textarea.value += "+";
        break;
      case "minus":
        textarea.value += "-";
        break;
      case "multiply":
        textarea.value += "x";
        break;
      case "divide":
        textarea.value += "÷";
        break;
    }
  }

  textarea.focus();
}
