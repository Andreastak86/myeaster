import { Image, StyleSheet, Text } from "react-native";
import { Colors } from "@/constants/Colors";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: "#FFEB3B", dark: "#FFA726" }}
            headerImage={
                <Image
                    source={require("@/assets/images/chick.png")}
                    style={styles.chickPic}
                />
            }
        >
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Påsken 2025 🐣🐤</ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <Text style={{ color: Colors.light.tint, fontSize: 16 }}>
                    Våren har endelig meldt sin ankomst, og påsken minner oss om
                    at sommerens sol og varme snart er innen rekkevidde. Det er
                    en fantastisk tid på året, fylt med nytt liv og håp.
                </Text>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <Text style={{ color: Colors.light.tint, fontSize: 20 }}>
                    Jeg har selvfølgelig spist kviklønsj, drukket solo, spist en
                    appelsin eller to.
                </Text>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <Text style={{ color: Colors.light.tint, fontSize: 16 }}>
                    Håper du har hatt en fin påskeferie, og at du har fått tid
                    til å slappe av og nyte tiden med familie og venner. Det er
                    alltid viktig å sette pris på de små øyeblikkene i livet.
                </Text>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <Text style={{ color: Colors.light.tint, fontSize: 16 }}>
                    Bruk knappen nede for å se et utvalg bilder jeg tok i påsken
                </Text>
            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
        fontSize: 16,
    },
    chickPic: {
        height: 250,
        width: 400,
        bottom: 0,
        left: 0,
        position: "relative",
    },
});
