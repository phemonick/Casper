import * as React from 'react';
import {Colour} from '../styles';
import {SafeAreaView} from 'react-navigation';
import {StatusBar, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeViewWrapper: {
    backgroundColor: Colour.white,
    flex: 1,
  },
});

export default function withSafeAreaView(WrappedComponent) {
  function withSafeAreaView(props) {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.safeViewWrapper}>
          <WrappedComponent {...props} />
        </SafeAreaView>
      </>
    );
  }

  withSafeAreaView.displayName = `withSafeAreaView(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;

  return withSafeAreaView;
}
