import React, { useState } from 'react';
import BookCard from '../books/BookCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';

const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure"];

const TopSellers = () => {
  const [selectedCategory, setSelectedCategory] = useState("Choose a genre");
  const { data: books = [] } = useFetchAllBooksQuery();

  const filteredBooks = selectedCategory === "Choose a genre" 
    ? books 
    : books.filter(book => book.category === selectedCategory.toLowerCase());

  return (
    <div className='py-12 bg-gradient-to-b from-[#f5f7fa] to-[#e2e8f0]'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-gray-800 mb-8 text-center'>
          Discover Our Top Sellers
        </h2>

        {/* Category Filtering */}
        <div className='mb-12 flex justify-center'>
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            name="category"
            id="category"
            className='border bg-white shadow-md border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300'
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Swiper Slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book, index) => (
              <SwiperSlide key={index}>
                <div className="shadow-lg rounded-lg p-5 bg-white hover:shadow-xl transition-shadow duration-300">
                  <BookCard book={book} />
                </div>
              </SwiperSlide>
            ))
          ) : (
            <div className="text-center text-gray-500 py-10">
              No books found for the selected category.
            </div>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default TopSellers;
