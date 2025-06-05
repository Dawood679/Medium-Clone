const Quotes = () => {
  return (
    <div className="h-screen bg-[#fefaf6] flex justify-center items-center px-4">
      <div className="max-w-lg border-l-4 border-gray-300 pl-6">
        <blockquote className="text-xl font-semibold text-gray-700">
          “The customer support I received was exceptional. The support team went above and beyond to address my concerns.”
        </blockquote>
        <div className="pt-5 pb-5">
          <h3 className="text-lg font-bold text-gray-900">Dawood Alam</h3>
          <h4 className="text-sm font-medium text-gray-600">CEO | Acme Corp</h4>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
