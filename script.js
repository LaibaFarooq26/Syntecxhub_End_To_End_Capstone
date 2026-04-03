let patients = JSON.parse(localStorage.getItem("patients")) || []

function predictRisk(patient){

if(patient.oxygen < 94 || patient.temp > 38 || patient.heart > 110){

return "High"

}

else if(patient.oxygen < 96){

return "Medium"

}

else{

return "Low"

}

}

function addPatient(){

let age = document.getElementById("age").value

let heart = document.getElementById("heart").value

let oxygen = document.getElementById("oxygen").value

let temp = document.getElementById("temp").value

let patient={

age:Number(age),

heart:Number(heart),

oxygen:Number(oxygen),

temp:Number(temp)

}

patient.risk = predictRisk(patient)

patients.push(patient)

localStorage.setItem("patients",JSON.stringify(patients))

updateCharts()

alert("Predicted Risk: "+patient.risk)

}

function updateCharts(){

let heart = patients.map(p=>p.heart)

let oxygen = patients.map(p=>p.oxygen)

let risks = patients.map(p=>p.risk)

Plotly.newPlot("heartChart",[{

y:heart,

type:"scatter"

}])

Plotly.newPlot("oxygenChart",[{

y:oxygen,

type:"bar"

}])

let counts={Low:0,Medium:0,High:0}

risks.forEach(r=>counts[r]++)

Plotly.newPlot("riskChart",[{

labels:["Low","Medium","High"],

values:[counts.Low,counts.Medium,counts.High],

type:"pie"

}])

}

updateCharts()