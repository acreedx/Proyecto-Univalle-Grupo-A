import Link from 'next/link'


interface ButtonNavProps {
    href: string;
    text: string;
  }
function ButtonNav({href, text}:ButtonNavProps) {
  return (

<Link href={href}>
  <div className="bg-slate-600 py-2 px-6 rounded-3xl flex items-center space-x-2 hover:bg-blue-500 hover:shadow-md transition duration-300">
    <span className="text-white text-2xl">{text}</span>
  </div>
</Link>
    
  )
}

export default ButtonNav