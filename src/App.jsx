import { useEffect } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import Medic from './pages/Medic.jsx';
import WebDeveloper from './pages/WebDeveloper.jsx';
import Login from './pages/Login.jsx';
import AdminLayout from './layouts/AdminLayout.jsx';
import Dashboard from './pages/admin/Dashboard.jsx';
import PersonaCrud from './pages/admin/PersonaCrud.jsx';
import EstudiosCrud from './pages/admin/EstudiosCrud.jsx';
import ExpLaboralCrud from './pages/admin/ExpLaboralCrud.jsx';
import ActDocenteCrud from './pages/admin/ActDocenteCrud.jsx';
import CongresosCrud from './pages/admin/CongresosCrud.jsx';
import HardSkillsCrud from './pages/admin/HardSkillsCrud.jsx';
import ProyectosCrud from './pages/admin/ProyectosCrud.jsx';
import CursosCrud from './pages/admin/CursosCrud.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import { ThemeProvider } from "./contexts/ThemeContext";
import { Tooltip, initTWE } from "tw-elements";

function App() {
  useEffect(() => {
    initTWE({ Tooltip });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "medic", element: <Medic /> },
        { path: "developer", element: <WebDeveloper /> },
      ],
    },
    {
      path: "/admin",
      element: <ProtectedRoute />,
      children: [
        {
          element: <AdminLayout />,
          children: [
            { index: true, element: <Navigate to="dashboard" replace /> },
            { path: "dashboard", element: <Dashboard /> },
            { path: "persona", element: <PersonaCrud /> },
            { path: "estudios", element: <EstudiosCrud /> },
            { path: "explaboral", element: <ExpLaboralCrud /> },
            { path: "actdocente", element: <ActDocenteCrud /> },
            { path: "congresos", element: <CongresosCrud /> },
            { path: "hardskills", element: <HardSkillsCrud /> },
            { path: "proyectos", element: <ProyectosCrud /> },
            { path: "cursos", element: <CursosCrud /> },
          ],
        },
      ],
    },
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;