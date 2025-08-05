import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Card, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { userLoginAction } from '../redux';

const UserLoginPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const { userInfo } = useSelector(state=>state.userLogin)
  const { userLoggedIn } = useSelector(state=>state.userLogin)
  

  useEffect(()=>{

    console.log(userInfo, userLoggedIn)
    if (userLoggedIn === true){
        console.log("hey loggedin successfully!!")

    }
    else{

        console.log("hey not loggedin!!")


    }

  },[userInfo, userLoggedIn])
  
  const loginHandler = (e) => {
    e.preventDefault()
    dispatch(userLoginAction(username, password))


  }

  return (
    <div>
        <Container className='justify-content-center flex-d'>
            <Row>
                <Col>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                
                </Col>
                <Col md={4}>
                <Card>
                    <Card.Header className='text-center'>
                        <h5>LOGIN PAGE</h5>
                    </Card.Header>
                <Form onSubmit={loginHandler}>

                    <Card.Body>
                            <Form.Group className='mb-3' controlId='userNameIndex' >
                                <Form.Label>USERNAME</Form.Label>
                                <Form.Control size='sm' type='text' value={username} onChange={e=>setUsername(e.target.value)} />
                            
                            </Form.Group>
                            <br></br>

                            <Form.Group className='mb-3' controlId='userNameIndex' >
                                <Form.Label>PASSWORD</Form.Label>
                                <Form.Control size='sm' type='password' value={password} onChange={e=>setPassword(e.target.value)} />
                            
                            </Form.Group>
                            <br></br>

                    <Button variant="primary" style={{width:'20rem', height: '3rem'}} type='submit' >LOGIN</Button>


                    </Card.Body>

                
    

                </Form>

                                            



                </Card>
                
                </Col>

                <Col md={4}>
                
                </Col>
            </Row>


        </Container>


    </div>
  )
}

export default UserLoginPage