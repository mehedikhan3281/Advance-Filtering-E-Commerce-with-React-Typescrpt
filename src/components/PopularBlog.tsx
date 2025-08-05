import { MessageCircle, ThumbsUp } from "lucide-react";

const PopularBlog = () => {
    const blogs = [
        {
            title: "How AI is Transforming E-Commerce in 2024",
            author: "Alex Carter",
            likes: 245,
            comments: 52
        },
        {
            title: "Top 10 Shopify Stores to Inspire Your Business",
            author: "Maria Lopez",
            likes: 189,
            comments: 34
        },
        {
            title: "The Future of Dropshipping: Trends to Watch",
            author: "James Wilson",
            likes: 312,
            comments: 78
        },
        {
            title: "Why Personalization is Key to E-Commerce Success",
            author: "Sophie Kim",
            likes: 176,
            comments: 41
        },
        {
            title: "5 Strategies to Reduce Cart Abandonment",
            author: "Daniel Brown",
            likes: 220,
            comments: 63
        },
        {
            title: "How to Optimize Your Product Pages for SEO",
            author: "Emma Davis",
            likes: 198,
            comments: 47
        },
        {
            title: "The Rise of Social Commerce: Selling on Instagram & TikTok",
            author: "Ryan Lee",
            likes: 275,
            comments: 59
        },
        {
            title: "Best Payment Gateways for Online Stores in 2024",
            author: "Olivia Smith",
            likes: 154,
            comments: 32
        },
        {
            title: "How to Scale Your E-Commerce Business with Automation",
            author: "Kevin Patel",
            likes: 231,
            comments: 55
        },
        {
            title: "Customer Retention Strategies for E-Commerce Brands",
            author: "Linda Johnson",
            likes: 167,
            comments: 39
        }
    ];
    return (
        <div className="bg-white p-6 w-[23rem] mt-4 border ml-5 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Popular Blogs</h2>
            <ul>
                {
                    blogs.map((blog, index) => (
                        <li key={index} className="mb-4">
                            <div className="flex justify-between items-center">
                                <span className="font-bold mb-2">{blog.title}</span>
                            </div>
                            <span className="text-gray-600">Publish by {blog.author}</span>
                            <div className="flex items-center mt-2">
                                <ThumbsUp size={16}/>
                                <span className="text-gray-500 mr-5 ml-1">{blog.likes}</span>
                                <MessageCircle size={16}/>
                                <span className="text-gray-500 mr-2 ml-2">{blog.comments}</span>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default PopularBlog;