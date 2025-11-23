import { View, Text } from "react-native";
import TaskItem from "../../components/TaskItem";


export default function Tasks() {
  return (
    <View>
        <Text>Tasks Screen</Text>
        <TaskItem completed text="Estudar React Native" />
        <TaskItem text="Estudar Expo Router" />
    </View>    
  )
}