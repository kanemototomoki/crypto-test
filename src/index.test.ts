import { test, describe, expect } from "vitest";

import { cryptoParseKey, decryptString, encryptString } from "./crypto";

describe("lib/utils", (): void => {
  test("日付を暗号化し、復号化できること", () => {
    const date = "2023-01-01";
    const secretKey = cryptoParseKey("hfaroakmagha");

    const encryptedString = encryptString(date, secretKey);
    expect(encryptedString).not.toEqual(date);

    const decryptedString = decryptString(encryptedString, secretKey);
      expect(decryptedString).toEqual(date);
  });
  test("時刻を暗号化し、復号化できること", () => {
    const date = "23:01";
    const secretKey = cryptoParseKey("hfaroakmagha");

    const encryptedString = encryptString(date, secretKey);
    expect(encryptedString).not.toEqual(date);

    const decryptedString = decryptString(encryptedString, secretKey);
      expect(decryptedString).toEqual(date);
  });
});
