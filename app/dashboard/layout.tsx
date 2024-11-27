// app/dashboard/layout.tsx - Applies to all /admin/* routes

// All dashboard functionality

import '@/styles/global.css'

export default function AdminLayout({ children }: {children: React.ReactNode }) {
    return (
        <div>
        <nav>Admin Navigation</nav>     {/* persists across all admin-related */}
        {children}                      {/* redners here */}
        </div>
    )
}