
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer: React.FC = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Universidad Católica de Cuenca</Text>
      <Text style={styles.footerText}>Kevin Tacuri</Text>
      <Text style={styles.footerText}>7mo Software B</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    width: '100%',
    paddingTop: 10,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 13,
    color: '#6B7280',
    lineHeight: 20,
    textAlign: 'center',
  },
});
