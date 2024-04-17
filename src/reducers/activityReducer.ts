import { Activity } from "../types/types"

// este sera el typado para dispatch es decir la informacion que recibira usereducer y va con esta informacion 
//es lo que necesitaremos para declararlo como prop en form 
//ya que dispatch  le pasamo el typado y el payload que el payload es la informacion que recibira el use reducer 
// este tiene que tener un tipado  que llamamos el typado global en los types activity
// por que el objeto que vendra es el mismo que el typado por lo tanto:
//--> payload lo mandamos al formulario pero pasando por app 
//--> ese payload va con dos parametros estos que aparecen 
//--> y traemos el payload una nueva actividad que tipamos como activity ya que vendra con los mismos valores que el tipado
//este tipado esta conectado con las props de form
export type ActivityActions =
    { type: 'save-activity', payload: { newActivity: Activity } } |
    { type: 'edit-activity', payload: { id: Activity['id'] } } |
    { type: 'deleted-activity', payload: { id: Activity['id'] } } |
    { type: 'remove-all' }



export type ActivityState = {
    activities: Activity[],
    actiId: Activity['id']
}

const localStorageActivities = (): Activity[] => {
    const activities = localStorage.getItem('activities')
    return activities ? JSON.parse(activities) : []
}

export const initialState: ActivityState = {
    activities: localStorageActivities(),
    actiId: ''
}




export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {
    //este codigo maneja la logica para actualizar el state
    if (action.type === 'save-activity') {

        let updateActivity: Activity[] = []

        if (state.actiId) {
            updateActivity = state.activities.map(eachActy => eachActy.id === state.actiId ? action.payload.newActivity : eachActy)
        } else {
            updateActivity = [...state.activities, action.payload.newActivity]

        }

        return {
            ...state,
            activities: updateActivity,
            actiId: ''
        }
    }



    //este codigo maneja la logica para actualizar el state
    if (action.type === 'edit-activity') {

        return {
            ...state,
            actiId: action.payload.id
        }
    }

    //este codigo maneja la logica para actualizar el state
    if (action.type === 'deleted-activity') {

        return {
            ...state,
            activities: state.activities.filter(eachActivity => eachActivity.id !== action.payload.id)

        }
    }

    //este codigo maneja la logica para actualizar el state
    if (action.type === 'remove-all') {

        return {
            activities: [],
            actiId: ''

        }
    }


    return state
}