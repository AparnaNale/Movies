import ReactDOM from 'react-dom/client';
import App from './App';
import { Box } from '@mui/material';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Box sx={{ backgroundColor: "grey.200", width: "100%" }}>
    <App />
  </Box>
);

