import { Heading, Image, Text } from "@chakra-ui/react";
import styles from "./carousel.module.css";
interface Props {
  description: string;
  heading: string;
  img: string;
  id: number;
}
interface caroselProps {
  items: Props[];
}

function Carousel({ items }: caroselProps) {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {items.map((item, i) => (
            <button
              key={item.id}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={i}
              className={i === 0 ? "active" : ""}
              aria-current={i === 0 ? "true" : "false"}
              aria-label={`Slide ${i}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {items.map((item, i) => (
            <div
              key={item.id}
              className={i === 0 ? "carousel-item active" : "carousel-item"}
            >
              <div className={styles.carouselDesc}>
                <div className="d-flex flex-column px-3 w-100">
                  <Heading>{item.heading}</Heading>
                  <Text fontSize={{ base: "15px", xl: "20px" }}>
                    {item.description}
                  </Text>
                </div>

                <Image
                  boxSize={"full"}
                  w={{ base: "100%", md: "50%" }}
                  h={"300px"}
                  objectFit={"cover"}
                  src={item.img}
                  alt={item.img}
                />
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
