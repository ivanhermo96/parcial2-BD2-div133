db.supermercado.drop();
db.empleados.drop();
db.categorias.drop();
db.productos.drop();
db.ventas.drop();

db.supermercado.insertOne({
    _id: 1,
    nombre: "Supermercado Base de Datos II"
});

db.empleados.insertMany([
    { _id: 1, nombre: "Julio", dni: 39747420, categoria: "empleado" },
    { _id: 2, nombre: "Romina", dni: 42667522, categoria: "supervisora" },
    { _id: 3, nombre: "Marco", dni: 45267894, categoria: "empleado" },
    { _id: 4, nombre: "Julieta", dni: 40578141, categoria: "empleado" }
]);

db.categorias.insertMany([
    { _id: 1, nombre: "Almacén" },
    { _id: 2, nombre: "Congelados" },
    { _id: 3, nombre: "Productos de Limpieza" }
]);

db.productos.insertMany([
    { _id: 1, nombre: "Arroz Gallo 1kg", precio: 1800, stock: 50, categoriaId: 1 },
    { _id: 2, nombre: "Fideos Matarazzo", precio: 1200, stock: 80, categoriaId: 1 },
    { _id: 3, nombre: "Yerba Playadito 1kg", precio: 6500, stock: 40, categoriaId: 1 },
    { _id: 4, nombre: "Azúcar Ledesma 1kg", precio: 1400, stock: 60, categoriaId: 1 },
    { _id: 5, nombre: "Aceite Cocinero 900ml", precio: 2500, stock: 35, categoriaId: 1 },

    { _id: 6, nombre: "Hamburguesas Paty x4", precio: 4800, stock: 30, categoriaId: 2 },
    { _id: 7, nombre: "Milanesas de Pollo", precio: 6200, stock: 20, categoriaId: 2 },
    { _id: 8, nombre: "Papas McCain", precio: 3900, stock: 25, categoriaId: 2 },
    { _id: 9, nombre: "Helado Frigor", precio: 4500, stock: 18, categoriaId: 2 },
    { _id: 10, nombre: "Medallones de Merluza", precio: 5800, stock: 15, categoriaId: 2 },

    { _id: 11, nombre: "Lavandina Ayudín", precio: 1700, stock: 45, categoriaId: 3 },
    { _id: 12, nombre: "Detergente Magistral", precio: 2100, stock: 40, categoriaId: 3 },
    { _id: 13, nombre: "Limpiador Cif", precio: 2400, stock: 30, categoriaId: 3 },
    { _id: 14, nombre: "Jabón en Polvo Ala", precio: 3900, stock: 25, categoriaId: 3 },
    { _id: 15, nombre: "Suavizante Comfort", precio: 3100, stock: 20, categoriaId: 3 }
]);

db.ventas.insertMany([
    {
        _id: 1,
        empleadoId: 1,
        fecha: new Date("2026-06-10"),
        productos: [
            { productoId: 1, nombre: "Arroz Gallo 1kg", cantidad: 2, precioUnitario: 1800 },
            { productoId: 2, nombre: "Fideos Matarazzo", cantidad: 4, precioUnitario: 1200 },
            { productoId: 3, nombre: "Yerba Playadito 1kg", cantidad: 1, precioUnitario: 6500 },
            { productoId: 4, nombre: "Azúcar Ledesma 1kg", cantidad: 2, precioUnitario: 1400 },
            { productoId: 5, nombre: "Aceite Cocinero 900ml", cantidad: 1, precioUnitario: 2500 },
            { productoId: 11, nombre: "Lavandina Ayudín", cantidad: 2, precioUnitario: 1700 },
            { productoId: 12, nombre: "Detergente Magistral", cantidad: 1, precioUnitario: 2100 }
        ],
        total: 25700
    },
    {
        _id: 2,
        empleadoId: 2,
        fecha: new Date("2026-06-11"),
        productos: [
            { productoId: 6, nombre: "Hamburguesas Paty x4", cantidad: 2, precioUnitario: 4800 },
            { productoId: 7, nombre: "Milanesas de Pollo", cantidad: 1, precioUnitario: 6200 },
            { productoId: 8, nombre: "Papas McCain", cantidad: 3, precioUnitario: 3900 },
            { productoId: 9, nombre: "Helado Frigor", cantidad: 2, precioUnitario: 4500 },
            { productoId: 10, nombre: "Medallones de Merluza", cantidad: 1, precioUnitario: 5800 },
            { productoId: 1, nombre: "Arroz Gallo 1kg", cantidad: 2, precioUnitario: 1800 },
            { productoId: 13, nombre: "Limpiador Cif", cantidad: 1, precioUnitario: 2400 },
            { productoId: 14, nombre: "Jabón en Polvo Ala", cantidad: 1, precioUnitario: 3900 }
        ],
        total: 50700
    },
    {
        _id: 3,
        empleadoId: 1,
        fecha: new Date("2026-06-12"),
        productos: [
            { productoId: 1, nombre: "Arroz Gallo 1kg", cantidad: 5, precioUnitario: 1800 },
            { productoId: 2, nombre: "Fideos Matarazzo", cantidad: 3, precioUnitario: 1200 },
            { productoId: 3, nombre: "Yerba Playadito 1kg", cantidad: 2, precioUnitario: 6500 },
            { productoId: 4, nombre: "Azúcar Ledesma 1kg", cantidad: 4, precioUnitario: 1400 },
            { productoId: 5, nombre: "Aceite Cocinero 900ml", cantidad: 2, precioUnitario: 2500 },
            { productoId: 11, nombre: "Lavandina Ayudín", cantidad: 3, precioUnitario: 1700 },
            { productoId: 15, nombre: "Suavizante Comfort", cantidad: 1, precioUnitario: 3100 }
        ],
        total: 43800
    },
    {
        _id: 4,
        empleadoId: 2,
        fecha: new Date("2026-06-13"),
        productos: [
            { productoId: 6, nombre: "Hamburguesas Paty x4", cantidad: 2, precioUnitario: 4800 },
            { productoId: 7, nombre: "Milanesas de Pollo", cantidad: 2, precioUnitario: 6200 },
            { productoId: 8, nombre: "Papas McCain", cantidad: 2, precioUnitario: 3900 },
            { productoId: 9, nombre: "Helado Frigor", cantidad: 1, precioUnitario: 4500 },
            { productoId: 10, nombre: "Medallones de Merluza", cantidad: 2, precioUnitario: 5800 },
            { productoId: 12, nombre: "Detergente Magistral", cantidad: 2, precioUnitario: 2100 },
            { productoId: 14, nombre: "Jabón en Polvo Ala", cantidad: 1, precioUnitario: 3900 }
        ],
        total: 53700
    },
    {
        _id: 5,
        empleadoId: 3,
        fecha: new Date("2026-06-14"),
        productos: [
            { productoId: 1, nombre: "Arroz Gallo 1kg", cantidad: 1, precioUnitario: 1800 },
            { productoId: 2, nombre: "Fideos Matarazzo", cantidad: 2, precioUnitario: 1200 },
            { productoId: 3, nombre: "Yerba Playadito 1kg", cantidad: 1, precioUnitario: 6500 },
            { productoId: 4, nombre: "Azúcar Ledesma 1kg", cantidad: 1, precioUnitario: 1400 },
            { productoId: 5, nombre: "Aceite Cocinero 900ml", cantidad: 1, precioUnitario: 2500 },
            { productoId: 6, nombre: "Hamburguesas Paty x4", cantidad: 1, precioUnitario: 4800 },
            { productoId: 7, nombre: "Milanesas de Pollo", cantidad: 1, precioUnitario: 6200 },
            { productoId: 8, nombre: "Papas McCain", cantidad: 1, precioUnitario: 3900 },
            { productoId: 9, nombre: "Helado Frigor", cantidad: 1, precioUnitario: 4500 },
            { productoId: 10, nombre: "Medallones de Merluza", cantidad: 1, precioUnitario: 5800 }
        ],
        total: 39800
    }
]);

print("Base de datos creada correctamente.");