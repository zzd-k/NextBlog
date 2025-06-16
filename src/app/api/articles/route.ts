import db from "@/db"
import { message } from "antd"
import { NextRequest, NextResponse } from "next/server"

// GET=> /api/articles
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const pagenum = Number(searchParams.get('pagenum')) || 1
  const pagesize = Number(searchParams.get('pagesize')) || 2
  const query = (searchParams.get('query')) || " "

  const data = db.data.posts

  let filtedData = query ? data.filter(item => {
    const { id, ...rest } = item
    return Object.values(rest).some(value => String(value).toLowerCase().includes(query.toLowerCase()))
  }) : data
  const total = filtedData.length

  const startIndex = (pagenum - 1) * pagesize
  const endIndex = Math.min(startIndex + pagesize, total)


  filtedData = startIndex >= total ? [] : filtedData.slice(startIndex, endIndex)


  return NextResponse.json({
    code:0,
    message:'获取成功',
    data:{
      total,
      list:filtedData
    }
  })
  
}
// POST=> /api/articles
export async function POST(request: Request) {
  const data = await request.json()
  await db.update(({ posts }) => posts.unshift({
    id: Math.random().toString(36).slice(-8),
    ...data,
  }))
  return NextResponse.json({
    code: 0,
    message: "添加成功啦！",
    data
  })
}
