
import Link from "next/link";
import { Keyboard, Unplug, Mouse, Wifi } from "lucide-react";
const Categories = ({ categoryName, categories, setCategoryName }) => {
    // console.log(categoryId)
    return (
        <div className="w-[300px] p-3 mt-10 shadow-lg border border-zinc-400 rounded-[.5rem]">
            <h3 className="font-bold text-lg">Categories</h3>
            <div className="h-[1px] w-full bg-designColor mt-2" ></div>
            <ul className="text-zinc-500 mt-5">
                {categories?.map(item => <li key={item.id}
                    className="font-bold items-center text-lg hover:bg-zinc-200 p-2 rounded-[.5rem] flex gap-2 mt-3 hover:text-black cursor-pointer "
                    onClick={() => setCategoryName(item.attributes.title)}
                >
                    <i>{item.id}</i>
                    <Mouse />
                    <p
                    >{item.attributes.title.charAt(0).toUpperCase() + item.attributes.title.slice(1)}</p>
                </li>)}
            </ul>
        </div>
    );
};

export default Categories;
