import { useContext } from "react";
import { PictureContext } from "../Context/PictureContext";

const Favorites = () => {
  const { picture } = useContext(PictureContext);

  return (
    <div>
      <h1 className="titulofavorites">MIS FAVORITAS</h1>

      <div className="p-3 gallery grid-columns-4">
        {picture.filter((photo) => photo.ifFavorite).map((image, i) => (
          <div key={i} className="photo" style={{ backgroundImage: `url(${image.src.medium})` }}>
            <section>
              <p>{image.alt}</p>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Favorites;
