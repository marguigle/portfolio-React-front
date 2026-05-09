import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";
import ChangePasswordModal from "../components/admin/ChangePasswordModal";
import { useAuth } from "../contexts/AuthContext";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const { isAuthenticated, isAdmin, loading, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (!isAuthenticated) {
        navigate("/login", { replace: true });
      } else if (!isAdmin) {
        navigate("/", { replace: true });
      }
    }
  }, [isAuthenticated, isAdmin, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-violet"></div>
      </div>
    );
  }

  if (!isAuthenticated || !isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-dark-900">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} onOpenChangePassword={() => setPasswordModalOpen(true)} />

      <div className="lg:pl-64">
        <div className="sticky top-0 z-30 bg-dark-900 border-b border-dark-700 flex items-center justify-between h-14 px-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-gray-400 hover:text-white rounded-lg hover:bg-dark-800 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <span className="text-white font-semibold text-lg">Panel de Administración</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPasswordModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-dark-800 hover:bg-dark-700 text-gray-300 rounded-lg transition-colors text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
              <span className="hidden sm:inline">Cambiar Contraseña</span>
            </button>
            <button
              onClick={() => { logout(); navigate("/login", { replace: true }); }}
              className="flex items-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-colors text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span className="hidden sm:inline">Cerrar Sesión</span>
            </button>
          </div>
        </div>

        <main className="p-6">
          <Outlet />
        </main>
      </div>

      <ChangePasswordModal isOpen={passwordModalOpen} onClose={() => setPasswordModalOpen(false)} />
    </div>
  );
}