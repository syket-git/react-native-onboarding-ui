import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { colors } from '../utils/colors';

const Onboarding = () => {
  const slides = [
    {
      key: 1,
      title: 'Save time by tracking your studies',
      text: 'Schedule your classes, assignments, quizzes and more',
      image: require('../assets/Onboarding1.png'),
    },
    {
      key: 2,
      title: 'Stay on top of your education',
      text: 'Reduce your stress, increase your productivity',
      image: require('../assets/Onboarding2.png'),
    },
    {
      key: 3,
      title: 'Spend more time doing the things you love',
      text: 'Get started within five minutes',
      image: require('../assets/Onboarding3.png'),
    },
  ];

  const _renderItem = ({ item }) => {
    return (
      <View style={styles.slider}>
        <Image source={item?.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subTitle}>{item.text}</Text>
      </View>
    );
  };

  const renderPrevButton = () => {
    return (
      <View style={styles.renderPrevButton}>
        <Text>Prev</Text>
      </View>
    );
  };
  const renderNextButton = () => {
    return (
      <View style={styles.renderNextButton}>
        <Text>Next</Text>
      </View>
    );
  };
  const renderDoneButton = () => {
    return (
      <View style={styles.renderDoneButton}>
        <Text>Done</Text>
      </View>
    );
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={_renderItem}
      dotStyle={styles.dotStyle}
      activeDotStyle={styles.activeDotStyle}
      showPrevButton
      renderPrevButton={renderPrevButton}
      renderNextButton={renderNextButton}
      renderDoneButton={renderDoneButton}
    />
  );
};

const styles = StyleSheet.create({
  slider: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 14,
    marginTop: 10,
    fontWeight: '600',
    textAlign: 'center',
  },
  dotStyle: {
    backgroundColor: colors.fadeBlue,
  },
  activeDotStyle: {
    backgroundColor: colors.blue,
  },
  renderPrevButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    fontSize: 14,
    fontWeight: '600',
  },
  renderNextButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    fontSize: 14,
    fontWeight: '600',
  },
  renderDoneButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    fontSize: 14,
    fontWeight: '600',
  },
});

export default Onboarding;
