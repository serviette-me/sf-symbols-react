'use client'

import ReferenceHeader from '@/components/ReferenceHeader'
import { ReferenceSidebar } from '@/components/ReferenceSidebar'
import { ColorProvider } from '@/context/ColorContext'
import { WeightProvider } from '@/context/WeightProvider'
import React, { useState } from 'react'

export default function ReferenceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [color, setColor] = useState('#000000')
  const [weight, setWeight] = useState<string>('regular')

  return (
    <ColorProvider value={{ color, setColor }}>
      <WeightProvider value={{ weight, setWeight }}>
        <div className="relative m-0 mx-auto flex w-full flex-auto justify-center overflow-hidden p-0">
          <div className="hidden max-w-[16rem] lg:relative lg:block lg:flex-none">
            <div className="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" />
            <div className="sticky -ml-0.5 h-[calc(100vh-4.75rem)] w-64 overflow-y-auto overflow-x-hidden pl-0.5 xl:w-72">
              <ReferenceSidebar
                color={color}
                setColor={setColor}
                weight={weight}
                setWeight={setWeight}
              />
            </div>
          </div>
          <div className="flex w-full flex-col overflow-hidden">
            <ReferenceHeader />
            {children} {/* Remove the React.Children.map */}
          </div>
        </div>
      </WeightProvider>
    </ColorProvider>
  )
}
