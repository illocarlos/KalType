// nos llevamos al app use reducer pero deberiamos llevarnos este hook a donde quisieramos usar ese reducer
import { useReducer } from "react"
// nos traemos los dos componententes de usereducer que usaremos para la sintasis de este 
import { activityReducer, initialState } from "./reducers/activityReducer"
import Form from "./components/Form"
import ActivityList from './components/ActivityList.tsx'

function App() {
  // lo llamamos esta es la manera de llamrlo  state y dispatch son palabras reservadas de react
  //y en reducer como argumentos le pasamos las funciones que traeremos
  //el primer argumento es para modificar el valor es una funcion en este caso le mandamos un objeto y lo inlcuimos en un array
  // el segundo es el valor por defecto como empieza
  //le mandamos el dispatch a form que es el que mandara la informacion que queremos incluir en reducer
  //es decir en relacion a una funcion pasandola como prop esta seria la manera de llamar 
  //dispatch le mandamos la informacion que deseamos 
  const [state, dispatch] = useReducer(activityReducer, initialState)

  return (
    <>
      <header className=" bg-sky-700 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center text-lg font-bold text-white uppercase"> calories acount</h1>
        </div>
      </header>
      <main>
        <section className="bg-sky-400 py-20 px-5">
          <div className="max-w-4xl mx-auto">
            {/* pasamos como props  dispatch para recibur un informacion */}
            <Form
              dispatch={dispatch}
            />
          </div>
        </section>
        <section className="p-10 mx-auto maw-w-4xl">
          <ActivityList
            dispatch={dispatch}
            activity={state.activities}
          />
        </section>
      </main>
    </>
  )
}

export default App
