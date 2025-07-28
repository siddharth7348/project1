import React, { useState, useEffect } from 'react';
import { Col, Row, Container, Card  } from 'react-bootstrap';
import { productAction } from '../redux';
import Rating from './Rating';

const Product = ({product}) => {
  return (
    <div>
        <Container className='my-3 p-3 rounded'>
            <Card>
                <Card.Header>
                <Card.Link href={`product/${product._id}/`}>
    
                <Row>
                    <Col>
                    <Card.Img src={product.image} />
                    
                    
                    </Col>
                   </Row>
                </Card.Link>   
                </Card.Header>
                <Card.Body>
                    <Row>
                   <Col>
                   <Card.Link href={`product/${product._id}/`}>
                   <Row>
                    <Col>
                     <strong>{product.name}</strong>
                    
                    
                    </Col>
                   </Row>
                   <Row>
                    <Col>
                    <Rating rating={product.rating} color="green" text={`rating ${product.rating}`} />
                    </Col>
                   </Row>
                   
                   </Card.Link>                   
                   
                   </Col>

                </Row>
                </Card.Body>


            </Card>

        </Container>


    </div>
  )
}

export default Product