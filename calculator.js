window.onload = () => {
  const textarea = document.getElementById("textarea");
};

calculation = (text) => {
  if (isNaN(text)) {
    let a,
      b,
      c = "";
    let result = 0;
    operator.forEach((value, index) => {
      if (value != ".") {
        const spliter = text.indexOf(value);
        const len = text.length;
        if (spliter > -1) {
          let x, y;
          switch (value) {
            case "÷":
              a = text.slice(0, spliter);
              b = text.slice(spliter + 1, len);

              x = Number(calculation(a));
              y = Number(calculation(b));

              result = Number(x) / Number(y);
              break;
            case "x":
              break;
            case "+":
              break;
            case "-":
              break;
          }
        }
      }
    });
    return Number(result);
  } else {
    return Number(text);
  }
};

//complete key management
keyprevent = (event) => {
  const text = textarea.value.toString();

  //not entering to a new line
  if (event.key == "Enter") {
    event.returnValue = false;
    textarea.value = calculation(text);
  }
  //replacing divide and multiply symbols
  if (["/", "*"].includes(event.key)) {
    event.returnValue = false;
    if (!operator.includes(text.charAt(text.length - 1))) {
      if (event.key == "*") {
        textarea.value += "x";
      } else {
        textarea.value += "÷";
      }
    }
  }

  //To prevent typeing same operator twice
  if (
    operator.includes(text.charAt(text.length - 1)) &&
    operator.includes(event.key.toUpperCase())
  ) {
    event.returnValue = false;
  }

  textarea.focus();
};
