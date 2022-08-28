import React, { useEffect, useRef } from 'react';
import ViewportList from 'react-viewport-list';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { LazyLoadComponent, LazyLoadImage } from 'react-lazy-load-image-component';
import { fetchAlbums, selectAlbumsByUser } from '../../store/features/albums/albumsSlice';
import SingleAlbums from '../SingleAlbums/SingleAlbums';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

function AlbumsList() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const albums = useSelector((state) => selectAlbumsByUser(state, +userId));
  const ref = useRef(null);

  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);

  console.log('Albumslist');
  const albumsContent = albums?.map((album) => (
    <LazyLoadComponent key={album.id}>
      <SingleAlbums album={album} />
    </LazyLoadComponent>
  ));

  return (
    <div>
      {albumsContent}
    </div>
  );
}

export default AlbumsList;
/*
 <div className="scroll-container" ref={ref}>
      <ViewportList
        viewportRef={ref}
        items={albums}
        itemMinSize={1}
        margin={8}
      >
        {(album) => <SingleAlbums album={album} key={album.id} />}
      </ViewportList>
    </div>

    */
