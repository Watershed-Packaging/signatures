function selectText(node) {
    node = document.getElementById(node);

    if (document.body.createTextRange) {
        const range = document.body.createTextRange();
        range.moveToElementText(node);
        range.select();
    } else if (window.getSelection) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
    } else {
        console.warn("Could not select text in node: Unsupported browser.");
    }
	alert("Your new signature has been copied to clipboard. \n Please go to your e-mail and paste your signature.");
}

const clickable = document.querySelector('.click-me');
clickable.addEventListener('click', () => { selectText('output'); document.execCommand("copy");});