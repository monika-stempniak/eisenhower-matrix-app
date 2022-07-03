import { Priority } from './types';

export const DATE_FORMAT = 'yyyy-MM-dd HH:mm:ss';

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

export const PRIORITY_OPTIONS = [
  {
    text: 'urgent and important',
    key: Priority.UrgentImportant,
    value: Priority.UrgentImportant,
  },
  {
    text: 'not urgent but important',
    key: Priority.NotUrgentImportant,
    value: Priority.NotUrgentImportant,
  },
  {
    text: 'urgent but not important',
    key: Priority.UrgentNotImportant,
    value: Priority.UrgentNotImportant,
  },
  {
    text: 'not urgent and not important',
    key: Priority.NotUrgentNotImportant,
    value: Priority.NotUrgentNotImportant,
  },
];
