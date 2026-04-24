interface IPhoneFrameProps {
  children: React.ReactNode
}

export default function IPhoneFrame({ children }: IPhoneFrameProps) {
  return (
    <div className="relative mx-auto w-full select-none">
      {/* Body */}
      <div
        className="relative rounded-[13%] p-[3.5%]"
        style={{
          background: '#1C1C1E',
          boxShadow: '0 0 0 0.5px #444, inset 0 0 0 0.5px #2a2a2a, 0 30px 80px rgba(0,0,0,0.35)',
        }}
      >
        {/* Volume buttons (left) */}
        <div className="absolute left-[-3px] top-[22%] w-[3px] h-[7%] rounded-l-sm" style={{ background: '#2C2C2E' }} />
        <div className="absolute left-[-3px] top-[31%] w-[3px] h-[10%] rounded-l-sm" style={{ background: '#2C2C2E' }} />
        <div className="absolute left-[-3px] top-[43%] w-[3px] h-[10%] rounded-l-sm" style={{ background: '#2C2C2E' }} />
        {/* Power button (right) */}
        <div className="absolute right-[-3px] top-[30%] w-[3px] h-[14%] rounded-r-sm" style={{ background: '#2C2C2E' }} />

        {/* Screen */}
        <div
          className="relative overflow-hidden bg-black"
          style={{ borderRadius: '10%', aspectRatio: '9 / 19.5' }}
        >
          {/* Dynamic Island */}
          <div
            className="absolute top-[2.5%] left-1/2 -translate-x-1/2 z-20"
            style={{ width: '30%', height: '3.5%', background: '#000', borderRadius: '999px' }}
          />

          {/* Screen content */}
          <div className="absolute inset-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
