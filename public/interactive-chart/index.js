var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
};

function setChart(value) {
  lung = document.getElementById("lung");
  lungNumber = document.getElementById("lung-number");
  colorectal = document.getElementById("colorectal");
  colorectalNumber = document.getElementById("colorectal-number");
  breast = document.getElementById("breast");
  breastNumber = document.getElementById("breast-number");
  year = document.getElementById("year");

  if (value === "0") {
    lung.style["height"] = "38%";
    lungNumber.style["bottom"] = "48%";
    lungNumber.innerHTML = "4145";

    colorectal.style["height"] = "36%";
    colorectalNumber.style["bottom"] = "46%";
    colorectalNumber.innerHTML = "3900";

    breast.style["height"] = "24%";
    breastNumber.style["bottom"] = "34%";
    breastNumber.innerHTML = "2631";

    year.innerHTML = "1988 - 1992";
  } else if (value === "20") {
    lung.style["height"] = "43%";
    lungNumber.style["bottom"] = "53%";
    lungNumber.innerHTML = "4612";

    colorectal.style["height"] = "45%";
    colorectalNumber.style["bottom"] = "55%";
    colorectalNumber.innerHTML = "4850";

    breast.style["height"] = "33%";
    breastNumber.style["bottom"] = "43%";
    breastNumber.innerHTML = "3598";

    year.innerHTML = "1993 - 1997";
  } else if (value === "40") {
    lung.style["height"] = "48%";
    colorectal.style["height"] = "56%";
    breast.style["height"] = "52%";
    year.innerHTML = "1998 - 2002";

    lungNumber.style["bottom"] = "58%";
    lungNumber.innerHTML = "5201";
    colorectalNumber.style["bottom"] = "66%";
    colorectalNumber.innerHTML = "6047";
    breastNumber.style["bottom"] = "62%";
    breastNumber.innerHTML = "5577";
  } else if (value === "60") {
    lung.style["height"] = "53%";
    colorectal.style["height"] = "67%";
    breast.style["height"] = "63%";
    year.innerHTML = "2003 - 2007";
    lungNumber.style["bottom"] = "63%";
    lungNumber.innerHTML = "5767";
    colorectalNumber.style["bottom"] = "77%";
    colorectalNumber.innerHTML = "7199";
    breastNumber.style["bottom"] = "73%";
    breastNumber.innerHTML = "6858";
  } else if (value === "80") {
    lung.style["height"] = "61%";
    colorectal.style["height"] = "80%";
    breast.style["height"] = "79%";
    year.innerHTML = "2008 - 2012";

    lungNumber.style["bottom"] = "71%";
    lungNumber.innerHTML = "6553";
    colorectalNumber.style["bottom"] = "90%";
    colorectalNumber.innerHTML = "8707";
    breastNumber.style["bottom"] = "89%";
    breastNumber.innerHTML = "8560";

  } else if (value === "100") {
    lung.style["height"] = "72%";
    colorectal.style["height"] = "98%";
    breast.style["height"] = "100%";
    year.innerHTML = "2013 - 2017";

    lungNumber.style["bottom"] = "82%";
    lungNumber.innerHTML = "7780";
    colorectalNumber.style["bottom"] = "108%";
    colorectalNumber.innerHTML = "10643";
    breastNumber.style["bottom"] = "110%";
    breastNumber.innerHTML = "10824";
  } else {
    //  block of code to be executed if the condition1 is false and condition2 is false
  }
}

console.log("hello");
