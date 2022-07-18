var plusBtn = document.getElementsByClassName("plus-btn");
var priceIphone = parseInt(document.getElementById("p1").innerHTML);
var priceShoes = parseInt(document.getElementById("p2").innerHTML);
var pricewatch = parseInt(document.getElementById("p3").innerHTML);

for (let i = 0; i < plusBtn.length; i++) {
  plusBtn[i].addEventListener("click", function () {
    let cout = plusBtn[i].previousElementSibling.value++;
    if (i === 0) {
      let sommeIphone = priceIphone * (cout + 1);
      document.getElementById("p1").innerHTML = sommeIphone;
    }
    if (i === 1) {
      let sommeshoes = priceShoes * (cout + 1);
      document.getElementById("p2").innerHTML = sommeshoes;
    }
    if (i === 2) {
      let somewatch = pricewatch * (cout + 1);
      document.getElementById("p3").innerHTML = somewatch;
    }
    totalPrice() 
  });
}

var minus = document.getElementsByClassName("minus-btn");
var priceIphone = parseInt(document.getElementById("p1").innerHTML);
var priceShoes = parseInt(document.getElementById("p2").innerHTML);
var pricewatch = parseInt(document.getElementById("p3").innerHTML);

for (let i = 0; i < minus.length; i++) {
  let min = minus[i];
  min.addEventListener("click", function () {
    if (min.nextElementSibling.value > 1) {
      var cout= min.nextElementSibling.value--;
      if (i === 0 ) {
        let sommeIphone = priceIphone * (cout - 1);
        document.getElementById("p1").innerHTML = sommeIphone;
      }
      if (i === 1) {
        let sommeshoes = priceShoes * (cout - 1);
        document.getElementById("p2").innerHTML = sommeshoes;
      }
      if (i === 2) {
        let somewatch = pricewatch * (cout - 1);
        document.getElementById("p3").innerHTML = somewatch;
      }
    }
    totalPrice() 
  });
}

var likes = document.getElementsByClassName("like");

for (let i = 0; i < likes.length; i++) {
  let like = likes[i];
  likes[i].addEventListener("click", function () {
    if (like.style.color == "red") {
      like.style.color = "black";
    } else {
      like.style.color = "red";
    }
  });
}


var deletes = document.getElementsByClassName("delete");

for (let i = 0; i < deletes.length; i++) {
  let dlt = deletes[i];

  dlt.addEventListener("click", function () {
    dlt.parentElement.remove();
    totalPrice() 
  });
}

var el = document.getElementsByClassName("Item");
var final = document.getElementById("finalPrice");

function totalPrice() {
  let s = 0;
  for (let i = 0; i < el.length; i++) {

    s = s + parseInt (el[i].querySelector(".price").innerText);
    console.log(s)
  }
  return (final.value = s);
}