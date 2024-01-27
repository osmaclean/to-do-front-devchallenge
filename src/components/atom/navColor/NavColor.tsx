import React from 'react'

interface NavColorProps {
  onColorChange: (borderColor: string, bgColor: string) => void
}

const NavColor: React.FC<NavColorProps> = ({ onColorChange }) => {
  const handleColorClick = (borderColor: string, bgColor: string) => {
    onColorChange(borderColor, bgColor)
  }
  return (
    <nav className="absolute -bottom-12 z-10 flex h-10 w-[36rem] cursor-default items-center justify-center rounded-lg border border-grey-1XX bg-white px-3 py-6 shadow-createTask">
      <ul className="flex w-full items-center justify-between">
        <li
          onClick={() =>
            handleColorClick('border-palette-1XX', 'bg-palette-1XX')
          }
          className="bg-palette-1XX h-[2.294rem] w-[2.294rem] cursor-pointer rounded-full duration-300 hover:scale-105"
        ></li>
        <li
          onClick={() =>
            handleColorClick('border-palette-2XX', 'bg-palette-2XX')
          }
          className="bg-palette-2XX h-[2.294rem] w-[2.294rem] cursor-pointer rounded-full duration-300 hover:scale-105"
        ></li>
        <li
          onClick={() =>
            handleColorClick('border-palette-3XX', 'bg-palette-3XX')
          }
          className="bg-palette-3XX h-[2.294rem] w-[2.294rem] cursor-pointer rounded-full duration-300 hover:scale-105"
        ></li>
        <li
          onClick={() =>
            handleColorClick('border-palette-4XX', 'bg-palette-4XX')
          }
          className="bg-palette-4XX h-[2.294rem] w-[2.294rem] cursor-pointer rounded-full duration-300 hover:scale-105"
        ></li>
        <li
          onClick={() =>
            handleColorClick('border-palette-5XX', 'bg-palette-5XX')
          }
          className="bg-palette-5XX h-[2.294rem] w-[2.294rem] cursor-pointer rounded-full duration-300 hover:scale-105"
        ></li>
        <li
          onClick={() =>
            handleColorClick('border-palette-6XX', 'bg-palette-6XX')
          }
          className="bg-palette-6XX h-[2.294rem] w-[2.294rem] cursor-pointer rounded-full duration-300 hover:scale-105"
        ></li>
        <li
          onClick={() =>
            handleColorClick('border-palette-7XX', 'bg-palette-7XX')
          }
          className="bg-palette-7XX h-[2.294rem] w-[2.294rem] cursor-pointer rounded-full duration-300 hover:scale-105"
        ></li>
        <li
          onClick={() =>
            handleColorClick('border-palette-8XX', 'bg-palette-8XX')
          }
          className="bg-palette-8XX h-[2.294rem] w-[2.294rem] cursor-pointer rounded-full duration-300 hover:scale-105"
        ></li>
        <li
          onClick={() =>
            handleColorClick('border-palette-9XX', 'bg-palette-9XX')
          }
          className="bg-palette-9XX h-[2.294rem] w-[2.294rem] cursor-pointer rounded-full duration-300 hover:scale-105"
        ></li>
        <li
          onClick={() =>
            handleColorClick('border-palette-10XX', 'bg-palette-10XX')
          }
          className="bg-palette-10XX h-[2.294rem] w-[2.294rem] cursor-pointer rounded-full duration-300 hover:scale-105"
        ></li>
        <li
          onClick={() =>
            handleColorClick('border-palette-11XX', 'bg-palette-11XX')
          }
          className="bg-palette-11XX h-[2.294rem] w-[2.294rem] cursor-pointer rounded-full duration-300 hover:scale-105"
        ></li>
        <li
          onClick={() =>
            handleColorClick('border-palette-12XX', 'bg-palette-12XX')
          }
          className="bg-palette-12XX h-[2.294rem] w-[2.294rem] cursor-pointer rounded-full duration-300 hover:scale-105"
        ></li>
      </ul>
    </nav>
  )
}

export default NavColor
