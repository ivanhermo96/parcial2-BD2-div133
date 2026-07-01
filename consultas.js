print("\nCONSULTA 1 - Ventas con datos del empleado");
db.ventas.aggregate([
    {
        $lookup: {
            from: "empleados",
            localField: "empleadoId",
            foreignField: "_id",
            as: "empleado"
        }
    },
    { $unwind: "$empleado" },
    {
        $project: {
            _id: 1,
            fecha: {
                $dateToString: {
                    format: "%d-%m-%Y",
                    date: "$fecha"
                }
            },
            total: 1,
            empleado: "$empleado.nombre",
            categoriaEmpleado: "$empleado.categoria"
        }
    },
    { $sort: { _id: 1 } }
]).forEach(printjson);

print("\nCONSULTA 2 - Total facturado por empleado");
db.ventas.aggregate([
    {
        $group: {
            _id: "$empleadoId",
            totalFacturado: { $sum: "$total" },
            cantidadVentas: { $sum: 1 }
        }
    },
    {
        $lookup: {
            from: "empleados",
            localField: "_id",
            foreignField: "_id",
            as: "empleado"
        }
    },
    { $unwind: "$empleado" },
    {
        $project: {
            _id: 0,
            empleado: "$empleado.nombre",
            categoria: "$empleado.categoria",
            cantidadVentas: 1,
            totalFacturado: 1
        }
    },
    { $sort: { totalFacturado: -1 } }
]).forEach(printjson);

print("\nCONSULTA 3 - Productos más vendidos");
db.ventas.aggregate([
    { $unwind: "$productos" },
    {
        $group: {
            _id: "$productos.productoId",
            nombre: { $first: "$productos.nombre" },
            cantidadVendida: { $sum: "$productos.cantidad" },
            totalRecaudado: {
                $sum: {
                    $multiply: [
                        "$productos.cantidad",
                        "$productos.precioUnitario"
                    ]
                }
            }
        }
    },
    { $sort: { cantidadVendida: -1 } }
]).forEach(printjson);

print("\nCONSULTA 4 - Ventas mayores a $50.000");
db.ventas.aggregate([
    { $match: { total: { $gt: 50000 } } },
    {
        $lookup: {
            from: "empleados",
            localField: "empleadoId",
            foreignField: "_id",
            as: "empleado"
        }
    },
    { $unwind: "$empleado" },
    {
        $project: {
            _id: 1,
            fecha: {
                $dateToString: {
                    format: "%d-%m-%Y",
                    date: "$fecha"
                }
            },
            total: 1,
            empleado: "$empleado.nombre"
        }
    },
    { $sort: { total: -1 } }
]).forEach(printjson);

print("\nCONSULTA 5 - Recaudación por día");
db.ventas.aggregate([
    {
        $group: {
            _id: {
                $dateToString: {
                    format: "%d-%m-%Y",
                    date: "$fecha"
                }
            },
            recaudacionDiaria: { $sum: "$total" },
            cantidadVentas: { $sum: 1 }
        }
    },
    { $sort: { _id: 1 } }
]).forEach(printjson);

print("\nCONSULTA 6 - Promedio de importe por venta");
db.ventas.aggregate([
    {
        $group: {
            _id: null,
            promedioVenta: { $avg: "$total" },
            ventaMinima: { $min: "$total" },
            ventaMaxima: { $max: "$total" },
            totalGeneral: { $sum: "$total" }
        }
    },
    {
        $project: {
            _id: 0,
            promedioVenta: 1,
            ventaMinima: 1,
            ventaMaxima: 1,
            totalGeneral: 1
        }
    }
]).forEach(printjson);

print("\nCONSULTA 7 - Recaudación por categoría");
db.ventas.aggregate([
    { $unwind: "$productos" },
    {
        $lookup: {
            from: "productos",
            localField: "productos.productoId",
            foreignField: "_id",
            as: "productoCompleto"
        }
    },
    { $unwind: "$productoCompleto" },
    {
        $lookup: {
            from: "categorias",
            localField: "productoCompleto.categoriaId",
            foreignField: "_id",
            as: "categoria"
        }
    },
    { $unwind: "$categoria" },
    {
        $group: {
            _id: "$categoria.nombre",
            unidadesVendidas: { $sum: "$productos.cantidad" },
            recaudacion: {
                $sum: {
                    $multiply: [
                        "$productos.cantidad",
                        "$productos.precioUnitario"
                    ]
                }
            }
        }
    },
    { $sort: { recaudacion: -1 } }
]).forEach(printjson);

print("\nCONSULTA 8 - Cantidad de productos diferentes por venta");
db.ventas.aggregate([
    {
        $project: {
            _id: 1,
            fecha: {
                $dateToString: {
                    format: "%d-%m-%Y",
                    date: "$fecha"
                }
            },
            total: 1,
            cantidadProductosDiferentes: { $size: "$productos" }
        }
    },
    { $sort: { cantidadProductosDiferentes: -1 } }
]).forEach(printjson);