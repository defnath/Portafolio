import React, { Fragment } from 'react'

function Home() {
  return (
    <Fragment>
        <div className="col py-3 d-flex align-items-center"> 
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                  <div>
                    <h1 className="m-0 font-big slide-in-top">Hola,</h1>
                    <h1 className="m-0 font-big animate-charcter">Soy Nathaly Amao,</h1>
                    <p className="ls-2 mt-2 slide-in-bottom">Desarrolladora FullStack / Profesional en Diseño y Desarrollo de Software </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <img className="img-fluid" src="../images/imagehome.png" alt="..."></img>
                </div>
              </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Home