import React from "react";

type SuccessModalProps = {
  message: string;
  onClose: () => void;
};

const Modal = ({ message, onClose }: SuccessModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-40">
      <div className="flex flex-col justify-between bg-black text-white rounded-lg p-8 h-[40%] py-8">
        <h2 className="text-2xl font-bold mb-4">Success!</h2>
        <p className="text-white text-2xl font-bold my-4">{message}</p>
        <button
          className="bg-[#3BD188] text-black py-2 px-4 rounded-md mt-6 cursor-pointer"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
