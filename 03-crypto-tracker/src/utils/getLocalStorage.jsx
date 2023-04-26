function getLocalStorage(key) {
    let storageItem = localStorage.getItem(key);
    if (storageItem) {
        storageItem = JSON.parse(localStorage.getItem(key));
    } else {
        storageItem = [];
    }
    return storageItem;
}

export { getLocalStorage };
