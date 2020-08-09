import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const RersultsDetail = ({ result }) => {
    return (
        <View>
            <Text>{result.name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({});

export default RersultsDetail;