import AdminCrud from "../../components/admin/AdminCrud";

const fields = [
  { name: "nombres", label: "Nombres", required: true },
  { name: "apellidos", label: "Apellidos", required: true },
  { name: "fechaNacimiento", label: "Fecha de Nacimiento" },
  { name: "edad", label: "Edad" },
  { name: "titulo1", label: "Título Principal" },
  { name: "titulo2", label: "Título Secundario" },
  { name: "acercaDe", label: "Acerca de mí", type: "textarea" },
];

const imageFields = [{ name: "imgUrl", label: "URL de Imagen" }];

export default function PersonaCrud() {
  return <AdminCrud title="Persona" endpoint="/persona" fields={fields} imageFields={imageFields} />;
}