// 一時的な認証スキップ用コード
// app/page.tsx の StudentPortfolioContent コンポーネント内で使用

// テスト用ユーザーデータ
const testUser = {
  id: "test-user-id",
  email: "test@example.com",
  user_metadata: {
    name: "テストユーザー",
    avatar_url: null
  }
}

// 認証チェックを一時的にスキップ
const useTestAuth = () => {
  return {
    user: testUser,
    loading: false
  }
}

// 使用方法:
// const { user, loading } = useTestAuth()  // 本来の認証フックの代わりに使用
