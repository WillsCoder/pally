import './globals.css'

export const metadata = {
  title: 'Lagos Grocery Store | Affordable foodstuff Shopping at Pricepally',
  description: 'Affordable foodstuff Shopping at Pricepally',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <title>Lagos Grocery Store | Affordable foodstuff Shopping at Pricepally</title>
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" type="image/png" href="../assets/images/favicon.png" />
          <link href="../assets/css/bootstrap.min.css" rel="stylesheet"/>
          <link href="../assets/css/style.css" rel="stylesheet"/>
      </head>
      <body>{children}</body>
    </html>
  )
}
