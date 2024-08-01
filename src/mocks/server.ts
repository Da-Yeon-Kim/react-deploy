import { setupServer } from 'msw/node';

import { categoriesMockHandler } from '@/api/hooks/categories.mock';
import { membersMockHandlers } from '@/api/hooks/members.mock';
import { productsMockHandler } from '@/api/hooks/products.mock';

export const server = setupServer(
  ...categoriesMockHandler,
  ...membersMockHandlers,
  ...productsMockHandler,
);