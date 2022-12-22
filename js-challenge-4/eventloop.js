// function sumABC(b) {
//     const a = 10
//     return a + b + 11
// }

// function multiplyXY(x) {
//     const y = 3
//     return sumABC(x*y)
// }

// const assign = multiplyXY(7)

// console.log(assign)


// EVENT LOOP
// JavaScript tiene un modelo de tiempo de ejecución basado en un bucle de eventos,
// que es responsable de ejecutar el código, recopilar y procesar eventos y ejecutar
// subtareas en cola.


// 1. Cuando llamamos a la funcion ASSIGN lo primero que pasa es
// crear un marco que contiene referencias a los argumentos pasados
// 2. Cuando multiplyXY llama a sumABC, se crea un segundo marco y se coloca sobre 
// el primero, que contiene referencias a los argumentos y variables locales de sumABC.
// 3. Cuando sumABC regresa, el elemento del marco superior se saca de la pila
// (dejando solo el marco de llamada de multiplyXY).
// 4. Cuando la barra regresa, la pila está vacía.


function addToQueue() {
    queueMicrotask(() => {
        console.log("Microtask 1");
        queueMicrotask(() => {
            console.log("Microtask 2");
        });
    });
}

function intervalCallback() {
    count++
    console.log("clearing the interval after ", count, " seconds");
    addToQueue();
    Promise.resolve().then(promiseCallBack)
}

function promiseCallBack() {
    console.log("Hello from Promise");
}


let count = 0;
setTimeout(intervalCallback, 1000);

Promise.resolve().then(promiseCallBack);

setTimeout(intervalCallback, 1000);