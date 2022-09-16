function parseURL(url = '') {
    // '://" 앞의 문자열(protocol)과 '/'이전의 '/'로 시작하지 않는 문자열(host)과 '/'이후의 문자열(path)을 검색한다. 
    const parseURL = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
    console.log(parseURL);
    /*
    [
        'https://developer.mozilla.org/ko/docs/Web/JavaScript',
        'https',
        'developer.mozilla.org',
        'ko/docs/Web/JavaScript',
        index: 0,
        input: 'https://developer.mozilla.org/ko/docs/Web/JavaScript',
        groups: undefined
    ] 
    */

    if (!parseURL) return {};

    const [, protocol, host, path] = parseURL;
    return {protocol, host, path};
}

const parsedURL = parseURL('https://developer.mozilla.org/ko/docs/Web/JavaScript');

console.log(parsedURL);
/*
{
  protocol: 'https',
  host: 'developer.mozilla.org',
  path: 'ko/docs/Web/JavaScript'
}
*/