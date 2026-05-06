---
marp: true
theme: default
paginate: true
header: "Web Development Workshop: Week 06"
footer: "WINC - Identity Dashboard Project"
---
<style>
section {
    background-color: #fff7ed;
    color: #292524;
    font-family: 'Inter', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Noto Sans JP', sans-serif;
}
h1, h2, h3 {
    color: #ea580c;
}
footer, header {
    color: #292524;
    opacity: 0.7;
}
a {
    color: #ea580c;
}
code {
    background-color: #292524;
    color: #fff7ed;
}
</style>

# 第6週: 反応するページ (Events & Interaction)
## 〜 ユーザーの行動に応答する 〜

---

## 1. 「イベント」とは？

ブラウザ上で発生するあらゆる「出来事」のこと。

- マウスをクリックした (`click`)
- キーボードを叩いた (`keydown`)
- フォームを送信した (`submit`)
- 画面をスクロールした (`scroll`)

---

## 2. イベントを待ち構える: `addEventListener`

特定の要素に対して、「このイベントが起きたら、この関数を実行して」と予約します。

```javascript
const btn = document.querySelector('#my-button');

btn.addEventListener('click', () => {
  alert('ボタンが押されました！');
});
```

---

## 3. 本日の目標: インタラクティブ・ダッシュボード

1. **ダークモード切り替え:**
   - ボタンを押すと、全体の背景色と文字色が反転するようにする。
2. **ステータス更新:**
   - 入力欄に文字を入れてボタンを押すと、プロフィール文がリアルタイムで書き換わるようにする。

---

## 4. 重要なテクニック: クラスの切り替え

`style`を直接書き換えるのではなく、CSSで`.dark-mode`クラスを定義しておき、JSでそれを付け外しするのがベストプラクティスです。

```javascript
document.body.classList.toggle('dark-mode');
```

---

## 5. 躓きやすいポイント

1. **カッコの有無:** `addEventListener('click', myFunction)` と書く。`myFunction()` と書くと即座に実行されてしまう。
2. **デフォルト動作の解除:** フォームの `submit` 時は、ページがリロードされないように `event.preventDefault()` が必要。

---

## 宿題 (Homework)

1. 「いいねボタン」を作り、押すたびに数字が増えていくカウンターを実装する。
2. 背景画像をクリックするたびに、3種類の画像が切り替わるようにしてみる。
