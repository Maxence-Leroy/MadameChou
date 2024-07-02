import { ThemedText } from '@/components/ThemedText';
import { useState, type Dispatch } from 'react';
import { View } from 'react-native';
import DropDownPicker, { ItemType, ValueType } from 'react-native-dropdown-picker';

type SetStateCallback<S> = ((prevState: S) => S);

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
            <ThemedText style={{paddingRight: 10}}>{id}</ThemedText>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                placeholder={"Choisir un échantillon"}
                style={{zIndex: -1}}
                dropDownDirection='AUTO'
                bottomOffset={400}
            />
        </View>
    )
}