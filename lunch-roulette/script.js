// ============================
// 오늘 뭐 먹지? - script.js
// Upgraded Lunch Roulette Logic
// ============================

document.addEventListener('DOMContentLoaded', () => {

    // ===== MENU DATA =====
    const MENUS = {
        random: [
            { name: '제육볶음', emoji: '🥘', desc: '칼칼하고 든든한 국민 점심 메뉴!' },
            { name: '된장찌개', emoji: '🍲', desc: '구수하고 따뜻한 어머니의 맛' },
            { name: '비빔밥', emoji: '🥗', desc: '건강하고 알록달록 영양 만점!' },
            { name: '냉면', emoji: '🍜', desc: '시원하고 쫄깃한 여름 최강 메뉴' },
            { name: '순두부찌개', emoji: '🫕', desc: '부드럽고 칼칼한 순두부의 매력' },
            { name: '삼겹살 쌈밥', emoji: '🥬', desc: '고기와 쌈의 완벽한 조화' },
            { name: '카레라이스', emoji: '🍛', desc: '향긋하고 깊은 카레의 풍미' },
            { name: '짜장면', emoji: '🍝', desc: '달콤하고 쫄깃한 국민 배달음식' },
            { name: '김밥', emoji: '🍙', desc: '간편하고 맛있는 한 끼 해결사' },
            { name: '부대찌개', emoji: '🫕', desc: '풍성하고 든든한 부대찌개' },
            { name: '냉모밀', emoji: '🍜', desc: '담백하고 시원한 냉모밀 한 그릇' },
            { name: '치킨덮밥', emoji: '🍗', desc: '바삭한 치킨에 달콤한 소스까지' },
        ],
        stress: [
            { name: '마라탕', emoji: '🌶️', desc: '얼얼한 매운맛에 스트레스 날려버려요!' },
            { name: '불닭볶음면', emoji: '🔥', desc: '불같이 뜨거운 맛으로 화를 삭여요!' },
            { name: '낙지볶음', emoji: '🦑', desc: '알싸하고 매운 낙지로 기분 전환!' },
            { name: '제육볶음', emoji: '🥘', desc: '칼칼한 제육으로 스트레스 해소!' },
            { name: '떡볶이', emoji: '🌶️', desc: '떡볶이 한 접시로 기분이 나아질 거예요!' },
            { name: '쭈꾸미볶음', emoji: '🦑', desc: '쫄깃하고 매운 쭈꾸미로 힐링!' },
        ],
        rain: [
            { name: '칼국수', emoji: '🍜', desc: '비 오는 날 칼국수는 진리!' },
            { name: '순대국', emoji: '🍲', desc: '뜨끈한 국물로 몸을 녹여요' },
            { name: '부대찌개', emoji: '🫕', desc: '풍성한 부대찌개로 행복한 점심!' },
            { name: '삼계탕', emoji: '🍗', desc: '보양식으로 원기 회복!' },
            { name: '설렁탕', emoji: '🍲', desc: '뽀얀 설렁탕 국물이 생각나는 날' },
            { name: '해물파전', emoji: '🥞', desc: '비 오는 날엔 전이 최고!' },
        ],
        tired: [
            { name: '삼계탕', emoji: '🍗', desc: '원기 회복에 삼계탕이 최고예요!' },
            { name: '소고기 국밥', emoji: '🍲', desc: '든든한 소고기로 에너지 충전!' },
            { name: '장어구이', emoji: '🐟', desc: '피곤할 때는 장어로 스태미나 UP!' },
            { name: '삽겹살 정식', emoji: '🥓', desc: '고기 한 판으로 기운 차려요!' },
            { name: '비빔밥 정식', emoji: '🥗', desc: '영양 밸런스 완벽한 비빔밥 정식' },
            { name: '갈비탕', emoji: '🍖', desc: '진한 갈비탕으로 원기 회복!' },
        ],
        light: [
            { name: '포케볼', emoji: '🥗', desc: '신선하고 건강한 포케로 가볍게!' },
            { name: '연어 샐러드', emoji: '🥗', desc: '오메가3 가득한 연어 샐러드' },
            { name: '김밥 & 우동', emoji: '🍙', desc: '가볍고 든든한 김밥 세트' },
            { name: '두부구이 정식', emoji: '🍱', desc: '건강한 두부 정식으로 가벼운 점심' },
            { name: '냉모밀', emoji: '🍜', desc: '담백하고 시원한 냉모밀' },
            { name: '오니기리 세트', emoji: '🍙', desc: '간편하지만 맛있는 오니기리 세트' },
        ],
    };

    // ===== ELEMENTS =====
    const moodBtns = document.querySelectorAll('.mood-btn');
    const spinBtn = document.getElementById('spinBtn');
    const rouletteText = document.getElementById('rouletteText');
    const rouletteBoard = document.getElementById('rouletteBoard');
    const resultSection = document.getElementById('resultSection');
    const resultMenu = document.getElementById('resultMenu');
    const resultMeta = document.getElementById('resultMeta');
    const retryBtn = document.getElementById('retryBtn');
    const naverMapLink = document.getElementById('naverMapLink');
    const kakaoMapLink = document.getElementById('kakaoMapLink');
    const historyCard = document.getElementById('historyCard');
    const historyList = document.getElementById('historyList');

    // ===== STATE =====
    let selectedMood = 'random';
    let isSpinning = false;
    const pickedHistory = [];

    // ===== MOOD SELECTOR =====
    moodBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            moodBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedMood = btn.dataset.mood;
        });
    });

    // ===== SPIN LOGIC =====
    function pickMenu() {
        const pool = MENUS[selectedMood] || MENUS.random;
        return pool[Math.floor(Math.random() * pool.length)];
    }

    function doSpin() {
        if (isSpinning) return;
        isSpinning = true;
        spinBtn.disabled = true;
        resultSection.classList.add('hidden');

        const candidates = MENUS[selectedMood] || MENUS.random;
        let tick = 0;
        const totalTicks = 20;

        rouletteBoard.classList.add('spinning');
        rouletteText.classList.add('spinning');

        const interval = setInterval(() => {
            const temp = candidates[Math.floor(Math.random() * candidates.length)];
            rouletteText.textContent = temp.name;
            tick++;

            if (tick >= totalTicks) {
                clearInterval(interval);
                const chosen = pickMenu();
                showResult(chosen);
                rouletteText.textContent = chosen.name;
                rouletteBoard.classList.remove('spinning');
                rouletteText.classList.remove('spinning');
                isSpinning = false;
                spinBtn.disabled = false;
            }
        }, 80);
    }

    function showResult(menu) {
        const region = document.getElementById('region').value;
        const query = encodeURIComponent(`${region} ${menu.name}`);

        resultMenu.textContent = `${menu.emoji} ${menu.name}`;
        resultMeta.textContent = `${menu.desc} 📍 ${region} 근처에서 찾아보세요!`;

        naverMapLink.href = `https://map.naver.com/p/search/${query}`;
        kakaoMapLink.href = `https://map.kakao.com/?q=${query}`;

        resultSection.classList.remove('hidden');
        resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        addToHistory(menu.name);
    }

    function addToHistory(menuName) {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
        pickedHistory.unshift({ name: menuName, time: timeStr });
        if (pickedHistory.length > 5) pickedHistory.pop();

        historyCard.style.display = 'block';
        historyList.innerHTML = pickedHistory.map(item => `
            <li class="history-item">
                <span class="history-menu">${item.name}</span>
                <span class="history-time">${item.time} 뽑음</span>
            </li>
        `).join('');
    }

    // ===== EVENTS =====
    spinBtn.addEventListener('click', doSpin);
    retryBtn.addEventListener('click', doSpin);

    // Initial text
    rouletteText.textContent = '🎲 버튼을 눌러보세요!';
});
