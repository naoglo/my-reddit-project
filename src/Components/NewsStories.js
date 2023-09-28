import React, {useEffect, useState} from 'react';
import App from '../App';
import axios from 'axios';
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
    const [news, setNews] = useState([]);

    useEffect(() =>{
        const loadNews = async() => {
            const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c18e89f93021422e8cb28ee5e157580f')
            setNews(response.data.articles);
        }
        loadNews();
    }, []);

    console.log('news', news);

    return (
        <div>
      {/*  <div className='main' style={styles.main}> 
        {fakeStories.map((fake) => <p>{fake}</p>)

         } */}
       {news && news.map((item, index) =>{
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