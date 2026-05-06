/**
 * [Week 05] DOM操作を引き継ぎ、[Week 06] でイベントリスナーを追加
 */

// --- [Week 05] からの継承: 初期表示の書き換え ---
const skillsList = document.querySelector('#skills-list');
const skills = ["HTML", "CSS", "JavaScript", "Python"];
skillsList.innerHTML = skills.map(s => `<div class="skill-item">${s}</div>`).join('');

// --- [Week 06 新規追加] 1. ダークモード切り替え ---
const themeToggle = document.querySelector('#theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // ボタンのテキストも切り替えてみる
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = "Light Mode";
    } else {
        themeToggle.textContent = "Dark Mode";
    }
});

// --- [Week 06 新規追加] 2. ステータス更新フォーム ---
const statusForm = document.querySelector('#status-form');
const statusInput = document.querySelector('#status-input');
const aboutText = document.querySelector('#about-text');

statusForm.addEventListener('submit', (event) => {
    // フォーム送信によるページリロードを防ぐ
    event.preventDefault();

    const newStatus = statusInput.value;
    if (newStatus.trim() !== "") {
        aboutText.textContent = newStatus;
        statusInput.value = ""; // 入力欄をクリア
    }
});

// --- [Week 06 新規追加] 3. いいねカウンター ---
const likeBtn = document.querySelector('#like-btn');
const likeCount = document.querySelector('#like-count');
let count = 0;

likeBtn.addEventListener('click', () => {
    count++;
    likeCount.textContent = count;
    
    // ちょっとした演出: 押した時に少し大きくする
    likeBtn.style.transform = "scale(1.2)";
    setTimeout(() => {
        likeBtn.style.transform = "scale(1)";
    }, 100);
});
