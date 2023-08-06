// 기존 아이콘과 X 아이콘에 대한 정의
const birdIcon = "M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z";
const xIcon = "M14.258 10.152L23.176 0h-2.113l-7.747 8.813L7.133 0H0l9.352 13.328L0 23.973h2.113l8.176-9.309 6.531 9.309h7.133zm-2.895 3.293l-.949-1.328L2.875 1.56h3.246l6.086 8.523.945 1.328 7.91 11.078h-3.246zm0 0";
const xIcon2 = "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z";

// Header와 Navigation Bar의 Logo를 변경
const replaceIcon = () => {
  const style = document.createElement('style');
  // Header의 Logo를 변경
  style.textContent
    = 'h1[role="heading"] svg[viewBox="0 0 24 24"] path {'
    + '  display: none;'
    + '}'
    + 'h1[role="heading"] div[dir="ltr"] {'
    + '  background-image: url(' + chrome.runtime.getURL('images/blue.png') + ');'
    + '  background-size: 28px;'
    + '  background-repeat: no-repeat;'
    + '  background-position: center;'
    + '}'
    + 'div[data-testid="TopNavBar"] > div:first-child > div:first-child > div:first-child > div:first-child > div:first-child > div:first-child > div > svg[viewBox="0 0 24 24"] path {'
    + '  display: none;'
    + '}'
    + 'div[data-testid="TopNavBar"] > div:first-child > div:first-child > div:first-child > div:first-child > div:first-child > div:first-child > div:has(>svg) {'
    + '  background-image: url(' + chrome.runtime.getURL('images/blue.png') + ');'
    + '  background-size: 24px;'
    + '  background-repeat: no-repeat;'
    + '  background-position: center;'
    + '}'
  ;
  // Navigation Bar의 Logo를 변경
  document.body.appendChild(style);
}

// Favicon 변경
function changeFaviconHref() {
  // 기존 아이콘을 찾음
  const linkElement = document.querySelector('link[rel="shortcut icon"]');
  if (linkElement) {
    // 기존 아이콘을 변경
    linkElement.setAttribute('href', chrome.runtime.getURL('images/twitter.ico'));
  }
}

// Title의 '/ X'를 '/ Twitter'로 변경
const replaceTitle =()=> {
  const title = document.querySelector('title');
  // title이 존재하고, '/ X'가 포함되어 있으면 '/ Twitter'로 변경
  title && title.text.match(/\/ X/) && (document.querySelector('title').text = title.text.replace(/\/ X$/, '/ Twitter'))
}

// '게시하기'를 '트윗'으로 변경
const replacePublishButton = () => {
  const replaceText = (element) => {
    if (element) {
      const originalText = element.textContent;
      const newText = originalText.replace(/게시하기/g, '트윗');
      // 텍스트가 변경되었는지 확인
      if (newText !== originalText) {
        // 변경되었다면 텍스트를 변경
        element.textContent = newText;
      }
    }
  };

// 모든 텍스트 노드를 찾아서 변경
  const elements = document.querySelectorAll('*');
  elements.forEach((element) => {
    if (element.nodeType === Node.TEXT_NODE) {
      // 텍스트 노드를 찾아서 변경
      replaceText(element);
    } else {
      // 자식 노드를 찾아서 변경
      element.childNodes.forEach((childNode) => {
        // 텍스트 노드를 찾아서 변경
        if (childNode.nodeType === Node.TEXT_NODE) {
          replaceText(childNode);
        }
      });
    }
  });
};

// DOM이 로드되면 실행
window.addEventListener('DOMContentLoaded', ()=>{
  replaceIcon();
  changeFaviconHref();

  // Title이 변경되면 실행
  new MutationObserver(replaceTitle).observe(document.head, {
    childList: true
  });

  // DOM이 변경되면 실행
  new MutationObserver((mutationsList) => {
    // 변동이 생길 때마다 '게시하기'를 '트윗'으로 변경
    mutationsList.forEach((mutation) => {
      // 추가된 노드를 찾아서 변경
      const addedNodes = mutation.addedNodes;
      addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          // 특정 요소가 추가되면 실행
          replacePublishButton(node);
        }
      });
    });
  }).observe(document.body, { childList: true, subtree: true });

  // 특정 요소가 변경되면 실행
  const specificElement = document.querySelector('span.css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0');
  replacePublishButton(specificElement);
});