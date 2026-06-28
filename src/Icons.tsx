interface IconProps {
  name:
    | 'book'
    | 'bookmark'
    | 'alert'
    | 'chevron-left'
    | 'chevron-right'
    | 'x'
    | 'refresh'
  size?: number
}

export function Icon({ name, size = 20 }: IconProps) {
  const paths = {
    book: (
      <>
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v15H6.5A2.5 2.5 0 0 0 4 20.5z" />
        <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v15h4.5a2.5 2.5 0 0 1 2.5 2.5z" />
      </>
    ),
    bookmark: (
      <path d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-3.7L6 21z" />
    ),
    alert: (
      <>
        <path d="M12 3 2.8 20h18.4z" />
        <path d="M12 9v4.5M12 17h.01" />
      </>
    ),
    'chevron-left': <path d="m15 18-6-6 6-6" />,
    'chevron-right': <path d="m9 18 6-6-6-6" />,
    x: <path d="m6 6 12 12M18 6 6 18" />,
    refresh: (
      <>
        <path d="M20 7v5h-5" />
        <path d="M18.5 16a8 8 0 1 1 .7-7.2L20 12" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}
