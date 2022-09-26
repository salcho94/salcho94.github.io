import React, { Component } from 'react';

class Contents extends Component {
    render() {
        const movie_list = [];
        const movies = this.props.data;
        let i = 0;
        while (i < movies.length) {
            if (this.props.selected_year === 'all') {
                movie_list.push(
                    <li key={movies[i].id}>
                        <a
                            href={movies[i].href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="img_area">
                                <img src={process.env.PUBLIC_URL + movies[i].photo} alt=""/>
                            </div>
                            <p>{movies[i].title}</p>
                            <div className="desc_area">
                                <p className="director"><span className="title">감독</span>{movies[i].director}</p>
                                <p className="actors"><span className="title">출연</span>{movies[i].actors}</p>
                                <p className="branch"><span className="title">출품분야</span>{movies[i].branch}</p>
                                <p className="synopsis"><p className="title">줄거리</p>{movies[i].synopsis}</p>
                            </div>
                        </a>
                    </li>
                );
            } else {
                if (this.props.selected_year === movies[i].year) {
                    movie_list.push(
                        <li key={movies[i].id}>
                            <a
                                href={movies[i].href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="img_area">
                                    <img src={process.env.PUBLIC_URL + movies[i].photo} alt=""/>
                                </div>
                                <p>{movies[i].title}</p>
                                <div className="desc_area">
                                    <p className="director"><span className="title">감독</span>{movies[i].director}</p>
                                    <p className="actors"><span className="title">출연</span>{movies[i].actors}</p>
                                    <p className="branch"><span className="title">출품분야</span>{movies[i].branch}</p>
                                    <p className="synopsis"><p className="title">줄거리</p>{movies[i].synopsis}</p>
                                </div>
                            </a>
                        </li>
                    );
                }
            }
            i++;
        }

        return (
            <ul className="movie_list">
                { movie_list }
            </ul>
        );
    }
}

export default Contents;