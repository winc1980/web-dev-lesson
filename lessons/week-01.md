---
marp: true
theme: default
paginate: true
header: "Web Development Workshop: Week 01"
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

# 第1週: 構造を作る (HTML基礎)
## 〜 骨組みがなければ、家は建たない 〜

---

## 1. なぜ「構造」が重要なのか？

- **意味論 (Semantics):** コンピュータやブラウザに、コンテンツの意味を伝える。
- **アクセシビリティ:** 読み上げソフトなどが正しく情報を読み取れる。
- **SEO:** 検索エンジンがサイトの内容を理解しやすくなる。
- **保守性:** `div`だらけのコードよりも、どこに何があるか一目でわかる。

---

## 2. 脱・`div` 地獄 (Div-itis)

悪い例:
```html
<div class="header">
  <div class="nav">...</div>
</div>
```

良い例:
```html
<header>
  <nav>...</nav>
</header>
```

**キーメッセージ:** 適切なタグには「意味」がある。

---

## 3. 本日の目標: アイデンティティ・カード

- 自分の「顔」となる基本構造をHTMLだけで書く。
- CSSは来週。まずは**情報の階層**を整理する。
- 以下の要素を必ず含める：
  - `header`: 名前とキャッチコピー
  - `main`: 自己紹介、スキル、趣味
  - `footer`: SNSリンク、コピーライト

---

## 4. 躓きやすいポイント

1. **入れ子構造:** 開きタグと閉じタグの対応。インデントを正しく。
2. **要素の選択:** `section` か `article` か？
   - `section`: 章、節。テーマごとの区切り。
   - `article`: それ単体で独立して成立するコンテンツ（ブログ記事など）。
3. **画像の代替テキスト:** `alt`属性を忘れない（アクセシビリティの基本）。

---

## 宿題 (Homework)

1. `starter/index.html` を完成させる。
2. 自分の趣味やSNSのURLをリストアップしておく。
3. GitHubにリポジトリを作成し、`week-01` ブランチにプッシュする。

**提出条件:** W3Cバリデータでエラーが出ないこと。
