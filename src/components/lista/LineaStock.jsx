import stock from "./stock";
import {BotonCheckBox} from './botonCheckbox'

const LineaStock = () => {
  return (
    <tbody >
      {stock.map((usuario) => {
        return (
          <tr >
            <td className="centrado">
                <BotonCheckBox/>
            </td>
            <td></td>
            
            <td >{usuario.cantidad}</td>
            <td >{usuario.cantidad_minima}</td>

            <td>{usuario.descripcion}</td>
            <td>{usuario.tipo}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default LineaStock;
