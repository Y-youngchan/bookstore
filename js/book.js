// maincontent#slider.swiper-slide
async function bookData() {
    const params = new URLSearchParams({
        target: "title",
        query: "법",
        size: 10
    });
    const url = `https://dapi.kakao.com/v3/search/book?${params}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: "KakaoAK a306d93586adcbd7b8a6024607c50b9b"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        // .box 요소 전체 선택
        const boxElements = document.querySelectorAll("#slider .swiper-slide");
        console.log(boxElements)

        // documents 데이터를 각 box에 대응하여 렌더링
        boxElements.forEach((box, i) => {
            const doc = data.documents[i];

            if (!doc) return; // 데이터가 부족할 경우 생략

            // 요소 생성 및 추가
            box.innerHTML = `<img src="${data.documents[i].thumbnail}">
            <div class='slider_content'>
                <h3>${data.documents[i].title}</h3>
                <h6>${data.documents[i].authors}</h6>
                <p>${data.documents[i].price}</p>
            </div>
                    `
        });

        // #slider swiper
        var slider_swiper = new Swiper(".sliderSwiper", {
            navigation: {
                nextEl: "#slider .swiper-button-next",
                prevEl: "#slider .swiper-button-prev",
            },
            pagination: {
                el: "#slider .swiper-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    // 데이터가 있을 때만 이미지를 넣도록 예외 처리
                    const imgUrl = data.documents[index] ? data.documents[index].thumbnail : '';
                    return `<img class="${className}" src="${imgUrl}" style="width:40px; height:auto; opacity:0.5;">`;
                },
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        });

    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData();

// 공단기 베스트셀러
async function fetchBooks(query) {
    const params = new URLSearchParams({
        target: "title",
        query,
        size: 10
    });
    const url = `https://dapi.kakao.com/v3/search/book?${params}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: "KakaoAK a306d93586adcbd7b8a6024607c50b9b"
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP 오류: ${response.status}`);
    }
    
    return response.json();
}

async function bookData2() {
    try {
        const queries = [
            { query: "모의고사", sectionClass: "week_tab" },
            { query: "회계학", sectionClass: "month_tab" },

        ];

        for (const { query, sectionClass } of queries) {
            const data = await fetchBooks(query);
            // console.log(data)

            // 해당 섹션 내의 .box 요소 8개 선택
            const section = document.querySelector(`.${sectionClass}`);
            const boxElements = section.querySelectorAll(".box");
            // console.log(boxElements)

            boxElements.forEach((box, i) => {
                const doc = data.documents[i];
                if (!doc) return;

                // // 요소 생성 및 추가
                box.innerHTML = `<img src="${doc.thumbnail}">
                        <h3>${doc.title}</h3>
                        <h6>${doc.publisher}</h6>
                        <p>${data.documents[i].price}</p>                        
                        `
            });
        }
    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData2();

const tabItems = document.querySelectorAll('.bestSeller_tab li');
const tabs = document.querySelectorAll('article');
console.log(tabs)

tabItems.forEach((tab, i) => {
    tab.addEventListener('click', () => {
        // 탭에 해당하는 리스트 보이고, 나머지는 숨기기
        tabs.forEach((tab, j) => {
            tab.style.display = (i === j) ? 'flex' : 'none';
        });

    });
});








// 새로 나온 교재
async function bookData3() {
    const params = new URLSearchParams({
        target: "title",
        query: "실전",
        size: 10
    });
    const url = `https://dapi.kakao.com/v3/search/book?${params}`

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: "KakaoAK a306d93586adcbd7b8a6024607c50b9b"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        // .box 요소 전체 선택
        const boxElements = document.querySelectorAll("#new .swiper-slide");
        console.log(boxElements)

        // documents 데이터를 각 box에 대응하여 렌더링
        boxElements.forEach((box, i) => {
            const doc = data.documents[i];

            if (!doc) return; // 데이터가 부족할 경우 생략

            // 요소 생성 및 추가
            box.innerHTML = `<img src="${data.documents[i].thumbnail}">
                    <h3>${data.documents[i].title}</h3>
                    <h6>${data.documents[i].publisher}</h6>
                    <p>${data.documents[i].price}</p>                    
                    `
        });

    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData3();