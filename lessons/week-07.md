---
marp: true
theme: default
paginate: true
header: "Web Development Workshop: Week 07"
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

# 第7週: 外部とつながる (Async & Fetch API)
## 〜 世界中のデータをダッシュボードへ 〜

---

## 1. 同期処理 vs 非同期処理

- **同期処理:** 1つの仕事が終わるまで、次の仕事ができない。
  - 例: 巨大な画像のダウンロード中、画面が固まる。
- **非同期処理:** 重い処理を裏側に任せて、次の仕事を進める。
  - 例: データを読み込みながら、他のボタンが押せる。

---

## 2. API とは？

Application Programming Interface。
「他のアプリやサーバーが持っているデータを使わせてもらうための窓口」です。

- 例: 天気情報、最新ニュース、GitHubのユーザー情報。

---

## 3. `fetch()` でデータを取る

最新のJavaScriptでは `async / await` という書き方で、非同期処理を「上から下へ」読みやすく書けます。

```javascript
async function getData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json(); // JSON形式として解析
  console.log(data);
}
```

---

## 4. 本日の目標: ライブ・プロフィール

- GitHub API を使って、自分の（あるいは好きなエンジニアの）アイコンやフォロワー数を取得する。
- 取得したデータを、ダッシュボードのサイドバーに表示する。

---

## 5. 躓きやすいポイント

1. **エラーハンドリング:** インターネットが切れている時などのために `try...catch` を使う必要があります。
2. **JSON:** サーバーから返ってくるのは「文字列」なので、`.json()` で「オブジェクト」に変換するステップを忘れずに。

---

## 宿題 (Homework)

1. GitHub API 以外の公開 API（例: 占いAPI、名言APIなど）からデータを取得して表示してみる。
2. データ読み込み中に「読み込み中...」というメッセージを画面に出すように工夫してみる。
