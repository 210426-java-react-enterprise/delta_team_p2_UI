//import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthComponent } from './components/AuthComponent';
import { FavoriteMoviesComponent } from './components/FavoriteMoviesComponent';
import { useState } from "react";
import './App.css';

import { AllMoviesComponent } from './components/AllMoviesComponent';

import { LandingComponent } from './components/LandingComponent';
import NavComponent from './components/NavComponent';
import { User } from './models/user';
import { follower } from './models/follower';


const logo = require("./logo.svg") as string;//WAT

//const mockUser = false;

function App() {
  const [loggedIn, setLoggedIn] = useState(undefined as boolean | undefined);
  const [mockmovies, setMovies] = useState([
    {
        id:1,
        title:'Avengers',
        year:2010,
        poster:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/theavengers_lob_crd_03.jpg"

    },
    {
        id:2,
        title:'Shrek',
        year:2005,
        poster:"https://m.media-amazon.com/images/M/MV5BZmU5ZDE5NTItN2I1YS00ZmFmLTk3YTgtNzQwOGNkYzFjOWRkXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_QL75_UX500_CR0,47,500,281_.jpg"
      },
    {
        id:3,
        title:'Solo Leveling',
        year:2018,
        poster:'https://d30womf5coomej.cloudfront.net/sa/26/3011639e-c9af-4eb7-936c-a4b0868ea868_z.jpg'
    },
    {
      id:4,
      title:'Umbrella',
      year:2010,
      poster:"https://image.shutterstock.com/image-illustration/different-unique-standing-out-crowd-260nw-723430327.jpg"

  },
  {
      id:5,
      title:'Planes',
      year:2005,
      poster:"https://media.istockphoto.com/photos/different-approach-different-direction-picture-id1250056176?b=1&k=6&m=1250056176&s=170667a&w=0&h=Qz_QX5I6GjOkIAtT5RxESuhyIXKEOLHaAZYJ67Jom9U="
    },
  {
      id:6,
      title:'Balloons',
      year:2018,
      poster:'https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/alt-5a6769cd55dc4-4791-b694fcc25182244f400cbceed607984d@1x.jpg'
  },
  {
    id:7,
    title:'Flower',
    year:2010,
    poster:"https://images.pexels.com/photos/2480072/pexels-photo-2480072.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

},
{
    id:8,
    title:'eggs',
    year:2005,
    poster:"https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
{
    id:9,
    title:'Something',
    year:2018,
    poster:'https://image.shutterstock.com/image-illustration/stand-out-crowd-different-creative-260nw-587209007.jpg'
},
{
  id:10,
  title:'Job',
  year:2010,
  poster:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/theavengers_lob_crd_03.jpg"

}
]
)

  const[mockUser, setUser] = useState(undefined as User | undefined);

  const[mockFriends, setMockFriends] = useState([undefined as follower | undefined])

  const [Followers, setFollowers] = useState(undefined as follower[] | undefined)

  return (
    <>
      <Router>
        <NavComponent currentUser={mockUser} setUserLogIn={setUser}></NavComponent>
        <Switch>
          <Route exact path="/" render={() => <AuthComponent currentUser={mockUser} setCurrentUser={setUser}  setFollowing={setMockFriends}/>} />
          <Route path="/favmovies" render={() =><FavoriteMoviesComponent movies={mockmovies}/>}/>
          <Route path="/searchmovies" render={() =><AllMoviesComponent allmovies={mockmovies}/>}/>
          <Route path="/landing" render={() => <LandingComponent curretUser={mockUser} setCurrentUser={setUser} followers={Followers} setFollowers ={setFollowers}/>}/>

        </Switch>
      </Router>
    </>


  );
}

export default App;
