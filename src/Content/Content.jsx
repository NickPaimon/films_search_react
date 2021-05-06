import React from 'react';
import Search from "./Search/Search";
import Movie from "./Movie/Movie";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [{
                Title: '',
                Year: '',
                imdbID: 1
            }],
            errorMessage: null,
            loading: true
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        fetch(MOVIE_API_URL)
            .then(response => response.json())
            .then(jsResponse => {
                this.setState({movies: jsResponse.Search});
                this.setState({loading: false});
            });
    }

    search = (text) => {
        this.setState({loading: true});
        fetch(`https://www.omdbapi.com/?s=${text}&apikey=4a3b711b`)
            .then(response => response.json())
            .then(jsResponse => {
                if (jsResponse.Response === "False") {
                    this.setState({errorMessage: jsResponse.Error});
                    this.setState({loading: false});
                    return
                }
                this.setState({loading: false});
                this.setState({errorMessage: null});
                this.setState({movies: jsResponse.Search});
            })
    };


    render() {
        const movies = this.state.movies;
        const errorMessage = this.state.errorMessage;
        const loading = this.state.loading;
        const movieList = movies.map(movie => <Movie movie={movie} key={movie.imdbID}/>) || null;

        return (
            <div className="content_block">
                <Search search={this.search}/>
                <div className="movies_block">
                    {loading && !errorMessage
                        ? (<p>Loading...</p>)
                        : errorMessage
                            ? (<p className="error-message">{errorMessage}</p>)
                            : movieList}
                </div>
            </div>
        )
    }
};

export default Content;