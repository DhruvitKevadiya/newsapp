import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsurl, author, date, source, color } = this.props;
        
        return (
            <div className='my-3'>
                <div className="card" >
                <span className={`position-absolute top-0 translate-middle badge rounded-pill bg-${color}`} style={{left: '90%' , zIndex:'1'}}>
                            {source}
                        </span>
                    <img src={imageUrl ? imageUrl : "https://images.hindustantimes.com/tech/img/2023/08/25/1600x900/Gallery_1687692475811_1692934802526.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsurl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem