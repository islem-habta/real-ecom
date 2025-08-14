# IslemShop - Customer Storefront

The customer-facing e-commerce storefront for IslemShop, built with Next.js 15 and modern web technologies.

## 🛍️ Features

- **Product Catalog**: Browse and search products with category filtering
- **Product Details**: View detailed product information with size/color selection
- **Shopping Cart**: Add items to cart with quantity management
- **Checkout Process**: Multi-step checkout with shipping and payment forms
- **Responsive Design**: Mobile-first responsive design
- **Real-time Updates**: Live cart updates and toast notifications

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## 🛠️ Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Zustand** - State management
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Lucide React** - Icons

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── cart/              # Shopping cart page
│   ├── products/          # Product listing and details
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── Navbar.tsx         # Navigation bar
│   ├── Footer.tsx         # Footer component
│   ├── ProductCard.tsx    # Product display card
│   ├── ProductList.tsx    # Product grid
│   └── ...                # Other components
├── stores/                # State management
│   └── cartStore.ts       # Shopping cart state
└── types.ts               # TypeScript definitions
```

## 🎯 Key Components

### Shopping Experience
- **Product Discovery**: Browse products by category
- **Variant Selection**: Choose sizes and colors
- **Cart Management**: Persistent cart with controls
- **Checkout Flow**: Streamlined 3-step process

## 🔧 Development

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🚀 Deployment

Deploy to Vercel with these settings:
- **Root Directory**: `e-commerce-ui-completed/client`
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Node.js Version**: 20

---

**Part of the IslemShop e-commerce platform**
