const h1 = document.querySelector("h1");
let res = getParameter("res");
let count = getParameter("count");
h1.innerHTML = `您答对了${res}道题，答错了${count-res}道题`;
function getParameter(param)
{
    let query = window.location.search;
    let iLen = param.length;
    let iStart = query.indexOf(param);
    if (iStart === -1)
        return "";
    iStart += iLen + 1;
    var iEnd = query.indexOf("&", iStart);
    if (iEnd === -1)
        return query.substring(iStart);
    return query.substring(iStart, iEnd);
}