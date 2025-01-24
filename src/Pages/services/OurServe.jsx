function OurServe() {
  const cardsData = [
    { content: "تركيب زجاج للمحلات التجاريه" },
    { content: "تركيب زجاج دبل استركشر" },
    { content: "تركيب كلادينج" },
    { content: "تركيب زجاج للمكاتب الاداريه" },
    { content: "تركيب نوافذ زجاج سيكوريت" },
    { content: "  تركيب شورات زجاج سيكوريت" },
    { content: "  تركيب زجاج سيكوريت للمنازل" },
    { content: "تركيب الابواب الزجاج للفنادق  " },
    { content: " تركيب قواطع زجاج سيكوريت " },
    { content: " تفصيل طاولات زجاج سيكوريت " },
    { content: " تغير مكائن الابواب مع الضمان " },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="block rounded-lg arabic-text bg-white p-4 text-gray-800 shadow-md hover:bg-gray-200"
        >
          <h5 className="mb-2 text-xl font-medium leading-tight">
          {}
          </h5>
          <p className="mb-4 text-base">{card.content}</p>
        </div>
      ))}
    </div>
  );
}

export default OurServe;
