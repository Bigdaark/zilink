import Image from "next/image"

function Header() {
  return (
    <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap  border-b-2 border-b-gray-500 pb-3">
      <Image
        className="rounded-lg w-12 md:w-14 lg:w-16 h-auto"
        src={"/hami-team.jpg"}
        height={60}
        width={60}
        alt="logo image"
      />
      <h1 className="font-bold text-xl md:text-2xl lg:text-3xl whitespace-nowrap">
        حامی تیم
      </h1>
    </div>
  )
}

export default Header
