import { useEffect, useState } from "react";

interface Author {
    name: string;
    image: string;
    isFollowing: boolean;
}

const TopSeller = () => {
    const [author, setAuthor] = useState<Author[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://randomuser.me/api/?results=5");
                const data = await response.json();

                const authorsData: Author[] = data.results.map((user: any) => ({
                    name: `${user.name.first} ${user.name.last}`,
                    image: user.picture.thumbnail,
                    isFollowing: false
                }));
                setAuthor(authorsData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const handleFollowClick = (index: number) => {
        setAuthor((prevAuthor) => prevAuthor.map((item, i) =>
            i === index ? { ...item, isFollowing: !item.isFollowing } : item
        ));
    }

    return (
        <div className="bg-white mx-5 mt-[5rem] border w-[23rem] p-4 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-5">Top Seller</h2>
            <ul>
                {
                    author.map((item, index) => (
                        <li key={index} className="flex items-center mb-4">
                            <img src={item.image} alt={item.name} className="w-10 h-10 rounded-full mr-3" />
                            <div className="flex-1">
                                <p className="text-lg font-semibold">{item.name}</p>
                                <button 
                                onClick={() => handleFollowClick(index)}
                                className={`text-sm ${item.isFollowing ? 'text-blue-500' : 'text-gray-500'}`}>
                                    {item.isFollowing ? 'Following' : 'Follow'}
                                </button>
                            </div>
                        </li>
                    ))
                }

            </ul>
        </div>
    );
};

export default TopSeller;