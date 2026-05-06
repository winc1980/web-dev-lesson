---
marp: true
theme: default
paginate: true
header: "Web Development Workshop: Week 02"
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

# 第2週: 外装を整える (CSS基礎)
## 〜 意図した通りに「装飾」する 〜

---

## 1. CSSの役割

- **装飾:** 色、フォント、背景。
- **配置:** 要素の大きさ、余白、位置。
- **分離:** 構造（HTML）と見た目（CSS）を分けることで、メンテナンス性を高める。

---

## 2. 最重要概念: ボックスモデル

すべての要素は「箱」である。

- **Content:** 文字や画像そのもの。
- **Padding:** 内容と枠線の間の余白。
- **Border:** 枠線。
- **Margin:** 枠線の外側の余白（他の要素との距離）。

**教訓:** `padding` と `margin` の使い分けがレイアウトの命。

---

## 3. セレクタと優先順位 (Specificity)

- `tag` (低)
- `.class` (中)
- `#id` (高)
- `inline style` (最高 - 非推奨)

**原則:** 可能な限りクラス(`class`)で指定し、IDは装飾には使わない。

---

## 4. 本日の目標: カードの装飾

- 先週作ったHTMLに色と形を与える。
- 背景色の設定、角丸(`border-radius`)、影(`box-shadow`)。
- Google Fonts を使ってフォントを変更してみる。

---

## 5. 躓きやすいポイント

1. **外部ファイルの読み込み:** `<link>`タグのパス間違い。
2. **色の指定:** RGB, HEX, HSL。まずはHEX（`#ffffff`など）に慣れる。
3. **カスケード:** 後から書いたルールが上書きされる性質。

---

## 宿題 (Homework)

1. `starter/style.css` を完成させ、`index.html` に適用する。
2. 背景画像を探して設定してみる。
3. デベロッパーツールを使って、他人のサイトのボックスモデルを覗いてみる。
