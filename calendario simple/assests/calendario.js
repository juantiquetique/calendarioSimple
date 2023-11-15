const select = document.getElementById("calendario")
const mes = document.getElementById("mes")
const dia = document.getElementById("dia")

select.onchange = () => {
    if(select.value === "Enero" || select.value === "Marzo" || select.value === "Mayo" || select.value === "Julio" || select.value === "Agosto" || select.value === "Octubre" || select.value === "Diciembre")
    {
        // alert("31");
        mes.textContent = select.value;
        
        for(let i = 0; i< 31; i++){
            dia.textContent = i +1
        }
    }
    else if(select.value === "Abril" || select.value === "Junio" || select.value === "Septiembre" || select.value === "Noviembre")
    {
        // alert("30");
        mes.textContent = select.value;
        for(let i = 0; i< 30; i++){
            dia.textContent = i +1
        }
    }
    else if(select.value === "Febrero")
    {
        // alert("28");
        mes.textContent = select.value;
        for(let i = 0; i< 28; i++){
            dia.textContent = i +1
        }
    }
}

