import {useContadorContext} from '../context/ContadorContext'

function ContadorController() {
    const { HandleIncrement, HandleDecrement, HandleReset } = useContadorContext();
  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded-lg shadow-md">
      <button onClick={HandleIncrement}>Incrementar</button>
      <button onClick={HandleDecrement}>Decrementar</button>
      <button onClick={HandleReset}>Resetear</button>
    </div>
  )
}

export default ContadorController
