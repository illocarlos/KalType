import { useMemo } from "react"
// import type { Activity } from "../types/types"
import CaloriesDisplay from "./CaloriesDisplay"
import { useActivity } from "../hooks/useActivity"


// type caloriesTrackerPropds = {
//     activity: Activity[],
// }

// { activity }: caloriesTrackerPropds

function caloriesTracker() {
    const { state } = useActivity()

    const caloriesConsumed = useMemo(() => state.activities.reduce((total, activiti) => activiti.category === 'food' ? total + activiti.calories : total, 0),
        [state.activities])
    const removeCalories = useMemo(() => state.activities.reduce((total, activiti) => activiti.category === 'sport' ? total + activiti.calories : total, 0),
        [state.activities])
    const totaCalories = useMemo(() => caloriesConsumed - removeCalories, [state.activities])

    return (
        <>
            <h2 className="text-4xl font-black text-white text-center">
                calories summary
            </h2>
            <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
                <CaloriesDisplay
                    calories={caloriesConsumed}
                    text="food"
                />
                <CaloriesDisplay
                    calories={totaCalories}
                    text="total"
                />
                <CaloriesDisplay
                    calories={removeCalories}
                    text="sport"
                />

            </div>
        </>
    )
}

export default caloriesTracker