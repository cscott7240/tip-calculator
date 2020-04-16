var cost_input = document.getElementById('cost');
var service_input = document.getElementById('service');
var people_input = document.getElementById('people');
var tip_btn = document.getElementById('tipButton');
var tip_el = document.getElementById('tip');


function calc_tip () {
 var cost = Number(cost_input.value);
 var service = Number(service_input.value) / 100;
 var people = Number(people_input.value);
 var tip = (cost * service) / people;
      
 tip_el.innerText = '$' + tip.toFixed(2) + ((people > 1) ? ' each' : '');
}

tip_btn.addEventListener('click', calc_tip);

