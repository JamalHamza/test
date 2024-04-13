async function getReviews() {
  const response = await fetch('http://o-complex.com:1337/reviews', {
    method: 'GET',
  });

  return response.json();
}

async function Reviews() {
  const reviews = await getReviews();

  return (
    <div className="review">
      {reviews.map((review, index) => {
        return (
          <div className='review-main' key={index}>
            <div className='review-card'>
              <p className='review-title'>Отзыв {index + 1}</p>
              <p className='review-body'>{review.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Reviews;
