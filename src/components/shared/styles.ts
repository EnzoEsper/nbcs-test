export const color = {
  // Palette
  primaryMain: "#1547A1",
  secondaryMain: '#016EB9', 
  
  // Background
  backgroundDefault: "#F5F7FA",  

  // Text
  textPrimary: "#2C2E2F",
  textSecondary: "#687173",

  // Status
  errorMain: "#d32f2f",
  warningMain: "#ED6C02",
  infoMain: "#0288d1",
  successMain: "#2e7d32",

  // Common
  orange: '#F89921',
  gold: '#FFAE00',
  lightBlue: '#009CDE',
  seafoam: '#37D5D3',
  purple: '#6F2CAC',
  ultraviolet: '#2A0481',
  green: '#66BF3C',
  grey: '#F5F7FA',
  // Monochrome
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
};

export const typography = {
  type: {
    primary: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  weight: {
    regular: '400',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  size: {
    s1: 12,
    s2: 14,
    s3: 16,
    m1: 20,
    m2: 24,
    m3: 28,
    l1: 32,
    l2: 40,
    l3: 48,
    code: 90,
  },
} as const;