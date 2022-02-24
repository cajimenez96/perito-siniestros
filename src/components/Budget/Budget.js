import React from 'react';
import './budget.css';
import Img1 from './images/logo.jpeg';

const Budget = () => {
  return (
      <div className='container d-flex flex-column'>
        <h2>Presupuesto</h2>
        <div className="d-flex justify-content-center mt-3 p-5">
          <div>
            <img src={Img1} className='rounded mx-auto d-block w-50 imagen' />
          </div>
          <div>
            <h5 className='fw-bold'>¿No tenés seguro?</h5>
            <span className='fw-normal'>Nos encargamos de la gestión completa ante la compañía de seguro del tercero para que puedas reparar tu vehículo sin costo. Reclamá a la compañía del tercero aunque no tengas seguro.</span>
            <br/>
            <span className='fst-italic mt-4'>Te brindamos el mejor asesoramiento!. Contamos con presupuesto originales con firma responsable de un taller registrado brindando siempre valores actualizados en el mercado.</span>
          </div>
        </div>
        <div className='d-flex flex-column'>
          <div className="m-3">
            <div>
              <h5>Condiciones</h5>
            </div>
            <div>
              <span className='fw-normal'>Para que podamos reparar tu vehículo el tercero (quien te chocó), tiene que cumplir con lo siguiente:</span>
              <ul>
                <li>Haber realizado la denuncia administrativa en su seguro.</li>
                <li>Contar con cobertura al momento del siniestro.</li>
                <li>Ser el responsable del accidente.</li>
              </ul>
            </div>
          </div>
          <div className="d-flex m-3">
            <div>
              <div>
                <h5>Documentacion necesaria:</h5>
              </div>
              <div>
                <ul>
                  <li>Copia de Cédula Verde y Registro de conducir.</li>
                  <li>Copia de DNI del titular.</li>
                  <li>Denuncia Administrativa en tu seguro.</li>
                  <li>Certificado de cobertura a la fecha del siniestro emitido por tu seguro.</li>
                  <li>Fotos de los daños (una que se vea la patente).</li>
                </ul>
              </div>
            </div>
            <div>
              <input type="button" value="Solicitar asesoramiento" className="btn btn-secondary btnAdvice"/>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Budget;
