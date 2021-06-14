import React, { useState, useEffect } from "react"
import {ListGroup, Card, Container, Row, Col, Carousel, CardGroup} from "react-bootstrap"
import { follower } from "../models/follower";
import { Movie } from "../models/movie";
import { User } from "../models/user";
import { getFollowing, getWatchList, getWatchHistory } from "../remote/landing-service";
//import { getWatchHistory } from "../remote/watchlist-service";

//TODO: Setup interface to take a created User property
interface IUserprops{
    currentUser: User | undefined,
    setCurrentUser: (setUserLogIn: User | undefined) => void,
    followers: follower[] | undefined,
    setFollowers: (setFollowersList: follower[]) => void
    watchList: Movie[] | undefined,
    setWatchList: (setWatchList: Movie[]) => void
    watchHistory: Movie[] | undefined,
    setWatchHistory: (setWatchHistory: Movie[]) => void
}

export function LandingComponent(props: IUserprops){

    const fakeMovieList = ["movie1", "movie2", "movie3", "movie 4", "movie 5", "movie6"]
 
    const [movieElement, setMovieElement] = useState(undefined as unknown as Movie[] || undefined);
    const [followerElement, setFollowerElement] = useState(undefined as unknown as follower[] || undefined);
    const [watchListElement, setWatchList] = useState(undefined as unknown as Movie[] || undefined);

    // let followers: follower[] = [];

  

        // useEffect(()=> {
        //     console.log("Use Effect is Called")
        //     const getData = async () => {
        //         followers = await getFollowing();
        //         //props.setFollowers(followers);
        //         console.log("follwoers: " + props.followers)
        //     };
        //     getData();
        // }, [])

    // let movieList: Movie[] = [];
    //     useEffect(()=> {
    //         console.log("Use Effect 2 is Called")
    //         const getData = async () => {
    //             movieList = await getWatchList(props.currentUser?.id);
    //             props.setWatchList(movieList)
    //         };
    //         getData();
    //     }, [])





        // let movieList: Movie[] = [];

        useEffect(()=> {
            console.log("Use Effect 2 is Called")
            const getData = async () => {
                let movieList = await getWatchList();
                setWatchList(movieList)
            };
            getData();
        }, [])


        useEffect(()=> {
            const getData = async () => {
                let response = await getWatchHistory();
                setMovieElement(response);
                //console.log(movieElement);
            };
            getData();
        }, [])

        //let followers: follower[] = [];
        useEffect(()=> {
            console.log("Use Effect is Called")
            const getData = async () => {
                let followers = await getFollowing();
                setFollowerElement(followers);
               //console.log("follwoers: " + props.followers)
            };
            getData();
        }, [])

        // movieList = []
        // useEffect(()=> {
        //     console.log("Use Effect 3 is Called")
        //     const getData = async () => {
        //         movieList = await getWatchHistory(props.currentUser?.id);
        //         props.setWatchHistory(movieList)
        //     };
        //     getData();
        // }, [])
   

    const rows = fakeMovieList.reduce(function (rows: any, key, index) { 
        return (index % 2 == 0 ? rows.push([key]) 
          : rows[rows.length-1].push(key)) && rows;
      }, []);

      let carouselMap = function (rows: any, key: any, index: any) { 
        return (index % 2 == 0 ? rows.push([key]) 
          : rows[rows.length-1].push(key)) && rows;
      }

    return(
        <>
            <Container fluid>
                <Row>
                    <Col xs = "10">
                        <br/>
                        <Card className="text-center">
                            <Card.Header>Movies To Watch List</Card.Header>
                                <Carousel>
                                    {
                                        watchListElement
                                        ?
                                        watchListElement.map(movie => (
                                            <Carousel.Item>
                                                <div>
                                                    <span className="d-block">{movie.title}</span> 
                                                    <img src={movie.poster}/>
                                                </div>
                                            </Carousel.Item>
                                            ))
                                        :
                                        <Carousel.Item> Your Watch List is empty</Carousel.Item>
                                    }
                                    {/* {fakeMovieList.map(fakeMovieList => (
                                        <Carousel.Item>
                                            {fakeMovieList}
                                        </Carousel.Item>
                                    ))} */}
                                </Carousel>

                        </Card>
                        <br/>
                        <Card className="text-center">
                        <Card.Header>Movie Watch History</Card.Header>
                            <Carousel className="text-center">
                                {
                                    movieElement
                                    ?
                                    movieElement.map(movie => (
                                        <Carousel.Item>
                                            <div>
                                                <span className="d-block">{movie.title}</span> 
                                                <img src={movie.poster}/>
                                            </div>
                                        </Carousel.Item>
                                    ))
                                    :
                                    <Carousel.Item> Your Watch History is empty</Carousel.Item>
                                }
                                {/* {rows.map((twoMovies: any) => (
                                    <Carousel.Item>
                                        <CardGroup>
                                            {twoMovies.map((movie:any) => (
                                                <Card>
                                                    {movie}
                                                </Card>
                                            ))}
                                        </CardGroup>
                                    </Carousel.Item>
                                ))} */}
                            </Carousel>
                        </Card>

                    </Col>
                    <Col className="pt-4">
                    <Card style={{height: "57rem"}}>
                    <Card.Header>Friends</Card.Header>
                        <div className="justify-content-center">
                                <ListGroup className="seacrh=results" variant="flush">
                                    {
                                        followerElement
                                        ?
                                        followerElement.map(followers => (
                                            <ListGroup.Item>
                                                {followers.username}
                                            </ListGroup.Item>
                                        )) 
                                        :
                                        <ListGroup.Item> No Follower Found</ListGroup.Item>
                                    }
                                   
                                </ListGroup>
                        </div>
                        
                    </Card>
                        
                    </Col>
                </Row>
            </Container>
      
        </>
    )
}