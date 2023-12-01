import './App.css';
import Header from './components/Header/Header';
import SliderImages from './components/SliderImages';
import SliderCard from './components/SliderCard';
// import AllMovies from './components/AllMovies';
// import SingleMovie from './components/SingleMovie';
import AllMoviesFetch from './components/AllMoviesFetch';
import SingleMovieFetch from './components/SingleMovieFetch';
import PostMovie from './components/PostMovie'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route exact path="/movies">
            <AllMoviesFetch/>
          </Route>
          <Route exact path="/movies/:movid">
            <SingleMovieFetch/>
          </Route>
          <Route exact path="/">
            <SliderImages/>
            <SliderCard/>
         </Route>
         <Route exact path="/postMovie">
            <PostMovie/>
         </Route>
         {/* <Route exact path = "/moviesFetch">
          <AllMoviesFetch/>
         </Route> */}
        </Switch>
      </div>
    </Router>

  );
}

export default App;
