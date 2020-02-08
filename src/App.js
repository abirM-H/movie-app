import React from 'react';
import Search from'./component/search'
import './App.css';
import RatingFilter from './component/ratingFilter'
import MovieList from './component/movieList'
import Add from './component/Add'




const titanic ={
  id:'titanic',
  title:'titanic',
  year:'1997',
  rating:2,
  image:'https://upload.wikimedia.org/wikipedia/en/1/19/Titanic_%28Official_Film_Poster%29.png'

}
const inception = {
  id:'inception',
  title: 'Inception',
  rating: 3,
  image: 'https://i.ytimg.com/vi/E1iqGiX0lSg/movieposter.jpg',
  year: 2010}

const moviesList = [titanic, inception, {id: 'Maléfique', title: 'Maléfique', rating: 5, year: 2019, image:'http://fr.web.img6.acsta.net/r_1280_720/newsv7/19/09/04/10/22/57384510.jpg'}]
class MovieApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      minRatingFilter: 2,
     movies:moviesList,
     titleFilter:''

    }
   
  }
  getVisibleMovies() {
    return this.state.movies.filter( el =>
        el.rating >= this.state.minRatingFilter &&
        el.title.toLowerCase().includes(this.state.titleFilter.toLowerCase().trim())
      )
  } 
  addNewMovie(newMovie) {
    this.setState({
      movies: this.state.movies.concat(newMovie)
    })
  }
  
  render(){

    return (
      <div className="continer">
         <header className="movie-app-header">
               <Search value={this.state.titleFilter}
               onChange={(newTitleFilter) => {
                this.setState({
                  titleFilter: newTitleFilter
                })
               }} />
             <RatingFilter 
             count={this.state.minRatingFilter}
             onChange={(newRating)=> {this.setState({
              minRatingFilter:newRating
             })
              
             }}
             />
            </header>
         <main>
              <MovieList 
              movies={
                this.getVisibleMovies()
              }
              onAddMovie={(newMovie) => this.addNewMovie(newMovie)}/> 
         </main>
       
        {/* <Add/> */}
      </div>
    );
  }
  
}


export default MovieApp;
