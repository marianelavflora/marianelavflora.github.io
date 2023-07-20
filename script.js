var values = ["demostracion 2.3","demostracion 2.6","go","here"]
const  str1 = "demostracion 2.3";
const  str2 = "demostracion 2.6";
const  str3 = "demostracion 3.7";

function sortear() { 
    values[Math.floor(Math.random() * values.length)];
    sorteado = values[Math.floor(Math.random() * values.length)];;
    document.getElementById("teoricoSorteado").textContent = sorteado;
    
    }
