import AdminCrud from "../../components/admin/AdminCrud";

const fields = [
  { name: "titulo", label: "Título de la Actividad", required: true },
  { name: "lugar", label: "Lugar", required: true },
];

export default function ActDocenteCrud() {
  return <AdminCrud title="Actividad Docente" endpoint="/actdocente" fields={fields} />;
}