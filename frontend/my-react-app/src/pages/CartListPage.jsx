import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Accordion, Container, Card, Table, Form, Button  } from 'react-bootstrap';
import { cartAction, removeCartItem } from '../redux';
import { Link } from 'react-router-dom';

const CartListPage = () => {
  
  const { cartItems } = useSelector(state=>state.cart)
  const [totalCost, setTotalCost] = useState(0)
  const [totalQty, setTotalQty] = useState(0)
  const [costWithTax, setCostWithTax] = useState(0)
  const dispatch = useDispatch()

  useEffect(()=>{

    const cost = cartItems.reduce((acc, item)=>{
      
      acc += item.qty * item.price

      return acc

    }, 0)

    console.log(cost)
    setTotalCost(cost.toFixed(2))

    const tQty = cartItems.reduce((acc, item)=>{
      
      acc += Number(item.qty)

      return acc

    }, 0)

    setTotalQty(tQty)
    
    const t1 = Number(totalCost) + Number(totalCost) * 20/100

    console.log(t1)
    setCostWithTax(t1.toFixed(2))


  },[cartItems, totalCost, totalQty, costWithTax])

  return (
    <div>

      <Container>
        <Row>
          <Col>

          <Row>
            <Col md={10}>
            
            <Table responsive="sm">
              
              <thead>
                <tr>
                  <th>S.N.</th>
                  <th>NAME</th>
                  <th>IMAGE</th>
                  <th>PRICE</th>
                  <th>QUANTITY</th>
                  <th>REMOVE?</th>

                </tr>
              </thead>
              <tbody>
                {cartItems.map((cart, index)=>(

                  <tr>
                      <td>{index+1}</td>
                      <td>
                      <strong>{cart.name}</strong></td>
                      <td>
                        <img src={cart.image} style={{width:'120px', height: '80px'}}/>
                      </td>

                      <td>
                        <strong>$ {cart.price}</strong>
                      </td>

                      <td>
                        <strong>
                          <Form.Select
                          value={cart.qty}
                          onChange={e=>dispatch(cartAction(cart.id, Number(e.target.value)))}
                          size='sm'
                          >
                           {[...Array(cart.countInStock).keys()].map((x, index)=>(

                          <option key={index+1} value={x+1}>
                           {x+1}
                          </option>


                           ))}
                         
                          </Form.Select>

                        </strong>

                      </td>
                      <td>
                        <Link className='fas fa-trash' onClick={e=>dispatch(removeCartItem(cart.id))}></Link>
                      </td>
                  </tr>




                ))}


              </tbody>



            </Table>
            
            
            </Col>

            <Col md={2}>
            <Row>
              <Col>
              <br></br>
              </Col>
            </Row>
            

            <Card style={{width:'14rem'}}>
              <Card.Header className='text-center'>
                <strong>COST SUMMARY</strong>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col>
                  <Row>
                    <Col md={6}>
                    <h7>NET COST:</h7>

                    </Col>
                    <Col md={6}>
                    <strong>$ {totalCost}</strong>
                    
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <br></br>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                    <h7>QTY:</h7>

                    </Col>
                    <Col md={6}>
                    <strong>{totalQty}</strong>
                    
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                    <br></br>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                    <h7>NET TAX:</h7>

                    </Col>
                    <Col md={6}>
                    <strong>20 %</strong>
                    
                    </Col>
                  </Row>

                                    <Row>
                    <Col>
                    <br></br>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                    <h7>NET COST:</h7>

                    </Col>
                    <Col md={6}>
                    <strong>$ {costWithTax}</strong>
                    
                    </Col>
                  </Row>
                  
                  
                  
                  </Col>
                  

                </Row>
              </Card.Body>

            </Card>

            <Button variant="primary" style={{width:'14rem'}} size="sm">checkout</Button>

            
            
            </Col>

          

          </Row>
          
          
          
          </Col>
        </Row>






      </Container>
    
    

    
    
    </div>
  )
}

export default CartListPage