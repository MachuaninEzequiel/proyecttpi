import ventas from "./ventas";
import {BotonCheckBox} from './botonCheckbox'

const LineaVentas = () => {
  return (
    <tbody >
      {ventas.map((usuario) => {
        return (
          <tr >
            <td className="centrado">
                <BotonCheckBox/>
            </td>
            <td></td>
            
            <td >{usuario.fecha}</td>
            <td >{usuario.nombre}</td>

            <td>{usuario.articulos}</td>
            <td>{usuario.cantidad}</td>
            <td>{usuario.total}</td>


          </tr>
        );
      })}
    </tbody>
  );
};

export default LineaVentas;