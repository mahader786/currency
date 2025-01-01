async function wether() {
    let input = document.querySelector('.input').value;
    let selectf = document.querySelector('.selectf').value;
    let selects = document.querySelector('.selects').value;

    let apiurl= await fetch(`https://api.exchangerate-api.com/v4/latest/${selectf}`);
    let convert=await apiurl.json();
    calculate(convert.rates[selects],input,selectf,selects);
}

function calculate(data,input,selectf,selects){
    let resultData = ((data*input)).toFixed(2);
    let result = document.querySelector('.result p');
    result.innerHTML = `${input} ${selectf} = ${resultData} ${selects} `
}