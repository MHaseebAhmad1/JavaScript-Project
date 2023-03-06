async function fetchText() {
    let domainData;
    if (sessionStorage.getItem("domainData") != null) {
        domainData = JSON.parse(sessionStorage.getItem("domainData"));
    }
    else {
        let domainLink = await fetch('https://billing.ipgeolocation.io/plan');
        let data = await domainLink.text();
        sessionStorage.setItem("domainData", data);
        domainData = JSON.parse(sessionStorage.getItem("domainData"));
    }

    var monthlyPlans = [];
    var yearlyPlans = [];
    yearlyPlans.push(domainData[0]);
    for (k = 0; k <= domainData.length; k++) {
        if (domainData[k].planType == "API" && domainData[k].interval == "month" || domainData[k].interval == "day") {
            monthlyPlans.push(domainData[k]);
        }
        else if (domainData[k].planType == "API" && domainData[k].interval == "year") {
            yearlyPlans.push(domainData[k]);
        }
        else {
            break;
        }
    }

     // Monthly

    const div = document.querySelector("#api_Plans_Monthly");
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    div.appendChild(rowDiv);
    for (p = 0; p < monthlyPlans.length; p++) {
        const stepDiv = document.createElement("div");
        stepDiv.classList.add("step");
        rowDiv.appendChild(stepDiv);
        const header = document.createElement("header");
        stepDiv.appendChild(header);
        const h2 = document.createElement("h2");
        h2.classList.add(monthlyPlans[p].name + "Name" + monthlyPlans[p].interval);
        header.appendChild(h2);
        document.getElementsByClassName(monthlyPlans[p].name + "Name" + monthlyPlans[p].interval)[0].innerHTML = monthlyPlans[p].name;
        const h3 = document.createElement("h3");
        h3.classList.add(monthlyPlans[p].name + "Rate" + monthlyPlans[p].interval);
        header.appendChild(h3);
        const para = document.createElement("p");
        if (monthlyPlans[p].rate == 0.00) {
            h3.textContent = "Free";
            para.textContent = "For Non Commercial Usage";
        }
        else {
            document.getElementsByClassName(monthlyPlans[p].name + "Rate" + monthlyPlans[p].interval)[0].innerHTML = "$" + monthlyPlans[p].rate;
            para.textContent = "Per month*";
        }
        header.appendChild(para);
        const h4 = document.createElement("h4");
        h4.classList.add(monthlyPlans[p].name + "RequestsLimit" + monthlyPlans[p].interval);
        stepDiv.appendChild(h4);
        if (monthlyPlans[p].planApiUsageLimit.requests < 1000000) {
            document.getElementsByClassName(monthlyPlans[p].name + "RequestsLimit" + monthlyPlans[p].interval)[0].innerHTML = monthlyPlans[p].planApiUsageLimit.requests / 1000 + "K requests per month";
        }
        else {
            document.getElementsByClassName(monthlyPlans[p].name + "RequestsLimit" + monthlyPlans[p].interval)[0].innerHTML = monthlyPlans[p].planApiUsageLimit.requests / 1000000 + "M requests per month";
        }
        const h6 = document.createElement("h6");
        h6.classList.add(monthlyPlans[p].name + "SurchargeRate" + monthlyPlans[p].interval);
        stepDiv.appendChild(h6);
        if (monthlyPlans[p].rate == 0.00) {
            h6.textContent = "1K Daily Limit";
        }
        else {
            document.getElementsByClassName(monthlyPlans[p].name + "SurchargeRate" + monthlyPlans[p].interval)[0].innerHTML = "$" + monthlyPlans[p].planApiUsageLimit.surchargeRate + " Per Extra " + monthlyPlans[p].planApiUsageLimit.surchargeRequests / 1000 + "K Requests";
        }
        const linkDiv = document.createElement("div");
        linkDiv.classList.add("link");
        stepDiv.appendChild(linkDiv);
        const anchor = document.createElement("a");
        anchor.href = "signup.html";
        anchor.textContent = "Sign Up for Free";
        linkDiv.appendChild(anchor);
    }


    // Yearly


    var cnt = 1;

    const divYearly = document.querySelector("#api_Plans_Yearly");
    const rowDivYearly = document.createElement("div");
    rowDivYearly.classList.add("row");
    divYearly.appendChild(rowDivYearly);
    for (p = 0; p < yearlyPlans.length; p++) {
        const stepDiv = document.createElement("div");
        stepDiv.classList.add("step");
        rowDivYearly.appendChild(stepDiv);
        const header = document.createElement("header");
        stepDiv.appendChild(header);
        const h2 = document.createElement("h2");
        h2.classList.add(yearlyPlans[p].name + "Name" + yearlyPlans[p].interval);
        header.appendChild(h2);
        document.getElementsByClassName(yearlyPlans[p].name + "Name" + yearlyPlans[p].interval)[cnt].innerHTML = yearlyPlans[p].name;
        const h3 = document.createElement("h3");
        h3.classList.add(yearlyPlans[p].name + "Rate" + yearlyPlans[p].interval);
        header.appendChild(h3);
        const para = document.createElement("p");
        if (yearlyPlans[p].rate == 0.00) {
            h3.textContent = "Free";
            para.textContent = "For Non Commercial Usage";
        }
        else {
            h3.textContent = " $" + yearlyPlans[p].rate;
            const sup = document.createElement("sup");
            sup.classList.add("crossed-rate");
            h3.appendChild(sup);
            const del = document.createElement("del");
            sup.appendChild(del);
            del.textContent = "$" + (yearlyPlans[p].rate + yearlyPlans[p].rate / 10);
            para.textContent = "Per year*";
        }
        header.appendChild(para);
        const h4 = document.createElement("h4");
        h4.classList.add(yearlyPlans[p].name + "RequestsLimit" + yearlyPlans[p].interval);
        stepDiv.appendChild(h4);
        if (yearlyPlans[p].planApiUsageLimit.requests < 1000000) {
            if (yearlyPlans[p].rate == 0.00) {
                document.getElementsByClassName(yearlyPlans[p].name + "RequestsLimit" + yearlyPlans[p].interval)[cnt].innerHTML = yearlyPlans[p].planApiUsageLimit.requests / 1000 + "K requests per month";
            }
            else {
                document.getElementsByClassName(yearlyPlans[p].name + "RequestsLimit" + yearlyPlans[p].interval)[cnt].innerHTML = yearlyPlans[p].planApiUsageLimit.requests / 1000 + "K requests per year";
            }
        }
        else {
            document.getElementsByClassName(yearlyPlans[p].name + "RequestsLimit" + yearlyPlans[p].interval)[cnt].innerHTML = yearlyPlans[p].planApiUsageLimit.requests / 1000000 + "M requests per year";
        }
        const h6 = document.createElement("h6");
        h6.classList.add(yearlyPlans[p].name + "SurchargeRate" + yearlyPlans[p].interval);
        stepDiv.appendChild(h6);
        if (yearlyPlans[p].rate == 0.00) {
            h6.textContent = "1K Daily Limit";
        }
        else {
            document.getElementsByClassName(yearlyPlans[p].name + "SurchargeRate" + yearlyPlans[p].interval)[cnt].innerHTML = "$" + yearlyPlans[p].planApiUsageLimit.surchargeRate + " Per Extra " + yearlyPlans[p].planApiUsageLimit.surchargeRequests / 1000 + "K Requests";
        }
        const linkDiv = document.createElement("div");
        linkDiv.classList.add("link");
        stepDiv.appendChild(linkDiv);
        const anchor = document.createElement("a");
        anchor.href = "signup.html";
        anchor.textContent = "Sign Up for Free";
        linkDiv.appendChild(anchor);

        cnt = 0;
    }
}