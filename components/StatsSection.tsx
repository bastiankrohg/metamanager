const StatsSection = () => {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-800">50+</h3>
              <p className="text-gray-600">Websites Optimized</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800">10x</h3>
              <p className="text-gray-600">Traffic Growth</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800">5M+</h3>
              <p className="text-gray-600">Search Impressions</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default StatsSection;