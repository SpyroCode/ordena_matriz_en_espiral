// ordena en forma de espiral 
// en sentido  de las manecillas 
// de reloj una matriz cuadratica n*n
// dada con valor de n en la linea 94 asignar el valor de n 

//inicializar variables vacias
let vector=[]
let matriz=[]
let vectorResult=[]
//funciones
const LLenarVector=(n)=>{
    let iterador= 1;
    let tamVector = n*n;
    let result=new Array()
    for(let i=0;i<tamVector;i++){

        result[i] = iterador;
        iterador++;
    }
    

    return {
        result,
        n
    };
}

const LlenarMatrix=(vector,n)=>{
    //console.log(n);
    let result = new Array();
    let iterador=0;
    for(let i=0;i<n;i++){
        result[i] = new Array(n);
        for(let j=0;j<n;j++){
            
            result[i][j] = vector[iterador];
            iterador++;
            
        }
        
    }
    
    return {
        
        result,n
    }

    
    
    
}
const extraerFilas=(element,n)=>{
    let cont=0;
    let x=0
    let y=0
    let result=new Array();
    
    for(let i=0;i<n;i++){
        result[cont]=element[x][i];
        y=i;
        cont++;
    }
    
    for(let i=1;i<n;i++){
            result[cont]=element[i][y];
            cont++;
    }

    return result
}

const getVector=(matriz,n,vectorResult)=>{
    num=0;
    let result=[]
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            
            if (!vectorResult.includes(matriz[i][j])) {
                
                result[num] = matriz[i][j];
                num++;
            }
        }
    }
    result=result.reverse()
    n=Math.sqrt(num);
    return {
        result,
        n
    }
}
//termina funciones
//inicia
let n=5  ///asignar valor de tamaño de matrix  n*n
console.log('tamaño de matriz n*n : ',n);
vector=LLenarVector(n); //genera el vector para transformar a matriz
console.log('vector inicial :',vector.result);
//nicio de algoritmo
do {
    matriz=LlenarMatrix(vector.result,vector.n).result;
    console.log('ordenando matriz',matriz);
    n=LlenarMatrix(vector.result,vector.n).n
    vectorResult.push(...extraerFilas(matriz,n))
    vector=getVector(matriz,n,vectorResult)
} while (vector.result.length>0);


//resultado
console.log('vector resultado :',vectorResult);



