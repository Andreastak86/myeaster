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
                <Text>
                    Våren har endelig meldt sin ankomst, og påsken minner oss om
                    at sommerens sol og varme snart er innen rekkevidde. Det er
                    en fantastisk tid på året, fylt med nytt liv og håp.
                </Text>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type='subtitle'>Step 2: Explore</ThemedText>
                <ThemedText>
                    Tap the Explore tab to learn more about what's included in
                    this starter app.
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type='subtitle'>
                    Step 3: Get a fresh start
                </ThemedText>
                <ThemedText>
                    When you're ready, run{" "}
                    <ThemedText type='defaultSemiBold'>
                        npm run reset-project
                    </ThemedText>{" "}
                    to get a fresh{" "}
                    <ThemedText type='defaultSemiBold'>app</ThemedText>{" "}
                    directory. This will move the current{" "}
                    <ThemedText type='defaultSemiBold'>app</ThemedText> to{" "}
                    <ThemedText type='defaultSemiBold'>app-example</ThemedText>.
                </ThemedText>
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
    },
    chickPic: {
        height: 250,
        width: 400,
        bottom: 0,
        left: 0,
        position: "relative",
    },
});
