var values = ["Demuestre que el producto de Ab es inversible y (AB)^-1 = A^-1*B^-1 (Teorema 2.10.3)","Enuncie el teorema de Roche Frobeniuis","Demuestre la derivada de una suma de f(x) y g(x)","Enuncie 3 propiedades del Producto Punto"]


function sortear() { 
    values[Math.floor(Math.random() * values.length)];
    sorteado = values[Math.floor(Math.random() * values.length)];;
    document.getElementById("teoricoSorteado").textContent = sorteado;
    
    }
