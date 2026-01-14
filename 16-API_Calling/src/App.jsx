import axios, { Axios } from "axios";
import { useState } from "react";
import "./App.css";

const App = () => {

  // <---------- API with Fetch ---------->
  const getDataFetch = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
  }


  // <---------- API with Axios ---------->
  /*
  * Write 'npm i axios' in the terminal
  * Import axios from 'axios'
  * Use 'axios.get(url)' to make a GET request
  * Axios auto converts the response to JSON
  */
  const getDataAxios = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response)
    console.log(response.data)
  }


  const [detail, setDetail] = useState([])

  const getPicAxios = async () => {
    const { data } = await axios.get('https://picsum.photos/v2/list') // Destructuring the data from the response

    console.log(data);
    setDetail(data)
  }

  return (
    <div className="app-container">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      <div className="content-wrapper">
        <h1 className="main-title">🌌 API Calling Demo</h1>
        <p className="subtitle">Explore the cosmos of data fetching</p>

        <div className="button-group">
          <button className="space-button" onClick={getDataFetch}>
            <span className="button-icon">🚀</span>
            Get Data with Fetch
          </button>
          <button className="space-button" onClick={getDataAxios}>
            <span className="button-icon">⚡</span>
            Get Data with Axios
          </button>
          <button className="space-button primary" onClick={getPicAxios}>
            <span className="button-icon">🖼️</span>
            Get Pic with Axios
          </button>
        </div>

        {detail.length > 0 && (
          <div className="images-section">
            <h2 className="section-title">✨ Gallery ({detail.length} images)</h2>
            <div className="images-grid">
              {detail.map((elem) => {
                return (
                  <div key={elem.id} className="image-card">
                    <div className="card-image-wrapper">
                      <img
                        src={elem.download_url}
                        alt={`Photo by ${elem.author}`}
                        className="card-image"
                        loading="lazy"
                      />
                      <div className="image-overlay"></div>
                    </div>
                    <div className="card-content">
                      <h3 className="card-author">
                        <span className="author-icon">👤</span>
                        {elem.author}
                      </h3>
                      <div className="card-details">
                        <span className="detail-item">
                          <span className="detail-label">ID:</span> {elem.id}
                        </span>
                        <span className="detail-item">
                          <span className="detail-label">Size:</span> {elem.width} × {elem.height}
                        </span>
                      </div>
                      <a
                        href={elem.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-link"
                      >
                        View Original →
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App