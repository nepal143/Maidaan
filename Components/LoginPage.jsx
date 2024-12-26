import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const MaidaanLoginScreen = () => {
  return (
    <View style={styles.container}>
      {/* Background Section */}
      <Image
        source={require('../Assets/Images/bg-dark.png')}
        style={styles.bgImage}
        resizeMode="cover"
      />

      <ScrollView contentContainerStyle={styles.content}>
        {/* Top Section */}
        <Image
          source={require('../Assets/Images/cover-image.jpg')}
          style={styles.topImage}
          resizeMode="cover"
        />

        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../Assets/Images/logo-horizontal.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Tagline */}
        <Text style={styles.tagline}>Mini Online Olympiads</Text>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter Phone Number"
            placeholderTextColor="#ccc"
            style={styles.input}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="Enter Password"
            placeholderTextColor="#ccc"
            style={styles.input}
            secureTextEntry
          />
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Footer Links */}
        <View style={styles.footerLinks}>
          <TouchableOpacity>
            <Text style={styles.footerText}>
              Forgot Password? <Text style={styles.link}>Regenerate</Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.footerText}>
              New to Maidaan? <Text style={styles.link}>Sign up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,// Black background in case the image doesn't load
  },
  bgImage: {
    ...StyleSheet.absoluteFillObject, // Fills the entire screen
    zIndex: 0, 
    width:400 ,
    // marginLeft:-400,
    // marginTop:100,
  },
  content: {
    flexGrow: 1,
  },
  topImage: {
    width: '100%',
    height: 200, // Adjust height as needed
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: -20, // Overlap the logo slightly with the top image
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagline: {
    color: '#fff',
    fontSize: 16,
    fontWeight:500 ,
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginHorizontal: 40,
    marginVertical: 10,
  },
  input: {
    backgroundColor: '#FFF',
    color: '#000',
    placeholderTextColor: 'black' ,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
    borderColor: '#444',
    borderWidth: 1,
    textAlign: 'center' ,
  },
  loginButton: {
    backgroundColor: '#666',
    borderRadius: 20,
    paddingVertical: 12,
    marginHorizontal: 100,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  footerLinks: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#ffff',
    fontSize: 14,
    fontWeight: 800 ,
    marginBottom: 10,
  },
  link: {
    color: '#CCF900', // Gold color for links
  },
});

export default MaidaanLoginScreen;
