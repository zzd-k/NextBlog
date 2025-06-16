import { JSONFilePreset } from 'lowdb/node'
import { title } from 'process';
import '@ant-design/v5-patch-for-react-19';
// Read or create db.json
const defaultData: { posts: { id: string; title: string; content: string }[] } = { posts: [] }
const db = await JSONFilePreset('db.json', defaultData)

export default db