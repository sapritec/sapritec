import Image from "next/image";

export default function MainSection() {
  return (
    <main className="max-w-[1440px] m-auto flex flex-col justify-center items-center space-y-4 py-16 px-4">
      <h1 className="text-4xl font-bold text-center md:text-right">
        The tool you need to
        <span className="text-teal-400"> build your software</span>
      </h1>
      <p className="text-sm text-gray-400">
        Occaecat est ipsum reprehenderit reprehenderit veniam anim laborum est
        esse duis occaecat reprehenderit pariatur.
      </p>
      <div className="flex gap-4">
        <button className="text-md px-4 md:px-8 py-2 md:py-4 bg-teal-600 rounded-md">
          Sign in now
        </button>
        <button className="text-md px-4 md:px-8 py-2 md:py-4 text-teal-400 rounded-md border-teal-600 border-[1px]">
          Request demo
        </button>
      </div>
      <div className="pt-8">
        <Image
          src={`/assets/home/mainImage.png`}
          width={1176}
          height={600}
          className="select-none rounded-md"
          alt="Home Image"
        />
      </div>
    </main>
  );
}