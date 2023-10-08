import { useContext } from "react";
import { PictureContext } from "../Context/PictureContext";
import IconHeart from './IconHeart';

const Gallery = () => {
  const { picture, setPicture } = useContext(PictureContext);

  const like = (id) => {
    const newPicture = picture.map((image) => {
      if (image.id === id) {
        return { ...image, ifFavorite: !image.ifFavorite };
      }
      return image;
    });
    setPicture(newPicture);
  };

  return (
    <div className="gallery grid-columns-5 p-3">
      {picture.map((image, i) => (
        <div key={i} onClick={() => like(image.id)} className="photo" style={{ backgroundImage: `url(${image.src.medium})` }}>
          <IconHeart filled={image.ifFavorite} />
          <section>
          <p>{image.alt}</p>
          </section>
        </div>
      ))}
    </div>

  );
};
export default Gallery;
