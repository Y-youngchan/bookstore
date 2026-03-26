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