import { IconProps } from "../../types"

export default function ArrowTriangleCapsulepathIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.683207777602945 31.9375"
          className={className}
        >
          <path
            d="              M9.6657 31.9375C15.4077 31.9375 19.3317 28.0275 19.3317 22.2575V21.3555C19.3317 20.0565 18.2797 19.0035 16.9807 19.0035C15.6957 19.0035 14.6427 20.0565 14.6427 21.3555V22.2575C14.6427 25.3065 12.6877 27.2485 9.6657 27.2485C6.6307 27.2485 4.6897 25.3065 4.6897 22.2575V9.6655C4.6897 6.6445 6.6307 4.7035 9.6657 4.7035C12.4417 4.7035 14.3007 6.3305 14.6017 8.9275H12.6877C11.3337 8.9275 10.8967 10.1855 11.8257 11.4155L15.6677 16.5705C16.4197 17.5825 17.5957 17.5405 18.3207 16.5705L22.1897 11.4295C23.1057 10.1995 22.7087 8.9275 21.3147 8.9275H19.3047C18.9907 3.5825 15.1617 -0.0005 9.6657 -0.0005C3.9097 -0.0005 -0.0003 3.9235 -0.0003 9.6655V22.2575C-0.0003 28.0275 3.9097 31.9375 9.6657 31.9375Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.290545884882643 30.693359375"
          className={className}
        >
          <path
            d="              M9.0504 30.6936C14.4514 30.6936 18.0884 27.0566 18.0884 21.6286V19.8246C18.0884 18.8676 17.3224 18.1016 16.3654 18.1016C15.4084 18.1016 14.6424 18.8676 14.6424 19.8246V21.6286C14.6424 25.0196 12.4144 27.2346 9.0504 27.2346C5.6734 27.2346 3.4454 25.0196 3.4454 21.6286V9.0366C3.4454 5.6736 5.6734 3.4456 9.0504 3.4456C12.3044 3.4456 14.4784 5.5236 14.6294 8.6956H12.6734C11.5114 8.6956 11.1564 9.6526 11.8944 10.6506L15.3394 15.4086C15.9274 16.2146 16.8434 16.2146 17.4454 15.4086L20.9044 10.6636C21.6294 9.6656 21.3144 8.6956 20.1254 8.6956H18.0884C17.9374 3.4726 14.3414 -0.0004 9.0504 -0.0004C3.6364 -0.0004 0.0004 3.6366 0.0004 9.0366V21.6286C0.0004 27.0566 3.6364 30.6936 9.0504 30.6936Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.024005392139816 31.349609375"
          className={className}
        >
          <path
            d="              M9.3791 31.3497C14.9571 31.3497 18.7441 27.5627 18.7441 21.9567V20.6307C18.7441 19.4957 17.8281 18.5667 16.6931 18.5667C15.5591 18.5667 14.6431 19.4957 14.6431 20.6307V21.9567C14.6431 25.1567 12.5641 27.2347 9.3791 27.2347C6.1801 27.2347 4.1021 25.1567 4.1021 21.9567V9.3647C4.1021 6.1797 6.1801 4.1017 9.3791 4.1017C12.3731 4.1017 14.3831 5.9477 14.6151 8.8047H12.6871C11.4161 8.8047 11.0191 9.9397 11.8531 11.0607L15.5181 16.0237C16.1871 16.9397 17.2401 16.9117 17.9101 16.0237L21.5741 11.0607C22.4081 9.9397 22.0531 8.8047 20.7541 8.8047H18.7301C18.4841 3.5277 14.7791 -0.0003 9.3791 -0.0003C3.7731 -0.0003 0.0001 3.7737 0.0001 9.3647V21.9567C0.0001 27.5627 3.7731 31.3497 9.3791 31.3497Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.39204820069707 28.9296875"
          className={className}
        >
          <path
            d="              M8.1754 28.9296C13.0974 28.9296 16.3384 25.7036 16.3384 20.7536V18.0056C16.3384 17.5276 15.9684 17.1586 15.4904 17.1586C15.0254 17.1586 14.6424 17.5276 14.6424 18.0056V20.7536C14.6424 24.6226 12.0314 27.2476 8.1754 27.2476C4.3204 27.2476 1.6954 24.6226 1.6954 20.7536V8.1616C1.6954 4.3066 4.3204 1.6956 8.1754 1.6956C12.0314 1.6956 14.6424 4.3066 14.6424 8.1616V8.5996H12.4554C11.6754 8.5996 11.4434 9.1606 11.8944 9.7886L14.8754 14.0406C15.2444 14.5746 15.7914 14.5876 16.1604 14.0406L19.1544 9.8026C19.6194 9.1606 19.3864 8.5996 18.5934 8.5996H16.3384V8.1616C16.3384 3.2406 13.0974 -0.0004 8.1754 -0.0004C3.2404 -0.0004 0.0004 3.2406 0.0004 8.1616V20.7536C0.0004 25.7036 3.2404 28.9296 8.1754 28.9296Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.411252164714824 29.88671875"
          className={className}
        >
          <path
            d="              M8.6547 29.8871C13.8497 29.8871 17.2947 26.4411 17.2947 21.2321V18.8531C17.2947 18.1151 16.7067 17.5271 15.9687 17.5271C15.2307 17.5271 14.6427 18.1151 14.6427 18.8531V21.2321C14.6427 24.8421 12.2497 27.2481 8.6547 27.2481C5.0587 27.2481 2.6527 24.8421 2.6527 21.2321V8.6401C2.6527 5.0581 5.0587 2.6521 8.6547 2.6521C12.2087 2.6521 14.6017 5.0041 14.6427 8.5451H12.6597C11.6207 8.5451 11.3337 9.3241 11.9357 10.1581L15.1347 14.6701C15.6267 15.3531 16.3787 15.3671 16.8707 14.6701L20.0977 10.1721C20.6997 9.3241 20.4257 8.5451 19.3597 8.5451H17.2947C17.2537 3.4041 13.8087 0.0001 8.6547 0.0001C3.4587 0.0001 -0.0003 3.4451 -0.0003 8.6401V21.2321C-0.0003 26.4411 3.4587 29.8871 8.6547 29.8871Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.908094687289534 29.44921875"
          className={className}
        >
          <path
            d="              M8.436 29.4494C13.494 29.4494 16.844 26.0994 16.844 21.0134V18.3064C16.844 17.6914 16.365 17.2134 15.75 17.2134C15.135 17.2134 14.643 17.6914 14.643 18.3064V21.0134C14.643 24.7464 12.141 27.2484 8.436 27.2484C4.703 27.2484 2.201 24.7464 2.201 21.0134V8.4214C2.201 4.7164 4.703 2.2014 8.436 2.2014C12.141 2.2014 14.643 4.7164 14.643 8.4214V8.4764H12.646C11.689 8.4764 11.43 9.1464 11.949 9.8984L15.012 14.2594C15.449 14.8754 16.105 14.8884 16.557 14.2594L19.633 9.9124C20.166 9.1464 19.92 8.4764 18.936 8.4764H16.844V8.4214C16.844 3.3494 13.494 0.0004 8.436 0.0004C3.35 0.0004 0 3.3494 0 8.4214V21.0134C0 26.0994 3.35 29.4494 8.436 29.4494Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.78327335981474 30.2421875"
          className={className}
        >
          <path
            d="              M8.8187 30.2419C14.1097 30.2419 17.6367 26.7149 17.6367 21.4099V19.2769C17.6367 18.4429 16.9667 17.7869 16.1327 17.7869C15.2987 17.7869 14.6427 18.4429 14.6427 19.2769V21.4099C14.6427 24.9239 12.3187 27.2479 8.8187 27.2479C5.3187 27.2479 2.9937 24.9239 2.9937 21.4099V8.8179C2.9937 5.3319 5.3187 2.9939 8.8187 2.9939C12.2497 2.9939 14.5467 5.2359 14.6287 8.6129H12.6597C11.5667 8.6129 11.2517 9.4749 11.9077 10.3769L15.2167 14.9979C15.7497 15.7359 16.5707 15.7359 17.1167 14.9979L20.4397 10.3909C21.0957 9.4879 20.7947 8.6129 19.6877 8.6129H17.6367C17.5407 3.4449 14.0407 -0.0001 8.8187 -0.0001C3.5277 -0.0001 -0.0003 3.5409 -0.0003 8.8179V21.4099C-0.0003 26.7149 3.5277 30.2419 8.8187 30.2419Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.696094353346833 28.259765625"
          className={className}
        >
          <path
            d="              M7.8337 28.2598C12.5777 28.2598 15.6547 25.1698 15.6547 20.4118V17.5958C15.6547 17.3218 15.4357 17.0898 15.1487 17.0898C14.8747 17.0898 14.6427 17.3218 14.6427 17.5958V20.4118C14.6427 24.4728 11.8807 27.2348 7.8337 27.2348C3.7867 27.2348 1.0257 24.4728 1.0257 20.4118V7.8338C1.0257 3.7868 3.7867 1.0118 7.8337 1.0118C11.8807 1.0118 14.6427 3.7868 14.6427 7.8338V8.7778H12.1957C11.6487 8.7778 11.4567 9.1738 11.7987 9.6528L14.6837 13.7678C14.9707 14.1778 15.3537 14.1778 15.6407 13.7678L18.5257 9.6658C18.8667 9.1738 18.6757 8.7778 18.1287 8.7778H15.6547V7.8338C15.6547 3.0898 12.5777 -0.0002 7.8337 -0.0002C3.0897 -0.0002 -0.0003 3.0898 -0.0003 7.8338V20.4118C-0.0003 25.1698 3.0897 28.2598 7.8337 28.2598Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.33753335275898 27.91796875"
          className={className}
        >
          <path
            d="              M7.6704 27.9178C12.3044 27.9178 15.3124 24.9098 15.3124 20.2478V17.4048C15.3124 17.2268 15.1624 17.0758 14.9704 17.0758C14.7934 17.0758 14.6424 17.2268 14.6424 17.4048V20.2478C14.6424 24.3908 11.8124 27.2478 7.6704 27.2478C3.5274 27.2478 0.6704 24.3908 0.6704 20.2478V7.6698C0.6704 3.5278 3.5274 0.6698 7.6704 0.6698C11.8124 0.6698 14.6424 3.5278 14.6424 7.6698V8.8728H12.0724C11.6344 8.8728 11.4704 9.1878 11.7574 9.5978L14.5874 13.6448C14.8204 13.9868 15.1344 13.9868 15.3674 13.6448L18.1974 9.5978C18.4844 9.1878 18.3064 8.8728 17.8824 8.8728H15.3124V7.6698C15.3124 3.0218 12.3044 -0.0003 7.6704 -0.0003C3.0074 -0.0003 0.0004 3.0218 0.0004 7.6698V20.2478C0.0004 24.9098 3.0074 27.9178 7.6704 27.9178Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
