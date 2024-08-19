/* eslint-disable react/no-unescaped-entities */

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const reviews = [
    {
        id: 0,
        name: "Smart India Hackathon",
        event: "Smart India Hackathon",
        comment: "Participating in the Smart India Hackathon was an incredible experience that challenged my problem-solving skills and creativity.",
        photo: "https://example.com/images/avatar1.png"
    },

    {
        id: 1,
        name: "Data Structures and Algorithms",
        event: "Data Structures and Algorithms",
        comment: "Mastering data structures and algorithms has significantly improved my coding efficiency and problem-solving abilities.",
        photo: "https://example.com/images/avatar3.png"
    },

    {
        id: 2,
        name: "Competitive Programming",
        event: "Competitive Programming",
        comment: "Engaging in competitive programming has sharpened my analytical thinking and coding speed, preparing me for high-stakes problem-solving.",
        photo: "https://example.com/images/avatar3.png"
    }
];


const ReviewCard = () => {
    return (
        <>
            <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper -z-0"
      >
        {
            reviews.map(review => <SwiperSlide key={review.id} className='border border-[#006B6A] p-8 rounded'>
                    <div>
                        <img src="/src/assets/starts.png" alt=""  className='h-4'/>
                        <p className='my-5'>" {review.comment}</p>
                        <div className='flex gap-4 items-center'>
                            <img src={review.photo} alt="" className='h-10' />
                            <div>
                                <p>{review.name}</p>
                                <p className='text-sm'>{review.company}</p>
                            </div>
                        </div>
                    </div>
            </SwiperSlide>)
        }
      </Swiper>
        </>
    );
};

export default ReviewCard;