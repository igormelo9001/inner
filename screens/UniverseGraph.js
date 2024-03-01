import React from 'react';
import { View, StyleSheet } from 'react-native';
import { GestureHandlerRootView,PinchGestureHandler } from 'react-native-gesture-handler';

{/**<GestureHandlerRootView style={styles.container}>
        <PinchGestureHandler>
            <View style={styles.graphContainer}>
                {/* Render the cards of the posts as nodes in the graph}
                {posts.map((post) => (
                    <View key={post.id} style={styles.card}>
                        {/* Render the content of the post card}
                    </View>
                ))}
            </View>
        </PinchGestureHandler>
    </GestureHandlerRootView>*/}

const UniverseGraph = () => {
    const posts = ['teste', 'igor', 'notebook', 'tonentendendonada' ]; // Replace with the actual posts from the feed screen

    return (
        <View style={styles.graphContainer}>
            {/* Render the cards of the posts as nodes in the graph */}
            {posts.map((post) => (
                <View key={post.id} style={styles.card}>
                    {/* Render the content of the post card */} 
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    graphContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{ perspective: 1000 }],
    },
    card: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 8,
        margin: 8,
    },
});

export default UniverseGraph;