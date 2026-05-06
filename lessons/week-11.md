---
marp: true
theme: default
paginate: true
header: "Web Development Workshop: Week 11"
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

# 第11週: 分割して統治せよ (コンポーネント設計)
## 〜 巨大なファイルを部品に分ける 〜

---

## 1. なぜコンポーネント化するのか？

先週の `page.tsx` は、HTML が長くなりすぎて読みづらかったはずです。

- **可読性:** ファイルが短くなり、どこに何があるかすぐわかる。
- **再利用性:** 同じボタンやカードを何度も使い回せる。
- **テストしやすさ:** 小さい単位ならバグを見つけやすい。

---

## 2. React コンポーネントの基本

関数を作って、JSX（見た目）を `return` するだけです。

```tsx
// components/Button.tsx
export function MyButton() {
  return <button className="...">Click Me</button>;
}
```

使うときはタグとして呼び出します。
```tsx
import { MyButton } from "./components/Button";

<MyButton />
```

---

## 3. props: 部品に個性を与える

コンポーネントに引数（props）を渡すことで、中身を動的に変えられます。

```tsx
function SkillItem({ name }: { name: string }) {
  return <span className="...">{name}</span>;
}

// 呼び出し側
<SkillItem name="React" />
<SkillItem name="TypeScript" />
```

---

## 4. 本日の目標: パーツの切り出し

現在の `page.tsx` から、以下のパーツを独立したファイルに切り出します。

1. **Sidebar:** 左側のプロフィール領域。
2. **Section:** 共通の枠組み（白いカード部分）。
3. **SkillList:** スキル一覧。
4. **Widget:** 天気やニュースを表示する枠。

---

## 5. フォルダ構造の整理

```text
app/
  page.tsx
components/
  Sidebar.tsx
  DashboardSection.tsx
  SkillItem.tsx
  Widget.tsx
```

---

## 宿題 (Homework)

1. `components/` フォルダを作成し、サイドバーをコンポーネント化する。
2. 趣味（Hobbies）セクションをループ (`.map`) を使ってコンポーネントとして表示するように書き換える。
3. `Sidebar` に `name` や `role` を props として渡せるようにしてみる。
