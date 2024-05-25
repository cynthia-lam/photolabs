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
      setFavourites((prevState) => {
        return prevState.filter((elem) => elem !== id);
      });
    } else {
      setFavourites((prevState) => ([...prevState, id]));
    }
  }

  return (
    <div className="home-route">
      <TopNavigationBar topics={props.topics} isFavPhotoExist={favourites.length > 0 ? true : false}/>
      <PhotoList 
      photos={props.photos} 
      toggleFavourite={toggleFavourite} 
      favourites={favourites} 
      isFavourite={isFavourite}
      toggleModal={props.toggleModal}/> 
    </div>
  );
};

export default HomeRoute;

//should never pass dispatch
//ALWAYS pass interface fxns - need to pass all 3 (2 fxns + list) to photolist, components only needs to know how to toggle itself
// google interface WHAT v implementation HOW (secret!!!)
// think about it like inc, dec, clear
//setter can either 1) replace or 2) 
// implicit return, () is same as {return x}
// immutable!!! replace the entire yellow phone book