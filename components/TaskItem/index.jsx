import { View , Text } from "react-native";
import { IconCheck, IconPencil, IconTrash } from "../Icons";
import { StyleSheet, Pressable } from "react-native";

 const TaskItem = ({ completed, text, onToggleComplete, onPressEdit, onPressDelete }) => {
    return (
        <View style = {styles.card}>
            <Pressable>                
                <IconCheck onPress = { onToggleComplete } checked= {completed} />
            </Pressable>
            <Text>
                {text}
            </Text>
            <Pressable>
                <IconPencil onPress = {onPressEdit} />
            </Pressable>
            <Pressable>
                <IconTrash onPress = {onPressDelete}/>
            </Pressable>

        </View>
    )}

    // CRIACAÇÃO DE UM CONSTANTE DE ESTILO PARA COMPONENTE

    const styles = StyleSheet.create({
     card: {
        flexDirection: 'row',
        backgroundColor: '#98A0A8',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        paddingVertical: 18,
        borderRadius: 8,
        gap: 8
    },
    text: {
        flex: 1,
        color: '#021123',
        fontSize: 18,
        fontWeight: 'bold'
    }
});

    export default TaskItem;