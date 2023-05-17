const boxer = [
    
        {id:0110 , modelo: "rayas finas", marca:"dufour" , color:"negro" , precio:"$1100", stock:100 },
        {id:0111 , modelo: "rayas finas", marca:"dufour" , color:"blanco" , precio:"$1100", stock:100 },
        {id:0112 , modelo: "rayas finas", marca:"dufour" , color:"azul" , precio:"$1100", stock:100 },
        {id:0113 , modelo: "rayas finas", marca:"dufour" , color:"rojo" , precio:"$1100", stock:100 },
        {id:0120 , modelo: "rayas anchas", marca:"dufour" , color:"blanco" , precio:"$1200", stock:100 },
        {id:0121 , modelo: "rayas anchas", marca:"dufour" , color:"azul" , precio:"$1200", stock:100 },
        {id:0122 , modelo: "rayas anchas", marca:"dufour" , color:"rojo" , precio:"$1200", stock:100 },
        {id:0210 , modelo: "liso", marca:"zorba" , color:"negro" , precio:"$1000", stock:100 } ,   
        {id:0211 , modelo: "liso", marca:"zorba" , color:"blanco" , precio:"$1000", stock:100 } ,
        {id:0212 , modelo: "liso", marca:"zorba" , color:"azul" , precio:"$1000", stock:100 } ,
        {id:0213 , modelo: "liso", marca:"zorba" , color:"rojo" , precio:"$1000", stock:100 } ,
        {id:0214 , modelo: "liso", marca:"zorba" , color:"gris" , precio:"$1000", stock:100 } ,
        {id:0215 , modelo: "liso", marca:"zorba" , color:"verde" , precio:"$1000", stock:100 } ,
    ]

    const medias = [
    
        {id:1010 , modelo: "soquete", marca:"animadas" , DibujoOcolor:"Don Barredora" , precio:"$450", stock:100 },
        {id:1011 , modelo: "soquete", marca:"animadas" , DibujoOcolor:"Bob Esponja" , precio:"$450", stock:100 },
        {id:1012 , modelo: "soquete", marca:"animadas" , DibujoOcolor:"Patricio" , precio:"$450", stock:100 },
        {id:1013 , modelo: "soquete", marca:"animadas" , DibujoOcolor:"Trencito choose you" , precio:"$450", stock:100 },
        {id:1020 , modelo: "soquete", marca:"animadas" , DibujoOcolor:"Messi" , precio:"$450", stock:100 },
        {id:1121 , modelo: "largas", marca:"animadas" , DibujoOcolor:"Patricio" , precio:"$700", stock:100 },
        {id:1122 , modelo: "largas", marca:"animadas" , DibujoOcolor:"Homero" , precio:"$700", stock:100 },
        {id:1110 , modelo: "largas", marca:"animadas" , DibujoOcolor:"Pringles" , precio:"$700", stock:100 } ,   
        {id:1111 , modelo: "largas", marca:"animadas" , DibujoOcolor:"Nirbartna" , precio:"$700", stock:100 } ,
        {id:1112 , modelo: "largas", marca:"animadas" , DibujoOcolor:"Bob Esponja" , precio:"$700", stock:100 } ,
        {id:1210 , modelo: "3/4", marca:"Nike" , DibujoOcolor:"Blanco" , precio:"$650", stock:100 } ,
        {id:1211 , modelo: "3/4", marca:"Adidas" , DibujoOcolor:"Negro" , precio:"$650", stock:100 } ,
        {id:1212 , modelo: "3/4", marca:"Vans" , DibujoOcolor:"Verde" , precio:"$650", stock:100 } ,
        {id:1213 , modelo: "3/4", marca:"Animadas" , DibujoOcolor:"Varios" , precio:"$650", stock:100 } ,
        {id:1214 , modelo: "3/4", marca:"Topper" , DibujoOcolor:"Blanco" , precio:"$650", stock:100 } ,
    ]   
    

const bombachas = [
    
    {id:2110 , modelo: "Tanga", marca:"" , color:"Negro" ,precio:"$650", stock:100 },
    {id:2111 , modelo: "Colaless", marca:"" , color:"Blanco" ,precio:"$650", stock:100 },
    {id:2112 , modelo: "", marca:"" , color:"Azul" ,precio:"$650", stock:100 },
    {id:2113 , modelo: "", marca:"" , color:"Rojo" ,precio:"$650", stock:100 },
    {id:2114 , modelo: "", marca:"" , color:"Blanco" ,precio:"$650", stock:100 },
    {id:2115 , modelo: "", marca:"" , color:"Azul" ,precio:"$650", stock:100 },
    {id:2116 , modelo: "", marca:"" , color:"Rojo" ,precio:"$650", stock:100 },
    {id:2217 , modelo: "", marca:"" , color:"Negro" ,precio:"$650", stock:100 } ,   
    {id:2218 , modelo: "", marca:"" , color:"Blanco" ,precio:"$650", stock:100 } ,
    {id:2219 , modelo: "", marca:"" , color:"Azul" ,precio:"$650", stock:100 } ,
    {id:2220 , modelo: "", marca:"" , color:"Rojo" ,precio:"$650", stock:100 } ,
    {id:2221 , modelo: "", marca:"" , color:"Gris" ,precio:"$650", stock:100 } ,
    {id:2222 , modelo: "", marca:"" , color:"Verde" ,precio:"$650", stock:100 } ,
] 

let marca=  prompt("Ingrese la marca del boxer buscado:")
const busquedab = boxer.filter(item => item.marca ===marca);
busquedab.forEach(item => {
    let resultado= `
    ID:${item.id}
    MODELO:${item.modelo}
    MARCA:${item.marca}
    COLOR:${item.color}
    PRECIO:${item.precio} 
    
    ` ;
    alert (resultado)   
}); 


let precio= parseint(prompt("Ingrese el precio minimo:"))
const busquedam1 = medias.filter(item => item.precio >precio);
busquedam1.forEach(item => {
    let resultado= `
    ID:${item.id}
    MODELO:${item.modelo}
    MARCA:${item.marca}
    COLOR:${item.color}
    PRECIO:${item.precio} 
    
    ` ;
    alert (resultado)   
}); 



console.log (busquedab); 

const busquedam = medias.filter(item => item.modelo ==="Soquete");
console.log (busquedam); 

const busquedabm = bombachas.filter(item => item.color ==="Blanco");
console.log (busquedabm); 