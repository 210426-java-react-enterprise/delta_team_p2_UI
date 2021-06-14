//import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthComponent } from './components/AuthComponent';
import { FavoriteMoviesComponent } from './components/FavoriteMoviesComponent';
import { useState } from "react";
import './App.css';

//themes
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes/themes';
import { GlobalStyles } from './themes/global';


import { WatchHistoryComponent } from './components/WatchHistoryComponent';
import { LogOutComponent } from './components/LogOutComponent';
import { LandingComponent } from './components/LandingComponent';
import NavComponent from './components/NavComponent';
import { Movie } from './models/movie';
import { User } from './models/user';
import { follower } from './models/follower';
import { MovieSearchComponent } from './components/MovieSearchComponent';


//const logo = require("./logo.svg") as string;

//const mockUser = false;

function App() {
  const [loggedIn, setLoggedIn] = useState(undefined as boolean | undefined);
  const [favMovie, setfavMovies] = useState(undefined as unknown as Movie[] || undefined);

  const addFavMovieToList = (favoriteMovie:Movie)=>{
    setfavMovies([...favMovie,favoriteMovie])
  }


        
  const[mockUser, setUser] = useState(undefined as User | undefined);
  const [followers, setFollowers] = useState(undefined as follower[] | undefined)
  const [watchList, setWatchList] = useState(undefined as Movie[] | undefined)
  const [watchHistory, setWatchHistory] = useState(undefined as Movie[] | undefined)
  const [darkMode, setDarkMode] = useState(false as boolean);


  return (

    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <Router>
          <NavComponent currentUser={mockUser} setUserLogIn={setUser} darkMode={darkMode} setDarkMode={setDarkMode} ></NavComponent>
          <Switch>
            <Route exact path="/" render={() => <AuthComponent currentUser={mockUser} setCurrentUser={setUser}/>} />
            <Route exact path="/favmovies" render={() =><FavoriteMoviesComponent movies={favMovie}/>}/>
            <Route exact path="/watchhistory" render={() =><WatchHistoryComponent currentUser={mockUser} allmovies={favMovie} onAdd={addFavMovieToList}/>}/>
            <Route exact path="/landing" render={() => <LandingComponent currentUser={mockUser} setCurrentUser={setUser} followers={followers}
             setFollowers ={setFollowers} watchList={watchList} setWatchList={setWatchList} watchHistory={watchHistory} setWatchHistory={setWatchHistory}/>}/>
             <Route exact path="/moviesearch" render={() => <MovieSearchComponent/>} />
            <Route exact path="/out" render={() => <LogOutComponent currentUser={mockUser} setCurrentUser={setUser}/>} />
          </Switch>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
