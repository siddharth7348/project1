import React, {useState, useEffect} from 'react'

import { useParams, Link, useNavigate } from 'react-router-dom';

import { Row, Col, Container, Card, ListGroup, Form, Button } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';

import Rating from '../components/Rating';

import { prodDetailsAction, cartAction } from '../redux';


const ProductPage = () => {
  
  const args = useParams()
  const dispatch = useDispatch()
  const { product } = useSelector(state=>state.prodDetails)
  const [qty, setQty] = useState(1)
  const navigate = useNavigate()

  useEffect(()=>{

    console.log(args.id)
    
    dispatch(prodDetailsAction(args.id))
    console.log([...Array(product.countInStock).keys()], product.countInStock)

    console.log(qty)



  }, [qty])

  const addToCartHandler = (e) =>{
    console.log(qty)
    dispatch(cartAction(args.id, qty))
    navigate(`/cart/${args.id}?qty=${qty}/`)
  }

  return (
    <div>
        <Container className='md'>
            <Row>
               <Col>
               <Row>
                <Col>

                <br></br>
                <br></br>
                 <Link className='justify-content-center text-center' to="/">back</Link>
                </Col>
               </Row>
               <Row>
                   <Col md={4}>
                   <Card>
                    <Card.Img src={product.image} style={{width:'20rem', height: '15rem'}} />


                   </Card>
                   
                   
                   </Col>

                   <Col md={6}>
                   <Card style={{width:'28rem', height: '15rem'}}>
                    <Card.Header>
                        <h6>PRODUCT DESCRIPTION</h6>
                    </Card.Header>

                    <Card.Body>
                      <Row>
                        <Col>
                        <Row>
                            <Col md={4}>
                            <strong>name:</strong>
                            </Col>
                            <Col md={8}>
                            <strong>{product.name}</strong>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <br></br>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={4}>
                            <strong>price:</strong>
                            </Col>
                            <Col md={8}>
                            <strong>$ {product.price}</strong>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <br></br>
                            </Col>
                        </Row>


                        <Row>
                            <Col md={4}>
                            <strong>brand:</strong>
                            </Col>
                            <Col md={8}>
                            <strong>{product.brand}</strong>
                            </Col>
                        </Row>

                            <Row>
                            <Col>
                            <br></br>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={4}>
                            <strong>category:</strong>
                            </Col>
                            <Col md={8}>
                            <strong>{product.category}</strong>
                            </Col>
                        </Row>


                        <Row>
                            <Col>
                            <br></br>
                            </Col>
                        </Row>


                        <Row>
                            <Col md={4}>
                            <strong>description:</strong>
                            </Col>
                            <Col md={8}>
                            <strong>{product.description}</strong>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                            <br></br>
                            </Col>
                        </Row>


                        <Row>
                            <Col md={4}>
                            <strong>rating:</strong>
                            </Col>
                            <Col md={8}>
                            <strong>
                                <Rating rating={product.rating} color='green' text={`${product.rating}`} />
                            </strong>
                            </Col>
                        </Row>



                        </Col>
                      </Row>

                    </Card.Body>

                   </Card>
                   
                   </Col>

                   <Col md={2}>
                      <h6>SELECT QTY</h6>
                      <Form.Select
                      value={qty}
                      onChange={e=>setQty(e.target.value)}
                    size='sm'
                      >
                {[...Array(product.countInStock).keys()].map((x, index)=>(

                        <option key={x+1}>
                            <strong>

                                {x+1}
                        
                            </strong>
                        </option>
                ))}
                      </Form.Select> 
                    

                    <Row>
                        <Col>
                        <br></br>
                        
                        <Button type='primary' onClick={addToCartHandler} className='btn btn-block primary' style={{width:'10.5rem', height: '3rem'}}>ADD TO CART</Button>               

                        </Col>
                    </Row>
                   
                   </Col>

                <br></br>



               </Row>
               
               
               </Col>

            </Row>


        </Container>

    </div>
  )
}

export default ProductPage