import AdminCrud from "../../components/admin/AdminCrud";

const fields = [
  { name: "nombre", label: "Nombre del Curso", required: true },
  { name: "tecnologia", label: "Tecnología" },
  { name: "lugar", label: "Lugar / Plataforma" },
];

export default function CursosCrud() {
  return (
    <AdminCrud
      title="Cursos de Programación"
      endpoint="/cursos"
      fields={fields}
      imageFields={[{ name: "imgUrl", label: "Imagen del Curso" }]}
    />
  );
}
