import React from "react";

export const Card = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={"bg-white drop-shadow-lg rounded-lg m-2 p-10"}>
            {children}
        </div>
    );
}