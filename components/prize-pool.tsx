export default function PrizePool() {
  const prizes = [
    {
      position: "1st Place",
      prize: "₹ 2,500",
    },
    {
      position: "2nd Place",
      prize: "₹ 1,500",
    },
    {
      position: "3rd Place",
      prize: "₹ 1,000",
    },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {prizes.map((prize, index) => (
        <div
          key={index}
          className={`border rounded-lg p-6 text-center transform transition-transform hover:scale-105 hover:bg-green-950 hover:bg-opacity-70`}
        >
          <div className="text-xl font-bold mb-2">{prize.position}</div>
          <div className={`text-3xl font-bold mb-4 text-green-500`}>
            {prize.prize}
          </div>
          <ul className="text-sm text-green-300 space-y-2">
          </ul>
        </div>
      ))}
    </div>
  )
}

