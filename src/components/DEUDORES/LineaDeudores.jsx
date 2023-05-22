import { BotonCheckBox } from "../botonCheckbox";
import deudores from "./deudores";

const LineaDeudores = () => {
  return (
    <>
      <tbody>
        {deudores.map((user) => (
          <tr>
            <td className="centrado">
              <BotonCheckBox />
            </td>
            <td>
              <b>{user.fecha_deuda}</b>
            </td>
            <td className="centrado">{user.nombre}</td>
            <td className="centrado">{user.ventas_realizadas}</td>{" "}
            {/* no todos tienen una venta realizada */}
            <td className="centrado">{user.cantidad}</td>
            <td className="centrado">{user.descripcion_productos}</td>
            <td className="centrado">{user.tot_prod}</td>
            <td>
              <b>{user.tot_gen}</b>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default LineaDeudores;
