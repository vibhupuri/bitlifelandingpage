import React, { useState, useRef, useEffect } from 'react'

interface SelectProps {
  children: React.ReactNode
  value?: string
  onChange?: (value: string) => void
  onOpenChange?: (isOpen: boolean) => void
  className?: string
}

export function Select({ children, value, onChange, onOpenChange, className }: SelectProps) {
  const [selectedValue, setSelectedValue] = useState(value || '')
  const selectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        onOpenChange?.(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [onOpenChange])

  return (
    <div ref={selectRef} className="relative">
      {children}
    </div>
  )
}

interface SelectTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick?: () => void
}

export function SelectTrigger({ className, children, onClick, ...props }: SelectTriggerProps) {
  return (
    <div
      className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer ${className || ''}`}
      onClick={onClick}
      {...props}
    >
      {children}
      <span className="ml-2">▼</span>
    </div>
  )
}

interface SelectContentProps extends React.HTMLAttributes<HTMLDivElement> {
  show?: boolean
}

export function SelectContent({ className, children, show = false, ...props }: SelectContentProps) {
  if (!show) return null
  
  return (
    <div
      className={`absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  )
}

interface SelectItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
  onSelect?: () => void
}

export function SelectItem({ className, children, value, onSelect, ...props }: SelectItemProps) {
  return (
    <div
      className={`relative cursor-pointer select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-gray-100 ${className || ''}`}
      onClick={onSelect}
      {...props}
    >
      {children}
    </div>
  )
}

export function SelectValue({ className, children, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={className} {...props}>
      {children}
    </span>
  )
}