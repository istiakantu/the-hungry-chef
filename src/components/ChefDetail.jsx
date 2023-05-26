import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Recipe from './Recipe';
import { FaRegThumbsUp } from 'react-icons/fa';

const ChefDetail = () => {
    const chefDetails = useLoaderData()
    const { chefPicture, chefName, numberOfRecipes, bio, likes, } = chefDetails;


    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('https://the-hungry-chef-server-istiakantu.vercel.app/recipe')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    return (
        <div className='m-2'>
            <Row>
                <Col xs={12} md={6}>
                    <img className='w-100 chef-detail-img' src={chefPicture} alt="Delicious food and drinks" />
                </Col>
                <Col xs={12} md={6} className="banner-text chef-bio pt-5">
                    <h2 className='text-center fs-1 mb-4'>{chefName}</h2>
                    <p className='fs-3 text-center'>{bio}</p>
                    <div className='d-flex justify-content-around fs-2'>
                        <p><FaRegThumbsUp className='mb-2'></FaRegThumbsUp> : {likes}</p>
                        <p>Number of recipes : {numberOfRecipes}</p>
                    </div>
                </Col>
            </Row>
            <Container className='mt-5'>
                <h2 className='text-center mb-5'>Here are some Recipes</h2>
                <Row>
                    {
                        recipes.map(recipe => <Recipe
                            key={recipe.id}
                            recipe={recipe}>
                        </Recipe>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ChefDetail;