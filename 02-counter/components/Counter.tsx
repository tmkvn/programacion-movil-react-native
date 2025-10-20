
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);
  const isDisabled = () => count === 0;

  const counterStyle = {
    fontSize: 100,
    color: count > 0 ? '#10B981' : count < 0 ? '#EF4444' : '#000000',
  } as const;

  return (
    <>
      <Text style={styles.title}>Contador</Text>
      <Text style={styles.subtitle}>Presiona los botones para cambiar de valor.</Text>

      <View style={styles.counterContainer}>
        <Text style={counterStyle}>{count}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={decrement} style={[styles.button, styles.decrementButton]}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={increment} style={[styles.button, styles.incrementButton]}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resetContainer}>
        <TouchableOpacity
          onPress={reset}
          disabled={isDisabled()}
          style={[
            styles.button,
            styles.resetButton,
            isDisabled() && styles.disabledButton
          ]}
        >
          <Text style={styles.buttonText}>Reiniciar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Counter;

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8
  },
  subtitle: {
    fontSize: 14,
    color: '#1F2937',
    marginBottom: 32,
    textAlign: 'center'
  },
  counterContainer: {
    marginBottom: 40,
    minHeight: 120,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  incrementButton: {
    backgroundColor: '#10B981'
  },
  decrementButton: {
    backgroundColor: '#EF4444'
  },
  resetButton: {
    backgroundColor: '#45a0c4'
  },
  disabledButton: {
    backgroundColor: '#9CA3AF',
    opacity: 0.5
  },
  buttonText: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    lineHeight: 40
  },
  resetContainer: {
    margin: 20,
    width: '100%',
    minHeight: 70
  },
});
