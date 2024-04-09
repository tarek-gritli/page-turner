import React, { useState } from "react";
import {
  Card,
  Image,
  Heading,
  CardBody,
  Stack,
  Divider,
  Text,
  CardFooter,
} from "@chakra-ui/react";
import {
  faCircleInfo,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import BookModal from "./BookModal";

const BookCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
        {showModal && <BookModal book={book} showModal={showModal} onClose={() => setShowModal(false)} />}
        <Card maxW="sm">
      <CardBody>
        <Image
          src={book.imageUrl}
          className="w-full h-64 object-cover"
          alt={`Cover image of the book ${book.title}`}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{book.title}</Heading>
          <Text>{book.author}</Text>
          <Text>
            {book.publishYear}
          </Text>
          <Text color="blue.600" fontSize="2xl">
            ${book.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <div className="flex  items-center justify-around w-full">
          <FontAwesomeIcon
            icon={faCircleInfo}
            className="text-sky-600 cursor-pointer"
            onClick={() => setShowModal(true)}
          />
          <Link to={`/books/edit/${book._id}`}>
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="text-yellow-600 cursor-pointer"
            />
          </Link>
          <Link to={`/books/delete/${book._id}`}>
            <FontAwesomeIcon
              icon={faTrash}
              className="text-red-600 cursor-pointer"
            />
          </Link>
        </div>
      </CardFooter>
    </Card>
    </div>
  );
};

export default BookCard;
