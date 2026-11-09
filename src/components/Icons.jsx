const lineProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  focusable: "false",
};

const brandProps = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true",
  focusable: "false",
};

export function ArrowUpRight(props) {
  return (
    <svg {...lineProps} {...props}>
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export function ArrowRight(props) {
  return (
    <svg {...lineProps} {...props}>
      <path d="M4 12h16" />
      <path d="m14 6 6 6-6 6" />
    </svg>
  );
}

export function ArrowUp(props) {
  return (
    <svg {...lineProps} {...props}>
      <path d="M12 19V5" />
      <path d="m5 12 7-7 7 7" />
    </svg>
  );
}

export function Mail(props) {
  return (
    <svg {...lineProps} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function GitHub(props) {
  return (
    <svg {...brandProps} {...props}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export function LinkedIn(props) {
  return (
    <svg {...brandProps} {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function WhatsApp(props) {
  return (
    <svg {...brandProps} {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function Menu(props) {
  return (
    <svg {...lineProps} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function Close(props) {
  return (
    <svg {...lineProps} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function Check(props) {
  return (
    <svg {...lineProps} {...props}>
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  );
}

export function Copy(props) {
  return (
    <svg {...lineProps} {...props}>
      <rect x="9" y="9" width="12" height="12" rx="2.5" />
      <path d="M15 9V6.5A2.5 2.5 0 0 0 12.5 4h-6A2.5 2.5 0 0 0 4 6.5v6A2.5 2.5 0 0 0 6.5 15H9" />
    </svg>
  );
}

export function Sparkles(props) {
  return (
    <svg {...lineProps} {...props}>
      <path d="m12 3 1.7 4.6L18 9.3l-4.3 1.7L12 15.6l-1.7-4.6L6 9.3l4.3-1.7L12 3Z" />
      <path d="m19 14 .9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z" />
      <path d="m5 14 .7 1.8L7.5 16.5l-1.8.7L5 19l-.7-1.8L2.5 16.5l1.8-.7L5 14Z" />
    </svg>
  );
}

export function Code(props) {
  return (
    <svg {...lineProps} {...props}>
      <path d="m8 8-5 4 5 4" />
      <path d="m16 8 5 4-5 4" />
      <path d="m13.5 5-3 14" />
    </svg>
  );
}

export function Responsive(props) {
  return (
    <svg {...lineProps} {...props}>
      <rect x="2.5" y="4" width="13" height="10" rx="2" />
      <path d="M6 18h6" />
      <path d="M9 14v4" />
      <rect x="16.5" y="9" width="5" height="11" rx="1.6" />
    </svg>
  );
}

export function Layout(props) {
  return (
    <svg {...lineProps} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 9h18" />
      <path d="M9 9v11" />
    </svg>
  );
}

export function Refresh(props) {
  return (
    <svg {...lineProps} {...props}>
      <path d="M20 11.5A8 8 0 0 0 6.3 6L4 8.2" />
      <path d="M4 4v4.2h4.2" />
      <path d="M4 12.5A8 8 0 0 0 17.7 18l2.3-2.2" />
      <path d="M20 20v-4.2h-4.2" />
    </svg>
  );
}

export function Globe(props) {
  return (
    <svg {...lineProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
    </svg>
  );
}

export function Send(props) {
  return (
    <svg {...lineProps} {...props}>
      <path d="M21 3 10.5 13.5" />
      <path d="M21 3 14.5 21l-4-7.5L3 9.5 21 3Z" />
    </svg>
  );
}

export function ReactIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" {...props}>
      <circle cx="12" cy="12" r="2.1" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="currentColor" strokeWidth="1.3" />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4.2"
        stroke="currentColor"
        strokeWidth="1.3"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4.2"
        stroke="currentColor"
        strokeWidth="1.3"
        transform="rotate(120 12 12)"
      />
    </svg>
  );
}

export function NextIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" {...props}>
      <circle cx="12" cy="12" r="10.5" fill="currentColor" opacity="0.14" />
      <path
        d="M7.6 17.2V7.4h1.9l6.4 8.3V7.4h1.8v9.8h-1.8L9.4 8.9v8.3H7.6Z"
        fill="currentColor"
      />
      <path d="M16.2 7.4h1.8v5.9l-1.8-2.4V7.4Z" fill="currentColor" opacity="0.55" />
      <circle cx="12" cy="12" r="10.5" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
    </svg>
  );
}

export function HtmlIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" {...props}>
      <path d="M4.2 2.4h15.6l-1.4 16.4L12 21.6l-6.4-2.8L4.2 2.4Z" fill="currentColor" />
      <path d="M12 3.8h6.3l-1.2 13.6L12 19.7V3.8Z" fill="#000" opacity="0.18" />
      <text
        x="12"
        y="16.2"
        textAnchor="middle"
        fontFamily="system-ui, sans-serif"
        fontSize="9.5"
        fontWeight="800"
        fill="#160b23"
      >
        5
      </text>
    </svg>
  );
}

export function CssIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" {...props}>
      <path d="M4.2 2.4h15.6l-1.4 16.4L12 21.6l-6.4-2.8L4.2 2.4Z" fill="currentColor" />
      <path d="M12 3.8h6.3l-1.2 13.6L12 19.7V3.8Z" fill="#000" opacity="0.18" />
      <text
        x="12"
        y="16.2"
        textAnchor="middle"
        fontFamily="system-ui, sans-serif"
        fontSize="9.5"
        fontWeight="800"
        fill="#071527"
      >
        3
      </text>
    </svg>
  );
}

export function JsIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" {...props}>
      <rect x="2.6" y="2.6" width="18.8" height="18.8" rx="3" fill="currentColor" />
      <text
        x="15.2"
        y="18.1"
        textAnchor="middle"
        fontFamily="system-ui, sans-serif"
        fontSize="8.5"
        fontWeight="800"
        fill="#17130a"
      >
        JS
      </text>
      <path d="M5.6 16.6V8h2v8.6H5.6Z" fill="#17130a" opacity="0.28" />
    </svg>
  );
}

const iconMap = {
  html5: HtmlIcon,
  css3: CssIcon,
  javascript: JsIcon,
  react: ReactIcon,
  nextjs: NextIcon,
  code: Code,
  responsive: Responsive,
  layout: Layout,
  refresh: Refresh,
  globe: Globe,
  mail: Mail,
  github: GitHub,
  linkedin: LinkedIn,
  whatsapp: WhatsApp,
};

export function Icon({ name, ...props }) {
  const Component = iconMap[name];
  if (!Component) return null;
  return <Component {...props} />;
}
