import { ThemedText } from '@/components/ThemedText';
import { useState, type Dispatch } from 'react';
import { Button, Platform, View } from 'react-native';
import DropDownPicker, { ItemType, ValueType } from 'react-native-dropdown-picker';

export type SetStateCallback<S> = ((prevState: S) => S);

type SampleSelectorProps<T> = {
    setValue: Dispatch<SetStateCallback<T | null>>,
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
                bottomOffset={400}
                zIndex={(6 - id) * 1000}
                zIndexInverse={id * 1000}
                listMode= {Platform.OS === 'android' ? 'MODAL' : 'DEFAULT'}
            />
            <Button
                title='Effacer'
                onPress={() => {setValue(null)}}
            />
        </View>
    )
}