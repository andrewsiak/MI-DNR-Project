import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Campground_list from "../campgrounds_list/Campgrounds_list";

const Favorites_By_User = ({}) => {
  const [campgroundFavorites, setCampgroundFavorites] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const { user_id } = useParams();

  useEffect(() => {
    fetch(`/api/favorites/${favorites.campground_id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setCampgroundFavorites(data);
        setIsFavorite(
          data.some((favorites) => favorites.user_id === currentUser.id)
        );
      });
  }, []);

  const handleFavorite = () => {
    fetch(`/api/campgrounds/${favorites.campground_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((favoritesData) => {
        setCampgroundFavorites(favoritesData);
        setIsFavorite(true);
      })
      .catch((error) => {
        setErrors(error);
      });
  };

  const handleUnfavorite = () => {
    fetch(`/api/favorites/${favorites.campground_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((favoritesData) => {
        setCampgroundFavorites(favoritesData);
        setIsFavorite(false);
      })
      .catch((error) => {
        setErrors(error);
      });
  };
};
export default Favorites_By_User;
