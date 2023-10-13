import "./App.css";
import CryptoJS from "crypto-js";

function App() {
  const str = "2023-01-05";
  const key = CryptoJS.enc.Utf8.parse("12345678901234567890123456789012");
  const iv = CryptoJS.enc.Utf8.parse("12512dasa1fsa");
  // 暗号化
  const encryptedWordArray = CryptoJS.AES.encrypt(str, key, {
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
    iv,
  });

  const stringEncryptedWordArray = encryptedWordArray.toString();

  // 復号化
  const decryptedWordArray = CryptoJS.AES.decrypt(
    stringEncryptedWordArray,
    key,
    {
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
      iv: iv,
    }
  );
  const stringDecryptedWordArray = decryptedWordArray.toString(
    CryptoJS.enc.Utf8
  );
  return (
    <>
      <p>元の文字列：{str}</p>
      <p>暗号化した文字列：{stringEncryptedWordArray}</p>
      <p>復号化した文字列：{stringDecryptedWordArray}</p>
    </>
  );
}

export default App;
