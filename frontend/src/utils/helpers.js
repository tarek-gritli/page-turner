export const handleInputChange = (e, { setBookData, bookData }) => {
  const { name, value } = e.target;
  setBookData({ ...bookData, [name]: value });
};

export const validateInputs = ({ bookData, setErrors }) => {
  const newErrors = {};
  if (!bookData.title.trim()) {
    newErrors.title = "Title is required";
  }
  if (!bookData.author.trim()) {
    newErrors.author = "Author is required";
  }
  if (!bookData.price || bookData.price < 0) {
    newErrors.price = "Price must be a positive number";
  }
  if (
    !bookData.publishYear ||
    bookData.publishYear <= 1499 ||
    bookData.publishYear > 2024
  ) {
    newErrors.publishYear = "Publish year must be a valid year";
  }
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
