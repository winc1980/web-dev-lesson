---
marp: true
theme: default
paginate: true
header: "Web Development Workshop: Week 08"
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

# 第8週: 情報の集約 (Advanced API Integration)
## 〜 多彩なウィジェットを配置する 〜

---

## 1. 複数のデータを同時に扱う

ダッシュボードには多くの情報が必要です。

- 自分のGitHub情報
- 今日の天気
- 最新のTechニュース
- 仮想通貨の価格

これらを効率よく取得し、ユーザーを待たせないUIを作る必要があります。

---

## 2. ユーザー体験 (UX) と非同期処理

データが届くまでの間、画面が真っ白だとユーザーは不安になります。

- **Loading State:** 「読み込み中...」のスピナーやスケルトンスクリーンを表示する。
- **Empty State:** データがなかった時の表示。
- **Error State:** 失敗した時のリトライボタン。

---

## 3. 本日の目標: ウィジェット・ボード

- **天気ウィジェット:** OpenWeatherMap 等の API を使って現在の天気を表示する。
- **ニュースウィジェット:** 公開されている RSS や API からニュースの見出しを取得する。
- **デザイン:** 各情報を独立した「カード（ウィジェット）」として Grid で配置する。

---

## 4. セキュリティの注意点 (API Key)

多くの API では「API Key」という秘密の鍵が必要です。

- **重要:** Vanilla JS のフロントエンドに直接キーを書くと、誰にでも盗まれてしまいます。
- 今回は練習として、キー不要な API または公開しても安全な範囲での利用方法を学びます。
- ※ 本格的な運用では Backend (Node.js等) を通す必要があります。

---

## 宿題 (Homework)

1. ダッシュボードに「名言 (Quotes) ウィジェット」を追加してみる。
2. 5分ごとにデータを自動更新する処理を追加してみる (`setInterval`)。
