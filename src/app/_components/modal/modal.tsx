import React from "react";
import ModalHeader from "./modal_header";
import ModalBody from "./modal_body";
import { IModal } from "@/app/_interfaces/interfaces";

const Modal: React.FC<IModal> = ({title, bodyData, isLogin}) =>
{
    return(
        <div id="authentication-modal" tabIndex={-1} aria-hidden="true" className="flex overflow-y-auto overflow-x-hidden z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-md max-h-full">
                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <ModalHeader title={title}/>
                    <ModalBody title={title} bodyData={bodyData} isLogin={isLogin} />
                </div>
            </div>
        </div>
    )
}

export default Modal;