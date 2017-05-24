import React from 'react'
import {Helmet} from 'react-helmet'
import Clock from '../../components/Clock'

const TITLE = 'Prueba de indexación JS'

const Home = (props) => (
  <div className='Home'>
    <Helmet>
      <title>{TITLE}</title>
      <link rel='canonical' href='https://poccsr.ovh/' />
    </Helmet>
    <h1>{TITLE}</h1>
    <h2>Static content</h2>
    <p>Realizamos esta prueba de inxeación JS para determinar si es necesario o no utilizar JS isomórfico.</p>
    <p>Realizamos esta prueba de inxeación JS para determinar si es necesario o no utilizar JS isomórfico.</p>
    <p>Realizamos esta prueba de inxeación JS para determinar si es necesario o no utilizar JS isomórfico.</p>
    <p>John Mueller comentó en Angular Connect 2017 que la solución para indexar JS de forma sefura era utilizar JS isomorfico.</p>
    <p>Nosotros utilizamos JS isomorfico pero queremos dejar de utilizarlo por temas de perfomance.</p>
    <p>Por cierto, aquí va la definición de isomorfismo:</p>
    <p>isomorfismo estructural; las teorías tienen que ver con la verdad, en la medida en la que hay fenómenos que han de tener algún tipo de isomorfismo con los modelos que </p>

    <h2>Dinamyc content</h2>
    <Clock />
  </div>
)

Home.displayName = 'Home'

export default Home
