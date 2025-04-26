import { Look, Product } from '../types'

// Mock products
export const products: Product[] = [
    {
        id: '93a3679c-4c70-4ca4-a061-69e2f3bfad47',
        name: 'Macejkovic, Aufderhar and Littel',
        price: 868,
        description:
            'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
        imageUrl:
            'https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: 'b2b330d2-89ba-42af-8a14-13cfa26225d1',
        name: 'Rau-Schumm',
        price: 797,
        description:
            'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
        imageUrl:
            'https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: '414bb153-728d-47b6-aa22-32955389e909',
        name: 'Koelpin Inc',
        price: 2908,
        description:
            'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
        imageUrl:
            'https://images.pexels.com/photos/2887766/pexels-photo-2887766.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: '602e1e35-7b89-410a-b6b4-2ccffa5106bc',
        name: 'Reichel and Sons',
        price: 2455,
        description:
            'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
        imageUrl:
            'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: 'cb448205-5d7a-45ed-af08-d0d25da81b08',
        name: 'Rosenbaum Group',
        price: 4038,
        description:
            'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
        imageUrl:
            'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: '18ef6944-b9a9-4655-b13c-4324cc80f553',
        name: 'Lebsack, Cormier and Buckridge',
        price: 1504,
        description: 'In quis justo.',
        imageUrl:
            'https://images.pexels.com/photos/2584270/pexels-photo-2584270.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: '72069cfa-3574-44c3-a376-85e1a7ed6b5a',
        name: 'Zboncak, Hegmann and Dicki',
        price: 2210,
        description:
            'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
        imageUrl:
            'https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: '6a0f9575-d082-4304-b47a-8c6e0ad91af6',
        name: 'Kshlerin Inc',
        price: 2715,
        description:
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
        imageUrl:
            'https://images.pexels.com/photos/2887766/pexels-photo-2887766.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: '80e26e0d-2c86-4860-9770-37cfb1482d9a',
        name: "Bogisich, Reinger and O'Reilly",
        price: 713,
        description:
            'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
        imageUrl:
            'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: 'f3787bd8-2819-49aa-8070-7dea0b82d592',
        name: 'Haley-Lowe',
        price: 3981,
        description:
            'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
        imageUrl:
            'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
]
// Mock looks
export const looks: Look[] = [
    {
        id: 'look1',
        title: 'Summer Essentials',
        description: 'Light and airy pieces perfect for warm weather.',
        media: [
            {
                id: 'vid1',
                type: 'video',
                url: 'https://www.w3schools.com/html/mov_bbb.mp4',
                annotations: [],
            },
            {
                id: 'img1',
                type: 'image',
                url: 'https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=600',
                annotations: [
                    {
                        id: 'a1',
                        productId: 'p1',
                        x: 50,
                        y: 45,
                        product: products[0],
                    },
                    {
                        id: 'a2',
                        productId: 'p2',
                        x: 50,
                        y: 70,
                        product: products[1],
                    },
                ],
            },
            {
                id: 'img2',
                type: 'image',
                url: 'https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600',
                annotations: [
                    {
                        id: 'a3',
                        productId: 'p1',
                        x: 55,
                        y: 60,
                        product: products[0],
                    },
                ],
            },
        ],
        relatedProducts: [products[0], products[1]],
    },
    {
        id: 'look2',
        title: 'Urban Streetwear',
        description: 'Bold and contemporary pieces for the city.',
        media: [
            {
                id: 'img3',
                type: 'image',
                url: 'https://images.pexels.com/photos/2887766/pexels-photo-2887766.jpeg?auto=compress&cs=tinysrgb&w=600',
                annotations: [
                    {
                        id: 'a4',
                        productId: 'p3',
                        x: 60,
                        y: 30,
                        product: products[2],
                    },
                    {
                        id: 'a5',
                        productId: 'p5',
                        x: 60,
                        y: 60,
                        product: products[4],
                    },
                ],
            },
            {
                id: 'img4',
                type: 'image',
                url: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600',
                annotations: [
                    {
                        id: 'a7',
                        productId: 'p4',
                        x: 60,
                        y: 60,
                        product: products[3],
                    },
                ],
            },
        ],
        relatedProducts: [products[2], products[4]],
    },
    {
        id: 'look3',
        title: 'Minimalist Elegance',
        description: 'Clean lines and subtle details for a refined style.',
        media: [
            {
                id: 'img5',
                type: 'image',
                url: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600',
                annotations: [
                    {
                        id: 'a9',
                        productId: 'p4',
                        x: 50,
                        y: 50,
                        product: products[3],
                    },
                ],
            },
            {
                id: 'img6',
                type: 'image',
                url: 'https://images.pexels.com/photos/2584270/pexels-photo-2584270.jpeg?auto=compress&cs=tinysrgb&w=600',
                annotations: [
                    {
                        id: 'a10',
                        productId: 'p5',
                        x: 50,
                        y: 50,
                        product: products[3],
                    },
                ],
            },
        ],
        relatedProducts: [products[0], products[1]],
    },
]
