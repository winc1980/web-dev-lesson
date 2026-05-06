---
marp: true
theme: default
paginate: true
header: "Web Development Workshop: Week 04"
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

# 第4週: どこでも美しく (Responsive Design)
## 〜 マルチデバイス対応の極意 〜

---

## 1. なぜレスポンシブデザインが必要か？

- **現実:** Webサイトへのアクセスの半分以上はスマートフォン。
- **課題:** PC用の広い画面で作ったレイアウトは、スマホでは文字が小さすぎたり、横に突き抜けたりする。
- **解決策:** 画面サイズに応じてスタイルを切り替える。

---

## 2. 必須設定: Viewport Meta Tag

これがないと、スマホで見た時に「PC画面を無理やり縮小した」状態になる。

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- `width=device-width`: 画面の幅をデバイスの幅に合わせる。
- `initial-scale=1.0`: ズーム倍率を1倍にする。

---

## 3. メディアクエリ (@media)

「もし画面の幅が〇〇以下（または以上）だったら、このCSSを適用する」という命令。

```css
/* PC向けのスタイル */
.container { display: grid; grid-template-columns: 300px 1fr; }

/* スマホ向けのスタイル (画面幅が 768px 以下の時) */
@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr; /* 1カラムにする */
  }
}
```

---

## 4. モバイルファーストという考え方

1. まず「スマホ用」のシンプルなスタイルを書く。
2. 次に `@media (min-width: 768px)` で「PC用」の複雑なレイアウトを**追加**する。

**メリット:** コードがシンプルになりやすく、読み込みも速い。

---

## 5. 本日の目標: ダッシュボードの完成

- 第3週で作った2カラムレイアウトを、スマホでは縦1列に並ぶようにする。
- サイドバーの内容（アバターや名前）を中央寄せにする。
- 余白(`padding`, `gap`)をスマホ用に調整する。

---

## 宿題 (Homework)

1. `style.css` にメディアクエリを追加し、スマホ対応を完了させる。
2. ブラウザのデベロッパーツール（モバイルモード）で、様々な端末サイズでの見え方を確認する。
3. **Phase 1 完了！** 自分のプロフィールが、PCでもスマホでも綺麗に見えることを確認して GitHub にアップロードしよう。
