import React, { Component } from 'react'
import './itemnews.css'

export default class NewsItem extends Component {
  render() {

    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;

    return (
      <div>

        <div className="card zoom my-3" style={{ width: '18rem' }}>
          
          <img className="card-img-top" src={!imageUrl ? 'https://soliloquywp.com/wp-content/uploads/2016/08/How-to-Set-a-Default-Featured-Image-in-WordPress.png' : imageUrl} alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">{title}...<span class="badge position-absolute top-0 
                         start-100 translate-middle rounded-pill 
                         bg-danger">{source}</span>
            </h5>
            <p className="card-text">{description}...</p>

            <p className="card-text"><small class="text-muted">By {author ? author.slice(0, 21) : "Anonymous"} on {new Date(date).toGMTString()}</small></p>

            <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark" rel='noreferrer'>Read More</a>
          </div>
        </div>




      </div>
    )
  }
}
