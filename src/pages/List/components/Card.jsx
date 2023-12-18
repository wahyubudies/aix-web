export default ({ item }) => (
    // <div className="p-7 bg-[#F9FAFB] rounded-xl shadow-lg ring-[#0000000F]">
    <div className="p-7 bg-[#f3f4f6] rounded-xl">
        <img className="w-16" src={item.img} alt={item.alt} />
        <p className="text-[22px] font-semibold mt-5">{item.title}</p>
        <p className="mt-5">{item.desc}</p>
    </div>
);