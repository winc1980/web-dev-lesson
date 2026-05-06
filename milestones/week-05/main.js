/**
 * [Week 05] DOM操作の基本
 * HTML要素をJSから取得し、内容を動的に書き換えます。
 */

// 1. 要素の取得
const userName = document.querySelector('#user-name');
const userRole = document.querySelector('#user-role');
const aboutText = document.querySelector('#about-text');
const skillsList = document.querySelector('#skills-list');

// 2. [Week 05 新規追加] テキストの書き換え
// 静的なHTMLを JavaScript で上書きします。
userName.textContent = "WINC 太郎 (Updated via JS)";
userRole.textContent = "Full-stack Explorer";
aboutText.textContent = "JavaScriptを使って、HTMLの要素を自由自在に操れるようになりました！";

// 3. [Week 05 新規追加] 配列からリストを動的に作成
const skills = ["HTML", "CSS", "JavaScript", "Python", "Git", "VS Code"];

// リストを一度空にする
skillsList.innerHTML = "";

// 配列をループして要素を作成し、追加する
skills.forEach(skill => {
    const item = document.createElement('div');
    item.className = 'skill-item';
    item.textContent = skill;
    skillsList.appendChild(item);
});

console.log("Week 05 DOM manipulation completed.");
