async function bookData() {
    const REST_API_KEY = 'a306d93586adcbd7b8a6024607c50b9b';
    const params = new URLSearchParams({
        target: 'title',
        query: "2026 심우철 실전 동형 모의고사 Season 1"
    });

    const url = `https://dapi.kakao.com/v3/search/book?${params}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `KakaoAK ${REST_API_KEY}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }

        const data = await response.json();

        // .box 요소 선택
        const boxElement = document.querySelector(".bookimg");

        // 요소 생성 및 추가
        boxElement.innerHTML = `<img src="${data.documents[0].thumbnail}">
                
                `
    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData();

// 탭메뉴
const tabMenu = document.querySelectorAll('.navi-bar li');
const tabContent = document.querySelectorAll('.tabcontent');
// 더보기
const section = document.querySelector('section');
const btns = document.querySelectorAll('.tabcontent button');

// 탭메뉴 클릭
tabMenu.forEach((tm, i) => {
    tm.addEventListener('click', () => {
        // 모든 탭 메뉴에서 'active' 클래스 제거
        tabMenu.forEach(item => {
            item.classList.remove('active');
        });

        // 클릭한 탭 메뉴에만 'active' 클래스 추가
        tm.classList.add('active');

       

        // 탭에 해당하는 리스트 보이고, 나머지는 숨기기
        tabContent.forEach((tc, j) => {
             console.log(tc, i, j)
            tc.style.display = (i === j) ? 'block' : 'none';
            // section.style.height = '350px';
            // tc.style.height = '300px';
            // btns[i].innerText = '더보기'
        });
    });
});

// 더보기 클릭
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.textContent == '더보기') {
            section.style.height = '550px';
            tabContent.forEach(tc => {
                tc.style.height = '500px';
            });
            btn.innerText = '접기'
        } else {
            section.style.height = '350px';
            tabContent.forEach(tc => {
                tc.style.height = '300px';
            });
            btn.innerText = '더보기'
        }
    });
});



