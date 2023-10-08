
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PictureContext = createContext()

const URL = "/photos.json"

const PictureProvider = ({ children }) => {
    const [picture, setPicture] = useState([]);

    const gatherPicture = async () => {
        try {
            const response = await axios.get(URL);
            if (!response.status) {
                throw new Error("Error. Sin datos");
            }
            const { photos: dataPictures } = response.data;
            setPicture(dataPictures.map((image) => ({
                ...image, ifFavorite: false
            })));
        } catch (error) {
            console.log("falla de api" + error)
        }
    }
    useEffect(() => {
        gatherPicture();
    }, []);

    return (
        <PictureContext.Provider
            value={{ picture, setPicture, }}>
            {children}
        </PictureContext.Provider>
    );
};


export default PictureProvider;