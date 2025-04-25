import React from "react";
import { StyleSheet, FlatList, Image, View } from "react-native";

const images = [
    require("@/assets/images/chick1.jpg"),
    require("@/assets/images/chick2.jpg"),
    require("@/assets/images/egg.jpg"),
    require("@/assets/images/fish.jpg"),
    require("@/assets/images/hunt.jpg"),
    require("@/assets/images/hunt2.jpg"),
    require("@/assets/images/hunt3.jpg"),
    require("@/assets/images/lamb.jpg"),
    require("@/assets/images/solo.jpg"),
    require("@/assets/images/sweater.jpg"),
];

export default function EasterGalleryScreen() {
    return (
        <View style={styles.container}>
            <FlatList
                data={images}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Image source={item} style={styles.image} />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFEB3B", // Lys gul bakgrunnsfarge
        padding: 10,
    },
    image: {
        width: "100%", // Bildene tilpasser seg bredden
        height: 200,
        marginVertical: 10,
        resizeMode: "contain", // Hele bildet vises
    },
});
