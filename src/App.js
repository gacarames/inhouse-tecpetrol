import React from 'react';
/* import { Route } from 'react-router-dom' */
import ReactGA from 'react-ga';

import './css/main.css';

/* assets */

/* components */
import NavBar from './components/shell/NavBar';
import HeaderHero from './components/section-headers/HeaderHero';
import Introduction from './components/section-intro/Introduction';
import TextBlock from './components/section-text/TextBlock';
import DisplayHeading from './components/section-text/DisplayHeading';
import Paragraph from './components/section-text/Paragraph';
import List from './components/section-text/List';
import CardsRow from './components/section-cards/CardsRow';
import Card from './components/section-cards/Card';
import EmbedVideo from './components/section-media/VideoEmbed';
import IframeEmbed from './components/section-media/IframeEmbed';
import ImageSingle from './components/section-media/ImageSingle';
import Copyright from './components/shell/Copyright';

function App() {

  ReactGA.initialize('UA-759511-1');
  ReactGA.pageview(window.location.pathname/*  + window.location.search */);

  const list = [
    {
      id: '1',
      content: 'Es el combustible no renovable más limpio'
    },
    {
      id: '2',
      content: 'No tiene olor: ¿y por qué se siente olor a gas? porque se le añade por seguridad odorizantes, siendo el mercaptano el más utilizado'
    },
    {
      id: '3',
      content: 'El gas natural ya se usaba en China, Grecia, Persia, India y Japón 500 años antes de Cristo, pero hace 200 que se utiliza en la vida cotidiana.'
    },
    {
      id: '4',
      content: 'Puede transportarse en barco (si está en estado líquido -GNL- lo que ocurre a muy bajas temperaturas)'
    }
  ];

  return (
    <div className="App">

      <NavBar />

      <HeaderHero
        image={require('./assets/img/destacada.jpg')}

        title="Por qué el potencial de Vaca Muerta podría compararse con el campo argentino"
        vertical="center"
      />

      <Introduction
        logo={require('./assets/icons/TP_Isologo.jpg')}
        date="9 de Julio de 2019"
        content="Ubicada en la cuenca Neuquina, en las provincias de Neuquén, Río Negro, La Pampa y
Mendoza, Vaca Muerta es la formación de gas no convencional más grande del país. Con
ella, Argentina es el segundo en shale gas en el mundo y por eso, si se desarrolla
plenamente, puede ser un motor de desarrollo con un potencial comparable al del campo
argentino."
      />

      <TextBlock
        container="small"
      >

        <Paragraph
          type="capital-letter"
          content="Tiene una superficie de 30 mil kilómetros cuadrados, un tamaño similar al de un país como
Bélgica y puede abastecer de gas a todos los argentinos por los próximos 100 años."
        />

        <Paragraph
          content="Actualmente el recurso que se produce allí –del orden de los 300 mil barriles equivalentes
de petróleo diarios- está reemplazando importaciones de gas oil, fueloil y gas natural
licuado, y contribuye a una mejora de la balanza comercial de energía del país."
        />

      </TextBlock>

      <ImageSingle
        image={require('./assets/img/foto-2.jpg')}
      />

      <TextBlock
        container="small"
      >

        <Paragraph
          content="Además de mejorar la balanza comercial argentina, Vaca Muerta genera otros impactos positivos para el país: gracias al aumento de la producción local se reducen los precios del gas natural, como tal, y el utilizado para la generación eléctrica, beneficiando tanto a usuarios domiciliarios como a la industria, consumidores de GNC y a los comercios."
        />

      </TextBlock>

      <ImageSingle
        image={require('./assets/img/foto-3.jpg')}
      />    

      <TextBlock
        container="small"
      >
        <DisplayHeading
          sizeText="32px"
          textAlign="center"
          contentHeading="¿Por qué es importante el gas natural?"
        />

        <Paragraph
          content="Es sabido que sirve para calefaccionar y cocinar, pero también se usa para generar energía eléctrica para iluminar las casas y alimentar electrodomésticos, e incluso para fabricar productos para limpiar el hogar. También se lo utiliza como combustible para autos, colectivos y camiones."
        />     

      </TextBlock>

      <EmbedVideo
        container="small"
        ratio="1-1"
        src="https://s3.amazonaws.com/brandedcontent.static.infobae.com/tecpetrol/video-2.mp4"
        poster={require('./assets/img/cover.webp')}
      />

      <TextBlock
        container="small"
      >
        <DisplayHeading
          sizeText="32px"
          textAlign="center"
          contentHeading="Un mega desarrollo"
        />

        <Paragraph
          content="En solo 18 meses, el yacimiento Fortín de Piedra pasó de producir casi cero a más de 17.5 millones de metros cúbicos de gas por día. De esta forma, Tecpetrol es protagonista fundamental en la mejora de la balanza comercial argentina ya que desde Vaca Muerta produce el 13% del consumo diario de gas en Argentina."
        />

      </TextBlock>

      <ImageSingle
        image={require('./assets/img/foto-4.jpg')}
      />    

      <TextBlock
        container="small"
      >

        <Paragraph
          content="Durante el período de máxima actividad en Fortín de Piedra, se llegó a perforar con 7 equipos, siendo el primer desarrollo de gas no convencional en involucrar tantos equipos trabajando en simultáneo. Hoy el campo operado por Tecpetrol cuenta con más de 80 pozos perforados."
        />
        <Paragraph
          content="Apartado extra: El desarrollo no convencional se realiza por la baja permeabilidad de la roca que genera los hidrocarburos, entonces se perforan pozos horizontales y se aplican técnicas de estimulación hidráulica que permiten producir el gas y el petróleo alojados allí."
        />
        <Paragraph
          content="Además, para separar los hidrocarburos del agua y poner el gas en condición comercial, en agosto del año pasado se inauguró una planta central de procesamiento. La instalación se generó con un 94% de componentes nacionales y, en su pico, demandó más de 4500 empleos."
        />

      </TextBlock>

      <IframeEmbed
        container="wide"
        ratio="16-9"
        src="https://player.vimeo.com/video/279272481"
      />

      <TextBlock
        container="wide"
      >
        <DisplayHeading
          sizeText="32px"
          textAlign="center"
          contentHeading="Cinco cosas que no sabías sobre el gas natural"
        />

        <List
          list={list}
          image={require('./assets/img/side-image.png')}
        />

      </TextBlock>

      <CardsRow
        container="media"
      >
        <Card>

          <img src={require('./assets/img/TP_Isologo.jpg')}
            alt=""
            style={{ marginTop: '32px'}}
          />
        </Card>
      </CardsRow>

      <Copyright
        content="Todos Los Derechos Reservados © 2019 infobae"
      />

    </div>
  );
}

export default App;
