import { useState, useEffect } from "react";
import { getData, postData, putData, deleteData } from "../../services/apiService";
import { uploadImage } from "../../services/cloudinary.js";

export default function AdminCrud({ title, endpoint, fields, imageFields = [] }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({});
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    loadItems();
  }, [endpoint]);

  const loadItems = async () => {
    try {
      setLoading(true);
      const data = await getData(endpoint);
      setItems(Array.isArray(data) ? data : []);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = async (field, file) => {
    setUploading(true);
    try {
      const url = await uploadImage(file);
      handleInputChange(field, url);
      alert("¡Imagen subida exitosamente!");
    } catch (err) {
      console.error("Upload error:", err);
      alert("Error al subir la imagen: " + err.message);
    } finally {
      setUploading(false);
    }
  };

  const openCreate = () => {
    const initial = {};
    fields.forEach((f) => (initial[f.name] = ""));
    imageFields.forEach((f) => (initial[f.name] = ""));
    setFormData(initial);
    setEditingId(null);
    setShowModal(true);
  };

  const openEdit = (item) => {
    const initial = {};
    fields.forEach((f) => (initial[f.name] = item[f.name] || ""));
    imageFields.forEach((f) => (initial[f.name] = item[f.name] || ""));
    setFormData(initial);
    setEditingId(item._id);
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await putData(`${endpoint}/${editingId}`, formData);
      } else {
        await postData(endpoint, formData);
      }
      setShowModal(false);
      loadItems();
    } catch (err) {
      alert(err.message || "Error al guardar");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteData(`${endpoint}/${id}`);
      setDeleteConfirm(null);
      loadItems();
    } catch (err) {
      alert(err.message || "Error al eliminar");
    }
  };

  const getFieldType = (field) => {
    if (imageFields.some((f) => f.name === field)) return "image";
    const f = fields.find((f) => f.name === field);
    return f?.type || "text";
  };

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-violet"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h1>
        <button
          onClick={openCreate}
          className="flex items-center gap-2 px-4 py-2 bg-brand-violet hover:bg-brand-violet/80 text-white rounded-lg transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Nuevo
        </button>
      </div>

      {error && (
        <div className="bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg mb-6">
          {error}
        </div>
      )}

      <div className="card-dark overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-dark-800/50">
              <tr>
                {fields.map((f) => (
                  <th key={f.name} className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    {f.label}
                  </th>
                ))}
                {imageFields.map((f) => (
                  <th key={f.name} className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    {f.label}
                  </th>
                ))}
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {items.length === 0 ? (
                <tr>
                  <td colSpan={fields.length + imageFields.length + 1} className="px-4 py-8 text-center text-gray-400">
                    No hay registros
                  </td>
                </tr>
              ) : (
                items.map((item) => (
                  <tr key={item._id} className="hover:bg-dark-800/30">
                    {fields.map((f) => (
                      <td key={f.name} className="px-4 py-3 text-sm text-gray-300">
                        {item[f.name]?.length > 50 ? item[f.name].substring(0, 50) + "..." : item[f.name]}
                      </td>
                    ))}
                    {imageFields.map((f) => (
                      <td key={f.name} className="px-4 py-3">
                        {item[f.name] && (
                          <img src={item[f.name]} alt="" className="w-12 h-12 object-cover rounded-lg" />
                        )}
                      </td>
                    ))}
                    <td className="px-4 py-3 text-right">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => openEdit(item)}
                          className="p-2 text-blue-400 hover:bg-blue-500/20 rounded-lg transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => setDeleteConfirm(item._id)}
                          className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="card-dark w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-dark-700 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">
                {editingId ? "Editar" : "Nuevo"} {title}
              </h2>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {fields.map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-300 mb-2">{field.label}</label>
                  {field.type === "textarea" ? (
                    <textarea
                      value={formData[field.name] || ""}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      rows={3}
                      className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-violet"
                      required={field.required}
                    />
                  ) : (
                    <input
                      type={field.type || "text"}
                      value={formData[field.name] || ""}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-violet"
                      required={field.required}
                    />
                  )}
                </div>
              ))}

              {imageFields.map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-300 mb-2">{field.label}</label>
                  <input
                    type="text"
                    value={formData[field.name] || ""}
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                    placeholder="URL de la imagen"
                    className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-violet mb-2"
                  />
                  {formData[field.name] && (
                    <img src={formData[field.name]} alt="" className="w-24 h-24 object-cover rounded-lg mb-2" />
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => e.target.files[0] && handleImageUpload(field.name, e.target.files[0])}
                    className="text-sm text-gray-400"
                    disabled={uploading}
                  />
                  {uploading && <span className="ml-2 text-sm text-brand-violet">Subiendo...</span>}
                </div>
              ))}

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-dark-700 hover:bg-dark-600 text-gray-300 rounded-lg transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-brand-violet hover:bg-brand-violet/80 text-white rounded-lg transition-colors"
                >
                  {editingId ? "Actualizar" : "Crear"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {deleteConfirm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="card-dark w-full max-w-sm p-6 text-center">
            <div className="text-red-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">¿Eliminar este registro?</h3>
            <p className="text-gray-400 mb-6">Esta acción no se puede deshacer.</p>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-4 py-2 bg-dark-700 hover:bg-dark-600 text-gray-300 rounded-lg transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm)}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}