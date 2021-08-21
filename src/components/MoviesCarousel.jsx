
import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {  Mousewheel, Scrollbar } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import styles from "./MoviesCarousel.module.scss";
import { Fragment } from "react";
SwiperCore.use([Scrollbar,Mousewheel]);

export default function MoviesCarousel({ movies }) {
  return (
    <Fragment>
      {movies.isLoading && (
        <div>
          <p>Loading...</p>
        </div>
      )}
      {movies.isSuccess && (
        <Swiper
          mousewheel={true}
          slidesPerView={2}
          spaceBetween={20}
          scrollbar={{
            hide: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
          className={styles.mySwiper}
        >
          {movies.data.results.map((movie, index) => (
            <SwiperSlide className="my-4">
              <MovieCard key={movie.id - index} movie={movie}></MovieCard>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Fragment>
  );
}
