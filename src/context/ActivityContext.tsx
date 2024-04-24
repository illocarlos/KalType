import { useReducer, createContext, Dispatch, ReactNode } from "react"
import { ActivityActions, ActivityState, activityReducer, initialState } from "../reducers/activityReducer"

type ShowModalContextProp = {
    state: ActivityState,
    dispatch: Dispatch<ActivityActions>
}
type ActivityProviderProps = {
    children: ReactNode
}
export const ActivityContext = createContext<ShowModalContextProp>(null!)

export const ActivityProvider = ({ children }: ActivityProviderProps) => {

    const [state, dispatch] = useReducer(activityReducer, initialState)
    return (
        <ActivityContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </ActivityContext.Provider>
    )
}