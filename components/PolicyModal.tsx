import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  RadioGroup,
  Radio,
} from "@nextui-org/react";

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
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="outside">
      <ModalContent>
        {(onClose) => (
          <Modal>
            <ModalHeader className="mb-unit-4">
              <div className="mb-unit-10">
                <Button
                  onPress={onClose}
                  variant="solid"
                  color="primary"
                  radius="full"
                >
                  關閉
                </Button>
              </div>
              <h3 className="text-secondary text-center text-large font-normal leading-normal">
                {title}
              </h3>
            </ModalHeader>
            <ModalBody className="pb-unit-15">
              {list.map((listItem, i) => (
                <p className="leading-normal mb-unit-8" key={i}>
                  <span className="pr-2">{i}.</span>
                  {listItem}
                </p>
              ))}
              {details.map((detail, i) => (
                <p className="leading-normal mb-unit-8" key={i}>
                  {detail}
                </p>
              ))}
            </ModalBody>
          </Modal>
        )}
      </ModalContent>
    </Modal>
  );
}
