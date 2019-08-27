import React from 'react';

import {useSelector} from 'react-redux';
import CreatRoutes from './routes';

// import { Container } from './styles';

export default function App() {
  const signed = useSelector(state => state.auth.signed);

  const Routes = CreatRoutes(signed);

  return <Routes />;
}
