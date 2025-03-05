import React from 'react'
import './Footer.css'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'


function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <h3>DESTINO CERTO.</h3>
                    <div className="social">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                        
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <ul>
                        <a href="/sobre"> 
                            <li>Sobre</li>
                        </a>
                        <a href="/parcerias"> 
                            <li>Parcerias</li>
                        </a>
                        <a href="/carreiras"> 
                            <li>Carreiras</li>
                        </a>
                        </ul>
                    </div>
                    <div className="right">
                    <a href="/infos"> 
                        <ul>
                            <li>Contato</li>
                            <li>Termos</li>
                            <li>Política</li>
                            <li>Privacidade</li>
                            <li>Preços</li>
                            <li>SAC</li>
                        </ul>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
