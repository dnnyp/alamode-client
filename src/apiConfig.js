let apiUrl
const apiUrls = {
  production: 'https://quiet-thicket-71875.herokuapp.com',
  development: 'http://localhost:5000'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
