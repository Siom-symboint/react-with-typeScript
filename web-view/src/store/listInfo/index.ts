import { listInfo, IAction } from "./action";
export default (state: object = {}, action: IAction) => {
  const { slectedItem } = action;
  switch (action.type) {
    case listInfo:
      return slectedItem;
    default:
      return state;
  }
};
