---
marp: true
theme: default
paginate: true
header: "Web Development Workshop: Week 05"
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

# 第5週: 命を吹き込む (JavaScript & DOM基礎)
## 〜 静的なページから「動く」ページへ 〜

---

## 1. JavaScript の役割

- **HTML:** 構造 (骨)
- **CSS:** 見た目 (肉)
- **JavaScript:** 振る舞い (魂)

ボタンを押したら色が変わる、データを取ってきて表示する、といった「動き」を制御します。

---

## 2. DOM (Document Object Model) とは？

ブラウザがHTMLを解析して作った「プログラムから操作するためのツリー構造」のこと。

- JavaScript を使うことで、このツリーの要素を**探したり**、**書き換えたり**できます。

---

## 3. 要素を探す: `querySelector`

最も汎用的で強力な方法です。CSSセレクタと同じ書き方で要素を特定できます。

```javascript
// IDで探す
const title = document.querySelector('#main-title');

// クラスで探す
const cards = document.querySelector('.card');
```

---

## 4. 要素を書き換える

### テキストを変える
```javascript
title.textContent = "新しいタイトル";
```

### スタイルを変える
```javascript
title.style.color = "red";
title.classList.add("active"); // クラス操作が推奨
```

---

## 5. 本日の目標: ダイナミック・プロフィール

- `main.js` を作成し、HTMLから読み込む。
- JavaScript を使って、自分の名前やプロフィール文を「上書き」してみる。
- ダークモードの切り替え（クラスの付け外し）の準備をする。

---

## 躓きやすいポイント

1. **読み込みのタイミング:** HTMLが読み終わる前に JS が実行されるとエラーになります。
   - 解決策: `<script src="..." defer></script>` を使う。
2. **スペルミス:** `querySelector` の綴りや、CSSセレクタの `.` や `#` の忘れ。

---

## 宿題 (Homework)

1. JavaScript を使って、自分の「スキル」リストに新しい項目を1つ追加してみる。
2. 背景色を 3秒後に自動で変える処理を調べて実装してみる (`setTimeout`)。
