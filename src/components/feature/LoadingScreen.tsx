export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] bg-dark-500 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Animated Logo */}
        <div className="relative w-36 h-36">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-400 to-accent-400 animate-spin-slow"></div>
          <div className="absolute inset-1 rounded-xl bg-dark-500 flex items-center justify-center overflow-hidden p-2">
            <img
              src="https://storage.readdy-site.link/project_files/53df1ac6-05af-419a-94b5-8b6b681d7726/2db05f5c-c751-42a3-a7ae-9d1824379672_compressed_1701325633456-removebg-preview.webp"
              alt="Digi India Solutions"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-accent-400 animate-float"
              style={{ animationDelay: `${i * 0.15}s`, animationDuration: '1s' }}
            ></div>
          ))}
        </div>

        <p className="text-white/25 text-xs tracking-widest uppercase">Loading</p>
      </div>
    </div>
  );
}