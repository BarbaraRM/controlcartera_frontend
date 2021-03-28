export interface VentasInterface {
    id_factura?: string;
    fact_fecha?: string;
    subtotal?: number;
    descuento?: number;
    iva?: number;
    total?: number;
    id_cliente?: string;
    nombres_cliente?: string;
    id_usuario?: string;
    usuario?: string;
}
