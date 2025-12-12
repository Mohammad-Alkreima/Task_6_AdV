
const NewsletterHero = () => {
    return (
        <section className="px-4 mb-16">
            <div className="mx-auto max-w-2xl">
                
                <p className="text-sm font-medium text-purple-600 mb-2 sm:text-center text-left">
                    Newsletters
                </p>

                <h1 className="font-bold text-3xl sm:text-4xl mb-4 sm:text-center text-left">
                    Stories and interviews
                </h1>

                <p className="text-gray-600 mb-6 max-w-xl sm:text-center text-left">
                    Subscribe to learn about new product features, the latest in
                    technology, solutions, and updates.
                </p>

                <form className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full sm:w-96 border border-gray-300 rounded-md px-4 py-2"
                    />

                    <button
                        type="submit"
                        className="transition bg-purple-600 hover:bg-purple-700 text-white rounded-md px-6 py-2 h-[48px] w-[118px]"
                    >
                        Subscribe
                    </button>
                </form>

                <p className="text-sm text-gray-400 mt-2 sm:text-center text-left">
                    We care about your data in our{" "}
                    <a href="#" className="underline">
                        privacy policy
                    </a>
                </p>
            </div>
        </section>
    );
};

export default NewsletterHero;
