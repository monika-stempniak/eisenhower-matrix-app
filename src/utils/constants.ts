export enum MatrixCorner {
  TOP = 'top',
  TOP_LEFT = 'top-left',
  BOTTOM_LEFT = 'bottom-left',
}

export const MATRIX_SETTINGS = [
  {
    priority: 1,
    title: 'urgent',
    position: MatrixCorner.TOP,
  },
  {
    priority: 2,
    title: 'not urgent',
    position: MatrixCorner.TOP,
  },
  {
    priority: 3,
    title: 'important',
    position: MatrixCorner.TOP_LEFT,
  },
  {
    priority: 4,
    title: 'not important',
    position: MatrixCorner.BOTTOM_LEFT,
  },
];
