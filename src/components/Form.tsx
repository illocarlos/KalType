
import { useState, ChangeEvent, FormEvent } from 'react'
// db
import { category } from '../db/category.ts'
// llamada de tipado del objeto activity
import { Activity } from '../types/types.ts'
function Form() {

    // creamos el usestate de la actividad es un objeto por lo tanto lo representamos como tal 
    ///y llamamos el typado y lo nombramos en el usestate
    const [activity, setActivity] = useState<Activity>({
        category: '',
        name: '',
        calories: 0,
    })

    // hacemos un onchange como call back para rellenar el formulario con el usestate 
    // como norma generar llamariamos por defecto un parametro "e" pero aqui siendo typescrit debemos tiparlo
    //  debemos tiparlo con la entradas que aparecen
    //ChangeEvent<HTMLSelectElement> esta es para un input select
    //ChangeEvent<HTMLInputElement> este para un input normal
    //en este caso typamos que la entrada sera tanto de tipo HTMLSelectElement O HTMLInputElement

    const handleChangeFormActivity = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {

        const isNumber = 'calories'.includes(e.target.id)

        setActivity({
            ...activity,
            [e.target.id]: isNumber ? +e.target.value : e.target.value

        })
    }
    // hacemops una validacion del formulario si esta vacio los input que no pase
    const isValidateActivity = () => {
        const { name, calories, category } = activity
        return name.trim() !== "" && calories > 0 && category.trim() !== ""
    }

    const handlesubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <form
            onSubmit={handlesubmit}
            className="space-y-5 bg-white shadow p-10 rounded-lg">

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className='font-bold'>Categories:   </label>
                <select
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    name="" id="category"
                    value={activity.category}
                    onChange={handleChangeFormActivity}
                >

                    <option>
                        -- select category --
                    </option>
                    {category.map(eachCategory => (
                        <option
                            key={eachCategory.id}
                        >
                            {eachCategory.name}
                        </option>
                    ))}
                </select>

            </div>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name" className='font-bold'>Name   </label>
                <input
                    className='border border-slate-300 p-2 rounded-lg '
                    placeholder='type of food or type of ejercices, '
                    type="text" id='name'
                    value={activity.name}
                    onChange={handleChangeFormActivity}
                />
            </div>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className='font-bold'>calories   </label>
                <input
                    className='border border-slate-300 p-2 rounded-lg '
                    placeholder='write calories here '
                    type="number" id='calories'
                    value={activity.calories}
                    onChange={handleChangeFormActivity}
                />
            </div>
            <input
                value={activity.category === 'food' ? 'save  food' : 'save sport'}
                className='  block bg-purple-400 w-full rounded-md uppercase font-bold disabled:opacity-10'
                type="submit"
                disabled={!isValidateActivity()}
            />
        </form>
    )
}

export default Form