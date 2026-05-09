import AdminCrud from "../../components/admin/AdminCrud";

const fields = [
  { name: "tipo", label: "Tipo (Grado/Posgrado/Curso)", required: true },
  { name: "lugar", label: "Institución", required: true },
  { name: "titulo", label: "Título", required: true },
  { name: "fecha", label: "Fecha" },
];

export default function EstudiosCrud() {
  return <AdminCrud title="Estudios" endpoint="/estudios" fields={fields} />;
}