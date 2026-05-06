/**
 * [Week 07] 非同期通信 (Fetch API) の導入
 * [Week 05-06] の機能もすべて維持しています。
 */

// --- [Week 05-06] からの継承: 基本操作 ---
document.querySelector('#theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

const statusForm = document.querySelector('#status-form');
statusForm.addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelector('#about-text').textContent = document.querySelector('#status-input').value;
});

let count = 0;
document.querySelector('#like-btn').addEventListener('click', () => {
    count++;
    document.querySelector('#like-count').textContent = count;
});

const skills = ["HTML", "CSS", "JavaScript", "Python"];
document.querySelector('#skills-list').innerHTML = skills.map(s => `<div class="skill-item">${s}</div>`).join('');


// --- [Week 07 新規追加] GitHub API との連携 ---
async function fetchGitHubProfile(username) {
    try {
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) throw new Error("User not found");
        const userData = await userResponse.json();

        document.querySelector('#user-name').textContent = userData.name || userData.login;
        document.querySelector('#avatar').style.backgroundImage = `url(${userData.avatar_url})`;
        document.querySelector('#follower-count').textContent = userData.followers;

        const repoResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
        const repos = await repoResponse.json();

        if (repos.length > 0) {
            const latestRepo = repos[0];
            document.querySelector('#repo-name').textContent = latestRepo.name;
            document.querySelector('#repo-description').textContent = latestRepo.description || "No description";
            document.querySelector('#repo-link').href = latestRepo.html_url;
        }

    } catch (error) {
        console.error("Error:", error);
        document.querySelector('#repo-name').textContent = "データの取得に失敗しました。";
    }
}

fetchGitHubProfile('octocat');
