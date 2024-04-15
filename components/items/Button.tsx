import React from "react";

export const Button = (
    { children, onClick }: { children: React.ReactNode, onClick: () => void }
) => {
    return (
        <button onClick={onClick} className={"bg-sky-500 drop-shadow-md hover:scale-105 text-white font-bold py-2 px-4 rounded"}>
            {children}
        </button>
    );
}