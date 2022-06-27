import { ThemeProvider } from 'styled-components';
import { MatrixLayout } from './components/Matrix/MatrixLayout';
import { THEME } from './utils/theme';

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <MatrixLayout />
    </ThemeProvider>
  );
}

export default App;
