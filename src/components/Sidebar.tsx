import { useEffect, useState } from "react"
import { useFilter } from "./FilterContext"

interface Product {
    category: string
}

interface FetchResponse {
    products: Product[]
}

const Sidebar = () => {
    const {
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        keyword,
        setKeyword
    } = useFilter()

    const [categories, setCategories] = useState<string[]>([]);
    const [keywords] = useState<string[]>([
        "apple",
        "watch",
        "Fashion",
        "trend",
        "shoes",
        "shirt",
    ])

    const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setMinPrice(value ? parseFloat(value) : undefined);
    }

    const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setMaxPrice(value ? parseFloat(value) : undefined);
    }

    const handleRadioChangeCategories = (category: string) => {
        setSelectedCategory(category)
    }

    const handleKeywordClcik = (keyword: string) => {
        setKeyword(keyword)
    }

    const handleResetFilters = () => {
        setSearchQuery('')
        setSelectedCategory('')
        setMinPrice(undefined)
        setMaxPrice(undefined)
        setKeyword('')
    }

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products')
                const data: FetchResponse = await response.json()
                const uniqueCategories = Array.from(new Set(data.products.map((product) => product.category)))
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
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />

                <div className="flex justify mt-3 items-center">
                    <input
                        type="text"
                        className="border-2 px-5 mr-2 py-3 mb-3 w-full"
                        placeholder="Min"
                        value={minPrice ?? ""}
                        onChange={handleMinPriceChange}
                    />
                    <input
                        type="text"
                        className="border-2 px-5 mr-2 py-3 mb-3 w-full"
                        placeholder="Max"
                        value={maxPrice ?? ""}
                        onChange={handleMaxPriceChange}
                    />
                </div>

                <div className="mb-5">
                    <h2 className="text-xl font-semibold mb-3">Categories</h2>
                </div>

                <section>
                    {
                        categories.map((category, index) => (
                            <label key={index} className="block mb-2">
                                <input
                                    type="radio"
                                    value={category}
                                    onChange={() => handleRadioChangeCategories(category)}
                                    checked={selectedCategory === category}
                                    name="category"
                                    className="mr-2 w-4 h-4" />
                                {category.toUpperCase()}
                            </label>
                        ))
                    }
                </section>

                {/* keyword section */}
                <div className="mb-5 mt-4">
                    <h2 className="text-xl font-semibold mb-3">Keywords</h2>
                    <div>
                        {
                            keywords.map((keyword, index) => (
                                <button 
                                key={index} 
                                className="block mb-2 px-4 w-full text-left border rounded hover:bg-gray-200"
                                onClick={() => handleKeywordClcik(keyword)}
                                >
                                    {keyword.toUpperCase()}
                                </button>
                            ))
                        }
                    </div>
                </div>

                <button onClick={handleResetFilters} className="w-ful mb-1 px-3 bg-black text-white rounded mt-5 py-2">
                    Reset Filters
                </button>
            </section>
        </div>
    )
}

export default Sidebar