import { useState } from "react";
import { ModalTypes } from "../types/modal";

export default function useModal<T = unknown>() {
  const [modalInfos, setModalInfos] = useState<ModalTypes<T>>({
    isOpen: false,
    data: null
  });

  const handleModal = (isOpen: boolean, data?: T | null) => {
    setModalInfos({
      isOpen,
      data: data ?? null
    });
  };

  const handleClose = () => {
    setModalInfos({
      ...modalInfos,
      isOpen: false
    });
  };

  return {
    infos: {
      isOpen: modalInfos.isOpen,
      data: modalInfos.data
    },
    functions: {
      handleModal,
      handleClose
    }
  };
}
