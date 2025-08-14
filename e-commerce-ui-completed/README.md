# IslemShop - Modern E-commerce Platform

A full-stack e-commerce solution built with Next.js 15, featuring a customer-facing storefront and an admin dashboard for business management.

## 🚀 Features

### Customer Storefront
- **Product Catalog**: Browse products with filtering and search
- **Product Details**: View detailed product information with variant selection
- **Shopping Cart**: Add/remove items with quantity management
- **Checkout Process**: Multi-step checkout with shipping and payment forms
- **Responsive Design**: Mobile-first approach with modern UI
- **Real-time Updates**: Live cart updates and notifications

### Admin Dashboard
- **Product Management**: Add, edit, and manage products
- **User Management**: Customer account administration
- **Order Tracking**: Monitor transactions and payments
- **Analytics**: Sales charts and business insights
- **Category Management**: Organize products by categories
- **Dark/Light Theme**: Toggle between themes

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Zustand** - Lightweight state management
- **React Hook Form** - Form handling with validation
- **Zod** - Schema validation
- **Lucide React** - Icon library

### UI Components
- **Shadcn/ui** - Re-usable component library
- **React Toastify** - Notification system
- **TanStack Table** - Data table components
- **React Day Picker** - Date selection

## 📁 Project Structure

```
e-commerce-ui-completed/
├── client/                 # Customer-facing storefront
│   ├── src/
│   │   ├── app/           # Next.js App Router pages
│   │   ├── components/    # Reusable UI components
│   │   ├── stores/        # Zustand state management
│   │   └── types.ts       # TypeScript type definitions
│   └── public/            # Static assets
└── admin/                 # Admin dashboard
    ├── src/
    │   ├── app/           # Admin pages and routes
    │   ├── components/    # Admin UI components
    │   └── ui/            # Shadcn/ui components
    └── public/            # Admin assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd e-commerce-ui-completed
   ```

2. **Install dependencies for both applications**
   ```bash
   # Install client dependencies
   cd client
   npm install
   
   # Install admin dependencies
   cd ../admin
   npm install
   ```

3. **Run both applications**
   ```bash
   # Terminal 1 - Start client (port 3000)
   cd client
   npm run dev
   
   # Terminal 2 - Start admin (port 3001)
   cd admin
   npm run dev
   ```

4. **Access the applications**
   - **Customer Storefront**: http://localhost:3000
   - **Admin Dashboard**: http://localhost:3001

## 🎯 Key Features Explained

### Customer Experience
- **Product Discovery**: Browse products by category with real-time filtering
- **Variant Selection**: Choose product sizes and colors with visual feedback
- **Cart Management**: Persistent cart with quantity controls
- **Checkout Flow**: Streamlined 3-step checkout process

### Admin Capabilities
- **Dashboard Overview**: Key metrics and recent activity
- **Product CRUD**: Full product lifecycle management
- **User Administration**: Customer data and account management
- **Order Processing**: Track and manage customer orders
- **Analytics**: Business insights and performance metrics

## 🎨 Design System

The project uses a consistent design system with:
- **Color Palette**: Modern, accessible color scheme
- **Typography**: Geist font family for optimal readability
- **Spacing**: Consistent spacing scale using Tailwind
- **Components**: Reusable UI components with Shadcn/ui
- **Responsive**: Mobile-first responsive design

## 🔧 Development

### Available Scripts

**Client Application:**
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

**Admin Application:**
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Code Quality
- **TypeScript**: Full type safety across the application
- **ESLint**: Code linting and formatting
- **Clean Code**: Following clean code principles
- **Component Architecture**: Modular, reusable components

## 🚀 Deployment

### Vercel Deployment

1. **Connect to Vercel**
   - Import your GitHub repository
   - Configure as a monorepo

2. **Client Project Settings**
   - Root Directory: `e-commerce-ui-completed/client`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Node.js Version: 20

3. **Admin Project Settings**
   - Root Directory: `e-commerce-ui-completed/admin`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Node.js Version: 20

### Environment Variables
No environment variables required for basic functionality.

## 📱 Responsive Design

Both applications are fully responsive and optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔒 Security Features

- **Input Validation**: Zod schema validation
- **Type Safety**: TypeScript throughout
- **Secure Forms**: React Hook Form with validation
- **XSS Protection**: Next.js built-in security

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request





**Built with ❤️ using Next.js, TypeScript, and modern web technologies**
