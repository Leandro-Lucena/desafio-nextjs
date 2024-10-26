import Link from "next/link";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function PostPage({ params }: { params: { id: string } }) {

  const { id } = await params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  
  if (!res.ok) {
    throw new Error('Erro ao carregar o post');
  }

  const post: Post = await res.json();

  return (
      <div className="container mx-auto p-4 mt-5 ">
        <h2 className="mx-2 mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">Detalhes do post selecionado</h2>
            <div className="rounded-lg overflow-hidden bg-white bg-opacity-5 p-6 shadow-lg mb-4">
              <div className="flex items-end border-b border-slate-800 py-2 mb-8">
              <h3 className="text-3xl font-bold dark:text-white">{post.title}</h3>
              </div>
              <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mb-6">{post.body}</p>
            </div>
        <Link href={`/`}>
          <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Voltar</button>
        </Link>
      </div>
  );
}
