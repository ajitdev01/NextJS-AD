
export default function LearnLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
                       
                        <p className="mt-2 text-sm text-gray-600">
                           <ul>
                            <li>Installation</li>
                            <li>Routing</li>
                            <li>Layout</li>
                            <li>Pagination</li>
                            <li>Api References</li>
                           </ul>
                        </p>
                    </div>

                    <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
                
                        <p className="mt-2 text-sm text-gray-600">
                             <section>{children}</section>
                        </p>
                    </div>

                    <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
                        
                        <p className="mt-2 text-sm text-gray-600">
                            Add your third block content here.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
