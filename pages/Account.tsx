import React from 'react'
import { User, Heart, ShoppingBag, Settings, LogOut } from 'lucide-react'

const Account: React.FC = () => {
    const menuItems = [
        { icon: <Heart size={20} />, label: 'Favorites' },
        { icon: <ShoppingBag size={20} />, label: 'Orders' },
        { icon: <Settings size={20} />, label: 'Settings' },
        { icon: <LogOut size={20} />, label: 'Sign Out' },
    ]

    return (
        <div className="container mx-auto pt-6 pb-20 px-4">
            <div className="flex items-center mb-8">
                <div className="h-20 w-20 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                    <User size={40} className="text-gray-500" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Account</h1>
                    <p className="text-gray-600">
                        Sign in to view your profile
                    </p>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                <button className="w-full py-4 bg-black text-white font-medium">
                    Sign In
                </button>
                <div className="p-4 text-center">
                    <span className="text-gray-600">
                        Don't have an account?
                    </span>{' '}
                    <a href="#" className="text-black font-medium">
                        Register
                    </a>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {menuItems.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className="flex items-center p-4">
                            <div className="mr-4 text-gray-700">
                                {item.icon}
                            </div>
                            <span>{item.label}</span>
                        </div>
                        {index < menuItems.length - 1 && (
                            <div className="h-px bg-gray-100" />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default Account
