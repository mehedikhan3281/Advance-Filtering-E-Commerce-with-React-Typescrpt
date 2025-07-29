import { useEffect, useState } from "react"

interface Product {
    category: string
}

interface FetchResponse {
    products: Product[]
}

const Sidebar = () => {
    const [categories, setCategories] = useState<string[]>([]);
    const [keywords] = useState<string[]>([
        "apple",
        "watch",
        "Fashion",
        "trend",
        "shoes",
        "shirt",
    ])

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products')
                const data: FetchResponse = await response.json()
                const uniqueCategories = Array.from(new Set(data.products.map((product) => product.category)))
                console.log("unique categories", uniqueCategories)
                setCategories(uniqueCategories)

            } catch (error) {
                console.log("Error Fetching Product", error)
            }
        }

        fetchCategories()

    }, [])

    return (
        <div className="w-64 p-5 h-screen">
            <div className="text-2xl font-bold mb-10 mt-4">Khan Store</div>
            <section>
                <input
                    type="text"
                    className="border-2 rounded px-2 sm:mb-2"
                    placeholder="Search Product"
                />

                <div className="flex justify items-center">
                    <input
                        type="text"
                        className="border-2 px-5 mr-2 py-3 mb-3 w-full"
                        placeholder="Min"
                    />
                    <input
                        type="text"
                        className="border-2 px-5 mr-2 py-3 mb-3 w-full"
                        placeholder="Max"
                    />
                </div>

            </section>
        </div>
    )
}

export default Sidebar