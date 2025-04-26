// Product related types
export interface Product {
    id: string
    name: string
    price: number
    description: string
    imageUrl: string
}

// Image with product annotations
export interface LookImage {
    id: string
    url: string
    type: 'image' | 'video'
}

// Complete look with images and videos
export interface Look {
    id: string
    title: string
    description: string
    media: LookImage[]
    relatedProducts: Product[]
}

// Navigation item type
export interface NavItem {
    name: string
    icon: string
    path: string
}
