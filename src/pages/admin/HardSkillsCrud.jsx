import AdminCrud from "../../components/admin/AdminCrud";

const fields = [
  { name: "skill", label: "Skill/Tecnología", required: true },
  { name: "nivel", label: "Nivel" },
  { name: "porcentaje", label: "Porcentaje (0-100)", type: "number" },
];

export default function HardSkillsCrud() {
  return <AdminCrud title="Hard Skills" endpoint="/hardskills" fields={fields} />;
}