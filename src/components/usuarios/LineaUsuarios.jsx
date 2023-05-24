import { BotonCheckBox } from "../botonCheckbox";
import usuarios from "./usuarios";


const LineaUsuarios = () => {
  return (
    <>
      <tbody>
        {usuarios.map((user) => (
          <tr>

            <td className="centrado">
              <BotonCheckBox />
            </td>
            <td>{user.id_usuario}</td>
            <td>{user.apellido_usuario}</td>
            <td>{user.tipo_usuario}</td>
            <td>{user.telefono}</td>
            <td>{user.email}</td>
            <td>{user.fecha_registro}</td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default LineaUsuarios;
