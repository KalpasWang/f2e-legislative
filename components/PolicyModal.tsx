import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
} from "@nextui-org/react";
import Close from "./icons/Close";

type Props = {
  title: string;
  list: string[];
  details: string[];
  isOpen: boolean;
  onOpenChange: () => void;
};

export default function PolicyModal({
  title,
  list,
  details,
  isOpen,
  onOpenChange,
}: Props) {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      scrollBehavior="outside"
      size="5xl"
      classNames={{
        closeButton: "hidden",
        body: "pl-12",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="mb-unit-4 block">
              <div className="mb-unit-10">
                <Button
                  onPress={onClose}
                  variant="light"
                  color="primary"
                  radius="full"
                  className="text-foreground"
                  startContent={<Close />}
                >
                  關閉
                </Button>
              </div>
              <h3 className="text-secondary text-center text-large font-normal leading-normal">
                {title}
              </h3>
            </ModalHeader>
            <ModalBody className="pb-unit-15 gap-unit-8">
              {list.map((listItem, i) => (
                <p className="leading-normal" key={i}>
                  <span className="pr-2">{i + 1}.</span>
                  {listItem}
                </p>
              ))}
              {details.map((detail, i) => (
                <p className="leading-normal" key={i}>
                  {detail}
                </p>
              ))}
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
