import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header/Header';
import { MatrixLayout } from './components/Matrix/MatrixLayout';
import { THEME } from './utils/theme';

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <Header />
      <MatrixLayout />
    </ThemeProvider>
  );
}

export default App;
