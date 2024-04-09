import React from "react";

const BookForm = ({
  bookData,
  setBookData,
  errors,
  handleInputChange,
  handleSubmit,
}) => {
  return (
    <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
      <div className="my-4">
        <label className="text-xl mr-4 text-gray-500">Title</label>
        <input
          type="text"
          name="title"
          value={bookData.title}
          onChange={(e) => handleInputChange(e, { setBookData, bookData })}
          className={`border-2 border-gray-500 px-4 py-2 w-full ${
            errors.title ? "border-red-500" : ""
          }`}
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>
      <div className="my-4">
        <label className="text-xl mr-4 text-gray-500">Author</label>
        <input
          type="text"
          name="author"
          value={bookData.author}
          onChange={(e) => handleInputChange(e, { setBookData, bookData })}
          className={`border-2 border-gray-500 px-4 py-2 w-full ${
            errors.author ? "border-red-500" : ""
          }`}
        />
        {errors.author && (
          <p className="text-red-500 text-sm">{errors.author}</p>
        )}
      </div>
      <div className="my-4">
        <label className="text-xl mr-4 text-gray-500">Image URL</label>
        <input
          type="url"
          name="imageUrl"
          value={bookData.imageUrl}
          onChange={(e) => handleInputChange(e, { setBookData, bookData })}
          className={`border-2 border-gray-500 px-4 py-2 w-full ${
            errors.imageUrl ? "border-red-500" : ""
          }`}
        />
        {errors.imageUrl && (
          <p className="text-red-500 text-sm">{errors.imageUrl}</p>
        )}
      </div>
      <div className="my-4">
        <label className="text-xl mr-4 text-gray-500">Description</label>
        <textarea
          value={bookData.description}
          name="description"
          onChange={(e) => handleInputChange(e, { setBookData, bookData })}
          className={`border-2 border-gray-500 px-4 py-2 w-full ${
            errors.description ? "border-red-500" : ""
          }`}
        />
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description}</p>
        )}
      </div>
      <div className="my-4">
        <label className="text-xl mr-4 text-gray-500">Genre</label>
        <input
          name="genre"
          type="text"
          value={bookData.genre}
          onChange={(e) => handleInputChange(e, { setBookData, bookData })}
          className={`border-2 border-gray-500 px-4 py-2 w-full ${
            errors.genre ? "border-red-500" : ""
          }`}
        />
        {errors.genre && <p className="text-red-500 text-sm">{errors.genre}</p>}
      </div>
      <div className="my-4">
        <label className="text-xl mr-4 text-gray-500">Price</label>
        <input
          type="number"
          name="price"
          value={bookData.price}
          onChange={(e) => handleInputChange(e, { setBookData, bookData })}
          className={`border-2 border-gray-500 px-4 py-2 w-full ${
            errors.price ? "border-red-500" : ""
          }`}
        />
        {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
      </div>
      <div className="my-4">
        <label className="text-xl mr-4 text-gray-500">Publish Year</label>
        <input
          type="number"
          name="publishYear"
          value={bookData.publishYear}
          onChange={(e) => handleInputChange(e, { setBookData, bookData })}
          className={`border-2 border-gray-500 px-4 py-2 w-full ${
            errors.publishYear ? "border-red-500" : ""
          }`}
        />
        {errors.publishYear && (
          <p className="text-red-500 text-sm">{errors.publishYear}</p>
        )}
      </div>
      <button className="p-2 bg-sky-300 m-8" onClick={handleSubmit}>
        Save
      </button>
    </div>
  );
};

export default BookForm;
