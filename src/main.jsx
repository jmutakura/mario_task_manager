import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

//extend theme
const colors = {
	brand: {
		600: 'red',
	},
};

const fonts = {
	body: 'Tahoma',
	heading: 'Courier New',
};

const theme = extendTheme(colors, fonts);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</React.StrictMode>
);
