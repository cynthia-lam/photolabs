import { useReducer, React } from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';

// Note: Rendering a single component to build components in isolation
const HomeRoute = (props) => {
  const [favCount, dispatch] = useReducer((favCount, amount) => {
    return favCount + amount;
    }, 0)

  return (
    <div className="home-route">
      <TopNavigationBar topics={props.topics} isFavPhotoExist={favCount > 0 ? true : false}/>
      <PhotoList photos={props.photos} updateFavCount={dispatch}/>
    </div>
  );
};

export default HomeRoute;
