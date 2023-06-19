import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Button,
} from '@chakra-ui/react'
import { useDisclosure } from "@chakra-ui/react";
import "./FooterStyle.css";

export default function Footer() {
  // const [isOpen, setIsOpen] = useState(false);
  // const [inputValue, setInputValue] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="footer-component">
      <footer className="footer">
        <span className="footer-text">
          <Button onClick={onOpen} >Contact us</Button>
        </span>
        <Modal isOpen={isOpen} onClose={onClose}  display="flex"  justifyContent="center" minHeight="200px">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader alignItems="center">How may I help you?</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* <Lorem count={2} /> */}
              <Input
              resize="none"
              size='md'
             
              borderColor={"black"}
              className="new-post-add-post-input"
              placeholder="Enter your text here"
              minrows={1}/>
              
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </footer>
    </div>
  );
}
