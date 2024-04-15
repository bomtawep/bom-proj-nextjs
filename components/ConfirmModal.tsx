import React, {useEffect} from "react"
import { useState } from "react"
export const ConfirmModal = (
    {
        title,
        isModalOpen,
        children,
        onClick,
        onConfirm,
    }: {
        title?: string,
        isModalOpen: boolean,
        children: React.ReactNode,
        onClick: () => void
        onConfirm: () => void
    }) => {
    const [show, setShow] = useState(false)
    useEffect(() => {
        setShow(isModalOpen)
    }, [isModalOpen])
    const closeModal = () => {
        setShow(false)
        onClick()
    }

    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center ${show ? 'block' : 'hidden'}`}>
            <div className={"bg-white p-5 rounded-lg"}>
                <div>{title}</div>
                <div>{children}</div>
                <div className={"flex justify-between"}>
                    <button
                        className={"bg-red-500 text-white rounded p-2"}
                        onClick={() => closeModal()}
                    >
                        Cancel
                    </button>
                    <button
                        className={"bg-green-500 text-white rounded p-2"}
                        onClick={() => onConfirm()}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    )
}