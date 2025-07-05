import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    FlatList,
    Image,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    ToastAndroid,
    ActivityIndicator,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { images } from '../../shared/configuration/images';
import { ms } from 'react-native-size-matters';
import { Color } from '../../shared/configuration/themes';
import { language, selectedLanguage } from '../../shared/configuration/language';
import RnFont from '../../shared/components/RnFont';
import { styles } from './styles';
import { Eventlistingcell } from './components/Eventlistingcell';
import { useDispatch, useSelector } from 'react-redux';
import { useEventlistMutation } from '../../Store/apiSlice';
import { setEventList } from '../../Store/Slice/authSlice';


const EventListing = () => {

    const dispatch = useDispatch()
    const [eventlist, { data: events }] = useEventlistMutation();

    const EventLisingData = useSelector((state) => state.auth.data)

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        apiCall()
    }, [])

    const apiCall = async () => {
        try {
            setLoading(true);

            const eventdata = await eventlist().unwrap();
            console.log('eventdata ---->>', eventdata)
            dispatch(setEventList(eventdata));

            setLoading(false);

        } catch (error) {
            setLoading(false);
            console.log('error ---->>', error)
            ToastAndroid.show(error.message, ToastAndroid.SHORT)
        }
    }

    const renderItem = ({ item }) => (

        <Eventlistingcell
            item={item}
        />
    );

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />

            <View style={styles.header}>
                <RnFont
                    type="Bold"
                    size={ms(35)}
                    color={Color.Black}>
                    {language.Hello_Renzo[selectedLanguage]}
                </RnFont>
                <RnFont
                    type="Medium"
                    size={ms(13)}
                    color={Color.Grey}>
                    {language.Are_you_ready_to_dance[selectedLanguage]}
                </RnFont>
            </View>

            {loading ? (
                <View style={styles.loaderWrap}>
                    <ActivityIndicator size="large" color={Color.Black} />
                </View>
            ) : (
                <>
                    <FlatList
                        data={EventLisingData?.data?.events}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderItem}
                        contentContainerStyle={styles.list}
                        showsVerticalScrollIndicator={false}
                        extraData={EventLisingData?.data?.events} />
                </>
            )}
        </View>
    );
}


export default EventListing;
