const convInput = document.getElementById("convert-input")
const convBtn = document.getElementById("convert-btn")
const convContainer = document.getElementById("conversion-container")
const modeBtn = document.getElementById("mode-btn")

const unit = [
    {
        title: "Legth (Meter/Feet)",
        metric: "m",
        imperial: "ft",
        conversionUnit: 3.281
    },
    {
        title: "Area (Square Meter/Square Feet)",
        metric: "m²",
        imperial: "sq ft",
        conversionUnit: 10.7639104 
    },
    {
        title: "Volume (Liters/Gallons)", 
        metric: "l",
        imperial: "gal",
        conversionUnit: 0.264},
    {
        title: "Mass (Kilograms/Pounds)",
        metric: "kg",
        imperial: "lb",
        conversionUnit: 2.204
    }
]

convBtn.addEventListener("click", function(){
    
    let inputVal = Number(convInput.value)

    let convContainerDOM = ""

    for (let i = 0; i < unit.length; i++){

        let metricToImperial = (inputVal * unit[i].conversionUnit).toFixed(3)
        let imperialToMetric = (inputVal / unit[i].conversionUnit).toFixed(3)

        convContainerDOM += 
        `
        <div class="conversion">
            <h3>${unit[i].title}</h3>
            <p>
                ${inputVal} ${unit[i].metric} = ${metricToImperial} ${unit[i].imperial} | 
                ${inputVal} ${unit[i].imperial} = ${imperialToMetric} ${unit[i].metric}
            </p>
        </div>
        `
    }

    if(!Number.isNaN(inputVal) && convInput.value != ""){
        convContainer.innerHTML = convContainerDOM
    }else{
        convContainer.innerHTML = `<p>Digit a number please! 🤯</p>`
    }

})

convInput.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        event.preventDefault()
        convBtn.click()
    }
})