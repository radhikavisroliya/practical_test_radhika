import React from "react";
import { Image, Platform, StyleSheet, ToastAndroid, TouchableOpacity, View } from "react-native";
import { styles } from "../styles";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Color } from "../../../shared/configuration/themes";
import RnFont from "../../../shared/components/RnFont";
import { ms } from "react-native-size-matters";
import { useDispatch } from "react-redux";
import { setTggleFavorite } from "../../../Store/Slice/authSlice";


export const Eventlistingcell = ({
    item
}) => {

    const dispatch = useDispatch();

    const onToggle = () => {
        const willBeFav = item?.isFavorite == 0; 
        dispatch(setTggleFavorite(item.event_date_id));

        if (Platform.OS === 'android') {
            ToastAndroid.show(
                willBeFav
                    ? `${item.event_name} added to favorites`
                    : `${item.event_name} removed from favorites`,
                ToastAndroid.SHORT
            );
        }
    };

    return (
        <View style={styles.card}>
            <Image
                style={styles.thumbnail}
                source={{ uri: item.event_profile_img }} />
            <Ionicons
                name="arrow-forward"
                size={ms(20)}
                color={Color.Black}
                style={styles.arrowIcon}
            />
            <View style={styles.cardContent}>
                <RnFont
                    type="Medium"
                    size={ms(14)}
                    color={Color.Black}>
                    {item.event_name}
                </RnFont>
                <RnFont
                    type="Medium"
                    size={ms(12)}
                    color={Color.Green}>
                    {`${item.readable_from_date} - ${item.readable_to_date}`}
                </RnFont>
                <RnFont
                    type="Medium"
                    size={ms(12)}
                    color={Color.Grey}>
                    {`${item.event_price_from} - ${item.event_price_to}`}
                </RnFont>
                <View style={styles.tagRow}>
                    {item?.keywords?.map(tag => (
                        <View style={styles.tag}>
                            <RnFont
                                type="Medium"
                                size={ms(10)}
                                color={Color.Black}
                                style={styles.tagText}>
                                {tag}
                            </RnFont>
                        </View>
                    ))}
                </View>
            </View>
            <RnFont
                type="Regular"
                size={ms(10)}
                color={Color.Black}
                style={styles.location}>
                {item.location}
            </RnFont>

            <View style={styles.actions}>
                <TouchableOpacity>
                    <Ionicons
                        name="share-outline"
                        size={22}
                        color="#5a5a5a" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.heartButton} onPress={onToggle}>
                    <Ionicons
                        name={item.isFavorite === 1 ? 'heart' : 'heart-outline'}
                        size={22}
                        color={item.isFavorite === 1 ? '#21C57A' : '#5a5a5a'}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )

}