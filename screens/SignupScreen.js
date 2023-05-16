import React,{useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'

const SignupScreen = () => {
    const navigation = useNavigation();
    const [names, setNames] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [phone, setPhone] = useState('');
  
    const handleNameChange = (text) => {
      setNames(text);
    };
  
    const handleEmailChange = (text) => {
      setEmail(text);
    };
  
    const handlePhoneChange = (text) => {
      setPhone(text);
    };
  
    const handlePassChange = (text) => {
      setPass(text);
    };
 
    const handleProceed = ()=>{
        alert('Proceeding...');
    }

  return (
  <View style={styles.container}>
    <View style={styles.subcontainer}>
      <View style={styles.minicontainer}>
        <Text style={styles.text}>Supa<Text style={styles.span}>Menu</Text></Text>
        <View style={styles.microcontainer}>
          <Text style={styles.subtitles}>Welcome...</Text>
          <Text>please fill in the information</Text>
        </View>
        <View style={styles.form}>
          <CustomInput placeholder="full name" icon="user" keyBoardType="default" value={names} onChangeText={handleNameChange}/>
          <CustomInput placeholder="Enter number" icon="phone" keyBoardType="numeric" value={phone} onChangeText={handlePhoneChange}/>
          <CustomInput placeholder="enter email" icon="mail" keyBoardType="email-address" value={email} onChangeText={handleEmailChange}/>
          <CustomInput placeholder="password" icon="lock" keyBoardType="default" HiddenText value={pass} onChangeText={handlePassChange}/>
          <CustomButton text="Proceed" onPress={handleProceed}/>
          <View style={styles.linecontainer}>
            <View style={styles.line} />
            <Text style={styles.linetext}>or</Text>
            <View style={styles.line} />
          </View>
          <Text>If you have a PMG account</Text>
          <CustomButton text="sign in"/>
          <Text>Already have an account? <Text onPress={()=>navigation.navigate('Login')}>Signin</Text></Text>
        </View>
      </View>
    </View>
  </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fc9403',
  },

  subcontainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius:30,
    width:'100%',
    marginTop: 80,
    backgroundColor: '#ffff',
  },

  minicontainer:{
    flex: 1,
    alignItems: 'center',
    paddingTop: 15
  },

  microcontainer:{
   alignItems:'center',
   paddingTop: 15
  },

  text:{
    fontSize:30,
    fontWeight:900,
  },

  span:{
    fontSize:30,
    fontWeight:900,
    color: '#fc9403'
  },

  subtitles:{
    color: '#222582',
    fontWeight: 800,
    fontSize: 16,
    marginBottom: 10
  },

  form:{
    flex: 1,
    alignItems: 'center',
    width:'100%',
    padding:20
  },

  linecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },

  linetext: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#ccc',
    fontSize:20
  },

})

export default SignupScreen