import Image from 'next/image'

const style = {
  wrapper: `flex cursor-pointer items-center space-x-3`,
  svgText: `h-14 w-24 fill-[#04111D] pt-1 dark:fill-white`,
}

const Logo = () => {
  return (
    <div className={style.wrapper}>
      <Image src='/logo.png' width={60} height={60} />

    </div>
  )
}

export default Logo
