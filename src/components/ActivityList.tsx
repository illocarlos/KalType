import { Dispatch } from 'react'
import { Activity } from '../types/types.ts'
import { PencilSquareIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { ActivityActions } from '../reducers/activityReducer.ts'

type ActivityListProp = {
    activity: Activity[],
    dispatch: Dispatch<ActivityActions>
}

const ActivityList = ({ activity, dispatch }: ActivityListProp) => {

    return (
        <>
            <h1 className=" text-center text-4xl font-bold text-slate-600">food and activity</h1>

            {activity.length === 0 ? (
                <p className='text-center text-xl mt-5 uppercase '>don't have anything </p>
            )
                :
                (
                    activity.map(activi => (
                        <div key={activi.id} className='px-5 py-10 bg-white mt-5 flex justify-around'>
                            <div className=' space-y-2 relative'>
                                <p
                                    className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold 
                                ${activi.category === "sport" ? 'bg-sky-500' : ' bg-pink-500'}`}
                                >{activi.category}</p>
                                <p
                                    className='text-2xl font-bold pt-5'
                                >{activi.name}</p>
                                <p className='font-black text-4xl text-sky-500'>

                                    {activi.calories} {" "}
                                    <span>Calories</span></p>
                            </div>
                            <div className='flex gap-5 items-center'>
                                <button
                                    onClick={() => dispatch({ type: 'edit-activity', payload: { id: activi.id } })}
                                >
                                    <PencilSquareIcon
                                        className='h-8 w-8 text-gray-800'
                                    />
                                </button>
                                <button
                                    onClick={() => dispatch({ type: 'deleted-activity', payload: { id: activi.id } })}
                                >
                                    <XCircleIcon
                                        className='h-8 w-8 text-gray-800'
                                    />
                                </button>
                            </div>
                        </div>
                    ))

                )
            }

        </>
    )
}

export default ActivityList