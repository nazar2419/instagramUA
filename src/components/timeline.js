import Skeleton from 'react-loading-skeleton';
import usePhotos from '../hooks/use-photos';
import Post from './post';



export default function Timeline() {
  // we need to get the logged in user's photos (hook)
  const { photos } = usePhotos();

  console.log('photos', photos);
  // on loading the photos, we need to us react skeleton
  // if we have photos, we need to use react skeleton
  // if the user has no photos, tell them to create some photos
  return (
    <div className="container col-span-2">
      {!photos ? (
            <Skeleton  count={4} width={620} height={500} className="mb-5" />
        ) : photos?.length > 0 ? (
          photos.map((content) => <Post key={content.docId} content={content}/>)
        ) : (
          <p className='text-center text-2xl'>Follow people to see phone</p>
        )}
    </div>
  )
}