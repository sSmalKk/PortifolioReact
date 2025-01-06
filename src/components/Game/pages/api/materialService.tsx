const API_BASE = "http://localhost:5000/admin/material";

/**
 * Lista os materiais com paginação e critérios opcionais.
 */
export const listMaterials = async (token, page = 1, limit = 10, query = {}) => {
  const response = await fetch(`${API_BASE}/list`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query: query || {
        isActive: true,
      },
      options: {
        page,
        limit,
        sort: { createdAt: -1 },
      },
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Erro ao listar materiais");
  }

  return response.json();
};

/**
 * Cria um novo material.
 */
export const createMaterial = async (material, token) => {
  const response = await fetch(`${API_BASE}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(material),
  });

  if (!response.ok) throw new Error("Erro ao criar material");
  return response.json();
};

/**
 * Atualiza um material existente.
 */
export const updateMaterial = async (id, material, token) => {
  const response = await fetch(`${API_BASE}/update/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(material),
  });

  if (!response.ok) throw new Error(`Erro ao atualizar material com ID: ${id}`);
  return response.json();
};

/**
 * Deleta um material pelo ID.
 */
export const deleteMaterial = async (id, token) => {
  const response = await fetch(`${API_BASE}/delete/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error(`Erro ao deletar material com ID: ${id}`);
  return response.json();
};


/**
 * Get a single material by ID.
 */
export const getMaterialById = async (id, token) => {
  const response = await fetch(`${API_BASE}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error(`Failed to fetch material with ID: ${id}`);
  return response.json();
};

/**
 * Bulk add multiple materials.
 */
export const addBulkMaterials = async (materials, token) => {
  const response = await fetch(`${API_BASE}/addBulk`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(materials),
  });

  if (!response.ok) throw new Error("Failed to bulk add materials");
  return response.json();
};

/**
 * Soft delete a material by ID.
 */
export const softDeleteMaterial = async (id, token) => {
  const response = await fetch(`${API_BASE}/softDelete/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error(`Failed to soft delete material with ID: ${id}`);
  return response.json();
};

/**
 * Soft delete multiple materials.
 */
export const softDeleteManyMaterials = async (ids, token) => {
  const response = await fetch(`${API_BASE}/softDeleteMany`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ ids }),
  });

  if (!response.ok) throw new Error("Failed to soft delete multiple materials");
  return response.json();
};

/**
 * Update multiple materials in bulk.
 */
export const updateBulkMaterials = async (materials, token) => {
  const response = await fetch(`${API_BASE}/updateBulk`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(materials),
  });

  if (!response.ok) throw new Error("Failed to bulk update materials");
  return response.json();
};

/**
 * Count materials matching a query.
 */
export const countMaterials = async (query = {}, token) => {
  const response = await fetch(`${API_BASE}/count`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) throw new Error("Failed to count materials");
  return response.json();
};

/**
 * Delete multiple materials by IDs.
 */
export const deleteManyMaterials = async (ids, token) => {
  const response = await fetch(`${API_BASE}/deleteMany`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ ids }),
  });

  if (!response.ok) throw new Error("Failed to delete multiple materials");
  return response.json();
};
