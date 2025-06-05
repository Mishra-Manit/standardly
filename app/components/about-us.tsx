export function AboutUs() {
  return (
    <div className="w-full max-w-4xl mx-auto px-8 py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-br from-gray-200 to-gray-400">
          Standardly
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Personalized SAT & ACT tutoring run by students at top-10 universities who just finished the application process themselves. We have one-on-one sessions with a tutor who is a top 1% scorer. We turn study time into score gains with focused, data-driven sessions and weekly progress checks.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">Peer Expertise</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            We set score targets, build efficient study plans, and measure improvement every session.
          </p>
        </div>

        <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">Results Driven</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your tutors are fresh admits to elite schools. They know the tests inside and out.
          </p>
        </div>

        <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">Quality Instruction</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            As an organization, we create curriculum that is tailored to the needs of the student. We have a team of experts who are constantly updating and improving our curriculum.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <div className="inline-flex items-center space-x-2 text-gray-400">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-sm">currently accepting summer students</span>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
