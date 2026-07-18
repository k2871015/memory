// ============================
// 오늘 뭐 먹지? - script.js
// Full Featured Lunch Roulette
// ============================

document.addEventListener('DOMContentLoaded', () => {

    // ===== MENU DATA (with kcal) =====
    const MENUS = {
        random: [
            { name: '제육볶음', emoji: '🥘', desc: '칼칼하고 든든한 국민 점심 메뉴!', kcal: 650 },
            { name: '된장찌개 정식', emoji: '🍲', desc: '구수하고 따뜻한 어머니의 맛', kcal: 580 },
            { name: '비빔밥', emoji: '🥗', desc: '건강하고 알록달록 영양 만점!', kcal: 520 },
            { name: '냉면', emoji: '🍜', desc: '시원하고 쫄깃한 여름 최강 메뉴', kcal: 470 },
            { name: '순두부찌개 정식', emoji: '🫕', desc: '부드럽고 칼칼한 순두부의 매력', kcal: 530 },
            { name: '삼겹살 쌈밥', emoji: '🥬', desc: '고기와 쌈의 완벽한 조화', kcal: 820 },
            { name: '카레라이스', emoji: '🍛', desc: '향긋하고 깊은 카레의 풍미', kcal: 610 },
            { name: '짜장면', emoji: '🍝', desc: '달콤하고 쫄깃한 국민 배달음식', kcal: 680 },
            { name: '김밥 한 줄', emoji: '🍙', desc: '간편하고 맛있는 한 끼 해결사', kcal: 350 },
            { name: '부대찌개', emoji: '🫕', desc: '풍성하고 든든한 부대찌개', kcal: 720 },
            { name: '돈까스', emoji: '🍱', desc: '바삭바삭 남녀노소 사랑하는 메뉴', kcal: 750 },
            { name: '초밥', emoji: '🍣', desc: '깔끔하고 정갈한 초밥 세트', kcal: 480 },
            { name: '뼈해장국', emoji: '🍲', desc: '고기가 듬뿍 들어간 든든한 해장국', kcal: 710 },
            { name: '오므라이스', emoji: '🍳', desc: '부드러운 계란과 볶음밥의 조화', kcal: 630 },
        ],
        stress: [
            { name: '마라탕', emoji: '🌶️', desc: '얼얼한 매운맛에 스트레스 날려버려요!', kcal: 780 },
            { name: '불닭볶음면', emoji: '🔥', desc: '불같이 뜨거운 맛으로 화를 삭여요!', kcal: 530 },
            { name: '낙지볶음 정식', emoji: '🦑', desc: '알싸하고 매운 낙지로 기분 전환!', kcal: 590 },
            { name: '제육볶음', emoji: '🥘', desc: '칼칼한 제육으로 스트레스 해소!', kcal: 650 },
            { name: '떡볶이', emoji: '🌶️', desc: '떡볶이 한 접시로 기분이 나아질 거예요!', kcal: 480 },
            { name: '매운 갈비찜', emoji: '🍖', desc: '스트레스엔 역시 매운 고기!', kcal: 850 },
            { name: '짬뽕', emoji: '🍜', desc: '얼큰한 국물로 속을 뻥 뚫어보세요!', kcal: 680 },
        ],
        rain: [
            { name: '칼국수', emoji: '🍜', desc: '비 오는 날 칼국수는 진리!', kcal: 490 },
            { name: '순대국', emoji: '🍲', desc: '뜨끈한 국물로 몸을 녹여요', kcal: 550 },
            { name: '부대찌개', emoji: '🫕', desc: '풍성한 부대찌개로 행복한 점심!', kcal: 720 },
            { name: '해물파전 + 막걸리', emoji: '🥞', desc: '비 오는 날엔 전이 최고!', kcal: 620 },
            { name: '수제비', emoji: '🍲', desc: '따끈하고 쫄깃한 수제비 한 그릇', kcal: 480 },
            { name: '우동', emoji: '🍜', desc: '비 오는 날 생각나는 따뜻한 국물', kcal: 420 },
            { name: '국밥', emoji: '🍚', desc: '뜨끈하고 든든한 국밥 한 그릇!', kcal: 650 },
        ],
        tired: [
            { name: '삼계탕', emoji: '🍗', desc: '원기 회복에 삼계탕이 최고예요!', kcal: 660 },
            { name: '소고기 국밥', emoji: '🍲', desc: '든든한 소고기로 에너지 충전!', kcal: 590 },
            { name: '장어구이 정식', emoji: '🐟', desc: '피곤할 때는 장어로 스태미나 UP!', kcal: 780 },
            { name: '삼겹살 정식', emoji: '🥓', desc: '고기 한 판으로 기운 차려요!', kcal: 820 },
            { name: '추어탕', emoji: '🍲', desc: '지친 몸을 달래주는 진한 보양식', kcal: 580 },
            { name: '전복죽', emoji: '🥣', desc: '부담없이 든든하게 기력 회복!', kcal: 380 },
        ],
        light: [
            { name: '포케볼', emoji: '🥗', desc: '신선하고 건강한 포케로 가볍게!', kcal: 420 },
            { name: '연어 샐러드', emoji: '🥗', desc: '오메가3 가득한 연어 샐러드', kcal: 380 },
            { name: '김밥 한 줄', emoji: '🍙', desc: '간편하고 맛있는 한 끼 해결사', kcal: 350 },
            { name: '냉모밀', emoji: '🍜', desc: '담백하고 시원한 냉모밀', kcal: 380 },
            { name: '샌드위치', emoji: '🥪', desc: '신선한 야채가 가득한 샌드위치', kcal: 320 },
            { name: '그릭 요거트 볼', emoji: '🥣', desc: '과일과 견과류로 가볍고 건강하게', kcal: 280 },
            { name: '서브웨이 샌드위치', emoji: '🥖', desc: '칼로리 걱정 없는 맞춤형 샌드위치', kcal: 350 },
        ],
    };

    const DRINKS = [
        { name: '아이스 아메리카노', emoji: '☕', desc: '직장인의 생명수, 깔끔한 마무리!' },
        { name: '달콤한 바닐라 라떼', emoji: '☕', desc: '오후의 피로를 녹여줄 달달함' },
        { name: '상큼한 자몽 에이드', emoji: '🍹', desc: '입안을 상쾌하게 리프레시!' },
        { name: '시원한 매실차', emoji: '🍵', desc: '소화엔 역시 매실차가 최고예요' },
        { name: '따뜻한 캐모마일 티', emoji: '🫖', desc: '마음을 편안하게 해주는 릴랙스 타임' },
        { name: '얼박사(얼음+박카스+사이다)', emoji: '🥤', desc: '오후 업무를 위한 부스터!' },
        { name: '달콤한 식혜', emoji: '🧉', desc: '든든하게 밥 먹고 난 뒤 찰떡궁합' },
        { name: '밀크티', emoji: '🧋', desc: '부드럽고 진한 향기로 당 충전!' },
    ];

    const ACTIONS = [
        "근처 공원이나 거리를 10분 정도 가볍게 산책해보세요. 🚶‍♂️",
        "자리로 돌아가기 전, 기지개를 켜고 가벼운 스트레칭을 해주세요. 🧘‍♀️",
        "식후 5분 정도 눈을 감고 편안하게 휴식을 취해보세요. 😌",
        "오후 업무 시작 전, 책상을 가볍게 정리하며 기분 전환을 해보세요. ✨",
        "가까운 동료와 가벼운 스몰토크로 리프레시! 💬"
    ];

    // ===== AFFILIATE PRODUCTS DATABASE =====
    const AFFILIATE_PRODUCTS = {
        light: {
            emoji: '🥗',
            name: '맛있닭 닭가슴살 볶음밥 패키지 (10팩)',
            price: '특가 21,900원',
            desc: '칼로리를 확실히 줄여 줄 고단백 닭가슴살 한 끼 식단입니다!',
            link: 'https://link.coupang.com/a/customRef?land=https%3A%2F%2Fwww.coupang.com%2Fnp%2Fsearch%3Fq%3D%25EB%258B%25AD%25EA%25B0%258B%25EC%258A%25B8%25EC%2582%25B8%25EB%25B3%25B6%25EC%259D%258C%25EB%25B0%25A5'
        },
        stress: {
            emoji: '🔥',
            name: '프레시지 마라탕 밀키트 (2인분)',
            price: '특가 13,800원',
            desc: '스트레스를 싹 날려버릴 얼얼하고 매콤한 리얼 마라탕 밀키트입니다!',
            link: 'https://link.coupang.com/a/customRef?land=https%3A%2F%2Fwww.coupang.com%2Fnp%2Fsearch%3Fq%3D%25EB%25A7%2588%25EB%259D%25BC%25ED%2583%2595%25EB%25B0%2580%25ED%2582%25A4%25ED%258A%25B8'
        },
        rain: {
            emoji: '☔',
            name: '심플리쿡 얼큰 버섯 만두전골/국수 밀키트',
            price: '특가 12,500원',
            desc: '비 오는 날 최고의 선택! 뜨끈하고 진한 국물 요리를 집에서 간편하게 즐기세요.',
            link: 'https://link.coupang.com/a/customRef?land=https%3A%2F%2Fwww.coupang.com%2Fnp%2Fsearch%3Fq%3D%25EA%25B5%25AD%25EB%25AC%25BC%25EB%25B0%2580%25ED%2582%25A4%25ED%258A%25B8'
        },
        tired: {
            emoji: '💪',
            name: '비맥스 메타 고함량 활력 비타민B군 (120정)',
            price: '최저가 보장',
            desc: '피로 누적으로 지쳐 쓰러지기 직전인 직장인에게 꼭 필요한 활력 포뮬러입니다.',
            link: 'https://link.coupang.com/a/customRef?land=https%3A%2F%2Fwww.coupang.com%2Fnp%2Fsearch%3Fq%3D%25ED%2594%25BC%25EB%25A1%259C%25ED%259A%258C%25EB%25B3%25B5%25EC%2598%2581%25EC%2596%2596%25EC%25A0%259C'
        },
        default: {
            emoji: '💊',
            name: '고려은단 멀티비타민 올인원 (60정)',
            price: '특가 16,900원',
            desc: '영양 불균형이 오기 쉬운 직장인들의 기초 체력 증진을 위한 데일리 종합 영양제.',
            link: 'https://link.coupang.com/a/customRef?land=https%3A%2F%2Fwww.coupang.com%2Fnp%2Fsearch%3Fq%3D%25EC%25A2%2585%25ED%2595%25A9%25EB%2584%2581%25ED%2583%2580%25EB%25AF%25BC'
        }
    };

    // ===== ELEMENTS =====
    const moodBtns = document.querySelectorAll('.mood-btn');
    const calorieBtns = document.querySelectorAll('.calorie-btn');
    const spinBtn = document.getElementById('spinBtn');
    const rouletteText = document.getElementById('rouletteText');
    const rouletteBoard = document.getElementById('rouletteBoard');
    const resultSection = document.getElementById('resultSection');
    const resultMenu = document.getElementById('resultMenu');
    const resultDesc = document.getElementById('resultDesc');
    const resultMeta = document.getElementById('resultMeta');
    const resultCalBadge = document.getElementById('resultCalBadge');
    const retryBtn = document.getElementById('retryBtn');
    const naverMapLink = document.getElementById('naverMapLink');
    const kakaoMapLink = document.getElementById('kakaoMapLink');
    const historyCard = document.getElementById('historyCard');
    const historyList = document.getElementById('historyList');
    const clearHistoryBtn = document.getElementById('clearHistoryBtn');
    const hallCard = document.getElementById('hallCard');
    const hallList = document.getElementById('hallList');
    const likeBtn = document.getElementById('likeBtn');
    const likeIcon = document.getElementById('likeIcon');
    const likeCount = document.getElementById('likeCount');
    const likeBtnText = document.getElementById('likeBtnText');
    const gpsBtn = document.getElementById('gpsBtn');
    const gpsBtnText = document.getElementById('gpsBtnText');
    const gpsStatus = document.getElementById('gpsStatus');
    const actionBox = document.getElementById('actionBox');
    const drinkSection = document.getElementById('drinkSection');
    const drinkSpinBtn = document.getElementById('drinkSpinBtn');
    const drinkResult = document.getElementById('drinkResult');
    const drinkDesc = document.getElementById('drinkDesc');
    const shareKakaoBtn = document.getElementById('shareKakaoBtn');
    const shareTgBtn = document.getElementById('shareTgBtn');
    const shareLinkBtn = document.getElementById('shareLinkBtn');
    
    // Monetization Elements
    const baeminLink = document.getElementById('baeminLink');
    const coupangeatsLink = document.getElementById('coupangeatsLink');
    const shoppingRecommendCard = document.getElementById('shoppingRecommendCard');
    const shopItemEmoji = document.getElementById('shopItemEmoji');
    const shopItemName = document.getElementById('shopItemName');
    const shopItemPrice = document.getElementById('shopItemPrice');
    const shopItemDesc = document.getElementById('shopItemDesc');
    const shopItemLink = document.getElementById('shopItemLink');
    const inAppMap = document.getElementById('inAppMap');
    const fallbackMapBtns = document.getElementById('fallbackMapBtns');

    // ===== STATE =====
    let selectedMood = 'random';
    let selectedCalMode = 'all';
    let isSpinning = false;
    let currentMenu = null;
    let userLat = null, userLng = null;

    // ===== LOCALSTORAGE KEYS =====
    const LS_HISTORY = 'lunch_history_v2';
    const LS_LIKES = 'lunch_likes_v2';

    // ===== LOAD SAVED DATA =====
    function loadHistory() {
        try {
            const raw = localStorage.getItem(LS_HISTORY);
            if (!raw) return [];
            const arr = JSON.parse(raw);
            // Only keep items from last 7 days
            const cutoff = Date.now() - 7 * 24 * 60 * 60 * 1000;
            return arr.filter(item => item.ts > cutoff);
        } catch { return []; }
    }

    function saveHistory(arr) {
        localStorage.setItem(LS_HISTORY, JSON.stringify(arr));
    }

    function loadLikes() {
        try {
            return JSON.parse(localStorage.getItem(LS_LIKES)) || {};
        } catch { return {}; }
    }

    function saveLikes(obj) {
        localStorage.setItem(LS_LIKES, JSON.stringify(obj));
    }

    // ===== MOOD SELECTOR =====
    moodBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            moodBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedMood = btn.dataset.mood;
        });
    });

    // ===== CALORIE MODE =====
    calorieBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            calorieBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedCalMode = btn.dataset.cal;
        });
    });

    // ===== GPS =====
    gpsBtn.addEventListener('click', () => {
        if (!navigator.geolocation) {
            gpsStatus.textContent = '⚠️ 이 브라우저는 위치 서비스를 지원하지 않아요.';
            return;
        }
        gpsBtnText.textContent = '📡 위치 확인 중...';
        gpsBtn.disabled = true;
        gpsStatus.textContent = '';

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                userLat = pos.coords.latitude;
                userLng = pos.coords.longitude;
                gpsBtnText.textContent = '✅ 내 위치 사용 중';
                gpsStatus.textContent = `📍 위치 감지 완료! 지도 검색 시 현재 위치가 사용됩니다.`;
                gpsStatus.className = 'gps-status success';
            },
            () => {
                gpsBtnText.textContent = '📡 내 위치 사용';
                gpsBtn.disabled = false;
                gpsStatus.textContent = '⚠️ 위치 권한이 거부되었어요. 지역을 직접 선택해주세요.';
                gpsStatus.className = 'gps-status error';
            }
        );
    });

    // ===== PICK MENU LOGIC =====
    function getFilteredPool() {
        const moodPool = MENUS[selectedMood] || MENUS.random;
        const history = loadHistory().map(h => h.name);

        let pool = [...moodPool];

        // Calorie filter
        if (selectedCalMode === 'light') {
            pool = pool.filter(m => m.kcal <= 500);
        } else if (selectedCalMode === 'feast') {
            pool = pool.filter(m => m.kcal >= 600);
        }

        // Remove already-eaten this week (if pool still has items left)
        const filtered = pool.filter(m => !history.includes(m.name));
        return filtered.length > 0 ? filtered : pool; // fallback
    }

    function pickMenu() {
        const pool = getFilteredPool();
        return pool[Math.floor(Math.random() * pool.length)];
    }

    // ===== SPIN =====
    function doSpin() {
        if (isSpinning) return;
        isSpinning = true;
        spinBtn.disabled = true;
        resultSection.classList.add('hidden');

        const allPool = getFilteredPool();
        let tick = 0;
        const totalTicks = 22;

        rouletteBoard.classList.add('spinning');
        rouletteText.classList.add('spinning');

        const interval = setInterval(() => {
            const temp = allPool[Math.floor(Math.random() * allPool.length)];
            rouletteText.textContent = temp ? temp.name : '🎲';
            tick++;

            if (tick >= totalTicks) {
                clearInterval(interval);
                const chosen = pickMenu();
                if (!chosen) {
                    rouletteText.textContent = '😅 메뉴가 없어요';
                    rouletteBoard.classList.remove('spinning');
                    rouletteText.classList.remove('spinning');
                    isSpinning = false;
                    spinBtn.disabled = false;
                    return;
                }
                currentMenu = chosen;
                showResult(chosen);
                rouletteText.textContent = chosen.name;
                rouletteBoard.classList.remove('spinning');
                rouletteText.classList.remove('spinning');
                isSpinning = false;
                spinBtn.disabled = false;
            }
        }, 80);
    }

    // ===== SHOW RESULT =====
    function showResult(menu) {
        const region = document.getElementById('region').value;

        // Build map URLs (GPS-aware)
        const query = encodeURIComponent(`${region} ${menu.name}`);
        let naverUrl, kakaoUrl;

        if (userLat && userLng) {
            naverUrl = `https://map.naver.com/p/search/${encodeURIComponent(menu.name)}?c=${userLng},${userLat},15,0,0,0,dh`;
            kakaoUrl = `https://map.kakao.com/?q=${encodeURIComponent(menu.name)}&urlX=${userLng}&urlY=${userLat}`;
        } else {
            naverUrl = `https://map.naver.com/p/search/${query}`;
            kakaoUrl = `https://map.kakao.com/?q=${query}`;
        }

        resultMenu.textContent = `${menu.emoji} ${menu.name}`;
        resultDesc.textContent = menu.desc;
        resultCalBadge.textContent = `🔥 ${menu.kcal}kcal`;
        resultCalBadge.className = `result-cal-badge ${menu.kcal <= 500 ? 'low' : menu.kcal >= 700 ? 'high' : 'mid'}`;
        resultMeta.textContent = `📍 맛집 키워드: ${region} ${menu.name} 맛집`;
        naverMapLink.href = naverUrl;
        kakaoMapLink.href = kakaoUrl;

        // 📍 초정밀 인앱 로컬 배달 지도 렌더링 호출 (에러 예외 격리)
        try {
            renderInAppMap(menu.name);
        } catch (mapError) {
            console.error('Kakao map load failed, falling back to static search:', mapError);
            inAppMap.style.display = 'none';
            fallbackMapBtns.style.display = 'flex';
        }

        // B2B Delivery Deep Links
        baeminLink.href = 'baemin://search?keyword=' + encodeURIComponent(menu.name);
        coupangeatsLink.href = 'coupangeats://search?q=' + encodeURIComponent(menu.name);

        // Dynamic Affiliate Recommendation
        let recommendItem = AFFILIATE_PRODUCTS.default;
        if (menu.kcal <= 500) {
            recommendItem = AFFILIATE_PRODUCTS.light;
        } else if (selectedMood === 'stress') {
            recommendItem = AFFILIATE_PRODUCTS.stress;
        } else if (selectedMood === 'rain') {
            recommendItem = AFFILIATE_PRODUCTS.rain;
        } else if (selectedMood === 'tired') {
            recommendItem = AFFILIATE_PRODUCTS.tired;
        }

        shopItemEmoji.textContent = recommendItem.emoji;
        shopItemName.textContent = recommendItem.name;
        shopItemPrice.textContent = recommendItem.price;
        shopItemDesc.textContent = recommendItem.desc;
        shopItemLink.href = recommendItem.link;
        shoppingRecommendCard.style.display = 'block';

        // Post-meal Action
        const actionText = ACTIONS[Math.floor(Math.random() * ACTIONS.length)];
        actionBox.innerHTML = `<strong>💡 추천 식후 행동:</strong><br>${actionText}`;
        actionBox.style.display = 'block';

        // Like state
        const likes = loadLikes();
        const likedThis = likes[menu.name] && likes[menu.name].liked;
        likeIcon.textContent = likedThis ? '❤️' : '🤍';
        likeBtnText.textContent = likedThis ? '이미 좋아했어요!' : '맛있었어요!';
        likeCount.textContent = likes[menu.name] ? `${likes[menu.name].count}명` : '';

        resultSection.classList.remove('hidden');
        drinkSection.classList.remove('hidden');
        drinkResult.style.display = 'none';
        drinkDesc.style.display = 'none';
        drinkSpinBtn.style.display = 'block';

        resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // Add to history
        addToHistory(menu);
    }

    // ===== LIKE BUTTON =====
    likeBtn.addEventListener('click', () => {
        if (!currentMenu) return;
        const likes = loadLikes();
        const key = currentMenu.name;

        if (!likes[key]) likes[key] = { count: 0, liked: false };
        if (likes[key].liked) {
            likes[key].liked = false;
            likes[key].count = Math.max(0, likes[key].count - 1);
            likeIcon.textContent = '🤍';
            likeBtnText.textContent = '맛있었어요!';
        } else {
            likes[key].liked = true;
            likes[key].count += 1;
            likeIcon.textContent = '❤️';
            likeBtnText.textContent = '이미 좋아했어요!';
            likeBtn.classList.add('liked');
            setTimeout(() => likeBtn.classList.remove('liked'), 400);
        }
        likeCount.textContent = likes[key].count > 0 ? `${likes[key].count}명` : '';
        saveLikes(likes);
        renderHallOfFame();
    });

    // ===== HISTORY =====
    function addToHistory(menu) {
        const history = loadHistory();
        const now = Date.now();
        history.unshift({ name: menu.name, emoji: menu.emoji, kcal: menu.kcal, ts: now });
        const deduped = [];
        const seen = new Set();
        for (const item of history) {
            if (!seen.has(item.name)) {
                seen.add(item.name);
                deduped.push(item);
            }
        }
        saveHistory(deduped.slice(0, 20));
        renderHistory();
    }

    function renderHistory() {
        const history = loadHistory();
        if (history.length === 0) {
            historyCard.style.display = 'none';
            return;
        }
        historyCard.style.display = 'block';
        historyList.innerHTML = history.map(item => {
            const d = new Date(item.ts);
            const dateStr = d.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric', weekday: 'short' });
            const timeStr = d.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
            return `
                <li class="history-item">
                    <span class="history-emoji">${item.emoji}</span>
                    <div class="history-detail">
                        <span class="history-menu">${item.name}</span>
                        <span class="history-kcal">🔥 ${item.kcal}kcal</span>
                    </div>
                    <span class="history-time">${dateStr} ${timeStr}</span>
                </li>
            `;
        }).join('');
    }

    clearHistoryBtn.addEventListener('click', () => {
        localStorage.removeItem(LS_HISTORY);
        historyCard.style.display = 'none';
    });

    // ===== HALL OF FAME =====
    function renderHallOfFame() {
        const likes = loadLikes();
        const sorted = Object.entries(likes)
            .filter(([, v]) => v.count > 0)
            .sort((a, b) => b[1].count - a[1].count)
            .slice(0, 5);

        if (sorted.length === 0) {
            hallCard.style.display = 'none';
            return;
        }
        hallCard.style.display = 'block';
        const medals = ['🥇', '🥈', '🥉', '4️⃣', '5️⃣'];
        hallList.innerHTML = sorted.map(([name, v], i) => `
            <li class="hall-item">
                <span class="hall-medal">${medals[i]}</span>
                <span class="hall-menu">${name}</span>
                <span class="hall-count">❤️ ${v.count}</span>
            </li>
        `).join('');
    }

    // ===== DRINK SECTION =====
    drinkSpinBtn.addEventListener('click', () => {
        drinkSpinBtn.style.display = 'none';
        drinkResult.style.display = 'block';
        drinkDesc.style.display = 'block';
        
        const drink = DRINKS[Math.floor(Math.random() * DRINKS.length)];
        drinkResult.textContent = `${drink.emoji} ${drink.name}`;
        drinkDesc.textContent = drink.desc;
    });

    // ===== SHARE BUTTONS =====
    function getShareText() {
        const menuText = currentMenu ? `${currentMenu.name} ${currentMenu.emoji}` : '메뉴';
        return `[오늘 뭐 먹지?] 점심 메뉴 추천 완료!\n오늘의 추천 메뉴: ${menuText}\n직장인 점심 결정 장애 해결사에서 확인해보세요! 👉 ${window.location.href}`;
    }

    shareKakaoBtn.addEventListener('click', async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: '오늘 뭐 먹지?',
                    text: getShareText(),
                    url: window.location.href
                });
            } catch (err) {
                console.log('Share canceled or failed', err);
            }
        } else {
            alert('현재 브라우저에서는 기본 공유 기능을 지원하지 않습니다. 링크 복사를 이용해주세요!');
        }
    });

    shareTgBtn.addEventListener('click', () => {
        const text = encodeURIComponent(getShareText());
        window.open(`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${text}`, '_blank');
    });

    shareLinkBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(getShareText()).then(() => {
            alert('결과가 클립보드에 복사되었습니다! 🔗');
        }).catch(err => {
            alert('링크 복사에 실패했습니다.');
        });
    });

    // ===== EVENTS =====
    spinBtn.addEventListener('click', doSpin);
    retryBtn.addEventListener('click', doSpin);

    // ===== INIT =====
    renderHistory();
    renderHallOfFame();

    // --- Cookie Consent Checker ---
    const consent = localStorage.getItem('cookie-consent');
    const banner = document.getElementById('cookie-banner');
    if (consent === 'accepted' && banner) {
        banner.style.display = 'none';
    } else if (banner) {
        banner.style.display = 'flex';
    }
});

// Global function for Cookie Accept button
window.acceptCookies = function() {
    localStorage.setItem('cookie-consent', 'accepted');
    const banner = document.getElementById('cookie-banner');
    if (banner) {
        banner.style.opacity = '0';
        setTimeout(() => {
            banner.style.display = 'none';
        }, 300);
    }
};

// ===== KAKAO IN-APP MAP SYSTEM =====
function renderInAppMap(menuName) {
    try {
        // 1. 카카오 API 존재 여부 및 서비스 라이브러리 검증 (Graceful Degradation 예외 처리)
        if (!window.kakao || !window.kakao.maps || !window.kakao.maps.services) {
            inAppMap.style.display = 'none';
            fallbackMapBtns.style.display = 'flex';
            return;
        }

        const lat = userLat || 37.5665;
        const lng = userLng || 126.9780;
        const centerPos = new kakao.maps.LatLng(lat, lng);

        inAppMap.style.display = 'block';
        fallbackMapBtns.style.display = 'none';

        // 지도 인스턴스 생성
        const mapOptions = {
            center: centerPos,
            level: 4
        };
        const map = new kakao.maps.Map(inAppMap, mapOptions);

    // 내 위치 핀 마커 표시
    const centerMarker = new kakao.maps.Marker({
        position: centerPos,
        map: map
    });

    const centerInfoWindow = new kakao.maps.InfoWindow({
        content: '<div style="padding:5px;font-size:11px;color:#1e293b;font-weight:bold;text-align:center;font-family:sans-serif;">내 위치📍</div>'
    });
    centerInfoWindow.open(map, centerMarker);

    // 카카오 로컬 검색 API 구동
    const ps = new kakao.maps.services.Places();
    const searchOptions = {
        location: centerPos,
        radius: 1200, // 1.2km 반경 탐색
        sort: kakao.maps.services.SortBy.ACCURACY
    };

    ps.keywordSearch(menuName, function(data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
            const bounds = new kakao.maps.LatLngBounds();
            bounds.extend(centerPos);

            // 혼잡 방지를 위해 최대 6개 로컬 맛집 마커 노출
            for (let i = 0; i < Math.min(data.length, 6); i++) {
                displayPlaceMarker(map, data[i], bounds);
            }
            map.setBounds(bounds);
        } else {
            // 검색 실패 시 우아하게 폴백 검색 버튼 노출
            inAppMap.style.display = 'none';
            fallbackMapBtns.style.display = 'flex';
        }
    }, searchOptions);
    } catch (err) {
        console.error('Error inside renderInAppMap:', err);
        inAppMap.style.display = 'none';
        fallbackMapBtns.style.display = 'flex';
    }
}

function displayPlaceMarker(map, place, bounds) {
    const markerPos = new kakao.maps.LatLng(place.y, place.x);
    const marker = new kakao.maps.Marker({
        position: markerPos,
        map: map
    });

    bounds.extend(markerPos);

    // 배달앱 연동 검색 쿼리 딥링크 바인딩
    const shopQuery = encodeURIComponent(place.place_name);
    const baeminDeep = `baemin://search?keyword=${shopQuery}`;
    const eatsDeep = `coupangeats://search?q=${shopQuery}`;

    const content = `
        <div style="padding:10px; width:220px; font-family:'Noto Sans KR', sans-serif; background:#1e293b; color:#f8fafc; border-radius:8px; border:1px solid rgba(255,255,255,0.1);">
            <h4 style="margin:0 0 4px; font-size:12px; font-weight:700; color:#fff; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${place.place_name}</h4>
            <p style="margin:0 0 8px; font-size:10px; color:#94a3b8; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${place.road_address_name || place.address_name}</p>
            <div style="display:flex; gap:6px;">
                <a href="${baeminDeep}" target="_blank" style="flex:1; text-align:center; padding:5px 0; background:#2ac1bc; color:#fff; font-size:10px; font-weight:700; border-radius:4px; text-decoration:none; display:inline-block;">🛵 배민</a>
                <a href="${eatsDeep}" target="_blank" style="flex:1; text-align:center; padding:5px 0; background:#00b2ee; color:#fff; font-size:10px; font-weight:700; border-radius:4px; text-decoration:none; display:inline-block;">⚡ 이츠</a>
            </div>
        </div>
    `;

    const infowindow = new kakao.maps.InfoWindow({
        content: content,
        removable: true
    });

    kakao.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });
}

