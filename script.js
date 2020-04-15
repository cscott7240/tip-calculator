var cost_input = document.querySelector('.cost');
var service_input = document.querySelector('.service');
var people_input = document.querySelector('.people');

var tip_btn = document.querySelector('#tip-btn');

tip_btn.addEventListener('click', calc_tip);

Function calc_tip () {
var cost = Number(cost_input.value);
 var service = Number(service_input.value) / 100;
var people = Number(people_input.value);
var tip = (cost * service) / people;
 
 let tip_el = document.querySelector('.tip-wrap .tip');
 tip_el.innerText = '$' + tip.toFixed(2) + ((people > 1) ? ' each' : '');
}