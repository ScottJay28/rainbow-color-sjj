function generateRandomColor() {
  let randomHexDigit = () => Math.floor(Math.random() * 16).toString(16);
  let randomColor = `#${randomHexDigit()}${randomHexDigit()}${randomHexDigit()}${randomHexDigit()}${randomHexDigit()}${randomHexDigit()}`;
  return randomColor.toUpperCase();
}

function showHexCode() {
  let colorInput = document.getElementById("colorInput");
  let userColor = colorInput.value.toLowerCase();

  const rainbowColors = {
    red: "#FF0000",
    orange: "#FFA500",
    yellow: "#FFFF00",
    green: "#008000",
    blue: "#0000FF",
    indigo: "#4B0082",
    violet: "#EE82EE",
  };

  let resultMessage = document.getElementById("resultMessage");

  if (rainbowColors.hasOwnProperty(userColor)) {
    let hexCode = rainbowColors[userColor];
    document.body.style.backgroundColor = hexCode;
    resultMessage.textContent = `Hex code for ${userColor.toUpperCase()}: ${hexCode}`;
  } else if (userColor === "random") {
    let randomHexColor = generateRandomColor();

    document.body.style.backgroundColor = randomHexColor;
    // textContent gets the conent of ALL ELEMENTs inscluding script and style elements
    // innerText is aware of styling and wont return the text of "hidden" elements
    resultMessage.textContent = `Random color generated: ${randomHexColor}`;
  } else {
    resultMessage.textContent = "Not a rainbow color or 'random'";
  }
}
