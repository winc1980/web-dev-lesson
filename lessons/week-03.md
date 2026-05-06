---
marp: true
theme: default
paginate: true
header: "Web Development Workshop: Week 03"
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

# 第3週: 配置を極める (Flexbox & Grid)
## 〜 「点」から「面」のレイアウトへ 〜

---

## 1. なぜレイアウト手法が必要か？

- **標準フロー:** 上から下へ要素が積まれるだけ。
- **モダンな要求:**
  - 横並びにしたい。
  - 中央寄せを簡単にしたい。
  - 2カラム、3カラムの複雑な構造を作りたい。

---

## 2. Flexbox: 1次元のレイアウト

「1列」または「1行」の並びを制御する。

- **親要素 (Container):** `display: flex;`
- **主軸の調整:** `justify-content` (横方向の揃え)
- **交差軸の調整:** `align-items` (縦方向の揃え)
- **折り返し:** `flex-wrap`

**用途:** ナビゲーションバー、ボタンの並び、カード内の中央寄せ。

---

## 3. CSS Grid: 2次元のレイアウト

「行」と「列」の両方を同時に制御する。

- **親要素 (Container):** `display: grid;`
- **列の定義:** `grid-template-columns: 1fr 2fr;`
- **隙間:** `gap: 20px;`

**用途:** ページ全体のメインレイアウト（サイドバー + コンテンツ）、ギャラリー。

---

## 4. 本日の目標: ダッシュボード化

- これまでの「カード」を中央に置くのではなく、画面全体を使った「ダッシュボード」の基礎を作る。
- **構成:** 
  - 左側: プロフィール（サイドバー）
  - 右側: 詳細情報（メインコンテンツ）
- スキル一覧を `grid` を使ってタイル状に並べる。

---

## 5. 躓きやすいポイント

1. **どっちを使うべき？:** 
   - 1列なら `flex`。
   - 全体の枠組みなら `grid`。
2. **% vs fr:** `fr` (fraction) 単位は、残りのスペースを比率で分ける魔法の単位。
3. **高さの概念:** `min-height: 100vh;` を忘れると、背景が途切れる原因に。

---

## 宿題 (Homework)

1. `starter/index.html` の構造を 2カラム（`<aside>` と `<main>`）に変更する。
2. `grid` を使って、「趣味」セクションをカード形式で横並びにする。
3. デベロッパーツールの「Flexbox/Grid オーバーレイ」を使って構造を確認する。
