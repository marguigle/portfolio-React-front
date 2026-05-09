import AdminCrud from "../../components/admin/AdminCrud";

const fields = [
  { name: "lugar", label: "Lugar del Congreso", required: true },
  { name: "titulo", label: "Título de la Participación", required: true },
];

export default function CongresosCrud() {
  return <AdminCrud title="Congresos" endpoint="/congresos" fields={fields} />;
}