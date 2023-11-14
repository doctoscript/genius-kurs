function sumValues() {
   var num1, num2, res;
   num1 = Number(document.formcalc.txtnum1.value);
   num2 = Number(document.formcalc.txtnum2.value);
   res = num1 + num2;
   document.formcalc.txtres.value=res;
}
function MultiplayValues() {
   var num1, num2, res;
   num1 = Number(document.formcalc.txtnum1.value);
   num2 = Number(document.formcalc.txtnum2.value);
   res = num1 * num2;
   document.formcalc.txtres.value=res;
}
function DivisonValues() {
   var num1, num2, res;
   num1 = Number(document.formcalc.txtnum1.value);
   num2 = Number(document.formcalc.txtnum2.value);
   res = num1 / num2;
   document.formcalc.txtres.value=res;
}
function SubstractionValues() {
   var num1, num2, res;
   num1 = Number(document.formcalc.txtnum1.value);
   num2 = Number(document.formcalc.txtnum2.value);
   res = num1 - num2;
   document.formcalc.txtres.value=res;
}

