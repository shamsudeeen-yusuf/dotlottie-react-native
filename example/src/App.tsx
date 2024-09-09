import { Button, StyleSheet, View } from 'react-native';
import { DotLottie, Mode, type Dotlottie } from 'dotlottie-react-native';
import { useRef } from 'react';

export default function App() {
  const ref = useRef<Dotlottie>(null);

  return (
    <View style={styles.container}>
      <DotLottie
        ref={ref}
        source={require('../assets/animation.lottie')}
        style={styles.box}
        loop={false}
        autoplay={false}
        onPlay={() => console.log('onPlay')}
        onPause={() => console.log('onPause')}
        onStop={() => console.log('onStop')}
        onTransition={(event) => console.log('onTransitionEnd', event)}
        onStateEntered={(event) => console.log('onStateEntered', event)}
      />
      <Button title="Play" onPress={() => ref.current?.play()} />
      <Button title="Pause" onPress={() => ref.current?.pause()} />
      <Button title="Stop" onPress={() => ref.current?.stop()} />
      <Button title="Loop" onPress={() => ref.current?.setLoop(true)} />
      <Button title="Speed" onPress={() => ref.current?.setSpeed(1)} />
      <Button
        title="FORWARD"
        onPress={() => ref.current?.setPlayMode(Mode.FORWARD)}
      />
      <Button
        title="REVERSE"
        onPress={() => ref.current?.setPlayMode(Mode.REVERSE)}
      />
      <Button
        title="START_STATE_MACHINE"
        onPress={() => ref.current?.setStartStateMachine()}
      />

      <Button
        title="ADD_STATE_MACHINE"
        onPress={() => ref.current?.setAddStateMachineEventListener()}
      />
      <Button
        title="REMOVE_STATE_MACHINE"
        onPress={() => ref.current?.setRemoveStateMachineEventListener()}
      />

      <Button
        title="STOP_STATE_MACHINE"
        onPress={() => ref.current?.setStopStateMachine()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
});
