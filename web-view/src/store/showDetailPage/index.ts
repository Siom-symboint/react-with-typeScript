import { isDetailPage } from './action';

export interface IAction {
  type: string;
  [propName: string]: any;
}

export default (
  state: object = {
    isDetailPage: false
  },
  action: IAction
) => {
  const { toggle } = action;
  switch (action.type) {
    case isDetailPage:
      return { isDetailPage: toggle};
    default:
      return state;
  }
};
/**
 * @desc 定义reduce
 */
