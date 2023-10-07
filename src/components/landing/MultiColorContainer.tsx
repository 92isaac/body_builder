import { ReactNode } from 'react'

interface Multicolor {
    children: ReactNode
}

export const MultiColorContainer:React.FC<Multicolor> = ({ children }) => {
  return (
    <div className="text-center py-4 text-white w-full bg-gradient-to-br from-[#FF26B9] to-[#FF5E0E] hover:from-[#FF5E0E] hover:to-[#d434fe]">
        {children}
  </div>
  )
}
