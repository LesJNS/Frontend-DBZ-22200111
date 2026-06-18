import axios from 'axios'

// Cliente axios apuntando a la API oficial de Dragon Ball
const api = axios.create({
  baseURL: 'https://dragonball-api.com/api'
})

/**
 * Lista paginada de personajes.
 * Devuelve { items, meta, links }
 */
export async function getCharacters (page = 1, limit = 12) {
  const { data } = await api.get('/characters', { params: { page, limit } })
  return data
}

/**
 * Busca personajes por nombre.
 * Ojo: cuando se filtra por ?name=... la API devuelve un ARRAY directo
 * (no el objeto paginado), por eso normalizamos la respuesta.
 */
export async function searchCharacters (name) {
  const { data } = await api.get('/characters', { params: { name } })
  return Array.isArray(data) ? data : (data.items || [])
}

/**
 * Detalle completo de un personaje (incluye transformaciones y planeta de origen).
 */
export async function getCharacterById (id) {
  const { data } = await api.get(`/characters/${id}`)
  return data
}

export default api
