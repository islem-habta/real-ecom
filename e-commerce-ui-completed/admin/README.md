# IslemShop - Admin Dashboard

The administrative dashboard for IslemShop, providing comprehensive business management tools for e-commerce operations.

## 🏢 Features

- **Dashboard Overview**: Key metrics and business insights
- **Product Management**: Add, edit, and manage product catalog
- **User Administration**: Customer account management
- **Order Tracking**: Monitor transactions and payments
- **Analytics**: Sales charts and performance metrics
- **Category Management**: Organize products by categories
- **Theme Support**: Dark/light mode toggle

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3001
```

## 🛠️ Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Shadcn/ui** - Component library
- **TanStack Table** - Data tables
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Lucide React** - Icons

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── users/             # User management pages
│   ├── products/          # Product management pages
│   ├── payments/          # Payment/order pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Dashboard homepage
├── components/            # Reusable components
│   ├── AppSidebar.tsx     # Main navigation sidebar
│   ├── Navbar.tsx         # Top navigation bar
│   ├── CardList.tsx       # Dashboard cards
│   ├── AddProduct.tsx     # Product creation form
│   ├── AddUser.tsx        # User creation form
│   └── ...                # Other components
└── ui/                    # Shadcn/ui components
    ├── button.tsx         # Button component
    ├── table.tsx          # Table component
    ├── form.tsx           # Form components
    └── ...                # Other UI components
```

## 🎯 Key Features

### Business Management
- **Dashboard Analytics**: Sales metrics and business insights
- **Product CRUD**: Full product lifecycle management
- **User Administration**: Customer data management
- **Order Processing**: Transaction tracking and management
- **Category Organization**: Product categorization

### User Interface
- **Responsive Design**: Works on all device sizes
- **Theme Toggle**: Switch between light and dark modes
- **Data Tables**: Sortable and filterable data views
- **Form Validation**: Input validation with error handling

## 🔧 Development

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🚀 Deployment

Deploy to Vercel with these settings:
- **Root Directory**: `e-commerce-ui-completed/admin`
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Node.js Version**: 20

## 📊 Dashboard Sections

### Overview
- Sales metrics and charts
- Recent transactions
- Popular products
- User activity

### Products
- Product catalog management
- Add new products
- Edit existing products
- Category management

### Users
- Customer account management
- User profiles and data
- Account administration

### Orders/Payments
- Transaction tracking
- Payment processing
- Order management

---

**Part of the IslemShop e-commerce platform**
