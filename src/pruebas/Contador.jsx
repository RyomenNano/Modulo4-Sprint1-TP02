import React from 'react'
import { ContadorProvider } from '../context/ContadorContext'
import ContadorCuenta from './ContadorCuenta'
import ContadorControler from './ContadorController'


const Contador = () => {
  return (
    <ContadorProvider>

        <div className="flex flex-col items-center gap-4 p-8">
          <h2 className="text-2xl font-bold">Contador</h2>
          <div className="flex flex-wrap items-center gap-4 justify-center">

            <ContadorCuenta/>
            <ContadorControler/>
          </div>
        </div>

    </ContadorProvider>
  );
}

export default Contador
