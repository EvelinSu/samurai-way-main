import React from 'react';
import './styles/App.css';
import {SSiteContainer, SSiteContent, SSiteWrapper} from "./layout/styled";
import Sidebar from "./layout/Sidebar/Sidebar";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
      <SSiteWrapper>
          <SSiteContainer>
              <Sidebar />
              <SSiteContent>
                  <Profile/>
              </SSiteContent>
          </SSiteContainer>
      </SSiteWrapper>

  );
}

export default App;
