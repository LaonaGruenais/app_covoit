import axios from 'axios'

// appel d'api strapi avec axios
const api = axios.create({
  baseURL: 'http://localhost:1337/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 10000
})

const loginWithCredentials = async (credentials) => {
  try {
    const response = await api.post('/auth/local', credentials)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

// Enregistrer l'utilisateur
/**
 * registerWithRegistrationCredentials
 * @param { props } registrationCredentials Credentials for registration email or username + password requireds
 * @returns { Function } Registration with credentials
 */
const registerWithRegistrationCredentials = async (registrationCredentials) => {
  try {
    const response = await api.post('/auth/local/register', registrationCredentials)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export {
  loginWithCredentials,
  registerWithRegistrationCredentials
}
