const blogPosts = [
    {
      title: 'Success Case: How Recipe Schema Markup Increased Organic Traffic',
      excerpt: 'Learn how Recipe Schema Markup amplified organic traffic. Unveil the potential of structured data for online success.',
      author: 'Erik Bonsaksen',
      date: '2023-08-25',
      link: '/blog/success-case-recipe-schema',
    },
    {
      title: 'Boost SEO with Healthcare Schema Markup for the Medical Field',
      excerpt: 'Discover how to utilize healthcare schema markup to enhance SEO and increase visibility on search engines.',
      author: 'Erik Bonsaksen',
      date: '2023-08-23',
      link: '/blog/healthcare-schema-markup',
    },
    {
      title: 'How to Add FAQ Schema to Any Page',
      excerpt: 'FAQ Schema is structured data markup that can be added to a webpage\'s code that contains answers and questions. Add it with structured data publishing tools.',
      author: 'Erik Bonsaksen',
      date: '2023-06-22',
      link: '/blog/add-faq-schema',
    },
  ];
  
  const BlogSection = () => {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">From the Blog</h2>
          <p className="text-gray-600 mb-8">Explore our latest articles on SEO strategies, tips, and insights.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  <a href={post.link} className="hover:text-blue-600">
                    {post.title}
                  </a>
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <p className="text-sm text-gray-500">
                  By {post.author} on {new Date(post.date).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default BlogSection;