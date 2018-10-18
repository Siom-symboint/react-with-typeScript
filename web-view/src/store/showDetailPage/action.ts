// 记录文章页状态

export const isDetailPage = "IS_DETAIL_PAGE";

export const showDetailPage = (toggle: boolean) => ({
  type: isDetailPage,
  toggle
});

