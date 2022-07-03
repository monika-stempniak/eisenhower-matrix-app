import { TodoType } from './types';

export const reorderDndMultiColumn = (
  list: TodoType[],
  sourceIndex: number,
  destinationIndex: number,
  sourceDroppableId: string,
  destinationDroppableId: string
) => {
  const [, sPriority] = sourceDroppableId.split('-');
  const [, dPriority] = destinationDroppableId.split('-');
  const sourcePriority = Number(sPriority);
  const destinationPriority = Number(dPriority);

  if (sourcePriority === destinationPriority) {
    const result = list.filter((el) => el.priority === destinationPriority);
    const [removed] = result.splice(sourceIndex, 1);
    result.splice(destinationIndex, 0, removed);

    return [
      ...list.filter((el) => el.priority !== destinationPriority),
      ...result,
    ];
  }

  const sourceResult = list.filter((el) => el.priority === sourcePriority);
  const destinationList = list.filter(
    (el) => el.priority === destinationPriority
  );

  const [removed] = sourceResult.splice(sourceIndex, 1);
  destinationList.splice(destinationIndex, 0, removed);

  const destinationResult = destinationList.map((el) => {
    if (el.priority === destinationPriority) return el;
    return { ...el, priority: destinationPriority };
  });

  return [
    ...list.filter(
      (el) =>
        el.priority !== sourcePriority && el.priority !== destinationPriority
    ),
    ...sourceResult,
    ...destinationResult,
  ];
};
