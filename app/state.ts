import { atom, selector } from 'recoil';
import { ColorValue } from "react-native"

const dark = '#021d51';
const medium = '#1e4c94';
const light = '#a4cdea';
const empty = '#ffffff00';

export enum CharacterType {
    Victim = "victim",
    Culprit = "culprit",
    Innocent = "innocent",
};

export enum PotentialSuspects {
    Banane = "Madame Banane",
    Kiwi = "Monsieur Kiwi",
    Oignon = "Monsieur Oignon",
    Foie = "Monsieur Foie"
}

export type Character = "Madame Chou-Fleur" | PotentialSuspects;

export const victim: Character = "Madame Chou-Fleur";

export enum SalivaSample {
    One = "Échantillon salive verre n°1",
    Two = "Échantillon salive verre n°2"
}

export type AllSamples = Character | SalivaSample;

export type DNASample = ColorValue[];

const victimDna: DNASample = [dark, empty, light, empty, light, empty, dark, dark, empty, medium, empty, dark, dark, empty, dark, medium, dark]
const culpritDna: DNASample = [dark, dark, dark, medium, medium, light, empty, empty, empty, empty, dark, dark, empty, light, empty, light, medium]
const otherCharactersDna: DNASample[] = [
    [medium, dark, light, medium, empty, dark, dark, empty, empty, empty, empty, light, empty, empty, empty, dark, dark],
    [light, medium, light, medium, empty, empty, empty, empty, empty, empty, light, dark, dark, empty, light, medium, light],
    [light, empty, light, empty, light, dark, light, medium, light, light, dark, dark, medium, empty, medium, light, light]
]

const defaultSampleAttribution = new Map<Character, CharacterType>([
    [victim, CharacterType.Victim],
    [PotentialSuspects.Banane, CharacterType.Innocent],
    [PotentialSuspects.Foie, CharacterType.Culprit],
    [PotentialSuspects.Kiwi, CharacterType.Innocent],
    [PotentialSuspects.Oignon, CharacterType.Innocent]
])

export const typeAttributionState = atom<Map<Character, CharacterType>>({
  key: 'typeAttribution',
  default: defaultSampleAttribution,
});

export const dnaAttributionState = selector<Map<AllSamples, DNASample>>({
    key: 'dnaAttribution',
    get: ({get}) => {
        const currentTypeAttribution = get(typeAttributionState);
        let innoncentNumber = 0;
        let map = new Map<AllSamples, DNASample>();
        currentTypeAttribution.forEach((value, key, _) => {
            switch(value) {
                case CharacterType.Victim:
                    map.set(key, victimDna)
                    break
                case CharacterType.Culprit:
                    map.set(key, culpritDna)
                    break
                case CharacterType.Innocent:
                    map.set(key, otherCharactersDna[innoncentNumber])
                    innoncentNumber += 1
                    break
            }
        })
        map.set(SalivaSample.One, victimDna);
        map.set(SalivaSample.Two, culpritDna);
        return map
    },
  });