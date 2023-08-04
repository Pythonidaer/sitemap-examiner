// import axios from 'axios'

// index.js
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await axios.get('/getData') // Assumes the server is running on the same host
    const data = response.data

    const dataContainer = document.getElementById('dataContainer')
    dataContainer.innerHTML = JSON.stringify(data)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})
