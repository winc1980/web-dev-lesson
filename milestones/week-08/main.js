/**
 * [Week 08] API 連携の統合 (Weather, News, Quote)
 * [Week 07] までの GitHub 連携も維持した最終形態です。
 */

// --- [Week 05-06] からの継承: 基本操作 & イベント ---
document.querySelector('#theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

const statusForm = document.querySelector('#status-form');
statusForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('#status-input');
    document.querySelector('#about-text').textContent = input.value;
    input.value = "";
});

// Like Counter
let count = 0;
document.querySelector('#like-btn').addEventListener('click', (e) => {
    count++;
    document.querySelector('#like-count').textContent = count;
});

// Skills Populate (Week 05)
const skills = ["HTML", "CSS", "JS", "Python"];
document.querySelector('#skills-list').innerHTML = skills.map(s => `<div class="skill-item">${s}</div>`).join('');


// --- [Week 07] からの継承: GitHub 連携 ---
async function fetchGitHub(username) {
    try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        const data = await res.json();
        document.querySelector('#user-name').textContent = data.name || data.login;
        document.querySelector('#avatar').style.backgroundImage = `url(${data.avatar_url})`;
        document.querySelector('#follower-count').textContent = data.followers;
        
        const repoRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
        const repos = await repoRes.json();
        if (repos.length > 0) {
            document.querySelector('#repo-name').textContent = repos[0].name;
            document.querySelector('#repo-link').href = repos[0].html_url;
        }
    } catch (e) { console.error("GitHub Error:", e); }
}


// --- [Week 08 新規追加] 1. 天気 (Open-Meteo) ---
async function updateWeather() {
    try {
        // 東京の座標 (35.67, 139.65)
        const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=35.67&longitude=139.65&current_weather=true');
        const data = await res.json();
        const weather = data.current_weather;
        document.querySelector('#temp').textContent = `${weather.temperature}°C`;
        document.querySelector('#condition').textContent = `Wind: ${weather.windspeed} km/h`;
    } catch (e) {
        document.querySelector('#condition').textContent = "Weather unavailable";
    }
}


// --- [Week 08 新規追加] 2. ニュース (JSONPlaceholder) ---
async function updateNews() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const posts = await res.json();
        const list = document.querySelector('#news-list');
        list.innerHTML = posts.map(post => `<li>${post.title}</li>`).join('');
    } catch (e) {
        document.querySelector('#news-list').innerHTML = "<li>Failed to load news</li>";
    }
}


// --- [Week 08 新規追加] 3. 名言 (Advice Slip API) ---
async function updateQuote() {
    try {
        // Quotable が不安定なため、Advice Slip API を使用
        const res = await fetch('https://api.adviceslip.com/advice');
        const data = await res.json();
        document.querySelector('#quote-text').textContent = `"${data.slip.advice}"`;
        document.querySelector('#quote-author').textContent = "- Life Advice";
    } catch (e) {
        document.querySelector('#quote-text').textContent = '"Stay hungry, stay foolish."';
        document.querySelector('#quote-author').textContent = "- Steve Jobs";
    }
}


// --- 初期化 ---
function initDashboard() {
    fetchGitHub('octocat'); // 自分のユーザー名に変えてみよう
    updateWeather();
    updateNews();
    updateQuote();
}

initDashboard();
