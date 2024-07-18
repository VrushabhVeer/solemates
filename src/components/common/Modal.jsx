import React from "react";

const Modal = ({ closeModal, handleDelete }) => {
    return (
        <div
            id="default-modal"
            tabIndex="-1"
            aria-hidden="true"
            className="fixed inset-0 z-50 overflow-y-auto bg-gray-500 bg-opacity-50 flex items-center justify-center"
        >
            <div className="relative p-4 w-full max-w-md bg-white rounded-lg shadow-lg">
                <div className="p-4 md:p-5 border-b">
                    <h3 className="text-xl font-semibold text-gray-900">
                        Are you sure?
                    </h3>
                    <button
                        type="button"
                        className="absolute top-3 right-3 text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 flex items-center justify-center"
                        onClick={closeModal}
                    >
                        <svg
                            className="w-3 h-3"
                            viewBox="0 0 14 14"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1 13 13M1 13 13 1"
                            />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                <div className="p-4 md:p-5 space-y-4">
                    <p className="text-base leading-relaxed text-gray-500">
                        Are you sure you want to remove this item from your cart?
                    </p>
                </div>
                <div className="flex items-center p-4 md:p-5 border-t">
                    <button
                        type="button"
                        className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        onClick={handleDelete}
                    >
                        Remove
                    </button>
                    <button
                        type="button"
                        className="ml-3 text-white bg-gray-700 hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        onClick={closeModal}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
