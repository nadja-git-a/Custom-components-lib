import React from 'react';
import { createRoot } from 'react-dom/client';

import { Button } from './entry';

const root = createRoot(document.getElementById('root')!);
root.render(<Button />);
