import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chef from './Chef';
import { Row } from 'react-bootstrap';

const Chefs = () => {
    const chefs = useLoaderData()
    return (
        <div className='mt-5 m-2'>
            <h2 className='text-center mb-5 fs-2'>Meet Our Chefs</h2>
            <Row xs={1} sm={2} md={3} lg={3}>
            {
                chefs.map(chef=>
                <Chef
                key={chef.id}
                chef={chef}
                >
                </Chef>)
            }
            </Row>
        </div>

    );
};

export default Chefs;