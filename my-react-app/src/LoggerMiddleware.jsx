const loggerMiddleware = (store) => (next) => (action) => {
  console.log("액션 타입: ", action.type);
  console.log("이전 상태: ", store.getState());

  const result = next(action);

  console.log("다음 상태: ", store.getState());
  return result;
};

export default loggerMiddleware;
