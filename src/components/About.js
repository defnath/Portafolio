import React, { Fragment } from 'react'

function About() {
  return (
    <Fragment>
        <div className="col py-3 d-flex align-items-center about-image"> 
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                        <div>
                            <h1 className="font-big text-red slide-in-top">Sobre mi</h1>
                            <hr></hr>
                            <p className='slide-in-bottom'>Profesional de Diseño y Desarrollo de Software en TECSUP. Aspirante a programadora 
                            fullstack con dominio en conceptos clave de .NET, Python y JavaScript adquiridos a través de estudios y proyectos personales. Destaco por mi 
                            capacidad para resolver conflictos, trabajar en equipo y mi determinación para aprender y aplicar estos conocimientos en un entorno laboral.
                            </p>
                            <p className='slide-in-bottom'>
                                Actualmente buscando nuevas oportunidades en la industria y dispuesta para trabajar en proyectos desafiantes y diversos con las últimas tecnologías.<br></br>
                            </p>
                            <p className='slide-in-bottom'>
                                En base a lo aprendido a lo largo de mi carrera tecnica he desarrollado conocimientos de programación en: <br></br>
                            <span className="text-red ls-2">Asp.Net Core, Asp.Net Mvc, <br></br>
                                C#, Sql, Python, JavaScript, Html, Css, entre otros. </span>
                            </p>
                            <p className='slide-in-bottom'>
                                Acualmente aprendiendo inglés.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-fluid" src="../images/trabajo.png" alt="..."></img>
                    </div>
                </div>
            </div>          
        </div>
    </Fragment>
  )
}

export default About