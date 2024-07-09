import { useEffect, useState } from "react";
import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";

type PasswordModalProps = {
    isVisible: boolean,
    closeModal: () => void,
    onSuccess: () => void
}

const expectedPassword = "Truites35!";

export default function PasswordModal({
    isVisible,
    closeModal,
    onSuccess
}: PasswordModalProps) {
    function validate() {
        if(text === expectedPassword) {
            onSuccess()
            closeModal()
        } else {
            setHasError(true)
        }
    }

    const [text, setText] = useState("");
    useEffect(() => {
        setText("")
    }, [isVisible]);
    const [hasError, setHasError] = useState(false);

    return(
        <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={() => {
                closeModal();
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text>Entrer le mot de passe pour accéder à la partie sécurisée</Text>
                    <TextInput
                        autoCapitalize="none"
                        autoComplete={undefined}
                        autoCorrect={false}
                        value={text}
                        onChangeText={(text: string) => {
                            setText(text)
                            setHasError(false)
                        }}
                        onSubmitEditing={validate}
                        style={styles.input}
                    />
                    {hasError && (
                        <Text style={{color: 'red', paddingBottom: 10}}>Mot de passe incorrect</Text>
                    )}
                    <View style={{flexDirection: 'row', justifyContent: 'space-around', alignSelf: 'stretch'}}>
                        <Button
                            title="Valider"
                            onPress={validate}
                        />
                        <Button
                            title="Annuler"
                            onPress={() => { closeModal() }}
                        />
                    </View>
                </View>
            </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        marginVertical: 10,
        alignSelf: 'stretch'
      },
  });