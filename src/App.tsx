// nos llevamos al app use reducer pero deberiamos llevarnos este hook a donde quisieramos usar ese reducer
import { useEffect, useMemo } from "react"
// nos traemos los dos componententes de usereducer que usaremos para la sintasis de este 
// import { activityReducer, initialState } from "./reducers/activityReducer"
import { useActivity } from "./hooks/useActivity.ts"
import Form from "./components/Form"
import ActivityList from './components/ActivityList.tsx'
import CaloriesTracker from "./components/CaloriesTracker.tsx"
function App() {
  // lo llamamos esta es la manera de llamrlo  state y dispatch son palabras reservadas de react
  //y en reducer como argumentos le pasamos las funciones que traeremos
  //el primer argumento es para modificar el valor es una funcion en este caso le mandamos un objeto y lo inlcuimos en un array
  // el segundo es el valor por defecto como empieza
  //le mandamos el dispatch a form que es el que mandara la informacion que queremos incluir en reducer
  //es decir en relacion a una funcion pasandola como prop esta seria la manera de llamar 
  //dispatch le mandamos la informacion que deseamos 
  // const [state, dispatch] = useReducer(activityReducer, initialState)


  const { state, dispatch } = useActivity()

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities])

  const canRest = () => useMemo(() => state.activities.length, [state.activities])

  return (
    <>
      <header className=" bg-sky-700 py-3">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-center text-lg font-bold text-white uppercase"> calories acount</h1>
          <button
            className=" rounded-xl bg-white px-3 border-none font-extrabold hover:bg-slate-900 hover:text-white transition-all ease-linear disabled:opacity-5 disabled:hover:bg-white disabled:hover:text-black"
            disabled={!canRest()}
            onClick={() => dispatch({ type: 'remove-all' })}
          >reset app</button>
        </div>
      </header>
      <main>
        <section className="bg-sky-400 py-20 px-5">
          <div className="max-w-4xl mx-auto">
            {/* pasamos como props  dispatch para recibur un informacion */}
            <Form />
          </div>
        </section>
        <section className=" bg-purple-800 py-10">
          <div className="max-w-4xl mx-auto">
            <CaloriesTracker />
          </div>
        </section>
        <section className="p-10 mx-auto maw-w-4xl">
          <ActivityList />
        </section>
      </main>
    </>
  )
}

export default App
