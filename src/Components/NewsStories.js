import React, {useState} from 'react';
import App from '../App';

const fakeStories = ['Freddy Starr Ate My Hamster.', 'Underwear bandit caught, admits brief crime spree.', 
'Flying saucer seen in Woodbridge.', 'Heatwave coming to Suffolk' ];

const NewsStories = () => {
    const styles = {
        main: {
            gridArea: 'main',
            backgroundColor: 'lightblue',
    },
};
const [story, setStory] = useState([]);

    return (
        <>
        <div className='main' style={styles.main}> 
        {fakeStories.map((fake) => <p>{fake}</p>)

         }
        
        </div>
        </>
    )
}
export default NewsStories;