import AdminCrud from "../../components/admin/AdminCrud";

const fields = [
  { name: "lugar", label: "Lugar de Trabajo", required: true },
  { name: "cargo", label: "Cargo", required: true },
  { name: "fecha", label: "Fecha" },
];

const imageFields = [{ name: "logos", label: "URL del Logo" }];

export default function ExpLaboralCrud() {
  return <AdminCrud title="Experiencia Laboral" endpoint="/explaboral" fields={fields} imageFields={imageFields} />;
}