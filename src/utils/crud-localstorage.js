// Localstorage에 값 저장하기 위한 js함수
function setLocalStorageItem(key, value) {
  localStorage.setItem(key, JSON.stringify({ ...value }));
}

// Localstorage에 값 가져오기 위한 js함수
function getItemFromLocalStorage(targetKey) {
  const rawData = localStorage.getItem(targetKey);

  return JSON.parse(rawData);
}

// Localstorage에 값 삭제하기 위한 js함수
function removeItemFromLocalStorage(targetKey) {
  localStorage.removeItem(targetKey);
}

export {
  setLocalStorageItem,
  getItemFromLocalStorage,
  removeItemFromLocalStorage,
};
