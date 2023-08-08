const twitterLogoAttributes = {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M20.4208 0.332767C19.5876 0.852969 18.6669 1.2313 17.6829 1.43373C16.899 0.551344 15.7787 0 14.5385 0C12.1611 0 10.2317 2.03467 10.2317 4.54397C10.2317 4.90039 10.2687 5.24584 10.3427 5.57861C6.76208 5.38887 3.58794 3.58201 1.46175 0.829323C1.09057 1.50293 0.878621 2.28439 0.878621 3.11659C0.878621 4.69219 1.63893 6.08324 2.79566 6.89814C2.0903 6.87623 1.42475 6.66976 0.842736 6.33181V6.38717C0.842736 8.58966 2.32804 10.4271 4.30059 10.8429C3.9395 10.9496 3.55822 11.0032 3.16517 11.0032C2.88762 11.0032 2.6168 10.9756 2.35439 10.9225C2.90276 12.7271 4.49291 14.0414 6.37855 14.0766C4.90447 15.2958 3.04574 16.0224 1.02777 16.0224C0.680132 16.0224 0.336422 16.0017 0 15.9601C1.90639 17.2474 4.17219 18 6.60452 18C14.5301 18 18.8626 11.0771 18.8626 5.07167C18.8626 4.87386 18.8592 4.67662 18.8519 4.48284C19.6936 3.84211 20.4247 3.0422 21 2.13098C20.2285 2.49201 19.3975 2.73654 18.5262 2.84611C19.416 2.28439 20.0989 1.39393 20.4208 0.332767Z"
}

function appendSVGChild(elementType,target,attributes = {},text = '') {
  const element = document.createElementNS('http://www.w3.org/2000/svg',elementType);
  Object.entries(attributes).map(a => element.setAttribute(a[0],a[1]));
  if (text) {
    const textNode = document.createTextNode(text);
    element.appendChild(textNode);
  }
  target.appendChild(element);
  return element;
};

const updateXToTwitter = () => {
  let header = document.getElementsByTagName('header')[0];
  if (!header) console.log('header not found');
  let xIconSvg = header.getElementsByTagName('svg')[0];
  if (!xIconSvg) console.log('xIconSvg not found');
  let xIconPath = xIconSvg.children[0];
  if (!xIconPath) console.log('xIconPath not found');

  if (xIconSvg && xIconPath) {
    xIconSvg.setAttribute('viewBox', '0 0 21 18');
    xIconSvg.style.marginLeft = '4px';
    xIconSvg.removeChild(xIconPath);
    appendSVGChild('path', xIconSvg, twitterLogoAttributes);
  }
}

setTimeout(updateXToTwitter, 3000);



// Favicon 변경
function changeFavicon() {
  // 기존 아이콘을 찾음
  const linkElement = document.querySelector('link[rel="shortcut icon"]');
  if (linkElement) {
    // 기존 아이콘을 변경
    // linkElement.setAttribute('href', chrome.runtime.getURL('source/favicon.png')); // 이거 사실 왜 안되는지 잘 모르겠음
    linkElement.setAttribute('href', '//abs.twimg.com/favicons/twitter.ico'); // Twitter Server에 남겨진 아이콘으로 변경
  }
}


// Title의 '/ X'를 '/ 트위터'로 변경
const replaceTitle =()=> {
  const title = document.querySelector('title');
  // title이 존재하고, '/ X'가 포함되어 있으면 '/ 트위터'로 변경
  title && title.text.match(/\/ X/) && (document.querySelector('title').text = title.text.replace(/\/ X$/, '/ 트위터'))
}

// '게시하기'를 '트윗'으로 변경
const replacePublishButton = () => {
  const replaceText = (element) => {
    if (element) {
      const originalText = element.textContent;
      let newText = originalText;

      newText = newText.replace(/게시하기/g, '트윗하기');
      newText = newText.replace('Post your reply!', '답글 트윗하기');
      
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

const removeElements = () => {
  const elements = document.querySelectorAll(`[aria-label="인증 받기"]`);
  elements.forEach((element) => {
    element.remove();
  });
};


// DOM이 로드되면 실행
window.addEventListener('DOMContentLoaded', ()=>{
  changeFavicon();
  removeElements();

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
          // replacePublishButton(node);

          const specificElement = document.querySelector('span.css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0');
          replacePublishButton(specificElement);
          removeElements();
        }
      });
    });
  }).observe(document.body, { childList: true, subtree: true });

  // 특정 요소가 변경되면 실행
  const specificElement = document.querySelector('span.css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0');
  replacePublishButton(specificElement);
});