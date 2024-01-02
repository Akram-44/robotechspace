
// import Link from "next/link";
// import { ChevronRight       } from "lucide-react";
// const Categories = ({ toggle,categoryName, categories, setCategoryName }) => {
//     // console.log(categoryId)
//     return (
//         <div className={`${!toggle?'w-0':'min-w-[300px] w-[300px] p-3 border '} z-10 absolute lg:relative overflow-hidden bg-white mt-5 shadow-lg border-zinc-400 rounded-md`}>
//             <h3 className="font-bold text-lg mt-3">Categories</h3>
//             <div className="h-[1px] w-full bg-designColor mt-2" ></div>
//             <ul className="text-zinc-600">
//                 {categories?.map(item => <li key={item.id}
//                     className="font-semibold border-b group items-center text-lg hover:bg-zinc-100 p-3  flex hover:text-black cursor-pointer "
//                     onClick={() => setCategoryName(item.attributes.title)}
//                 >
//                     <span className="bg-transparent group-hover:bg-gray-300  rounded-full h-2 w-2 mr-2"></span>
//                     <p
//                     >{item.attributes.title.charAt(0).toUpperCase() + item.attributes.title.slice(1)}</p>
//                     <ChevronRight  className="mt-1 transform transition-transform group-hover:translate-x-2"     size={18}/>
//                 </li>)}
//             </ul>
//         </div>
//     );
// };

// export default Categories;
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useState } from "react"; // Import useState from React

const Categories = ({ toggle, categoryName, categories, setCategoryName }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className={`${!toggle ? 'w-0' : 'min-w-[300px] w-[300px] p-3 border '} z-10 absolute lg:relative overflow-hidden bg-white mt-5 shadow-lg border-zinc-400 rounded-md`}>
      <h3 className="font-bold text-lg mt-3">List Of Categories</h3>
      <div className="h-[1px] w-full bg-gray-400 mt-2"></div>
      <ul className="text-zinc-600">
        {categories?.map(item => (
          <li
            key={item.id}
            className={`font-semibold border-b group items-center text-lg p-3 flex cursor-pointer ${
              selectedCategory === item.attributes.title ? 'bg-gray-100 text-black' : 'hover:bg-zinc-100 text-black'
            }`}
            onClick={() => {
              setCategoryName(item.attributes.title);
              setSelectedCategory(item.attributes.title); // Set the selected category
            }}
          >
            <span className={`${selectedCategory === item.attributes.title ?'bg-green-500':'bg-transparent group-hover:bg-gray-300'} rounded-full h-2 w-2 mt-[4px] mr-2`}></span>
            <p>{item.attributes.title.charAt(0).toUpperCase() + item.attributes.title.slice(1)}</p>
            <ChevronRight className="mt-1 transform transition-transform group-hover:translate-x-2" size={18} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
