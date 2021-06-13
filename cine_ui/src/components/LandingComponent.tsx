
import React, { useState } from "react"
import { useEffect } from "react";
import {ListGroup, Card, Container, Row, Col, Carousel, CardGroup} from "react-bootstrap"
import { follower } from "../models/follower";
import { User } from "../models/user";
import { getFollowing } from "../remote/landing-service";

//TODO: Setup interface to take a created User property
interface IUserprops{
    curretUser: User | undefined,
    setCurrentUser: (setUserLogIn: User | undefined) => void,
    followers: follower[] | undefined,
    setFollowers: (setFollowersList: follower[]) => void
}

export function LandingComponent(props: IUserprops){

    const listItems = ["A", "B", "C"]

    const fakeMovieList = ["movie1", "movie2", "movie3", "movie 4", "movie 5", "movie6"]

    let followers: follower[] = [];
    //Sets the follwerList (broken, will continuously fire axios call)
    // let arr_follower = (async function(){ 
    //     try{
    //         followers =  await getFollowing(props.curretUser?.id ?? "1");
    //         props.setFollowers(followers);

    //         followers.forEach((item,i) => {
    //             followerslist[i] = item.username
    //         })
    //     }catch(e){
    //         console.log(e);
    //     }

        
    //     return followers;
    // })();

  
        useEffect(()=> {
            console.log("Use Effect is Called")
            const getData = async () => {
                followers = await getFollowing(props.curretUser?.id ?? "1");
                props.setFollowers(followers);
            };
            getData();
        }, [])

    

    const rows = fakeMovieList.reduce(function (rows: any, key, index) { 
        return (index % 2 == 0 ? rows.push([key]) 
          : rows[rows.length-1].push(key)) && rows;
      }, []);

    //   console.log(rows)

    const[followersListTest, setFollowersList] = useState('');
    let updateFollowerlist = (e:any) => {
        console.log("LOADED")
    }
    //TODO: Change these values to match the user's values
    return(

        <>
            <Container fluid>
                <Row>
                    <Col xs = "10">
                        <br/>
                        <Card>
                            <Card.Header>Movies To Watch List</Card.Header>
                                <Carousel >
                                    {fakeMovieList.map(fakeMovieList => (
                                        <Carousel.Item>
                                            {fakeMovieList}
                                        </Carousel.Item>
                                    ))}
                                </Carousel>

                        </Card>
                        <br/>
                        <Card>
                        <Card.Header>Movie Watch History</Card.Header>
                            <Carousel>
                                {rows.map((twoMovies: any) => (
                                    <Carousel.Item>
                                        <CardGroup>
                                            {twoMovies.map((movie:any) => (
                                                <Card>
                                                    {movie}
                                                </Card>
                                            ))}
                                        </CardGroup>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Card>

                    </Col>
                    <Col className="pt-4">
                    <Card style={{height: "57rem"}}>
                    <Card.Header>Friends</Card.Header>
                        <div className="justify-content-center">
                                <ListGroup className="seacrh=results" variant="flush">
                                    {
                                        props.followers 
                                        ?
                                        props.followers.map(followers => (
                                            <ListGroup.Item>
                                                {followers.username}
                                            </ListGroup.Item>
                                        )) 
                                        :
                                        <ListGroup.Item> No Follower Found</ListGroup.Item>
                                    }
                                   
                                    <ListGroup.Item>----------</ListGroup.Item>
                                </ListGroup>
                        </div>
                        
                    </Card>
                        
                    </Col>
                </Row>
            </Container>
      
        </>
    )
}