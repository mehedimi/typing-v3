function preg_quote (str, delimiter) {
    return (str + '')
        .replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\' + (delimiter || '') + '-]', 'g'), '\\$&')
}

function strComparison(fullString, typedString) {
    const regx = new RegExp(`^${preg_quote(typedString, '/')}.*$`);
    return regx.test(fullString);
}

export default strComparison;