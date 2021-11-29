//Forkoter knap og div så jeg ikke skal skrive hele smøren hele tiden.
const btn = document.querySelector("button");
const body = document.querySelector("body");
const hr = document.querySelector("hr");

//Laver en funktion hvor min knap kan toggle mellem at vise p og ikke vise p.
function klikket() {
  body.classList.toggle("skift_farve");
  hr.classList.toggle("skift_hr");
}
//Når man klikker på knappen så ryger man op i fukntionen der toggler p.
btn.addEventListener("click", klikket);
