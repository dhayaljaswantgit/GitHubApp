import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Button, Header} from '../components';
import STYLES from '../styles';
import {colors, getData, setData} from '../utils';
import ImagePicker from 'react-native-image-crop-picker';

export default props => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    getData('userData', true).then(data => {
      if (data && typeof data === 'object') {
        setUserData(data || {});
      }
    });
  }, []);

  useEffect(() => {
    setData('userData', userData);
  }, [userData]);

  const captureImage = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
    }).then(image => {
      if (image && image.path) {
        setUserData({...userData, image: image.path});
      }
    });
  };

  return (
    <View style={STYLES.main}>
      <Header navigation={props.navigation} title="My Profile" />

      <ScrollView style={STYLES.main}>
        <TouchableOpacity onPress={captureImage} style={styles.imgUpper}>
          <Image source={{uri: userData.image || null}} style={styles.img} />
        </TouchableOpacity>
        <TextInput
          value={userData.name}
          placeholder="Name"
          onChangeText={name => setUserData({...userData, name})}
          style={[STYLES.input, styles.input]}
        />
        <TextInput
          value={userData.age}
          placeholder="Age"
          keyboardType="number-pad"
          onChangeText={age => setUserData({...userData, age})}
          style={[STYLES.input, styles.input]}
        />
        <TextInput
          value={userData.email}
          keyboardType="email-address"
          placeholder="Email"
          onChangeText={email => setUserData({...userData, email})}
          style={[STYLES.input, styles.input]}
        />

        <View style={styles.pickerUpper}>
          <Picker
            selectedValue={userData.gender}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              setUserData({...userData, gender: itemValue})
            }>
            <Picker.Item style={styles.pickerItem} label="Male" value="Male" />
            <Picker.Item
              style={styles.pickerItem}
              label="Female"
              value="Female"
            />
          </Picker>
        </View>

        {/* <Button
          title="Upload Image"
          style={styles.saveBtn}
          // onPress={() => {}}
        /> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {height: 50, fontSize: 25, paddingHorizontal: 10, margin: 10},
  btn: {
    width: 80,
    margin: 10,
    height: 50,
  },

  imgUpper: {alignItems: 'center', marginVertical: 20, position: 'relative'},
  img: {
    height: 100,
    width: 100,
    backgroundColor: colors.gray,
    borderRadius: 50,
  },
  // saveBtn: {paddingVertical: 15, marginTop: 20},
  pickerUpper: {
    borderColor: colors.primary,
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
  },
  picker: {
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
  },
  pickerItem: {fontSize: 16},
});
