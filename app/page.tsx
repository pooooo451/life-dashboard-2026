export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sanrio-pink to-sanrio-purple">
            🎀 Life Dashboard 2026
          </h1>
          <p className="text-lg text-gray-700">
            Your cozy space for tracking goals, habits, and daily tasks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-lg border-2 border-sanrio-pink/30">
            <h2 className="text-2xl font-bold mb-4 text-sanrio-pink">🎯 Goals</h2>
            <p className="text-gray-600">Track your life goals and milestones</p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-lg border-2 border-sanrio-purple/30">
            <h2 className="text-2xl font-bold mb-4 text-sanrio-purple">✨ Habits</h2>
            <p className="text-gray-600">Build healthy daily habits</p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-lg border-2 border-sanrio-blue/30">
            <h2 className="text-2xl font-bold mb-4 text-sanrio-blue">✅ Tasks</h2>
            <p className="text-gray-600">Manage your daily todos</p>
          </div>
        </div>
      </div>
    </main>
  );
}
