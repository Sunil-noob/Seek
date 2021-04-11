import React from 'react';
import { 
    StyleSheet,
    Text, 
    View,
    Image,
    Dimensions,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import backgroundImage from '../asset/backgroundImage.png';
import logoFull from '../../android/app/src/main/res/drawable/logofull.png';
import landingBottomBg from '../../android/app/src/main/res/drawable/landingbottombg.png';
import SignUpBtn from '../components/SignUpBtn';
import LoginBtn from '../components/LoginBtn';

const { width, height } = Dimensions.get('window');

const LandingScreen = ({navigation}) => {
    return (
        <View style={styles.mainContainer}>
            <Image resizeMode="cover" style={styles.img} source={backgroundImage}/>
            <ImageBackground 
                style={styles.bottomCnotainer}
                source={landingBottomBg}
            >
                <View style={styles.contentContainer}>
                    <View style={styles.logoContainer}>
                        <Image
                            source={logoFull}
                            styles={styles.logo}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            {"Whatever you're seeking\nis right in front of you..."}
                        </Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('login',{login:0})} 
                        style={styles.btnContainer}
                    >
                        <SignUpBtn/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('login',{login:1})} 
                        style={styles.loginBtnContainer}
                    >
                        <LoginBtn/>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:width,
        height:height,
    },
    img:{
        height: height * 0.45,
        width:width,
    },
    bottomCnotainer:{
        height: height * 0.55,
        width:width,
    },
    contentContainer:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    logoContainer:{
        marginTop:"10%",
    },
    logo:{
        width:204.46,
        height:60,
    },
    textContainer:{
        marginTop:"8%",
    },
    text:{
        color:'#fff',
        fontSize:20,
        fontFamily:'GalanoGrotesque',
        lineHeight:24,
        
    },
    btnContainer:{
        marginTop:"30%",
        width:"100%",
    },
    loginBtnContainer:{
        marginTop:"2.5%",
        width:"100%",
    }
});

export default LandingScreen;
