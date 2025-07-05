import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ToastAndroid,
    ActivityIndicator,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import RnFont from '../../shared/components/RnFont';
import { ms } from 'react-native-size-matters';
import { language, selectedLanguage } from '../../shared/configuration/language';
import { Color } from '../../shared/configuration/themes';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useLoginMutation } from '../../Store/apiSlice';
import { useDispatch } from 'react-redux';
import { emailValidation } from '../../shared/configuration/regex';
import { setStoreToken } from '../../Store/Slice/authSlice';

const Login = ({
    navigation
}) => {

    const dispatch = useDispatch()
    const [login] = useLoginMutation()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const validateEmail = (value) => {
        if (!value.trim()) {
            return language.email_is_required[selectedLanguage];
        }
        if (!emailValidation.test(value)) {
            return language.invalid_email[selectedLanguage];
        }
        return '';
    };

    const validatePassword = (value) => {
        if (!value.trim()) {
            return language.password_is_required[selectedLanguage];
        }
        if (value.length < 6) {
            return language.password_min_len[selectedLanguage];
        }
        return '';
    };

    const validate = () => {
        let valid = true;

        if (!email.trim()) {
            setEmailError(language.email_is_required[selectedLanguage]);
            valid = false;
        } else if (!emailValidation.test(email)) {
            setEmailError(language.invalid_email[selectedLanguage]);
            valid = false;
        } else {
            setEmailError('');
        }

        if (!password.trim()) {
            setPasswordError(language.password_is_required[selectedLanguage]);
            valid = false;
        } else if (password.length < 6) {
            setPasswordError(language.password_min_len[selectedLanguage]);
            valid = false;
        } else {
            setPasswordError('');
        }

        return valid;
    };

    const onSubmit = async () => {
        if (!validate()) {
            return;
        }

        try {
            setLoading(true);

            const formData = new FormData();
            formData.append('email', email);
            formData.append('password', password);

            const userData = await login(formData).unwrap();
            console.log('userData ---->>', userData)
            dispatch(setStoreToken(userData));
            ToastAndroid.show(userData.message, ToastAndroid.SHORT);

            navigation.navigate('Main');
            setLoading(false);
            setEmail('');
            setPassword('');
            setPasswordVisible(false);
        } catch (error) {
            setLoading(false);
            console.log('error ---->>', error)
            ToastAndroid.show(error.message, ToastAndroid.SHORT)
        }

    }


    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled">
                <View style={styles.header}>
                    <RnFont
                        type="Bold"
                        size={ms(45)}
                        color={Color.Black}>
                        {language.app_name[selectedLanguage]}
                    </RnFont>
                    <View style={styles.imagePlaceholder}>
                        <MaterialIcons
                            name="image"
                            size={ms(45)}
                            color={Color.Black} />
                    </View>
                </View>
                <View style={styles.form}>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="email@email.com"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            style={styles.input}
                            placeholderTextColor={Color.Grey2}
                            value={email}
                            onChangeText={(text) => {
                                setEmail(text);
                                setEmailError(validateEmail(text));
                            }}
                        />
                    </View>
                    {emailError ? (
                        <Text style={styles.error}>{emailError}</Text>
                    ) : null}
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="Password"
                            secureTextEntry={!passwordVisible}
                            style={styles.input}
                            placeholderTextColor={Color.Grey2}
                            value={password}
                            onChangeText={(text) => {
                                setPassword(text);
                                setPasswordError(validatePassword(text))
                            }}
                        />
                        <TouchableOpacity
                            onPress={() => setPasswordVisible(!passwordVisible)}
                            style={styles.eyeIcon}
                        >
                            <Ionicons
                                name={!passwordVisible ? 'eye-off-outline' : 'eye-outline'}
                                size={20}
                                color={Color.Grey2}
                            />
                        </TouchableOpacity>
                    </View>
                    {passwordError ? (
                        <Text style={styles.error}>{passwordError}</Text>
                    ) : null}
                    <TouchableOpacity>
                        <RnFont
                            type="Medium"
                            size={ms(12)}
                            color={Color.Grey}
                            style={styles.forgot}>
                            {language.forgot_Password[selectedLanguage]}
                        </RnFont>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signInBtn}
                        onPress={() => onSubmit()}>
                        {loading ? (
                            <ActivityIndicator color={Color.White} />
                        ) : (
                            <RnFont
                                type="SemiBold"
                                size={ms(14)}
                                color={Color.White}>
                                {language.sign_in[selectedLanguage]}
                            </RnFont>
                        )}
                    </TouchableOpacity>
                    <View style={styles.signUpView}>
                        <RnFont
                            type="Medium"
                            size={ms(13)}
                            color={Color.Black}>
                            {language.not_a_member[selectedLanguage]}
                        </RnFont>
                        <RnFont
                            type="Medium"
                            size={ms(13)}
                            color={Color.Black}
                            style={styles.signUpLink}>
                            {language.sign_Up_Here[selectedLanguage]}
                        </RnFont>
                    </View>
                    <View style={styles.dividerRow}>
                        <View style={styles.divider} />
                        <RnFont
                            type="Medium"
                            size={ms(12)}
                            color={Color.Grey}
                            style={styles.dividerLabel}>
                            {language.or_Sign_In_with[selectedLanguage]}
                        </RnFont>
                        <View style={styles.divider} />
                    </View>

                    <View style={styles.socialRow}>
                        <TouchableOpacity style={styles.socialBtn}>
                            <FontAwesome5
                                name="google"
                                size={24}
                                color={Color.Red} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialBtn}>
                            <FontAwesome5
                                name="apple"
                                size={24}
                                color={Color.Black} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialBtn}>
                            <FontAwesome5
                                name="facebook"
                                size={24}
                                color={Color.Blue} />
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity style={styles.guest}>
                    <RnFont
                        type="Medium"
                        size={ms(12)}
                        color={Color.Grey}>
                        {language.enter_as_Guest[selectedLanguage]}
                    </RnFont>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
}

export default Login;