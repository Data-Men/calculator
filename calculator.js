calculation = (text) => {
  // console.log(text);
  if (isNaN(text)) {
    let a, b;
    let result = text;

    //This is to solve brackets first
    if (text.toString().indexOf("(") > -1) {
      const p = text.toString().indexOf("(");
      let q = text.toString().lastIndexOf(")");

      let count = 0;
      let endCount = 0; //finding bracket pair
      for (let index = p + 1; index < text.length; index++) {
        if (text.toString()[index] == "(") {
          count = count + 1;
        } else if (text.toString()[index] == ")") {
          if (count == endCount) {
            q = index;
            break;
          }
          endCount = endCount + 1;
        }
      }

      let newtext = text.substring(p + 1, q);
      result = calculation(newtext);
      if (!isNaN(result)) {
        text = text.replace(text.substring(p, q + 1), result);
      } else {
        text = text.replace(newtext, result);
      }
      if (text.indexOf("(") > -1) {
        result = calculation(text);
        text = result;
      }
    }

    operator.forEach((value, index) => {
      if (value != ".") {
        // const spliter = text.toString().indexOf(value);
        const spliter = text.toString().lastIndexOf(value); //to solve same operator from left to right
        const len = text.length;
        if (spliter > -1) {
          let x, y;
          a = text.slice(0, spliter);
          b = text.slice(spliter + 1, len);

          x = Number(calculation(a));
          y = Number(calculation(b));
          // console.log(x);
          // console.log(y);
          switch (value) {
            case "^":
              result=Math.pow(Number(x),Number(y))
              break;
            case "÷":
              result = Number(x) / Number(y);
              break;
            case "x":
              result = Number(x) * Number(y);
              break;
            case "%": //may need to change this operation
              result = Number(x) % Number(y);
              break;
            case "+":
              result = Number(x) + Number(y);
              break;
            case "-":
              result = Number(x) - Number(y);
              break;
          }
          text = result;
        }
      }
    });

    //Other operators
    if (text.toString().indexOf("!") > -1) {
      let fact = 1;
      const n = text.toString().slice(0, text.indexOf("!"));
      for (let i = 1; i <= Number(n); i++) fact = fact * i;
      result = fact;
    } else if (text.toString().indexOf("sin") > -1) {
      let val = 0;
      if (count == 0) {
        val = Math.sin(text.toString().slice(3, text.length));
      } else {
        val = Math.sin(
          Number(text.toString().slice(3, text.length)) * (Math.PI / 180)
        );
      }
      result = val;
    } else if (text.toString().indexOf("cos") > -1) {
      let val = 0;
      if (count == 0) {
        val = Math.cos(text.toString().slice(3, text.length));
      } else {
        val = Math.cos(
          Number(text.toString().slice(3, text.length)) * (Math.PI / 180)
        );
      }
      result = val;
    } else if (text.toString().indexOf("tan") > -1) {
      let val = 0;
      if (count == 0) {
        val = Math.tan(text.toString().slice(3, text.length));
      } else {
        val = Math.tan(
          Number(text.toString().slice(3, text.length)) * (Math.PI / 180)
        );
      }
      result = val;
    } else if (text.toString().indexOf("log") > -1) {
      const val = Math.log10(text.toString().slice(3, text.length));
      result = val;
    } else if (text.toString().indexOf("ln") > -1) {
      const val = Math.log(text.toString().slice(3, text.length));
      result = val;
    } else if (text.toString().indexOf("e") > -1) {
      result = Math.E;
    } else if (text.toString().indexOf("π") > -1) {
      result = Math.PI;
    } else if (text.toString().indexOf("√") > -1) {
      result = Math.sqrt(text.toString().slice(1, text.length));
    }

    return Number(result);
  } else {
    // console.log(text);
    return Number(text);
  }
};

//complete key management
keyprevent = (event) => {
  const textarea = document.getElementById("textarea");

  const text = textarea.value.toString();

  //not entering to a new line
  if (event.key == "Enter") {
    event.returnValue = false;
    textarea.value =
      Math.round(
        (Number.parseFloat(calculation(text)) + Number.EPSILON) * 100000000000
      ) / 100000000000;
    // textarea.value=Number.parseFloat(calculation(text)).toFixed(11)
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
