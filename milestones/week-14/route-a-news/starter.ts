/**
 * Week 14: Route A - Tech News Hub (Starter)
 * API の一括取得と、データの正規化（Normalization）
 */

export interface NewsItem {
  id: string;
  title: string;
  url: string;
  source: 'Zenn' | 'Qiita' | 'Other';
  date: string;
}

// ダミーデータまたはモックAPIを使用して取得を開始する
export const fetchNews = async (): Promise<NewsItem[]> => {
  // [Week 14 課題] 複数のエンドポイントから fetch し、一つの配列に flatMap せよ
  return [
    { id: '1', title: 'Next.js 15 の新機能', url: '#', source: 'Zenn', date: '2026-05-01' },
    { id: '2', title: 'React Server Components 入門', url: '#', source: 'Qiita', date: '2026-05-02' },
  ];
};
