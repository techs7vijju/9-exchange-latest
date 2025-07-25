export const encryptData = (data) => {
  try {
    const jsonString = JSON.stringify(data);
    return btoa(unescape(encodeURIComponent(jsonString)));
  } catch (error) {
    console.error("Encryption error:", error);
    return null;
  }
};

export const decryptData = (cipherText) => {
  try {
    if (!cipherText) {
      return null;
    }
    const decodedString = decodeURIComponent(escape(atob(cipherText)));
    if (!decodedString) {
      console.error("Decryption failed. Data might be corrupted.");
      return null;
    }
    return JSON.parse(decodedString);
  } catch (error) {
    console.error("Decryption error:", error);
    return null;
  }
};
