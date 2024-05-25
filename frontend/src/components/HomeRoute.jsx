import { useReducer, React, useState } from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const [favourites, setFavourites] = useState([]);

  const isFavourite = function(id) {
    return favourites.includes(id);
  }

  // adds or removes id from favourites array
  const toggleFavourite = function(id) {
    if (isFavourite(id)) {
      favourites.pop(id);
    } else {
      favourites.push(id);
    }
  }

  return (
    <div className="home-route">
      <TopNavigationBar topics={props.topics} isFavPhotoExist={favourites.length > 0 ? true : false}/>
      <PhotoList photos={props.photos} toggleFavourite={toggleFavourite} favourites={favourites}/> 
    </div>
  );
};

export default HomeRoute;

//should never pass dispatch
//ALWAYS pass interface fxns - need to pass all 3 (2 fxns + list) to photolist, components only needs to know how to toggle itself
// google interface WHAT v implementation HOW (secret!!!)
// think about it like inc, dec, clear