export default function Status({ isActivating, error, isActive }) {
  return (
    <div>
      {error ? (
        <>
          🔴 {error.name ?? 'Error'}
          {error.message ? `: ${error.message}` : null}
        </>
      ) : isActivating ? (
        <>🟡 链接中</>
      ) : isActive ? (
        <>🟢 已连接</>
      ) : (
        <>⚪️ 断开链接</>
      )}
    </div>
  )
}
