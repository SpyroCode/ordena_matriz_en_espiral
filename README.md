# ORDENA MATRIZ EN CARACOL

Se crea un Algoritmo de una matriz n*n que se genera la ordena en caracol en forma de las manecillas de reloj en forma de espiral

## Comenzando 🚀

En la linea 94 del archivo index.js asignar la variable de n "en el ejemplo se asigna valor de [3] pero puede ser cualquier valor"

```
let n=3 <!--puede ser cualquier valor-->

```

Consta de 3 funciones dentro de un bucle do...while que se encarga del tratado de los datos de la matriz y extracción de la información

```
LlenarMatrix(vector.result,vector.n)
extraerFilas(matriz,n)
getVector(matriz,n,vectorResult)
```
Esta función se encarga del llenado del vector para crear la matriz dado por el valor de n, actualmente lo hace con una matriz de 1..n según el valor de n, pero se puede generar con datos aleatorios agregando al iterador una función random, inclusive de elementos diferentes a números enteros
```
vector=LLenarVector(n)

```

El valor del resultado se almacena en el siguiente arreglo lineal

```
vectorResult[]


```

## Ejecutando  ⚙️

se puede usar con node.js con el siguiente comando

```
node index.js

```

y visualizar los datos en consola