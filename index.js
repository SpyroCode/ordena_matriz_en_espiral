let n=3;
let element = new Array();
let element2=new Array(); //auxiliar
let result2=new Array(); //auxiliar
let result=new Array();
let iterador=1;

//llenar cada posición en array de n*n

for(let i=0;i<n;i++){
    element[i] = new Array(n);
    for(let j=0;j<n;j++){
        
        element[i][j] = iterador;
        iterador++;
        
    }
    
}

console.log(element,n);
//extracion filas y columnas
const matriz1=(element)=>{
    let cont=0;
    let x=0
    let y=0
    let result=new Array();
    
    for(let i=0;i<n;i++){
        result[cont]=element[y][i];
        x=i;
        cont++;
    }
    
    for(let i=1;i<n;i++){
            result[cont]=element[i][x];
            y=i;
            cont++;
    }

    return result
}
//lenado de array de unidimensional resultante
result=matriz1(element,n)
num=0;
for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        
        if (!result.includes(element[i][j])) {
           
            element2[num] = element[i][j];
            num++;
        }
    }
}

element2=element2.reverse()
n=Math.sqrt(num);
iterador=0;
element=[];
for(let i=0;i<n;i++){
    element[i] = new Array(n);
    for(let j=0;j<n;j++){
        
        element[i][j] = element2[iterador];
        iterador++;
        
    }
    
}

console.log(element,n);
result2=matriz1(element,n)
result.push(...result2);
//console.log(element,n);
//console.log(element2);
console.log(result);
//console.log(result3);


