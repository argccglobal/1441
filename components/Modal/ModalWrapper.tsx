"use client";

import React, { FC } from "react";
import { createPortal } from "react-dom";
import { Icon } from "../ui/Icon";
interface ModalProps {
  children: React.ReactNode;
  closeModel: () => void;
  isOpen: boolean;
}

const Modal: FC<ModalProps> = ({ children, isOpen, closeModel }) => {
  const handleCloseModel = () => {
    closeModel();
  };
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (isOpen == false) return null;
  return mounted
    ? createPortal(
        <div className="fixed  overflow-y-auto items-center justify-center top-0 left-0 z-50 w-full h-full">
          <div
            onClick={handleCloseModel}
            className="fixed opacity-10 flex items-center justify-center top-0 left-0 -z-10 w-full h-full bg-black"
          ></div>
          <div
            onClick={handleCloseModel}
            className="my-10 md:my-20  flex justify-center overflow-y-auto"
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="z-50 w-full sm:w-auto"
            >
              <div className="bg-white p-12 relative">
                <Icon
                  onClick={handleCloseModel}
                  name="close"
                  className="absolute top-5 right-5 cursor-pointer"
                />
                {children}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;
};

export default Modal;
