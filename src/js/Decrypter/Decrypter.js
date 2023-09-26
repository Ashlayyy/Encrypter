class Decrypter {
    decrypt(stringToDecrypt) {
        stringToDecrypt = stringToDecrypt.toLowerCase();    //dit zorgt er voor dat de decrypter kan werken met hoofdletter gevoeligheid
        let decryptedString = [];
        const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        for (let i = 0; i < stringToDecrypt.length; i++) {
            let letterIndex = alphabet.indexOf(stringToDecrypt[i]);
            if (letterIndex < 3) {
                switch (stringToDecrypt[i]) {
                    case "A":
                        decryptedString.push("X");
                        break;
                    case "B":
                        decryptedString.push("Y");
                        break;
                    case "C":
                        decryptedString.push("Z");
                        break;
                    default:
                        decryptedString.push(stringToDecrypt[i]);
                }
            } else {
                try {
                    decryptedString.push(alphabet[letterIndex - 3])
                } catch (err) {
                    decryptedString.push(stringToDecrypt[i]);
                }
            }
        }
        decryptedString = decryptedString.join("");
        return decryptedString;
    }
}