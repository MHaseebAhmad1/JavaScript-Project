function swapValues() {

    var tempCurency = document.getElementById("from").options[document.getElementById("from").selectedIndex].text;
    document.getElementById("from").options[document.getElementById("from").selectedIndex].text = document.getElementById("to").options[document.getElementById("to").selectedIndex].text;
    document.getElementById("to").options[document.getElementById("to").selectedIndex].text = tempCurency;

    var tempValue = document.getElementById("from").options[document.getElementById("from").selectedIndex].value;
    document.getElementById("from").options[document.getElementById("from").selectedIndex].value = document.getElementById("to").options[document.getElementById("to").selectedIndex].value;
    document.getElementById("to").options[document.getElementById("to").selectedIndex].value = tempValue;
}

$('#inverseToggle').prop('checked', true);
const dt = new Date();
var month = dt.toLocaleString("default", { month: "2-digit" });
var day = dt.toLocaleString("default", { day: "2-digit" });
var hour = dt.toLocaleString("default", { hour: "2-digit" });
var minute = dt.toLocaleString("default", { minute: "2-digit" });
document.getElementById("date").innerHTML = "Live Exchange Rates: " + dt.getFullYear() + "-" + month + "-" + day + "  " + dt.getHours() + ":" + minute;

function inverse(a) {
    var gbp = document.getElementById("from").options[3].value;
    var usd = document.getElementById("from").options[6].value;
    var kwd = document.getElementById("from").options[4].value;
    if (a.checked == true) {
        document.getElementById("gbp").innerHTML = "1 GBP";
        document.getElementById("usd").innerHTML = "1 USD";
        document.getElementById("kwd").innerHTML = "1 KWD";
        document.getElementById("pkr").innerHTML = "PKR";
        document.getElementById("gbpP").innerHTML = gbp;
        document.getElementById("usdP").innerHTML = usd;
        document.getElementById("kwdP").innerHTML = kwd;
    }
    else {
        document.getElementById("gbp").innerHTML = "GBP";
        document.getElementById("usd").innerHTML = "USD";
        document.getElementById("kwd").innerHTML = "KWD";
        document.getElementById("pkr").innerHTML = "1 PKR";
        document.getElementById("gbpP").innerHTML = (1 / gbp).toFixed(4);
        document.getElementById("usdP").innerHTML = (1 / usd).toFixed(4);
        document.getElementById("kwdP").innerHTML = (1 / kwd).toFixed(4);
    }
}

function convert() {
    var fromText = document.getElementById("from").options[document.getElementById("from").selectedIndex].text.slice(5, 8);
    var toText = document.getElementById("to").options[document.getElementById("to").selectedIndex].text.slice(5, 8);
    var from = parseInt(document.getElementById("from").value);
    var to = parseInt(document.getElementById("to").value);
    var amount = parseInt(document.getElementById("amount").value);
    if (from < to) {
        var result = (from / to * amount).toFixed(4);
        document.getElementById("rate").innerHTML = "Exchange Rate: 1.0 " + fromText + " = " + (from / to).toFixed(4) + " " + toText;
    }
    else {
        var result = from / to * amount;
        document.getElementById("rate").innerHTML = "Exchange Rate: 1.0 " + fromText + " = " + from / to + " " + toText;
    }

    document.getElementById("sec4").style.display = "block";
    document.getElementById("result").innerHTML = amount + " " + fromText + " = " + result + " " + toText;

    document.getElementById("display").innerHTML = amount + " " + fromText + " to " + toText + " Live Foreign Currency Exchange Rate";

    document.getElementById("graphHeading").innerHTML = fromText + " to " + toText + " Last 10 Days Chart";

    var yValues = [];
    var yfValues= [];
    var yFrom;
    var yto;
    var minFrom;
    var minTo;
    var maxFrom;
    var maxTo;
    var minFinal;
    var maxFinal;

    

// for(j=0; j<document.getElementById("from").length; j++){
//     var usd;
//     for(k=0; k<10; k++){
//         var max = document.getElementById("from")[j].value+10;
//         var min = document.getElementById("from")[j].value-5;
//         const rand = Math.floor(Math.random() * (max - min + 1) + min);
//         console.log(rand);
//         usd = {yValues:yValues.push(rand)};
//     }
//     // console.log(usd.yValues);
// }




    if (fromText == "AFN") {

        yFrom = [9, 11, 7, 12, 5, 17, 20, 13, 7, 10];
        minFrom = 4;
        maxFrom = 21;
    }
    else if (fromText == "CAD") {
        yFrom = [19, 21, 17, 22, 15, 27, 30, 23, 17, 20];
        minFrom = 14;
        maxFrom = 31;
    }
    else if (fromText == "GBP") {
        yFrom = [29, 31, 27, 32, 25, 37, 40, 33, 27, 30];
        minFrom = 24;
        maxFrom = 41;
    }
    else if (fromText == "KWD") {
        yFrom = [39, 41, 37, 42, 35, 47, 50, 43, 37, 40];
        minFrom = 34;
        maxFrom = 51;

    }
    else if (fromText == "SAR") {
        yFrom = [49, 51, 47, 52, 45, 57, 60, 53, 47, 50];
        minFrom = 44;
        maxFrom = 61;
    }
    else if (fromText == "USD") {
        yFrom = [59, 61, 57, 62, 55, 67, 70, 63, 57, 60];
        minFrom = 54;
        maxFrom = 71;
    }
    else if (fromText == "PKR") {
        yFrom = [2, 1.5, 3, 4, 2.5, 1.8, 0.5, 0.7, 0.9, 1];
        minFrom = 0.4;
        maxFrom = 5;
    }

    if (toText == "AFN") {

        yto = [9, 11, 7, 12, 5, 17, 20, 13, 7, 10];
        minTo = 4;
        maxTo = 21;
    }
    else if (toText == "CAD") {
        yto = [19, 21, 17, 22, 15, 27, 30, 23, 17, 20];
        minTo = 14;
        maxTo = 31;
    }
    else if (toText == "GBP") {
        yto = [29, 31, 27, 32, 25, 37, 40, 33, 27, 30];
        minTo = 24;
        maxTo = 41;
    }
    else if (toText == "KWD") {
        yto = [39, 41, 37, 42, 35, 47, 50, 43, 37, 40];
        minTo = 34;
        maxTo = 51;

    }
    else if (toText == "SAR") {
        yto = [49, 51, 47, 52, 45, 57, 60, 53, 47, 50];
        minTo = 44;
        maxTo = 61;
    }
    else if (toText == "USD") {
        yto = [59, 61, 57, 62, 55, 67, 70, 63, 57, 60];
        minTo = 54;
        maxTo = 71;
    }
    else if (toText == "PKR") {
        yto = [2, 1.5, 3, 4, 2.5, 1.8, 0.5, 0.7, 0.9, 1];
        minTo = 0.4;
        maxTo = 5;
    }

    for (i = 0; i < 10; i++) {
        yValues.push(yFrom[i] / yto[i]);
    }

    minFinal = minFrom / maxTo;
    maxFinal = maxFrom / minTo;

    var xValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    new Chart("myChart", {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
                fill: true,
                pointRadius: 5,
                backgroundColor: "rgba(0,128,128,0.3)",
                borderColor: "rgba(0,128,128,1)",
                data: yValues
            }]
        },
        options: {
            legend: { display: false },
            scales: {
                yAxes: [{ ticks: { min: minFinal, max: maxFinal } }],
            }
        }
    });

}

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const rndInt = randomIntFromInterval(1, 6)
console.log(rndInt)

var xValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var yValues = [0.0339, 0.0246, 0.0526, 0.0645, 0.0455, 0.0269, 0.0071, 0.0111, 0.0158, 0.0167];


new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            fill: true,
            pointRadius: 5,
            backgroundColor: "rgba(0,128,128,0.3)",
            borderColor: "rgba(0,128,128,1)",
            data: yValues
        }]
    },
    options: {
        legend: { display: false },
        scales: {
            yAxes: [{ ticks: { min: 0.005, max: 0.07 } }],
        }
    }
});