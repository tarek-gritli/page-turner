import React from 'react';
import {
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

const BookModal = ({ book, onClose, showModal }) => {
  return (
    <Modal isOpen={showModal} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{book.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontWeight="bold">Author:</Text>
          <Text>{book.author}</Text>
          <Text fontWeight="bold">Genre:</Text>
          <Text>{book.genre}</Text>
          <Text fontWeight="bold">Description:</Text>
          <Text>{book.description}</Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default BookModal;
