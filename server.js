// Require the necessary modules
import axios from 'axios'
import express from 'express'
import { DOMParser } from '@xmldom/xmldom'
// const axios = require('axios')
// const { DOMParser } = require('@xmldom/xmldom')

const app = express()
const PORT = 3003
const url = 'https://www.christianbook.com/sitemap4.xml'

app.get('/getData', async (req, res) => {
  try {
    const response = await axios.get(url)
    const xmlString = response.data
    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml')
    res.json(xmlDoc)
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' })
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

/*
// Fetch the XML content using axios
axios
  .get(url)
  .then((response) => {
    // console.log(response.data)
    // console.log(response)
    // console.log(response.data.length)
    const xmlString = response.data
    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml')

    const urlElements = xmlDoc.getElementsByTagName('url')

    const startIndex = 10
    const endIndex = 100

    for (let i = startIndex; i <= endIndex; i++) {
      const urlElement = urlElements[i]
      if (urlElement) {
        console.log(urlElement.textContent) // Or any other processing you need
      } else {
        break // Break the loop if the desired range exceeds the available elements
      }
    }

    // Use xmlDoc to access and manipulate the XML data.
    // console.log(xmlDoc)
  })
  .catch((error) => {
    console.error('Error fetching XML:', error)
  })
*/
// CBD-ProductDetailTitle
// CBD-ProductDetailAuthor
// CBD-ProductDetailActionPrice

/*
Day 1 Summary (still recovering from sickness)
- axios and @xmldom/xmldom can get the entire sitemap
- the sitemap URLs can be parsed for subsequent page searches
- I could probably just find the SKU (i.e. data-buy-now-sku="47060EB"), the last URL phrase, within the sitemap list then make an additional fetch that would scrape information such as title, author, and price.
- see how long the search/scrape takes then if it can be written easy enough to the screen via the searches

What triggers the SKU search?
- for example, I could store the data in a DB
- or, I could automatically make the fetch request
- or, I could just add a file with all the URLs then make that query
- I could see if any of the URL parameters can be added to the original XML page
*/
