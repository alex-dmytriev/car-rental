import css from './CarImage.module.css';

interface CarImageProps {
  img: string;
  alt: string;
}

const CarImage: React.FC<CarImageProps> = ({ img, alt }) => {
  return (
    <div className={css.imageBox}>
      <img className={css.image} src={img} alt={alt} width={640} height={512} />
    </div>
  );
};

export default CarImage;
