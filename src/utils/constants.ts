import { Priority } from './types';

export const MATRIX_SETTINGS = [
  {
    priority: Priority.UrgentImportant,
    title: 'urgent',
  },
  {
    priority: Priority.NotUrgentImportant,
    title: 'not urgent',
  },
  {
    priority: Priority.UrgentNotImportant,
    title: 'important',
  },
  {
    priority: Priority.NotUrgentNotImportant,
    title: 'not important',
  },
];

export const DATE_FORMAT = 'yyyy-MM-dd HH:mm:ss';
