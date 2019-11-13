// ¿Cuantos peces hay en el estanque
var pecesRojos = 461;
var pecesAzules = 217;
document.write("<h3>¿Cuantos peces hay en el acuario?</h3><p>Peces rojos: " + pecesRojos + "<br>Peces azules: " + pecesAzules + "</p>");

// ¿cuanto se ha gastado Carmen?
var dineroInicial = 50000;
var saldo = 15000;
var gasto = dineroInicial - saldo;
document.write("<h3>¿Cuanto se ha gastado Carmen?</h3><p>carmen se ha gastado: $" + gasto + "</p>");


// ¿Cuánto dinero me he gastado en total?
var camisetas = 17478 * 3;
var zapatillas = 84633;
var pantalones = 110391;
var descuento = 29437;
var pago = (camisetas + zapatillas + pantalones) - descuento
document.write("<h3>¿Cuánto dinero me he gastado en total?</h3><p>En total en la compra online me gaste: $" + pago + "</p>");


//¿Cuánto te ha costado el ordenador?
var costo = 2428623;
var dctoProntoPago = 0.1;
var pagoTotal = costo - (costo * dctoProntoPago);
document.write("<h3>¿Cuánto te ha costado el ordenador?</h3><p>El ordenador me costo: XXX hallar $" + parseInt(pagoTotal) + "</p>");


// ¿Qué precio tenían antes del descuento?
var vrPagado = 125110;
var dctoCompra = 0.2;
var vrTotalCompra = vrPagado / (1 - dctoCompra);

document.write("<h3>¿Qué precio tenían antes del descuento?</h3><p>Total de compra antes de descuento de: $" + parseInt(vrTotalCompra) + "</p>");

//¿Cuánto costará el teléfono?
var incPorcentual = 0.2;
var precioActual = 1545487;
var precioFuturo = precioActual * (1 + incPorcentual)
document.write("<h3>¿Cuánto costará el teléfono?</h3><p>El telefono costara: $" + parseInt(precioFuturo) + "</p>");

//¿Cuántas vueltas dará un Fidget Spinner?
var vueltasMin = 120;
var segGirando = 700;
var totalVueltas = vueltasMin * (segGirando / 60)
document.write("<h3>¿Cuántas vueltas dará un Fidget Spinner?</h3><p>El Fidget Spinner dara " + parseInt(totalVueltas) + " vueltas</p>");

//¿Cuántas latas de refresco sobran?
var cajaRefrescos = 12;
var refrescosCaja = 12;
var invitados = 65;
var refrescosPersona = parseInt((cajaRefrescos * refrescosCaja) / invitados);
var refrescosSobantes = (cajaRefrescos * refrescosCaja) - (invitados * refrescosPersona);
document.write("<h3>¿Cuántas vueltas dará un Fidget Spinner?</h3><p>El numero de refrescos sobantes es " + parseInt(refrescosSobantes) + "</p>");