import React, { Fragment } from 'react'
import { SiFacebook, SiTwitter } from 'react-icons/si';

function Resume() {
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 bg-dark slide-in-top">
                
                <div className="row">
                    <div className="col-6">
                        <h2 className="ff-jose fw-bold ls-2">Nathaly Amao</h2>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">Experiencia Laboral</h4>
                        <ul>
                            <li>
                                <h3 className="ff-jose my-1">SUPERVAN</h3>
                                <h5 className="blue-label px-3 py-2">Abr - Jun 2023</h5>
                                <h4 className="m-0">Pasante de Programación</h4>
                                <p>Callao, Perú</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">Educación Superior</h4>
                        <ul>
                            <li>
                                <h3 className="ff-jose my-1">TECSUP</h3>
                                <h5 className="blue-label px-3 py-2">2021 - 2023</h5>
                                <h4 className="m-0">Diseño y Desarrollo de Software</h4>
                                <p>Lima, Perú</p>
                            </li>
                        </ul>
                    </div>
                    <hr></hr>
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">Logros Académicos</h4>
                        <ul>
                            <li>
                                <h3 className="ff-jose my-1">Fundación Telefónica</h3>
                                <h6 className="blue-label px-2 py-1">2023</h6>
                                <h4 className="m-0">Curso en Conecta Empleo de JavaScript</h4>
                            </li>
                            <li>
                                <h3 className="ff-jose my-1">Tecsup</h3>
                                <h6 className="blue-label px-2 py-1">2023</h6>
                                <h4 className="m-0">Nivel intermedio de Inglés(B1)</h4>
                            </li>
                            <li>
                                <h3 className="ff-jose my-1">AWS</h3>
                                <h6 className="blue-label px-2 py-1">2023</h6>
                                <h4 className="m-0">AWS Academy Cloud Foundations</h4>
                            </li>
                            <li>
                                <h3 className="ff-jose my-1">Cisco</h3>
                                <h6 className="blue-label px-2 py-1">2021</h6>
                                <h4 className="m-0">Python Essentials 1</h4>
                            </li>
                            <li>
                                <h3 className="ff-jose my-1">Cisco</h3>
                                <h6 className="blue-label px-2 py-1">2021</h6>
                                <h4 className="m-0">IT Essentials</h4>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr></hr>
                
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">Redes Sociales</h4>
                        <h1>
                            <a href="https://twitter.com/la_kpoperr" target="/blank" className="text-white text-decoration-none mx-2">
                                <SiTwitter className="zoom-on-hover"/>
                            </a> 
                            <a href="https://www.facebook.com/AhGaaaSeee" target="/blank" className="text-white text-decoration-none mx-2">
                                <SiFacebook className="zoom-on-hover"/>
                            </a> 
                        </h1>
                    </div>
                </div>
                
            </div>
        </div>
    </Fragment>
  )
}

export default Resume