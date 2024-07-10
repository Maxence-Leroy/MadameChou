import { ThemedText } from '@/components/ThemedText';
import { SetStateAction, useState, type Dispatch } from 'react';
import { Button, Platform, View } from 'react-native';
import DropDownPicker, { ItemType, ValueType } from 'react-native-dropdown-picker';

type SampleSelectorProps<T> = {
    setValue: Dispatch<SetStateAction<T | null>>,
    value: T | null,
    items: ItemType<T>[],
    id: number
}

export default function SampleSelector<T extends ValueType>(
    {setValue,
    value,
    items,
    id
}: SampleSelectorProps<T>): React.ReactElement {
    const [open, setOpen] = useState(false);
    return(
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <ThemedText>{id}</ThemedText>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                placeholder={"Choisir un échantillon"}
                containerStyle={{
                    paddingHorizontal: 10,
                    paddingVertical: 2,
                    flex: 1,
                }}
                dropDownDirection='AUTO'
                bottomOffset={100}
                zIndex={(6 - id) * 1000}
                zIndexInverse={id * 1000}
                listMode= {Platform.OS === 'android' ? 'MODAL' : 'FLATLIST'}
            />
            <Button
                title='Effacer'
                onPress={() => {setValue(null)}}
            />
        </View>
    )
}