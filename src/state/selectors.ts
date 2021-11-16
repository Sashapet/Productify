import { authSelectors } from './auth/AuthSelector';
import { appSelectors } from './app/AppSelector';

export const selectors = {
  app: appSelectors,
  auth: authSelectors,
} as const;
