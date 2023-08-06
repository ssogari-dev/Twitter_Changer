const xToBird = {
	// SVG Images 
		// 새로운 Bird Icon 정보
    birdSvg: "M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z",
	birdSvg2: "M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z",
    birdSvg3: "M7.04128 17.7861C4.53883 17.7861 2.21078 17.0602 0.25 15.8165C0.596807 15.857 0.949401 15.8773 1.30683 15.8773C3.38266 15.8773 5.29282 15.1764 6.80944 14.0003C4.87 13.9646 3.23461 12.6968 2.67056 10.9547C2.94041 11.0059 3.21803 11.0338 3.50342 11.0338C3.90767 11.0338 4.2993 10.9798 4.67133 10.8796C2.64431 10.4775 1.11689 8.70468 1.11689 6.5808C1.11689 6.56156 1.11689 6.54327 1.11792 6.52489C1.71505 6.85368 2.39787 7.05133 3.12448 7.07347C1.93514 6.28783 1.15299 4.94488 1.15299 3.42361C1.15299 2.62053 1.37213 1.86754 1.75297 1.21971C3.93781 3.87277 7.20298 5.61776 10.885 5.80097C10.8091 5.47987 10.7701 5.14535 10.7701 4.80118C10.7701 2.38039 12.7543 0.416626 15.2012 0.416626C16.4753 0.416626 17.6267 0.949734 18.4351 1.80197C19.4444 1.60535 20.392 1.23997 21.2484 0.737722C20.9172 1.76154 20.2148 2.62053 19.3002 3.1633C20.1963 3.0572 21.0506 2.82194 21.8444 2.47297C21.2512 3.35223 20.4993 4.12445 19.6342 4.7433C19.643 4.93129 19.6469 5.12031 19.6469 5.31018C19.6469 11.1042 15.1905 17.7861 7.04128 17.7861Z",
    
		// 변경 대상 X Icon 정보
	xSvgs: [
		"M14.258 10.152L23.176 0h-2.113l-7.747 8.813L7.133 0H0l9.352 13.328L0 23.973h2.113l8.176-9.309 6.531 9.309h7.133zm-2.895 3.293l-.949-1.328L2.875 1.56h3.246l6.086 8.523.945 1.328 7.91 11.078h-3.246zm0 0",
		"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
		'M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z',
	],
	
	// BASE64 Images
	birdImgSmall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAeFBMVEUAAAAcl+8cm/Adm/Adm/AdmvAdmvEYl+8Qn+8bmu8bme8em/Ecme8dmu8emvAgl+8bmu8cm/Acm/EdnPAem/AcmvAdnO8dmu8cmu8Zme8ZnO8gn+8em+8cm+8cmu8gmu8enPAeme8cm+8em+8dmu8dmu8dme8gn++31JfqAAAAKHRSTlMAQL/v/9+fIBBgcH+AsN8gMM9/3++vUGCQUFAgcODAMN9wQIDQwKAQsFNO+QAAALZJREFUeAHUzsUBhEAUA9AMZN3dcei/Q5zxBvYdvwZ/SgQhZ/MFALFEb7WGZsPBdh3MMdhxDWlFaX84onciz5hcOLneLnc5wJlAT1DzwODJTvCyPvCN0efKXnhbizOVA0bLL72WGP2CCz1CTJ70ijCJ6fWE5M9whPJI/B+k9Hml7QFNRscchpyW/QGmR0FDBkd89QWQ4nNI6ZpBd19t5xdqSud/abQzuD7prriS16JKm6kPxXwGAM9DDGV/J75tAAAAAElFTkSuQmCC",
    xImgSmalls: [
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAM1BMVEUAAACvVAD/egBQJgDPYwAQCADfawDvcgCAPQAgEACQRQBAHwBwNQBgLgC/XAAwFwCfTQDKGTGtAAAAy0lEQVR4Ac2SRRLEMAwEZZnZ/3/t1mhJwXM6jC2ip2BYsKRw+tKHmFKKMdOPwokUlRtR50FfEp5rCk+ihdeExoY0kAQP01syOXgStKRgJ5Icgry4l1TsGp7jRwe8g8TF7B1ePWEisBkdQj2nccNOJbhnwD2UYE+OAzukeC8pN79AQc2lxDvG/1HVq663JgXdS3QHzbug9vR5UV07Siy7T9cWqjqOCXw7WLi/E9boDstUSFUVPvBUozGkqrsEN6OxUnLcNgnu/gcgeQYvjVYGJCFTh7UAAAAASUVORK5CYII=",
	    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAAAAABWESUoAAAA3ElEQVR4Ac2SGQDFMBBE1ylOcYpTner0neK0TnGpU53iFKc6xWl+p+f25D7InZ295Cv0mGjFUOzWDVVVa/WykaBiaBBFfsiyory3JASRjs8mInqxUGRw47CIBIy7Ew0Sh0nED4OXCwkNh8h7GrrgCkVK9a7w6Q2BjoVa6Oo9EZEDVJ7I1M4UeMDXzIEhvoukFxNMaP8o4gpon1l9qnqc7DcPIgpd7Ce0t/fJVO0q0qIsVeuY1XwNYK1gwm8J2GAqvHRF5mD7BcG0Rl6yegjw0BqdakE8Bni0RyjyDf4Y1Y0n0wNT4wAAAABJRU5ErkJggg=="
    ]


};

// Replace Twitter's bird icon from X icon
xToBird.replace2 = function () {
	// MutationObserver를 사용하여 페이지 변화를 감지
	const observer = new MutationObserver((mutationsList) => {
    	for (const mutation of mutationsList) {
    		if (mutation.type === 'childList') {
				// 페이지에 추가된 노드들을 확인합니다.
				const addedNodes = mutation.addedNodes;
				for (const node of addedNodes) {
					if (node instanceof Element) {
						// 원본 새 아이콘으로 변경할 SVG 아이콘들을 찾아 교체
						this.xSvgs.forEach(icon => {
							// SVG 요소에서 변경 대상 아이콘을 찾아 원본 새 아이콘으로 교체
							document.querySelectorAll('svg > path[d="' + icon + '"]').forEach(path => {
								path.setAttribute('d', this.birdSvg2);
								path.setAttribute('fill', "#1d9bf0");
								path.parentElement.setAttribute("viewBox", "0 0 248 204");
							});
							document.querySelectorAll('svg > g > path[d="' + icon + '"]').forEach(path => {
								path.setAttribute('d', this.birdSvg2);
								path.setAttribute('fill', "#1d9bf0");
								path.parentElement.parentElement.setAttribute("viewBox", "0 0 248 204");
							});
						});
						
						// 작은 크기의 X 아이콘들을 찾아 교체
						this.xImgSmalls.forEach(xImg => {
							document.querySelectorAll('img[src="' + xImg + '"]').forEach(img => {
								img.setAttribute('src', this.birdImgSmall);
							});
						});
					}
				}
			}
    	}
	});
	// MutationObserver를 페이지의 body에 적용하여 변화를 감지합니다.
	observer.observe(document.body, { childList: true, subtree: true });
}

// 페이지 로드가 완료되면 실행
window.addEventListener('DOMContentLoaded', ()=>{
});

xToBird.replace2();