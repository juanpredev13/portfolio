import Image from 'next/image'
export default function Logo(){
    return (
        <div>
            <Image
                src="/logo.svg"
                width={110}
                height={110}
                alt="Picture of the author"
            />
      </div>
    )
}