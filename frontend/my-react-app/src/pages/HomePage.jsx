import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Container, Row, Col } from 'react-bootstrap';

import { productAction } from '../redux';

import Product from '../components/Product';

const HomePage = () => {
  const dispatch = useDispatch()
  const { prodList } = useSelector(state=>state.products)
  

  useEffect(()=>{

    dispatch(productAction())

    console.log("products", prodList)



  },[])

  return (
    <div>
        <Container>
            <Row>
                {prodList.map((product, index)=>(

              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>

                <Product product={product} />
                
              </Col>



                ))}
            </Row>

        </Container>


    </div>
  )
}

export default HomePage