import React, { useState } from 'react';

const Review= () => {
  const [rating, setRating] = useState(0); // Initial rating is 0 (no stars)
  const [comment, setComment] = useState('');
  const [submittedReviews, setSubmittedReviews] = useState([]);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCancelClick = () => {
    setRating(0); // Reset rating to 0
    setComment(''); // Clear the comment field
  };

  const handleSubmitClick = () => {
    if (rating === 0) {
      alert('Please select a rating.');
    } else if (comment.trim() === '') {
      alert('Please enter a comment.');
    } else {
      // Create a new review object and add it to the list of submitted reviews
      const newReview = {
        rating,
        comment,
      };
      setSubmittedReviews([...submittedReviews, newReview]);
      // Clear the rating and comment fields
      setRating(0);
      setComment('');
    }
  };

  return (
    <div>
    <div className="bg-white dark:bg-secondary-dark-bg container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Doctor Review</h1>
      <div className="mb-4">
        <p className=" dark:text-white text-xl font-semibold mb-2">Rating:</p>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => handleRatingChange(star)}
              className={`text-2xl ${
                star <= rating ? 'text-yellow-500' : 'text-gray-300'
              } focus:outline-none`}
            >
              ★
            </button>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <p className="dark:text-white text-xl font-semibold mb-2">Comment:</p>
        <textarea
          placeholder="Write your comment here..."
          value={comment}
          onChange={handleCommentChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        ></textarea>
      </div>
      <div className="mb-4">
        <button
          onClick={handleCancelClick}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md focus:outline-none"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmitClick}
          className="ml-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none"
        >
          Submit
        </button>
      </div>
      <div>
        <h2 className="dark:text-white text-xl font-semibold">Submitted Reviews</h2>
        <ul className="dark:text-white list-disc ml-6">
          {submittedReviews.map((review, index) => (
            <li key={index}>
              Rating: {review.rating} - Comment: {review.comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Review;