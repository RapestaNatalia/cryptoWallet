import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './navigation/Navigator';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { AuthContext } from './components/auth/Context';

function App() {
  const [user,setUser] = useState('')
  useEffect(() => {
    
  }, [])
  return (
    <AuthContext.Provider value={{userName:user, setUser}}>
      <NavigationContainer>
        <Navigator/>
        <StatusBar style="auto" />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
