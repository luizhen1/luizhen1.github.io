import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import { AiOutlineSearch } from 'react-icons/ai';

import Video from '../../assets/maldivesVideo.mp4';

function Hero() {
    const [query, setQuery] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const destinations = ['Bora Bora', 'Emerald Bay', 'Maldives', 'Grenada', 'Barbados', 'Key West'];
        const lowerQuery = query.toLowerCase();
        const matchedDestination = destinations.find(destination => 
            lowerQuery.includes(destination.toLowerCase())
        );

        if (matchedDestination) {
            navigate('/pacotes');
        } else {
            setError('Não há nenhum local com este nome.');
        }
    };

    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="content">
                <h1>Viagem de primeira classe</h1>
                <h2>Descubra o mundo conosco</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <div>
                        <input 
                            type="text" 
                            placeholder='Pesquise Destinos' 
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>
                    <div>
                        <button type="submit"><AiOutlineSearch className='icon'/></button>
                    </div>
                </form>
                {error && <p className="error-message">{error}</p>}
            </div>
        </div>
    );
}

export default Hero;
