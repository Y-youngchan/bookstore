// 책 데이터 가져오기
async function bookData() {
    const REST_API_KEY = 'a306d93586adcbd7b8a6024607c50b9b';

    const params = new URLSearchParams({
        target: 'title',
        query: "2026 심우철 실전 동형 모의고사 Season 1"
    });

    const url = `https://dapi.kakao.com/v3/search/book?${params}`;

    try {
        const res = await fetch(url, {
            headers: {
                Authorization: `KakaoAK ${REST_API_KEY}`
            }
        });

        const data = await res.json();

        const box = document.querySelector(".bookimg");

        box.innerHTML = `
            <img src="${data.documents[0].thumbnail}" alt="book">
        `;
    } catch (e) {
        console.error(e);
    }
}

bookData();


// 탭 기능
const tabMenu = document.querySelectorAll('.navi-bar li');
const tabContent = document.querySelectorAll('.tabcontent');

tabMenu.forEach((menu, i) => {
    menu.addEventListener('click', () => {

        tabMenu.forEach(m => m.classList.remove('active'));
        menu.classList.add('active');

        tabContent.forEach((content, j) => {
            content.style.display = (i === j) ? 'block' : 'none';
        });
    });
});


// 더보기 기능
const btns = document.querySelectorAll('.tabcontent button');

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        const content = tabContent[i];

        content.classList.toggle('active');

        if (content.classList.contains('active')) {
            btn.innerText = '접기';
        } else {
            btn.innerText = '더보기';
        }
    });
});