import React from 'react'
import {useContadorContext} from '../context/ContadorContext'

function ContadorCuenta() {
    const { count } = useContadorContext();
  return (
    <div className="flex flex-col items-center gap-2 p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">Cuenta: {count }</h2>
    </div>
  )
}

export default ContadorCuenta
