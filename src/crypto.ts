import CryptoJS from "crypto-js";

/**
 * @desc シークレットキー作成する
 */
export const cryptoParseKey = (key: string) => {
  return CryptoJS.enc.Utf8.parse(key);
};

/**
 * @desc 文字列を暗号化する
 */
export const encryptString = (
  str: string,
  secretKey: CryptoJS.lib.WordArray
) => {
  const encrypted = CryptoJS.AES.encrypt(str, secretKey, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.toString();
};

/**
 * @desc 文字列を復号する
 */
export const decryptString = (
  str: string,
  secretKey: CryptoJS.lib.WordArray
) => {
  const decrypted = CryptoJS.AES.decrypt(str, secretKey, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
};
