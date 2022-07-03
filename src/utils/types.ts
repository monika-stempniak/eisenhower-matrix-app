export enum Priority {
  UrgentImportant = 1,
  NotUrgentImportant = 2,
  UrgentNotImportant = 3,
  NotUrgentNotImportant = 4,
}

export type TodoType = {
  id: string;
  priority: Priority;
  title: string;
  comment?: string;
  deadline?: string;
  labels: string[];
  done: boolean;
};
