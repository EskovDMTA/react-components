export function setPagesCount(totalPostsCount: number, limit: number) {
  return Math.ceil(totalPostsCount / limit);
}

export const getPagesArray = (pagesCount: number) => {
  let result = [];
  for (let i = 1; i <= pagesCount; i++) {
    result.push(i);
  }
  return result;
};
