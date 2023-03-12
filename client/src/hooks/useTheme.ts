import { useContext } from 'react';

import { ThemeContext } from '@config/theme/ThemeProvider';

export const useTheme = () => useContext(ThemeContext);
