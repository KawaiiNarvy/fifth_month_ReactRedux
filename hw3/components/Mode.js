import React from 'react'

export default function Mode({ mode, changeMode }) {
    let changeModeText =
        mode.current === "day" ? "Ночной режим" : "Дневной режим";

    const buttonHandler = () => {
        const newValue = mode.current === "day" ? "night" : "day";
        changeMode({ current: newValue });
    };
    return (
        <div>
            <button onClick={buttonHandler}>{changeModeText}</button>
        </div>
    )
}


