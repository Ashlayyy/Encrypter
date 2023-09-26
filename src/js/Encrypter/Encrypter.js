class Encrypter {    //class Encrypter (classen is een blauwdruk)
    encrypt(stringToEncrypt) {     //functie
        stringToEncrypt = stringToEncrypt.toLowerCase(); //dit zorgt er voor dat de encrypter kan werken met hoofdletter gevoeligheid
        let encryptedString = [];
        const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        for (let i = 0; i < stringToEncrypt.length; i++) {
            let letterIndex = alphabet.indexOf(stringToEncrypt[i]);
            if (letterIndex < 3) {
                switch (stringToEncrypt[i]) {
                    case "A":
                        encryptedString.push("X");
                        break;
                    case "B":
                        encryptedString.push("Y");
                        break;
                    case "C":
                        encryptedString.push("Z");
                        break;
                    default:
                        encryptedString.push(stringToEncrypt[i]);
                }
            } else {
                try {
                    encryptedString.push(alphabet[letterIndex + 3])
                } catch (err) {
                    encryptedString.push(stringToEncrypt[i]);
                }
            }
            /*
            switch (stringToEncrypt[i]) {
                case "A":
                    encryptedString.push("D");
                    break;
                case "B":
                    encryptedString.push("E");
                    break;
                case "C":
                    encryptedString.push("F");
                    break;
                case "D":
                    encryptedString.push("G");
                    break;
                case "E":
                    encryptedString.push("H");
                    break;
                    case "F":
                    encryptedString.push("I");
                    break;
                    case "G":
                    encryptedString.push("J");
                    break;
                    case "H":
                        encryptedString.push("K");
                    break;
                    case "I":
                        encryptedString.push("L");
                    break;
                    case "J":
                        encryptedString.push("M");
                    break;
                    case "K":
                        encryptedString.push("N");
                    break;
                    case "L":
                        encryptedString.push("O");
                    break;
                    case "M":
                        encryptedString.push("P");
                    break;
                    case "N":
                        encryptedString.push("Q");
                    break;
                    case "O":
                        encryptedString.push("R");
                    break;
                    case "P":
                        encryptedString.push("S");
                    break;
                    case "Q":
                        encryptedString.push("T");
                    break;
                    case "R":
                        encryptedString.push("U");
                    break;
                    case "S":
                        encryptedString.push("V");
                    break;
                    case "T":
                        encryptedString.push("W");
                    break;
                    case "U":
                        encryptedString.push("X");
                    break;
                    case "V":
                        encryptedString.push("Y");
                    break;
                    case "W":
                        encryptedString.push("Z");
                    break;
                    case "X":
                        encryptedString.push("A");
                    break;
                    case "Y":
                        encryptedString.push("B");
                    break;
                    case "Z":
                        encryptedString.push("C");
                    break;
                default:
                    encryptedString.push(stringToEncrypt[i]);
                    break;       
                  
                    */
        }
        encryptedString = encryptedString.join("");
        return encryptedString;
    }
}


