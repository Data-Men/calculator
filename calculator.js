window.onload = () => {
  const textarea = document.getElementById("textarea");
};

calculation = () => {
  const text = textarea.value.toString();
  if (text.includes("+")) {
    console.log(text);
    const a = text.split('+')
    textarea.value = Number(a[0]) + Number(a[1]);
  }
};

//complete key management
keyprevent = (event) => {
  const text = textarea.value.toString();

  //not entering to a new line
  if (event.key == "Enter") {
    event.returnValue = false;
    calculation();
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
