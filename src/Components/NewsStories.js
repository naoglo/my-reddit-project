import React, {useEffect, useState} from 'react';
import App from '../App';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { selectAllArticles, fetchArticles } from '../ArticlesSlice'

import { Button } from 'antd';
import { Card } from 'antd';
//import 'antd/dist/antd.css'

const {Meta} = Card;

//const fakeStories = ['Freddy Starr Ate My Hamster.', 'Underwear bandit caught, admits brief crime spree.','Flying saucer seen in Woodbridge.', 'Heatwave coming to Suffolk' ];

const NewsStories = () => {
    const styles = {
        main: {
            gridArea: 'main',
            backgroundColor: 'lightblue',
        },
    };

    const dispatch = useDispatch()
    const articles = useSelector(selectAllArticles)
    const articlesStatus = useSelector((state) => state.articles.status)
    const error = useSelector((state) => state.articles.error)
  
  
    useEffect(() => {
        if (articlesStatus === 'idle') {
            dispatch(fetchArticles())
        }
    }, [dispatch, articlesStatus])

   

    return (
        <div>
      {/*  <div className='main' style={styles.main}> 
        {fakeStories.map((fake) => <p>{fake}</p>)

         } */}
       {articles && articles.map((item, index) =>{
        return (
            <Card
            key={index}
            hoverable
            style={{width: '70%'}}
            cover={<img alt='image' src={item.urlToImage}/>}
            >
                <Meta title ={item.title} description={item.content}/>
                <a href={item.url} target='_blank' rel='noopener noreferrer'>
                <Button type='primary' style={{marginTop:'10px'}}>Read More </Button>
                </a>
            </Card>
        )
       } )}
        
        </div>
    )
}
export default NewsStories;