let precio = 0
let cantProductos = 0
let valor = -1
let descuento = 0
let porcentajeDescuentoJubilado = 0.12
let precioFinal = 0
let jubilado = false

alert("Bienvenido a la Calculadora de Precios")



while (valor != 0) {
    valor = Number(prompt("Ingresá el precio del Producto (0 para finalizar): "))
    precio = precio + valor
    cantProductos++  
}

cantProductos--

let jubiladoSiNo = prompt("Si es Jubilado ingrese 1, caso contrario ingrese 2: ")
switch (jubiladoSiNo) {
    case '1':
        jubilado = true
        break
    case '2':
        jubilado = false
        break
}

if (jubilado) {
    descuento = precio * porcentajeDescuentoJubilado
    alert("Por ser Jubilado cuenta con un descuento sobre el precio total del 12%")
} else {
    descuento = 0
}

precioFinal = precio - descuento

alert("\nPrecio Total: " + precio.toFixed(2) + "\n\nCant. Productos: " + cantProductos +"\n\nDescuento: " + descuento.toFixed(2) + "\n\nPrecio Final: " + precioFinal.toFixed(2))

alert("Gracias por utilizar la Calculadora de Precios\n\n¡Vuelva Prontos!")