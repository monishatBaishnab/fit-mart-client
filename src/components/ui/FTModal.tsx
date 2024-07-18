import { Modal, ModalBody, ModalContent } from "@nextui-org/react";
import FTButton from "./FTButton";
import FTClose from "../../assets/icons/FTClose";
import FTSave from "../../assets/icons/FTSave";
import { ReactNode } from "react";

type TFTModal = {
  actions: { isOpen: boolean; onClose: () => void; onOpen?: () => void };
  title: string;
  name: string;
  size:
    | "sm"
    | "md"
    | "lg"
    | "xs"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "full"
    | undefined;
  cancelButton: { status: boolean; label?: string };
  saveButton: {
    status: boolean;
    label?: string;
    handleSave?: () => unknown;
    icon?: ReactNode;
  };
  children: ReactNode;
};

const FTModal = ({
  actions,
  title,
  name,
  size,
  saveButton,
  cancelButton,
  children,
}: TFTModal) => {
  const { onClose, isOpen } = actions ?? {};

  return (
    <Modal
      backdrop="blur"
      aria-labelledby={name}
      radius="sm"
      size={size}
      onClose={onClose}
      isOpen={isOpen}
      scrollBehavior="outside"
      hideCloseButton={true}
      classNames={{
        body: "!p-0 rounded-3xl overflow-hidden gap-0",
        backdrop: "bg-indigo-600/10 backdrop-blur-sm",
      }}
    >
      <ModalContent>
        <ModalBody>
          <div>
            <div className="flex items-center justify-between p-6 border-b border-b-slate-200">
              <h3 className="text-3xl font-semibold">{title}</h3>
              <div className="flex items-center gap-2">
                <FTButton
                  onPress={onClose}
                  isIconOnly
                  size="lg"
                  type="button"
                  color="secondary"
                >
                  <FTClose classNames={{ path: "stroke-indigo-600" }} />
                </FTButton>
              </div>
            </div>
            <div className="p-6">{children}</div>
            <div className="flex gap-4 items-center justify-end p-6 border-t border-t-slate-200">
              {cancelButton?.status ? (
                <FTButton
                  onPress={onClose}
                  type="button"
                  endContent={
                    <FTClose
                      classNames={{ path: "stroke-slate-700", svg: "w-6 h-6" }}
                    />
                  }
                  size="lg"
                  color="secondary"
                >
                  {cancelButton?.label}
                </FTButton>
              ) : null}
              {saveButton?.status ? (
                <FTButton
                  onPress={saveButton?.handleSave}
                  type="button"
                  endContent={
                    saveButton?.icon ? (
                      saveButton?.icon
                    ) : (
                      <FTSave classNames={{ path: "stroke-white" }} />
                    )
                  }
                  size="lg"
                  color="primary"
                >
                  {saveButton?.label}
                </FTButton>
              ) : null}
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FTModal;
