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
            { name: '냉모밀', emoji: '🍜', desc: '담백하고 시원한 냉모밀 한 그릇', kcal: 380 },
            { name: '치킨덮밥', emoji: '🍗', desc: '바삭한 치킨에 달콤한 소스까지', kcal: 690 },
        ],
        stress: [
            { name: '마라탕', emoji: '🌶️', desc: '얼얼한 매운맛에 스트레스 날려버려요!', kcal: 780 },
            { name: '불닭볶음면', emoji: '🔥', desc: '불같이 뜨거운 맛으로 화를 삭여요!', kcal: 530 },
            { name: '낙지볶음 정식', emoji: '🦑', desc: '알싸하고 매운 낙지로 기분 전환!', kcal: 590 },
            { name: '제육볶음', emoji: '🥘', desc: '칼칼한 제육으로 스트레스 해소!', kcal: 650 },
            { name: '떡볶이', emoji: '🌶️', desc: '떡볶이 한 접시로 기분이 나아질 거예요!', kcal: 480 },
            { name: '쭈꾸미볶음 정식', emoji: '🦑', desc: '쫄깃하고 매운 쭈꾸미로 힐링!', kcal: 560 },
        ],
        rain: [
            { name: '칼국수', emoji: '🍜', desc: '비 오는 날 칼국수는 진리!', kcal: 490 },
            { name: '순대국', emoji: '🍲', desc: '뜨끈한 국물로 몸을 녹여요', kcal: 550 },
            { name: '부대찌개', emoji: '🫕', desc: '풍성한 부대찌개로 행복한 점심!', kcal: 720 },
            { name: '삼계탕', emoji: '🍗', desc: '보양식으로 원기 회복!', kcal: 660 },
            { name: '설렁탕', emoji: '🍲', desc: '뽀얀 설렁탕 국물이 생각나는 날', kcal: 510 },
            { name: '해물파전 + 막걸리', emoji: '🥞', desc: '비 오는 날엔 전이 최고!', kcal: 620 },
        ],
        tired: [
            { name: '삼계탕', emoji: '🍗', desc: '원기 회복에 삼계탕이 최고예요!', kcal: 660 },
            { name: '소고기 국밥', emoji: '🍲', desc: '든든한 소고기로 에너지 충전!', kcal: 590 },
            { name: '장어구이 정식', emoji: '🐟', desc: '피곤할 때는 장어로 스태미나 UP!', kcal: 780 },
            { name: '삼겹살 정식', emoji: '🥓', desc: '고기 한 판으로 기운 차려요!', kcal: 820 },
            { name: '비빔밥 정식', emoji: '🥗', desc: '영양 밸런스 완벽한 비빔밥 정식', kcal: 520 },
            { name: '갈비탕', emoji: '🍖', desc: '진한 갈비탕으로 원기 회복!', kcal: 680 },
        ],
        light: [
            { name: '포케볼', emoji: '🥗', desc: '신선하고 건강한 포케로 가볍게!', kcal: 420 },
            { name: '연어 샐러드', emoji: '🥗', desc: '오메가3 가득한 연어 샐러드', kcal: 380 },
            { name: '김밥 & 우동', emoji: '🍙', desc: '가볍고 든든한 김밥 세트', kcal: 450 },
            { name: '두부구이 정식', emoji: '🍱', desc: '건강한 두부 정식으로 가벼운 점심', kcal: 410 },
            { name: '냉모밀', emoji: '🍜', desc: '담백하고 시원한 냉모밀', kcal: 380 },
            { name: '현미 덮밥', emoji: '🍱', desc: '건강한 현미로 가벼운 포만감', kcal: 490 },
        ],
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
        resultMeta.textContent = `📍 ${userLat ? '현재 위치' : region} 근처에서 찾아보세요!`;
        naverMapLink.href = naverUrl;
        kakaoMapLink.href = kakaoUrl;

        // Like state
        const likes = loadLikes();
        const likedThis = likes[menu.name] && likes[menu.name].liked;
        likeIcon.textContent = likedThis ? '❤️' : '🤍';
        likeBtnText.textContent = likedThis ? '이미 좋아했어요!' : '맛있었어요!';
        likeCount.textContent = likes[menu.name] ? `${likes[menu.name].count}명` : '';

        resultSection.classList.remove('hidden');
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

    // ===== EVENTS =====
    spinBtn.addEventListener('click', doSpin);
    retryBtn.addEventListener('click', doSpin);

    // ===== INIT =====
    renderHistory();
    renderHallOfFame();
});
