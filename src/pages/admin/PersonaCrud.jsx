import AdminCrud from "../../components/admin/AdminCrud";

const fields = [
  { name: "rol", label: "Rol (medico / desarrollador)", required: true },
  { name: "nombres", label: "Nombres", required: true },
  { name: "apellidos", label: "Apellidos", required: true },
  { name: "fechaNacimiento", label: "Fecha de Nacimiento" },
  { name: "edad", label: "Edad" },
  { name: "titulo1", label: "Título", required: true },
  { name: "acercaDe", label: "Acerca de mí", type: "textarea" },
];

const imageFields = [{ name: "imgUrl", label: "URL de Imagen" }];

export default function PersonaCrud() {
  return <AdminCrud title="Persona" endpoint="/persona" fields={fields} imageFields={imageFields} />;
}