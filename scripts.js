
function myFunction() {
    var x = document.getElementById("text1");
    if (x.innerHTML === "19.99") {
      x.innerHTML = "199.99";
    } else {
      x.innerHTML = "19.99";
    }
    var y = document.getElementById("text2");
    if (y.innerHTML === "24.99") {
      y.innerHTML = "249.99";
    } else {
      y.innerHTML = "24.99";
    }
    var z = document.getElementById("text3");
    if (z.innerHTML === "39.99") {
      z.innerHTML = "399.99";
    } else {
      z.innerHTML = "39.99";
    }
  }