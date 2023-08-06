// 페이지 로드 시 실행되는 함수
function changeFavicon(tabId) {
  // 현재 탭의 정보를 가져옵니다.
  chrome.tabs.get(tabId, (tab) => {
    // 현재 탭의 URL이 twitter.com인지 확인
    if (tab.url.startsWith("https://twitter.com/")) {

      const faviconUrl = tab.favIconUrl;

      const filename = faviconUrl.split("/").pop();

      let newFilename = filename.replace(".3", "");


      // favicon 경로 재지정
      const originalFaviconUrl = `https://abs.twimg.com/favicons/${newFilename}`;

      // 실행 중인 탭에서 스크립트를 실행하여 favicon을 변경
      chrome.scripting.executeScript({
        // 스크립트가 적용될 탭을 선택
        target: { tabId: tabId },

        func: () => {
          // 현재 페이지의 head 요소에서 "link" 태그 중 rel 속성이 "icon"인 요소들 찾기
          const linkTags = document.head.querySelectorAll('link[rel="icon"]');

          // 각 "link" 태그의 href 속성을 변경하여 새로운 favicon으로 교체
          linkTags.forEach((tag) => {
            tag.href = originalFaviconUrl;
          });
        },
      });
    }
  });
}

// 탭이 업데이트되거나 새로운 탭이 열릴 때 실행되는 이벤트 리스너
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // 페이지가 완전히 로드된 후 favicon 변경 함수 실행
  if (changeInfo.status === "complete") {
    changeFavicon(tabId);
  }
});

// 새로운 탭이 열릴 때 실행되는 이벤트 리스너
chrome.tabs.onCreated.addListener((tab) => {
  changeFavicon(tab.id);
});