const ctx = document.getElementById("graficoAcessos");

new Chart(ctx, {

type: "bar",

data: {

labels: ["Seg", "Ter", "Qua", "Qui", "Sex"],

datasets: [

{

label: "Visitas no site",

data: [12, 19, 3, 5, 10],

backgroundColor: "#4CAF50",

},

],

},

options: {

responsive: true,

scales: {

y: {

beginAtZero: true,

},

},

},

});