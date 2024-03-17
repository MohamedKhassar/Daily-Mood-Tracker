import React from 'react'

const ConfirmationMood = ({ mood }: { mood: string }) => {
    return (
        <div>
            <h1 className="text-4xl font-semibold capitalize text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-900 p-2">You picked {mood}</h1>
        </div>
    )
}

export default ConfirmationMood
