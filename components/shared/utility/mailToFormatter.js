const mailToFormatter = (string) => {
    return string
    .replaceAll(" ", "%20")
    .replaceAll(",", "%2c")
    .replace(/\./g, "2E")
    .replaceAll("&", "and")
    .replace(/\n/g, "%0A");
} 

export default mailToFormatter;