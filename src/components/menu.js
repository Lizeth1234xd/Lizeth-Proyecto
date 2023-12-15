import React from 'react';
import './menu.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap'; 
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/logo.jpg';
import logofacebook from './img/logofacebook.jpg';
import sajta from './img/sajtadepollo.jpg';
import chancho from './img/chancho.jpg';
import falsoconejo from './img/falsoconejo.jpg';
import majadito from './img/majadito.jpg';
import sandwichdechola from './img/sandwichdechola.jpg';
import chajchu from './img/chajchu.jpg';
import salteña from './img/salteña.jpg';
import silpancho from './img/silpancho.jpg';
import jakalawa from './img/jakalawa.jpg';
import anticucho from './img/anticucho.jpg';
import quinua from './img/quinua.jpg';
import humintas from './img/humintas.jpg';
import charque from './img/charque.jpg';
import llajwa from './img/llajwa.jpg';
import picana from './img/picana.jpg';
import video from './vid/comida.mp4';
import video2 from './vid/comida2.mp4';
import video3 from './vid/comida3.mp4';
import {Form} from 'react-bootstrap';
import logo1 from './img/logo1.jpg'
import logo2 from './img/logo2.jpg'
import apiconpastel from './img/apiconpastel.jpg'
import masaco from './img/masaco.jpg'


const Header = () => {
  return (
    <div className='body'>
    <div className='tapi'>
    <div class="logo">
    <img src={logo}/>
    <div class="logofacebook">
    <a href="https://www.facebook.com/profile.php?id=100064044193097">
    <img src={logofacebook}/>
    </a>
    </div>
    </div>
    <h1>PLATOS TIPICOS DE BOLIVIA</h1>
    <nav>
      <ul>
          <li><a href="#int">✿Introduccion✿</a></li>
          <li><a href="#car">❀Carusel❀</a></li>
          <li><a href="#bot">✾Botones✾</a></li>
          <li><a href="#mul">❁Multimedia❁</a></li>
          <li><a href="#for">ꕤFormularioꕤ</a></li>
          <li><a href="#cre">ꕥCreditosꕥ</a></li>
      </ul>
    </nav>
    </div>
    <center>
      <div>
        <div className='x1'>
    <div className='b1'>
    <h2 id="#int" className='pp'>✿Introduccion✿</h2>
    <p className='a3'>
La gastronomía boliviana es una rica amalgama de sabores, colores y tradiciones que reflejan la diversidad cultural y geográfica del país. Desde las tierras altas de los Andes hasta las llanuras del oriente, Bolivia ofrece una variada gama de platos típicos que deleitan los paladares con sus ingredientes autóctonos y técnicas culinarias ancestrales. A continuación, exploraremos algunos de los platos más representativos de la cocina boliviana, que han perdurado a lo largo del tiempo como verdaderas joyas culinarias.</p>
<table>
  <tr>
    <td>
      <h3>Salteñas</h3>
      Estas deliciosas empanadas bolivianas son una exquisitez que combina lo mejor de la tradición española con ingredientes locales. Rellenas de jugosos guisos de carne, pollo o verduras, las salteñas son una explosión de sabores envueltos en una masa suave y ligeramente dulce.
    </td>
    <td><img className='imag' src={salteña}/></td>
  </tr>
</table>
<table>
  <tr>
    <td>
      <h3>Sajta de Pollo</h3>
    Originaria de la región andina, la sajta de pollo es un festín para el paladar. Este plato se compone de trozos de pollo cocidos en una sabrosa salsa de ají, papas y queso, creando una mezcla picante y reconfortante.
    </td>
    <td><img className='imag' src={sajta}/></td>
  </tr>
</table>
<table>
  <tr>
    <td>
      <h3>Charque de Llama</h3>
      La llama, animal autóctono de los Andes, es la estrella de este plato. El charque de llama consiste en carne deshidratada y posteriormente sazonada y cocida. Se sirve generalmente con papas y mote, un tipo de maíz.
    </td>
    <td><img className='imag' src={charque}/></td>
  </tr>
</table>
<table>
  <tr>
    <td>
      <h3>Silpancho</h3>
      Originario de la región de Cochabamba, el silpancho es un platillo que combina carne de res empanizada, arroz, papas, huevo frito y ensalada. Esta colorida combinación de ingredientes crea una experiencia culinaria única y deliciosa.
    </td>
    <td><img className='imag' src={silpancho}/></td>
  </tr>
</table>
<table>
  <tr>
    <td>
      <h3>Humintas</h3>
      Estas pequeñas delicias son una especie de tamal boliviano, preparadas a base de maíz molido y sazonadas con manteca, queso y anís. Se cocinan al vapor en hojas de maíz y son ideales como acompañamiento o como bocadillo por sí mismas.
    </td>
    <td><img className='imag' src={humintas}/></td>
  </tr>
</table>
<table>
  <tr>
    <td>
    <h3>❅Y Mucho Mas❅</h3>
    </td>
  </tr>
</table>

<br></br>
<h3 id="car" className='pp' >❀Carusel❀</h3>
<br></br>
</div>
    </div>
    <div className='x2'>
<Carousel className='carusel'>

<Carousel.Item>
  <img
    className="plato"
    src={masaco}
  />
  <Carousel.Caption>
    <h2>Masaco</h2>
  </Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
  <img
    className="plato"
    src={chancho}
  />
  <Carousel.Caption>
    <h2>Chancho</h2>
  </Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
  <img
    className="plato"
    src={humintas}
  />
  <Carousel.Caption>
    <h2>Humintas</h2>
  </Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
  <img
    className="plato"
    src={sajta}
  />
  <Carousel.Caption>
    <h2>Sajta</h2>
  </Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
  <img
    className="plato"
    src={quinua}
  />
  <Carousel.Caption>
    <h2>Quinua</h2>
  </Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
    <img
      className="plato"
      src={falsoconejo}
      />
    <Carousel.Caption>
      <h2>Falso Conejo</h2>
    </Carousel.Caption>
  </Carousel.Item>

<Carousel.Item>
  <img
    className="plato"
    src={majadito}
  />
  <Carousel.Caption>
    <h2>Majadito</h2>
  </Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
  <img
    className="plato"
    src={apiconpastel}
  />
  <Carousel.Caption>
    <h2>Api con Pastel</h2>
  </Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
  <img
    className="plato"
    src={sandwichdechola}
  />
  <Carousel.Caption>
    <h2>Sandwich De Chola</h2>
  </Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
  <img
    className="plato"
    src={chajchu}
  />
  <Carousel.Caption>
    <h2>Chajchu</h2>
  </Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
  <img
    className="plato"
    src={salteña}
  />
  <Carousel.Caption>
    <h2>Salteña</h2>
  </Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
  <img
    className="plato"
    src={silpancho}
  />
  <Carousel.Caption>
    <h2>Silpancho</h2>
  </Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
  <img
    className="plato"
    src={anticucho}
  />
  <Carousel.Caption>
    <h2>Anticucho</h2>
  </Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
  <img
    className="plato"
    src={jakalawa}
  />
  <Carousel.Caption>
    <h2>Jaka Lawa</h2>
  </Carousel.Caption>
</Carousel.Item>

</Carousel>
</div>
</div>
<br></br>
<h2 id='bot' className='pp'>✾Botones✾</h2>
<br></br>

<table>
  <tr>
    <td>
      <Button className='pt1' type="submit" href="https://www.cocina-boliviana.com/recetas/entradas/saltenas" variant="outline-light">Salteña</Button>{' '}
<br></br>
      <img className='pt2' src={salteña}/>
    </td>

    <td>
<Button className='pt1' type="submit" href="https://www.recetasnestle.com.bo/recetas/sajta-de-pollo" variant="outline-light">Sajta</Button>{' '}
<br></br>
<img className='pt2' src={sajta}/>
</td>

    <td>
<Button className='pt1' type="submit" href="https://www.cocina-boliviana.com/recetas/plato-principal/silpancho-cochabambino" variant="outline-light">Silpancho</Button>{' '}
<br></br>
<img className='pt2' src={silpancho}/>
</td>

    <td>
<Button className='pt1' type="submit" href="https://comidasbolivianass.com/costumbres/llajua/" variant="outline-light">Llajwa</Button>{' '}
<br></br>
<img className='pt2' src={llajwa}/>
</td>

    <td>
<Button className='pt1' type="submit" href="https://www.recetas.com.bo/content/picana-de-navidad" variant="outline-light">Picana</Button>{' '}
<br></br>
<img className='pt2' src={picana}/>
</td>

    <td>
<Button className='pt1' type="submit" href="https://www.recetas.com.bo/receta/humintas-a-la-olla" variant="outline-light">Humintas</Button>{' '}
<br></br>
<img className='pt2' src={humintas}/>
</td>
  </tr>
</table>

<div className="vide">
<h2 id="mul" className='pp'>❁Multimedia❁</h2>
<br></br>
<Carousel>
  <Carousel.Item>
    <video className="vid" controls>
      <source src={video} type="video/mp4" />
    </video>
    <Carousel.Caption>
      <h2 className='vi1'>COMIDAS TIPICAS DE BOLIVIA / COMIDA BOLIVIANA / PLATOS TIPICOS DE BOLÍVIA | DAVID CAMPOS</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <video className="vid" controls>
      <source src={video2} type="video/mp4" />
    </video>
    <Carousel.Caption>
      <h2 className='vi1'>Comida típica de Bolivia 🇧🇴 | 10 platos imprescindibles</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <video className="vid" controls>
      <source src={video3} type="video/mp4" />
    </video>
    <Carousel.Caption>
      <h2 className='vi1'>10 Platillos tipicos de Bolivia | Comida Boliviana</h2>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
<br></br>

<h2 id='for' className='pp'>ꕤFormularioꕤ</h2>

<Form className='nom' >
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label className='gul'>❄Nombre❄</Form.Label>
    <Form.Control type="text" placeholder="Ingresa tu nombre" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label className='gul'>❄Selecciona un plato favorito❄</Form.Label>
    <Form.Control className='gul' as="select">
      <option>Salteña</option>
      <option>Sajta de Pollo</option>
      <option>Charque de Llama</option>
      <option>Chancho</option>
      <option>Fricase</option>
      <option>Picana</option>
      <option>Falso Conejo</option>
    </Form.Control>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label className='gul'>❄Comentario❄</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder="Deja tus comentarios" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Enviar
  </Button>
</Form>

<h2 id='cre' className='pp'>ꕥCreditosꕥ</h2>

<div class="logo1">
    <img src={logo1}/>
</div>

<div className='r1'>
  Nombre:Lizeth Hortencia Echenique Mayta
  <br></br>
  CI:12864297
  <br></br>
  Tema que me toco: Platos Tipicos de Bolivia
</div>

<div class="logo2">
    <img src={logo2}/>
</div>

</center>
<footer>
<p align="center" className='a2'>&copy;Lizeth Hortencia Echenique Mayta 2023</p>
</footer>
    </div>
  );
}
export default Header;