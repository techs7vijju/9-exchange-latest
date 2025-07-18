import CryptoJS from "crypto-js";

const SECRET_KEY = "9XChange";

export const encryptData = (data) => {
  try {
    return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
  } catch (error) {
    console.error("Encryption error:", error);
    return null;
  }
};

export const decryptData = (cipherText) => {
  try {
    if (!cipherText) {
      console.warn("No data found to decrypt.");
      return null;
    }
    const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
    const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
    if (!decryptedText) {
      console.error("Decryption failed. Data might be corrupted.");
      return null;
    }
    return JSON.parse(decryptedText);
  } catch (error) {
    console.error("Decryption error:", error);
    return null;
  }
};
