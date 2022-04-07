import {View, Text, Image} from 'react-native';
import React from 'react';

import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import {COLORS, FONTS, SIZES} from '../../constants/theme';

const AboutScreen = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#4f4477', '#3d4d76', '#2b5876']}
      style={styles.wrap1}>
      <View style={[styles.wrap1]}>
        <Text
          style={[
            FONTS.hSpec,
            styles.font,
            {color: COLORS.white, position: 'relative', top: -220},
          ]}>
          ABOUT ME
        </Text>
        <Image
          source={require('../../assets/images/avt.jpg')}
          style={{width: 200, height: 300, borderRadius: 10}}></Image>
        <Text style={[FONTS.h1, styles.font, {color: COLORS.white}]}>
          Nguyễn Văn Lãnh
        </Text>
        <Text style={[FONTS.h2thin, styles.font, {color: COLORS.white}]}>
          1911548403
        </Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={[FONTS.h2, styles.font, {color: COLORS.white}]}>
            Description
          </Text>
          <Text style={[FONTS.h3, styles.font, {color: COLORS.white}]}>
            Homework: Movie Explore App - React-Native
          </Text>
          <Text style={[FONTS.h3, styles.font, {color: COLORS.white}]}>
            Api: Omdbapi.com
          </Text>
          <Text style={[FONTS.h2thin, styles.font, {color: COLORS.white}]}>
            There're some bugs that I haven't found out yet!
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default AboutScreen;
