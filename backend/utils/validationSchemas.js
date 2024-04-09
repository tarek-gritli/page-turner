export const createBookValidationSchema = {
  title: {
    notEmpty: {
      errorMessage: "Title is required",
    },
    isString: {
      errorMessage: "Title must be a string",
    },
  },
  author: {
    notEmpty: {
      errorMessage: "Author name can't be empty",
    },
    isString: {
      errorMessage: "Author must be a string",
    },
  },
  price: {
    notEmpty: {
      errorMessage: "Price field can't be left blank.",
    },
    isNumeric: {
      options: {
        min: 0
      },
      errorMessage: "Price  must be a number.",
    },
  },
  publishYear: {
    notEmpty: {
      errorMessage: "Publish year  field can't be left blank.",
    },
    isNumeric: {
      options: {
        min: 1500
      },
      errorMessage: "Publication Year must be numeric"
    }
  },
  description: {
    optional: true,
  },
  imageUrl: {
    optional: true,
  },
  genre: {
    optional: true
  }
};
