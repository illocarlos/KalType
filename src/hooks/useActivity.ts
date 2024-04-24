import { useContext } from "react";
import { ActivityContext } from "../context/ActivityContext";

export const useActivity = () => {

    const context = useContext(ActivityContext)
    if (!context) {
        throw new Error('useActivity is not define')

    }

    return context
}
