import React from 'react';
import { ThemeProvider } from 'styled-components';
import { color } from 'styles/appTheme';
import GlobalStyles from 'styles/globalStyles';
import Header from './Header';
import Footer from './Footer';

const CommonLayout: React.FC = (props) => {
  return (
    <ThemeProvider theme={color}>
      <GlobalStyles />
      <Header />
      {props.children}
      <Footer />
    </ThemeProvider>
  );
};

export default CommonLayout;
