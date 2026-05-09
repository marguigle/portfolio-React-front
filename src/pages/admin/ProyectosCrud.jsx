import AdminCrud from "../../components/admin/AdminCrud";

const fields = [
  { name: "titulo", label: "Título del Proyecto", required: true },
  { name: "tecnologias", label: "Tecnologías", type: "textarea" },
];

const imageFields = [{ name: "imgs", label: "URLs de Imágenes (separadas por coma)" }];

export default function ProyectosCrud() {
  return <AdminCrud title="Proyectos" endpoint="/proyectos" fields={fields} imageFields={imageFields} />;
}