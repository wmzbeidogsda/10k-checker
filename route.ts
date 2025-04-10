import { NextResponse } from "next/server"

// 模拟数据库中的交易数据
const transactions = [
  {
    id: "1",
    wallet: "0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t",
    hash: "0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890",
    type: "转出",
    amount: "0.5 ETH",
    time: "2023-11-15T14:30:00Z",
    status: "成功",
  },
  {
    id: "2",
    wallet: "0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t",
    hash: "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
    type: "转入",
    amount: "2.0 ETH",
    time: "2023-11-15T12:45:00Z",
    status: "成功",
  },
  {
    id: "3",
    wallet: "0x2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1a",
    hash: "0x567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234",
    type: "转出",
    amount: "0.2 ETH",
    time: "2023-11-15T10:15:00Z",
    status: "成功",
  },
  {
    id: "4",
    wallet: "0x3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1a2b",
    hash: "0x90abcdef1234567890abcdef1234567890abcdef1234567890abcdef12345678",
    type: "转出",
    amount: "0.75 ETH",
    time: "2023-11-14T18:20:00Z",
    status: "成功",
  },
  {
    id: "5",
    wallet: "0x3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1a2b",
    hash: "0xef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcd",
    type: "转出",
    amount: "0.01 ETH",
    time: "2023-11-14T17:55:00Z",
    status: "成功",
  },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const wallet = searchParams.get("wallet")

  // 如果提供了钱包地址，则过滤结果
  const filteredTransactions = wallet ? transactions.filter((tx) => tx.wallet === wallet) : transactions

  // 在实际应用中，这里会从数据库获取数据
  return NextResponse.json(filteredTransactions)
}

export async function POST(request: Request) {
  const data = await request.json()

  // 在实际应用中，这里会将交易数据保存到数据库
  console.log("添加新交易:", data)

  // 返回模拟的成功响应
  return NextResponse.json({
    success: true,
    message: "交易记录添加成功",
    transaction: { id: String(transactions.length + 1), ...data },
  })
}