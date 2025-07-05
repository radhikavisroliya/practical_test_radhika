import { StyleSheet } from "react-native";
import { Color } from "../../shared/configuration/themes";
import { ms } from "react-native-size-matters";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.White,
    },
    header: {
        backgroundColor: Color.Grey,
        alignItems: 'center',
        paddingTop: '20%',
        paddingBottom: '20%',
    },
    imagePlaceholder: {
        marginTop: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
    },
    inputWrapper: {
        backgroundColor: Color.White,
        padding: 5,
        borderRadius: 10,
        shadowColor: Color.Grey2,
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 8,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputIcon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        color: Color.Black
    },
    eyeIcon: {
        paddingHorizontal: 8,
    },
    forgot: {
        alignSelf: 'flex-end',
        marginBottom: 24,
    },
    signInBtn: {
        backgroundColor: '#14c393',
        borderRadius: 4,
        paddingVertical: 12,
        alignItems: 'center',
        marginBottom: 16,
    },
    signUpView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    signUpLink: {
        textDecorationLine: 'underline',
    },
    dividerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: '#c0c0c0',
    },
    dividerLabel: {
        marginHorizontal: 8,
    },
    socialRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 20,
    },
    socialBtn: {
        width: 56,
        height: 56,
        borderWidth: 1,
        borderColor: '#c0c0c0',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    guest: {
        alignSelf: 'flex-end',
        padding: 16,
    },
    error: {
        color: Color.Red,
        marginLeft: 8,
        fontSize: ms(11),
    },
});