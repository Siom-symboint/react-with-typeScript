import { listInfo, IAction } from "./action";
export default (
  state: object = {
    articleTag: 1,
    menuTag: 1
  },
  action: IAction
) => {
  const { slectedItem } = action;
  switch (action.type) {
    case listInfo:
      return slectedItem;
    default:
      return state;
  }
};
/**
 * @desc 定义reduce
 */