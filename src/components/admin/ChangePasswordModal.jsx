import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { changePassword, changeEmail } from "../../services/apiService";

export default function ChangePasswordModal({ isOpen, onClose }) {
  const { user } = useAuth();
  const [newEmail, setNewEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const hasEmailChange = newEmail && newEmail !== user?.email;
    const hasPasswordChange = newPassword || confirmPassword;

    if (!hasEmailChange && !hasPasswordChange) {
      setError("No se detectaron cambios");
      return;
    }

    if (!currentPassword) {
      setError("Debés ingresar tu contraseña actual para hacer cambios");
      return;
    }

    if (hasPasswordChange && newPassword !== confirmPassword) {
      setError("Las contraseñas nuevas no coinciden");
      return;
    }

    setLoading(true);
    try {
      if (hasEmailChange) {
        await changeEmail(newEmail, currentPassword);
      }
      if (hasPasswordChange) {
        await changePassword(currentPassword, newPassword);
      }
      setSuccess("Credenciales actualizadas exitosamente");
      setNewEmail("");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setSuccess("");
        onClose();
      }, 1500);
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Error al actualizar");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-dark-900 border border-dark-700 rounded-xl w-full max-w-md flex flex-col max-h-[90vh]">
        <div className="flex items-center justify-between px-5 py-4 border-b border-dark-700 shrink-0">
          <h2 className="text-lg font-bold text-white">Cambiar Credenciales</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-3 overflow-y-auto">
          {error && (
            <div className="bg-red-500/20 border border-red-500/50 text-red-400 px-3 py-2.5 rounded-lg text-sm">
              {error}
            </div>
          )}
          {success && (
            <div className="bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 px-3 py-2.5 rounded-lg text-sm">
              {success}
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1.5">Email Actual</label>
            <input
              type="email"
              value={user?.email || ""}
              disabled
              className="w-full px-3 py-2.5 bg-dark-700 border border-dark-600 rounded-lg text-gray-400 cursor-not-allowed text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1.5">Nuevo Email</label>
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              className="w-full px-3 py-2.5 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-violet focus:border-transparent text-sm"
              placeholder={user?.email || "nuevo@email.com"}
            />
          </div>

          <div className="border-t border-dark-700 pt-3">
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1.5">Contraseña Actual</label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
                className="w-full px-3 py-2.5 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-violet focus:border-transparent text-sm"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1.5">Nueva Contraseña</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              minLength={6}
              className="w-full px-3 py-2.5 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-violet focus:border-transparent text-sm"
              placeholder="Dejar vacío si no querés cambiarla"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1.5">Confirmar Nueva Contraseña</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              minLength={6}
              className="w-full px-3 py-2.5 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-violet focus:border-transparent text-sm"
              placeholder="Confirmar nueva contraseña"
            />
          </div>

          <div className="flex gap-3 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2.5 bg-dark-700 hover:bg-dark-600 text-gray-300 rounded-lg transition-colors font-medium text-sm"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-2.5 bg-brand-violet hover:bg-brand-violet/80 text-white rounded-lg transition-colors font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Guardando..." : "Guardar Cambios"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
