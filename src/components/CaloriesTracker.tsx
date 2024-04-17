import { useMemo } from "react"
import type { Activity } from "../types/types"
import CaloriesDisplay from "./CaloriesDisplay"


type caloriesTrackerPropds = {
    activity: Activity[],
}

function caloriesTracker({ activity }: caloriesTrackerPropds) {
    const caloriesConsumed = useMemo(() => activity.reduce((total, activiti) => activiti.category === 'food' ? total + activiti.calories : total, 0),
        [activity])
    const removeCalories = useMemo(() => activity.reduce((total, activiti) => activiti.category === 'sport' ? total + activiti.calories : total, 0),
        [activity])
    const totaCalories = useMemo(() => caloriesConsumed - removeCalories, [activity])
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