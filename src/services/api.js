// CREATE
export async function registerUser(userData) {
  const response = await fetch('https://6821b5c2259dad2655b04d30.mockapi.io/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    throw new Error('Gagal mendaftar user');
  }
  return response.json();
}

// READ
export async function getUsers() {
  const response = await fetch('https://6821b5c2259dad2655b04d30.mockapi.io/api/v1/users');
  if (!response.ok) {
    throw new Error('Gagal mengambil data user');
  }
  return response.json();
}

// UPDATE
export async function updateUser(id, userData) {
  const response = await fetch(`https://6821b5c2259dad2655b04d30.mockapi.io/api/v1/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    throw new Error('Gagal memperbarui user');
  }
  return response.json();
}

// DELETE
export async function deleteUser(id) {
  const response = await fetch(`https://6821b5c2259dad2655b04d30.mockapi.io/api/v1/users/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Gagal menghapus user');
  }
  return response.json();
}
