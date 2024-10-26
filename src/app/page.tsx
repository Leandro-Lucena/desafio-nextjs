import Link from 'next/link';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function HomePage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();

  return (
    <div className="container mx-auto p-4">
      <div className='px-2'>
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Desafio</span> FullCycle</h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mb-6">Listagem dos melhores posts</p>
      </div>
      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post.id} className="pb-2">
            <Link href={`/posts/${post.id}`}>
              <div className="p-2 bg-slate-500 bg-opacity-10 items-center w-full text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex">
                <span className="flex rounded-full bg-slate-800 uppercase px-2 py-1 text-xs font-bold mr-3">Título</span>
                <span className="font-semibold mr-2 text-left flex-auto">
                  {post.title}
                </span>
                <svg className="fill-current opacity-75 h-4 w-4" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
