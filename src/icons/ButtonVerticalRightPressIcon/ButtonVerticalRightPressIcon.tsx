import { IconProps } from "../../types"

export default function ButtonVerticalRightPressIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.392578125 35.287109375"
          className={className}
        >
          <path
            d="              M-0.0003 9.5428V25.7438C-0.0003 31.6228 3.7597 35.2868 9.7757 35.2868H15.5447C20.8497 35.2868 24.3087 31.5958 24.3087 25.7438V24.4868L19.4687 20.2068V25.7438C19.4687 28.6148 17.8967 30.4608 15.5177 30.4608C13.1527 30.4608 11.5797 28.6148 11.5797 25.7438V9.5428C11.5797 6.6858 13.1527 4.8398 15.5177 4.8398C17.8967 4.8398 19.4687 6.6858 19.4687 9.5428V15.0798L24.3087 10.8278V9.5428C24.3087 3.7048 20.8637 0.0138 15.5447 -0.0002H9.7757C3.7597 -0.0002 -0.0003 3.6778 -0.0003 9.5428ZM6.7407 9.5428V25.7438C6.7407 27.3438 6.9997 28.7788 7.4787 30.0238C5.8247 29.3258 4.8537 27.8088 4.8537 25.7438V9.5428C4.8537 7.4788 5.8247 5.9748 7.4787 5.2778C6.9997 6.5218 6.7407 7.9568 6.7407 9.5428ZM21.1507 18.7028L26.2637 23.1878C27.3707 24.1578 28.8477 23.5698 28.8477 22.0258V19.7008H35.3417C36.5997 19.7008 37.3927 18.7848 37.3927 17.6368C37.3927 16.4878 36.5997 15.5718 35.3417 15.5718H28.8477V13.1938C28.8477 11.7578 27.3437 11.1288 26.2637 12.0858L21.1507 16.5428C20.4667 17.1578 20.4667 18.1018 21.1507 18.7028Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.646484375 34.330078125"
          className={className}
        >
          <path
            d="              M-0.0003 8.436V25.908C-0.0003 31.076 3.3637 34.33 8.6817 34.33H13.4807C18.1697 34.33 21.1917 30.953 21.1917 25.908V23.516L17.6637 20.398V25.908C17.6637 28.793 16.0097 30.816 13.4667 30.816C10.9377 30.816 9.2697 28.793 9.2697 25.908V8.436C9.2697 5.551 10.9377 3.527 13.4667 3.527C16.0097 3.527 17.6637 5.551 17.6637 8.436V13.932L21.1917 10.828V8.436C21.1917 3.391 18.1697 0.014 13.4807 0H8.6817C3.3637 0 -0.0003 3.268 -0.0003 8.436ZM5.7557 8.436V25.908C5.7557 27.686 6.1247 29.272 6.8227 30.557C4.7717 29.941 3.5277 28.26 3.5277 25.908V8.436C3.5277 6.07 4.7717 4.389 6.8227 3.773C6.1247 5.072 5.7557 6.645 5.7557 8.436ZM18.1977 18.115L22.8187 22.189C23.7757 23.037 25.1017 22.531 25.1017 21.178V18.785H32.0337C33.0037 18.785 33.6467 18.074 33.6467 17.172C33.6467 16.256 33.0037 15.545 32.0337 15.545H25.1017V13.111C25.1017 11.84 23.7887 11.279 22.8187 12.127L18.1977 16.188C17.5687 16.748 17.5687 17.568 18.1977 18.115Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.62890625 34.8359375"
          className={className}
        >
          <path
            d="              M-0.0003 9.0231V25.8261C-0.0003 31.3631 3.5687 34.8361 9.2557 34.8361H14.5607C19.5917 34.8361 22.8317 31.2951 22.8317 25.8261V24.0351L18.6207 20.3031V25.8261C18.6207 28.6971 17.0077 30.6251 14.5607 30.6251C12.0997 30.6251 10.4867 28.6971 10.4867 25.8261V9.0231C10.4867 6.1521 12.0997 4.2251 14.5607 4.2251C17.0077 4.2251 18.6207 6.1521 18.6207 9.0231V14.5331L22.8317 10.8281V9.0231C22.8317 3.5551 19.5917 0.0141 14.5607 0.0001H9.2557C3.5687 0.0001 -0.0003 3.4861 -0.0003 9.0231ZM6.2757 9.0231V25.8261C6.2757 27.5081 6.5767 29.0121 7.1507 30.2831C5.3187 29.6131 4.2247 28.0271 4.2247 25.8261V9.0231C4.2247 6.8221 5.3187 5.2361 7.1507 4.5661C6.5767 5.8381 6.2757 7.3421 6.2757 9.0231ZM19.7557 18.4301L24.6367 22.7091C25.6757 23.6391 27.0837 23.0781 27.0837 21.6291V19.2641H33.7837C34.9047 19.2641 35.6287 18.4431 35.6287 17.4181C35.6287 16.3791 34.9047 15.5591 33.7837 15.5591H27.0837V13.1521C27.0837 11.7991 25.6617 11.2111 24.6367 12.1001L19.7557 16.3791C19.0997 16.9671 19.0997 17.8421 19.7557 18.4301Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.068359375 31.923828125"
          className={className}
        >
          <path
            d="              M-0.0003 6.6988V25.2108C-0.0003 29.2578 2.8027 31.9238 7.0687 31.9238H10.4317C14.2047 31.9238 16.6797 29.1208 16.6797 25.2108V20.7808L14.9977 19.3048V25.2108C14.9977 28.0958 13.1797 30.2288 10.4317 30.2288C7.6977 30.2288 5.8927 28.0958 5.8927 25.2108V6.6988C5.8927 3.8148 7.6977 1.6818 10.4317 1.6818C13.1797 1.6818 14.9977 3.8148 14.9977 6.6988V12.6058L16.6797 11.1428V6.6988C16.6797 2.7888 14.2047 -0.0002 10.4317 -0.0002H7.0687C2.8027 -0.0002 -0.0003 2.6518 -0.0003 6.6988ZM4.1977 6.6988V25.2108C4.1977 27.2348 4.8677 28.9568 6.0157 30.1598C3.3767 29.7638 1.6957 27.8908 1.6957 25.2108V6.6988C1.6957 4.0198 3.3767 2.1468 6.0157 1.7638C4.8677 2.9528 4.1977 4.6758 4.1977 6.6988ZM14.4097 16.6938L18.4157 20.1248C19.0727 20.7128 20.0297 20.3708 20.0297 19.4278V16.8578H27.1657C27.6857 16.8578 28.0687 16.4608 28.0687 15.9688C28.0687 15.4488 27.6857 15.0668 27.1657 15.0668H20.0297V12.4688C20.0297 11.5668 19.0997 11.1838 18.4157 11.7848L14.4097 15.2168C13.9317 15.6268 13.9177 16.2558 14.4097 16.6938Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.25390625 33.71484375"
          className={className}
        >
          <path
            d="              M-0.0003 7.7242V26.0042C-0.0003 30.7212 3.1037 33.7152 7.9847 33.7152H12.1547C16.4477 33.7152 19.1957 30.5432 19.1957 26.0042V22.8872L16.5157 20.5212V26.0042C16.5157 28.9022 14.8067 31.0492 12.1547 31.0492C9.5017 31.0492 7.7927 28.9022 7.7927 26.0042V7.7242C7.7927 4.8262 9.5017 2.6792 12.1547 2.6792C14.8067 2.6792 16.5157 4.8262 16.5157 7.7242V13.1932L19.1957 10.8422V7.7242C19.1957 3.1852 16.4477 0.0002 12.1547 0.0002H7.9847C3.1037 0.0002 -0.0003 3.0082 -0.0003 7.7242ZM5.1267 7.7242V26.0042C5.1267 27.9182 5.6187 29.5992 6.5077 30.8852C4.1287 30.3652 2.6797 28.5742 2.6797 26.0042V7.7242C2.6797 5.1542 4.1287 3.3492 6.5077 2.8302C5.6187 4.1292 5.1267 5.7972 5.1267 7.7242ZM16.3107 17.7322L20.6177 21.5472C21.4647 22.3262 22.6957 21.8752 22.6957 20.6442V18.1972H29.9277C30.6937 18.1972 31.2537 17.6092 31.2537 16.8712C31.2537 16.1192 30.6937 15.5312 29.9277 15.5312H22.6957V13.0562C22.6957 11.8812 21.5057 11.3752 20.6177 12.1542L16.3107 15.9692C15.7227 16.4742 15.7087 17.2132 16.3107 17.7322Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.9140625 33.373046875"
          className={className}
        >
          <path
            d="              M-0.0003 7.3281V26.0581C-0.0003 30.5161 2.9667 33.3731 7.6017 33.3731H11.4157C15.4767 33.3731 18.0607 30.3101 18.0607 26.0581V22.5451L15.8727 20.6031V26.0581C15.8727 28.9711 14.1227 31.1721 11.4157 31.1721C8.7087 31.1721 6.9727 28.9711 6.9727 26.0581V7.3281C6.9727 4.4161 8.7087 2.2011 11.4157 2.2011C14.1227 2.2011 15.8727 4.4161 15.8727 7.3281V12.7831L18.0607 10.8421V7.3281C18.0607 3.0621 15.4767 0.0001 11.4157 0.0001H7.6017C2.9667 0.0001 -0.0003 2.8571 -0.0003 7.3281ZM4.7717 7.3281V26.0581C4.7717 28.0551 5.3457 29.7911 6.3707 31.0761C3.8007 30.6391 2.2017 28.7661 2.2017 26.0581V7.3281C2.2017 4.6211 3.8007 2.7481 6.3707 2.3101C5.3457 3.5821 4.7717 5.3181 4.7717 7.3281ZM15.2437 17.5271L19.3867 21.1911C20.1797 21.9161 21.3557 21.5061 21.3557 20.3441V17.8691H28.7387C29.3947 17.8691 29.9137 17.3491 29.9137 16.7071C29.9137 16.0371 29.3947 15.5311 28.7387 15.5311H21.3557V13.0291C21.3557 11.9081 20.2207 11.4301 19.3867 12.1681L15.2437 15.8461C14.6837 16.3381 14.6697 17.0211 15.2437 17.5271Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.29296875 33.974609375"
          className={className}
        >
          <path
            d="              M-0.0003 8.0252V25.9492C-0.0003 30.8572 3.2127 33.9742 8.2847 33.9742H12.7287C17.1857 33.9742 20.0567 30.7202 20.0567 25.9492V23.1462L17.0077 20.4672V25.9492C17.0077 28.8472 15.3267 30.9392 12.7287 30.9392C10.1177 30.9392 8.4357 28.8472 8.4357 25.9492V8.0252C8.4357 5.1272 10.1177 3.0352 12.7287 3.0352C15.3267 3.0352 17.0077 5.1272 17.0077 8.0252V13.5082L20.0567 10.8282V8.0252C20.0567 3.2672 17.1857 0.0002 12.7287 0.0002H8.2847C3.2127 0.0002 -0.0003 3.1172 -0.0003 8.0252ZM5.4007 8.0252V25.9492C5.4007 27.8082 5.8377 29.4492 6.6307 30.7482C4.4027 30.1742 3.0487 28.4242 3.0487 25.9492V8.0252C3.0487 5.5512 4.4027 3.8012 6.6307 3.2262C5.8377 4.5252 5.4007 6.1662 5.4007 8.0252ZM17.1177 17.8962L21.5747 21.8202C22.4627 22.6272 23.7347 22.1482 23.7347 20.8632V18.4432H30.8297C31.6917 18.4432 32.2927 17.8012 32.2927 16.9942C32.2927 16.1742 31.6917 15.5312 30.8297 15.5312H23.7347V13.0702C23.7347 11.8532 22.4907 11.3342 21.5747 12.1402L17.1177 16.0512C16.5157 16.5842 16.5157 17.3632 17.1177 17.8962Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.634765625 30.009765625"
          className={className}
        >
          <path
            d="              M-0.0003 5.8928V24.1168C-0.0003 27.6168 2.5977 30.0098 6.3707 30.0098H9.1467C12.5367 30.0098 14.8617 27.5758 14.8617 24.1168V18.4708L13.8357 17.6228V24.1168C13.8357 26.9608 11.9217 28.9978 9.1467 28.9978C6.3707 28.9978 4.4567 26.9608 4.4567 24.1168V5.8928C4.4567 3.0488 6.3707 1.0118 9.1467 1.0118C11.9217 1.0118 13.8357 3.0488 13.8357 5.8928V12.3868L14.8617 11.5388V5.8928C14.8617 2.4338 12.5367 -0.0002 9.1467 -0.0002H6.3707C2.5977 -0.0002 -0.0003 2.3928 -0.0003 5.8928ZM3.4457 5.8928V24.1168C3.4457 26.2088 4.2927 27.9318 5.7287 28.9708C2.9117 28.7108 1.0117 26.8108 1.0117 24.1168V5.8928C1.0117 3.2128 2.9117 1.2988 5.7287 1.0528C4.2927 2.0778 3.4457 3.8008 3.4457 5.8928ZM13.3167 15.5998L17.1307 18.7308C17.5957 19.1268 18.2927 18.8948 18.2927 18.2518V15.5448H25.0877C25.4157 15.5448 25.6347 15.3128 25.6347 15.0118C25.6347 14.6968 25.4157 14.4788 25.0877 14.4788H18.2927V11.7578C18.2927 11.1288 17.6097 10.8828 17.1307 11.2788L13.3167 14.4098C12.9477 14.7248 12.9067 15.2578 13.3167 15.5998Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.376953125 29.025390625"
          className={className}
        >
          <path
            d="              M-0.0003 5.4826V23.5566C-0.0003 26.7696 2.4887 29.0256 6.0157 29.0256H8.4767C11.6757 29.0256 13.9177 26.7836 13.9177 23.5566V17.2946L13.2477 16.7616V23.5566C13.2477 26.3726 11.2797 28.3556 8.4767 28.3556C5.6877 28.3556 3.7327 26.3726 3.7327 23.5566V5.4826C3.7327 2.6526 5.6877 0.6696 8.4767 0.6696C11.2797 0.6696 13.2477 2.6526 13.2477 5.4826V12.2776L13.9177 11.7446V5.4826C13.9177 2.2556 11.6757 -0.0004 8.4767 -0.0004H6.0157C2.4887 -0.0004 -0.0003 2.2556 -0.0003 5.4826ZM3.0627 5.4826V23.5566C3.0627 25.7306 4.0747 27.4536 5.7147 28.3556C2.7347 28.2326 0.6697 26.2776 0.6697 23.5566V5.4826C0.6697 2.7476 2.7347 0.8066 5.7147 0.6836C4.0747 1.5726 3.0627 3.3086 3.0627 5.4826ZM12.7697 15.0386L16.4747 18.0056C16.8437 18.3066 17.3907 18.1286 17.3907 17.6506V14.8746H24.0347C24.2537 14.8746 24.3767 14.7246 24.3767 14.5196C24.3767 14.3006 24.2537 14.1636 24.0347 14.1636H17.3907V11.3886C17.3907 10.9106 16.8437 10.7186 16.4747 11.0336L12.7697 13.9996C12.4417 14.2596 12.4007 14.7386 12.7697 15.0386Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}