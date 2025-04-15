export const href_search_params = (param: string) => {
  const href = new URL(location.href);
  return href.searchParams.get(param);
};
