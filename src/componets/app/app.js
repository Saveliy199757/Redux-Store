import React from 'react';
import './app.css';
import { withDataStoreService } from '../hoc';

const App = ({dataStoreService}) => {

    console.log(dataStoreService.getData())

    return (
      <main>
          <h1>Главная</h1>
      </main>
    );
}

export default withDataStoreService()(App);