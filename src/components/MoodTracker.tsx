import { useState } from "react"
import ConfirmationMood from "./ConfirmationMood"

export default function MoodTracker() {
    const [mood, setMood] = useState("")

    const emojis = [
        {
            id: 1,
            emoji: '../../images/happy.gif',
            name: 'Happy'
        },
        {
            id: 2,
            emoji: '../../images/angry.gif',
            name: 'angry'
        },
        {
            id: 3,
            emoji: '../../images/bored.gif',
            name: 'bored'
        },
        {
            id: 4,
            emoji: '../../images/sad.gif',
            name: 'sad'
        },
        {
            id: 5,
            emoji: '../../images/sick.gif',
            name: 'sick'
        },
        {
            id: 6,
            emoji: '../../images/sleep.gif',
            name: 'sleep'
        }
    ]
    return (
        <div className="flex justify-center items-center h-screen flex-col gap-y-16">
            {!mood ?
                <>
                    <h1 className="capitalize text-4xl font-semibold bg-gradient-to-r from-indigo-500 via-slate-500 to-cyan-500 bg-clip-text text-transparent">please could you pick your mood</h1>
                    <div className="grid grid-cols-3 gap-16">
                        {emojis.map((emoji) => (
                            <button className="col-span-4 sm:col-span-1 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 p-3 rounded-md duration-300" key={emoji.id} onClick={() => setMood(emoji.name)}>
                                <img src={emoji.emoji} alt={emoji.name} className="w-24 h-24" />
                                <h2 className="text-center text-gray-700 text-xl font-semibold capitalize">{emoji.name}</h2>
                            </button>
                        ))}
                    </div>
                </> :
                <ConfirmationMood mood={mood} />
            }
        </div>
    )
}
