// get data from localStorage
const getStoredData = (key) => {
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : [];
}

// store data in localStorage
// key: 'cart' or 'wishlist', id: product_id
const storeData = (key, id) => {
    const existingData = getStoredData(key);
    const exists = existingData.find(itemId => itemId === id);
    if (!exists) {
        existingData.push(id);
        localStorage.setItem(key, JSON.stringify(existingData));
        return { success: true, message: "Item added successfully." };
    }
    return { success: false, message: "Item already exists." };
}

// remove data from localStorage
const removeData = (key, id) => {
    const existingData = getStoredData(key);
    const updatedData = existingData.filter(itemId => itemId !== id);
    if (updatedData.length < existingData.length) {
        localStorage.setItem(key, JSON.stringify(updatedData));
        return { success: true, message: "Item removed successfully." };
    }
    return { success: false, message: "Item not found." };
}

export { getStoredData, storeData, removeData };