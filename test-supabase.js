// Supabase接続テスト
import { createClient } from "@/lib/supabase/client"

const supabase = createClient()

// 接続テスト
async function testConnection() {
  try {
    const { data, error } = await supabase.from('profiles').select('count')
    if (error) {
      console.error('Supabase接続エラー:', error)
    } else {
      console.log('Supabase接続成功:', data)
    }
  } catch (err) {
    console.error('予期せぬエラー:', err)
  }
}

// ブラウザコンソールで実行: testConnection()
console.log('Supabase接続テスト準備完了')
console.log('ブラウザコンソールで testConnection() を実行してください')
