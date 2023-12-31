
import Link from "next/link";
import { Keyboard, Unplug, Mouse, Wifi } from "lucide-react";


const Categories = ({ categoryName,categories, setCategoryName }) => {
    // console.log(categoryId)
    return (
        <div className="w-[40%] p-3 mt-10 bg-slate-200">
            <h3 className="font-bold text-lg">Categories</h3>
            <ul className="text-zinc-500 mt-5">
                {categories?.map(item => <li key={item.id}
                    onClick={()=>setCategoryName(item.attributes.title)}
                    className="flex gap-2 mt-3 hover:text-black cursor-pointer duration-200"
                >
                    <Mouse />
                    <p>{item.id}</p>
                    <p>{item.attributes.title}</p>

                    <div className="h-[1px] w-full bg-designColor inline-flex" />
                </li>)}
            </ul>
        </div>
    );
};

export default Categories;
