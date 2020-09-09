import React from 'react';
import axios from 'axios';
import Movie from "./Movie";
import "./App.css";

class App extends React.Component{
  state ={
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {
      data: {
        data: {movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading: false });
    
  };

  componentDidMount(){
    this.getMovies();

    /* setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000); */

  }

  render(){
    const { isLoading, movies } = this.state;

    return (
      <section className="contain"> 
      {isLoading 
      ? (
        <div>
          <span claclassNamess="loader__text">
            "Loading..." 
          </span>
        </div>
      )
      
      : (
        <div className="movies">
          {movies.map(movie => (
              <Movie 
                key={movie.id}
                id={movie.id} 
                year ={movie.year} 
                title ={movie.title} 
                summary ={movie.summary} 
                poster ={movie.medium_cover_image} 
                genres ={movie.genres}
              />
            ))
          }
        </div>
      )
      
    } 
    </section>)
  }

}

export default App;


  /* add =() => {
    //console.log("add");
    this.setState(current => ({ count: current.count + 1 }));
  };

  minus =() => {
    //console.log("minus");
    this.setState(current => ({ count: current.count - 1 }));
  };

  render(){
    return (
      <div>
        <h1>The number is: {this.state.count} </h1>
        <button onChange={this.add}>Add</button>
        <button onChange={this.minus}>Minus</button>
      </div>
    )
  }
}
 */
/* import PropTypes from 'prop-types';

const foodILike =[
  {
    id: 1,
    name: "kimchi",
    image: "http://aeriskitchen.com/wp-content/uploads/2020/09/Rolling_Dumplings_01-.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image: "http://aeriskitchen.com/wp-content/uploads/2020/08/Egg_Rice_Cake_Soup_01-.jpg",
    rating: 4.5
  },
  {
    id: 3,
    name: "Bibkmbap",
    image: "http://aeriskitchen.com/wp-content/uploads/2020/07/Rice_Paper_GimMalI_01-.jpg",
    rating: 4.2
  },
  
];

function Food({name, picture, rating}) {
  return <div>
    <h3>I love {name}</h3>
    <h5>{rating}/5.0</h5>
    <img src={picture} alt={name} />
  </div>
}


function renderFood(dish) {
  console.log(dish);
  return <Food 
    key={dish.id} 
    name={dish.name} 
    picture={dish.image} 
    rating={dish.rating}
  />
}

Food.propTypes ={
  name: PropTypes.string,
  picture: PropTypes.string,
  rating: PropTypes.number
}

function App() {
    return (
      <div>
        {foodILike.map(renderFood)}
      </div>
    );
} */

/* function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food 
          name={dish.name} 
          picture={dish.image}
        />
      ))}
    </div>
  );
} */

