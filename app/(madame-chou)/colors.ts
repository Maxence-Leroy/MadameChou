import { ColorValue } from "react-native"

const dark = '#021d51';
const medium = '#1e4c94';
const light = '#a4cdea';
const empty = '#ffffff00';

export type DNASample = {
    label: string
    value: ColorValue[]
}

export const dnaSamples: DNASample[] = [
    {label: 'Échantillon salive verre n°1', value: [dark, empty, light, empty, light, empty, dark, dark, empty, medium, empty, dark, dark, empty, dark, medium, dark]},
    {label: 'Échantillon salive verre n°2', value: [dark, dark, dark, medium, medium, light, empty, empty, empty, empty, dark, dark, empty, light, empty, light, medium]},
    {label: 'ADN de Madame Chou-Fleur', value: [dark, empty, light, empty, light, empty, dark, dark, empty, medium, empty, dark, dark, empty, dark, medium, dark]},
    {label: 'ADN de Madame Banane', value: [dark, dark, dark, medium, medium, light, empty, empty, empty, empty, dark, dark, empty, light, empty, light, medium]},
    {label: 'ADN de Monsieur Kiwi', value: [dark, empty, light, empty, light, empty, dark, dark, empty, medium, empty, dark, dark, empty, dark, medium, dark]},
    {label: 'ADN de Monsieur Oignon', value: [light, medium, light, medium, empty, empty, empty, empty, empty, empty, light, dark, dark, empty, light, medium, light]},
    {label: 'ADN de Monsieur Foie', value: [light, empty, light, empty, light, dark, light, medium, light, light, dark, dark, medium, empty, medium, light, light]},
]