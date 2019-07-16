import React, { Component } from 'react';
import Slider from './Slider';

const content = [
    {
        img: "https://s3.amazonaws.com/brandedcontent.static.infobae.com/Motorola/assets/img/img-galeria-2.png",
        url: '',
        author: 'Carlos Vidal',
        location: "Andalgalá, Catamarca"
    },
    {
        img: "https://s3.amazonaws.com/brandedcontent.static.infobae.com/Motorola/assets/img/img-galeria-3.png",
        url: 'http://www.instagram.com/francomecon1',
        author: 'Franco Meconi',
        location: "CABA"
    },
    {
        img: "https://s3.amazonaws.com/brandedcontent.static.infobae.com/Motorola/assets/img/img-galeria-4.png",
        url: 'https://www.facebook.com/pamroblesspace',
        author: 'Pam Robles',
        location: "Ampimpa, Tucumán"
    },
    {
        img: "https://s3.amazonaws.com/brandedcontent.static.infobae.com/Motorola/assets/img/img-galeria-5.png",
        url: 'https://www.facebook.com/gferrarino',
        author: 'Gerardo Ferarino',
        location: "Bahía Creek, Río Negro"
    },
    {
        img: "https://s3.amazonaws.com/brandedcontent.static.infobae.com/Motorola/assets/img/img-galeria-6.png",
        url: 'https://www.facebook.com/marinubg',
        author: 'Marina Barrionuevo Grellet',
        location: "Ruinas Quilmes, Tucumán"
    },
    {
        img: "https://s3.amazonaws.com/brandedcontent.static.infobae.com/Motorola/assets/img/img-galeria-7.png",
        url: 'https://www.facebook.com/ramon.rojas.735944',
        author: 'Ramon Rojas',
        location: "Los colorados, Salta"
    },
    {
        img: "https://s3.amazonaws.com/brandedcontent.static.infobae.com/Motorola/assets/img/img-galeria-8.png",
        url: 'https://www.facebook.com/dante.r.apaza',
        author: 'Dante Apaza',
        location: "Salar de Uyuni, "
    },
    {
        img: "https://s3.amazonaws.com/brandedcontent.static.infobae.com/Motorola/assets/img/img-galeria-9.png",
        url: 'https://www.espacioprofundo.com.ar/topic/28086-ic4604-rho-ofiuco-ic4603/',
        author: 'Javier Iaquinta',
        location: "Villa Ballester, GBA"
    },
    {
        img: "https://s3.amazonaws.com/brandedcontent.static.infobae.com/Motorola/assets/img/img-galeria-10.png",
        url: 'Diego Naufel',
        author: 'Diego Naufel',
        location: "Mendoza"
    },
    {
        img: "https://s3.amazonaws.com/brandedcontent.static.infobae.com/Motorola/assets/img/img-galeria-11.png",
        url: 'Sergio Dominguez',
        author: 'Sergio Domínguez',
        location: "Lújan - Buenos Aires"
    },
    {
        img: "https://s3.amazonaws.com/brandedcontent.static.infobae.com/Motorola/assets/img/img-galeria-1.png",
        url: 'https://www.espacioprofundo.com.ar/topic/33329-saturno-y-j%C3%BApiter-con-gmr-desde-las-tinieblas-2905-reprocesado/',
        author: 'Leandro Yasutake',
        location: "San Miguel - GBA"
    }
];


export default class Home extends Component {
    render() {
        var urlStyle = {
            color: '#fff',
            textDecoration: 'underline'
        };


        return (

            <section className="carrusel-block-section">
                <div className="wrapper-carrusel-block container-wide-section">
                    <div className="carrusel-block">
                        {/* <div style={{ display: 'flex', justifyContent: 'space-between' }} /> */}
                        <Slider
                            options={{
                                autoPlay: 4000,
                                pauseAutoPlayOnHover: true,
                                wrapAround: true,
                                fullscreen: true,
                                adaptiveHeight: true,
                                imagesLoaded: true,
                                reloadCells: true
                            }}
                        >
                            {content.map((item, index) => (
                                <figure style={{ width: '100%' }} key={index}>
                                    <img src={item.img} alt={`${index}`} />
                                    <figcaption style={{ textAlign: 'center' }}>
                                        <a href={item.url}
                                            style={urlStyle}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            @{item.author}
                                        </a> - {item.location}
                                    </figcaption>
                                </figure>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}


