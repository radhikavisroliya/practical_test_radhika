import { StyleSheet } from "react-native";
import { Color } from "../../shared/configuration/themes";
import { ms } from "react-native-size-matters";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    header: {
        padding: 20,
        marginTop: 20
    },
    list: {
        paddingHorizontal: 16,
        paddingBottom: 24,
    },
    card: {
        backgroundColor: Color.White,
        borderRadius: 12,
        padding: 10,
        paddingVertical: 15,
        shadowColor: Color.Black,
        shadowOpacity: 0.05,
        shadowRadius: 6,
        elevation: 3,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    thumbnail: {
        width: ms(80),
        height: ms(55),
        borderRadius: 6,
        resizeMode: 'cover',
    },
    arrowIcon: {
        position: 'absolute',
        right: 12,
        top: 12,
    },
    cardContent: {
        flex: 1,
        marginStart: 10,
        marginTop: -10
    },
    location: {
        position: 'absolute',
        right: 12,
        top: 46,
        textAlign: 'right',
    },
    actions: {
        position: 'absolute',
        right: 8,
        bottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    heartButton: {
        marginLeft: 0,
    },
    tagRow: {
        position: 'absolute',
        bottom: -20,
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    tag: {
        backgroundColor: '#ededed',
        paddingHorizontal: 10,
        justifyContent: 'center',
        marginRight: 8,
        marginBottom: 4,
        borderRadius: 5
    },
    loaderWrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});