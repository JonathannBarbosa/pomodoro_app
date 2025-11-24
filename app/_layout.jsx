import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#021123'
                    },
                    headerTintColor: '#FFF',
                    drawerStyle: {
                        backgroundColor: '#021123'
                    },
                    drawerLabelStyle: {
                        color: '#FFF'
                    }
                }}
            >
                <Drawer.Screen
                    name="index"
                    options={{
                        drawerLabel: 'Início',
                        title: ''
                    }}
                />

                <Drawer.Screen
                    name='add-task/index'
                    options={{
                        drawerItemStyle: { display: 'none' },
                        title: '',
                        headerLeft: () => (
                            <Ionicons
                                name='arrow-back'
                                size={24}
                                color='#FFF'
                                style={{ marginLeft: 16 }}
                                onPress={() => router.navigate('/tasks')}
                            />
                        )
                    }}
                />

                <Drawer.Screen
                    name="pomodoro"
                    options={{
                        drawerLabel: 'Lista de Tarefas',
                        title: ''
                    }}
                />

            </Drawer>
        </GestureHandlerRootView>
    );
}