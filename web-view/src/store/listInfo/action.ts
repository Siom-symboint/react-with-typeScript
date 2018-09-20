// 记录菜单栏状态

export const listInfo = "LIST_INFO";

export interface ISlectedItem {
  // 定义获取值类型
  menuTag: number;
  articleTag: number;
}

export interface IAction {
  type: string;
  [propName: string]: any;
}

// Action创建函数
export const listSelection = (slectedItem: ISlectedItem) => ({
  type: listInfo,
  slectedItem
});
