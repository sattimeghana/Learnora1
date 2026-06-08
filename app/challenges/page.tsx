export default function ChallengesPage() {
  const challenges = [
    {
      title: "Solve 5 CSP MCQs",
      points: 50,
    },
    {
      title: "Complete Networking Quiz",
      points: 100,
    },
    {
      title: "Submit CSP Assignment",
      points: 150,
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        🚀 Challenges
      </h1>

      {challenges.map((challenge, index) => (
        <div
          key={index}
          className="border p-4 rounded-lg mb-4 shadow"
        >
          <h2 className="font-bold">
            {challenge.title}
          </h2>
          <p>Points: {challenge.points}</p>
        </div>
      ))}
    </div>
  );
}