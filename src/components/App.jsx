import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
export const App = () => {
  return (
    <>
      <Searchbar />
      <ImageGallery>
        <ImageGalleryItem />
      </ImageGallery>
    </>
  );
};
