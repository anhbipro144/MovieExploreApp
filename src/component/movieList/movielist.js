import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import omdbapi from '../../Api/omdbapi';
import MovieCard from '../movieCard/movieCard';
import {COLORS, FONTS} from '../../constants/theme';

import styles from './styles';

const Movielist = ({type, keyWord = 'marvel', navigation}) => {
  // States
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isNothing, setIsNothing] = useState(false);

  // APi
  useEffect(() => {
    const getList = async () => {
      setIsLoading(true);
      try {
        if (keyWord.length < 3) {
          keyWord = 'batman';
        }
        const response = await omdbapi.getMoviesList(type, keyWord);

        if (response != false && response.data) {
          setMovies(response.data.Search);
        }
        setIsLoading(false);
      } catch (err) {
        console.log(`Error:${err}`);
        setIsLoading(false);
      }
    };
    getList();
  }, [type, keyWord]);
  return (
    <>
      {isLoading ? (
        <View style={styles.loading}>
          <Text style={[FONTS.h1, {color: COLORS.white}]}>Loading...</Text>
        </View>
      ) : (
        <>
          {movies.map((elem, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigation.navigate('Detail', {id: elem.imdbID});
                }}>
                <MovieCard title={elem.Title} image={elem.Poster}></MovieCard>
              </TouchableOpacity>
            );
          })}
        </>
      )}
    </>
  );
};

export default Movielist;
