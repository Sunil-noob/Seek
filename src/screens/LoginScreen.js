import React,{useState} from 'react'
import { 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View, 
} from 'react-native'
import AppleBtn from '../components/AppleBtn'
import FacebookBtn from '../components/FacebookBtn'
import GoogleBtn from '../components/GoogleBtn'
import EmailBtn from '../components/EmailBtn'
import { LinearTextGradient } from "react-native-text-gradient";

export default function LoginScreen(props) {
    const {login} = props.route.params;
    const [islogin,setIsLogin] = useState(login);
    return (
        <>
            <View style={styles.mainContainer}>
                <View style={styles.navHeader}>
                    {islogin == 0 ?(
                        <Text style={[styles.signUpText,{borderBottomWidth:3,color:'#34333B'}]}>
                            {"Sign Up"}
                        </Text>
                    ):(
                    <TouchableOpacity onPress={() => setIsLogin(0)}>
                        <LinearTextGradient
                            style={styles.signUpText}
                            locations={[0, 1]}
                            colors={["#615BEA", "#CD78EC"]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            >
                            <Text>{"Sign Up"}</Text>
                        </LinearTextGradient>
                    </TouchableOpacity>
                    )}
                    {islogin == 1?(
                        <Text style={[styles.loginText,{borderBottomWidth:3,color:'#34333B'}]}>
                            {"Login"}
                        </Text>
                    ):(
                    <TouchableOpacity onPress={() => setIsLogin(1)}>
                        <LinearTextGradient
                            style={styles.signUpText}
                            locations={[0, 1]}
                            colors={["#615BEA", "#CD78EC"]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            >
                            <Text>{"Login"}</Text>
                        </LinearTextGradient>
                    </TouchableOpacity>
                    )}
                </View>
                {islogin == 0?(
                    <View style={styles.mainHeading}>
                        <Text style={styles.greeting}>
                            Hello
                            <Text 
                                style={{fontFamily:'GalanoGrotesqueAltExtraBold'}}
                            >
                                {" "}Stranger,
                            </Text> 
                        </Text>
                        <Text style={styles.message}>
                            {"Enter your informations below or Login\nwith social account."}
                        </Text>
                    </View>
                ):(
                    <View style={styles.mainHeading}>
                        <Text style={styles.welcome}>
                            {"Welcome Back,"}
                        </Text>
                        <Text style={styles.friend}>
                            {"My friend"}
                        </Text>
                    </View>
                )}
            </View>
            <View style={styles.btnsContainer}>
                <View style={styles.allBtns}>
                    <AppleBtn/>
                </View>
                <View style={styles.allBtns}>
                    <FacebookBtn/>
                </View>
                <View style={styles.allBtns}>
                    <GoogleBtn/>
                </View>
                <View style={styles.allBtns}>
                    <EmailBtn/>
                </View>
            </View>
            {islogin !== 1 ?(
            <View style={styles.bottomContainer}>
                <Text style={styles.privacyText}>
                    {"Read Terms of Service\n   Read Privacy Policy"}
                </Text>
            </View>
            ):null}
        </>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        paddingLeft:"10%"
    },
    navHeader:{
        flexDirection:'row',
        marginVertical:"10%",
    },
    signUpText:{
        marginRight:"10%",
        color:"#34333B",
        fontSize:16,
        lineHeight:20,
        fontFamily:'GalanoGrotesqueSemiBold',
        textShadowColor: 'rgba(0, 0, 0, 0.50)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    loginText:{
        fontSize:16,
        textShadowColor: 'rgba(0, 0, 0, 0.50)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        fontFamily :'GalanoGrotesqueSemiBold',
    },
    mainHeading:{
        marginVertical:"8%",
    },
    greeting:{
        fontSize:40,
        letterSpacing:1,
        color:'#47499C'
    },
    message:{
        marginTop:"2%",
        fontSize:16,
        color:'#47499C',
        lineHeight:20,
        fontFamily:'GalanoGrotesqueAltRegular'
    },
    btnsContainer:{
        marginHorizontal:"10%",
        marginTop:"5%",
        flex:1,
    },
    allBtns:{
        width:"100%",
        marginTop:"3.5%",
    },
    bottomContainer:{
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:'10%',
        marginVertical:"10%",
    },
    privacyText:{
        lineHeight:25,
        fontSize:16,
        color:'#47499C',
        fontFamily:'MundialRegular'
    },
    welcome:{
        fontSize:30,
        color:'#47499C',
        fontFamily:'GalanoGrotesqueAlt',
        fontStyle:'normal'
    },
    friend:{
        fontSize:30,
        fontWeight:'bold',
        color:'#47499C',
        fontFamily:'GalanoGrotesqueAltBold'
    }
})
