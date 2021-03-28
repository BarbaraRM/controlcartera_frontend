export interface UserInterface {
  id_usuario?: string;
  nombres?: string;
  apellidos?: string;
  usuario?: string;
  contrasenia?: string;
  n_telefono?: string;
  cargo?: string;
  id_sucursal?: string;
  nombre_sucursal?: string;
  email?: string;
  estado?: string;
}

export interface Sucursales {
  id_sucursal?: string;
  nombre?: string;
  ciudad?: string;
}
