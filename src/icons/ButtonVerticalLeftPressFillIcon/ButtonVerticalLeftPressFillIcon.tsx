import { IconProps } from "../../types"

export default function ButtonVerticalLeftPressFillIconIcon({
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
            d="              M30.6527 9.5428C30.6527 3.7048 27.1937 -0.0002 21.8617 -0.0002C16.5297 -0.0002 13.0837 3.7048 13.0837 9.5428V10.8008L17.7187 14.8478C19.4417 16.3378 19.4417 18.8948 17.7187 20.3988L13.0837 24.4728V25.7438C13.0837 31.5958 16.5297 35.2868 21.8617 35.2868C27.1937 35.2868 30.6527 31.5958 30.6527 25.7438ZM37.3927 9.5428C37.3927 3.9508 34.3437 0.3558 28.8067 0.0278C31.3637 2.0778 32.9087 5.4008 32.9087 9.5428V25.7438C32.9087 29.8868 31.3637 33.2228 28.8067 35.2598C34.3437 34.9458 37.3927 31.3498 37.3927 25.7438ZM16.2287 18.7028C16.9257 18.1018 16.9257 17.1578 16.2287 16.5428L11.1287 12.0858C10.0347 11.1288 8.5447 11.7578 8.5447 13.1938V15.5718H2.0507C0.7927 15.5718 -0.0003 16.4878 -0.0003 17.6368C-0.0003 18.7848 0.7927 19.7008 2.0507 19.7008H8.5447V22.0258C8.5447 23.5698 10.0077 24.1578 11.1287 23.1878Z"
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
            d="              M27.8907 8.436C27.8907 3.391 24.8687 0 20.1797 0C15.4767 0 12.4547 3.391 12.4547 8.436V10.828L16.8167 14.643C18.3747 16.01 18.3747 18.279 16.8167 19.66L12.4547 23.502V25.908C12.4547 30.953 15.4767 34.33 20.1797 34.33C24.8687 34.33 27.8907 30.953 27.8907 25.908ZM33.6467 8.436C33.6467 3.568 31.1717 0.397 26.3597 0.041C28.6157 1.9 29.9547 4.854 29.9547 8.436V25.908C29.9547 29.477 28.6157 32.443 26.3597 34.303C31.1717 33.961 33.6467 30.775 33.6467 25.908ZM15.4497 18.115C16.0777 17.568 16.0777 16.748 15.4497 16.188L10.8277 12.127C9.8707 11.279 8.5447 11.84 8.5447 13.111V15.545H1.6137C0.6427 15.545 -0.0003 16.256 -0.0003 17.172C-0.0003 18.074 0.6427 18.785 1.6137 18.785H8.5447V21.178C8.5447 22.531 9.8707 23.037 10.8277 22.189Z"
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
            d="              M29.3537 9.0231C29.3537 3.5551 26.0997 0.0001 21.0687 0.0001C16.0367 0.0001 12.7837 3.5551 12.7837 9.0231V10.8141L17.2947 14.7521C18.9357 16.1871 18.9357 18.6071 17.2947 20.0571L12.7837 24.0211V25.8261C12.7837 31.2951 16.0367 34.8361 21.0687 34.8361C26.0997 34.8361 29.3537 31.2951 29.3537 25.8261ZM35.6287 9.0231C35.6287 3.7731 32.8397 0.3691 27.6447 0.0411C30.0647 1.9961 31.5137 5.1411 31.5137 9.0231V25.8261C31.5137 29.6951 30.0647 32.8531 27.6447 34.8091C32.8397 34.4801 35.6287 31.0761 35.6287 25.8261ZM15.8597 18.4301C16.5297 17.8421 16.5297 16.9671 15.8597 16.3791L10.9787 12.1001C9.9527 11.2111 8.5447 11.7991 8.5447 13.1521V15.5591H1.8457C0.7247 15.5591 -0.0003 16.3791 -0.0003 17.4181C-0.0003 18.4431 0.7247 19.2641 1.8457 19.2641H8.5447V21.6291C8.5447 23.0781 9.9397 23.6391 10.9787 22.7091Z"
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
            d="              M23.8707 6.6988C23.8707 2.7888 21.3967 -0.0002 17.6227 -0.0002C13.8637 -0.0002 11.3747 2.7888 11.3747 6.6988V11.1428L14.6837 14.0138C15.9007 15.0668 15.9277 16.8168 14.6977 17.8828L11.3747 20.7808V25.2108C11.3747 29.1208 13.8637 31.9238 17.6227 31.9238C21.3967 31.9238 23.8707 29.1208 23.8707 25.2108ZM28.0687 6.6988C28.0687 2.8708 26.3317 0.2868 22.4627 0.0268C24.3357 1.5038 25.4567 3.8828 25.4567 6.6988V25.2108C25.4567 28.0138 24.3357 30.4058 22.4627 31.8968C26.3317 31.6228 28.0687 29.0258 28.0687 25.2108ZM13.6447 16.6938C14.1507 16.2558 14.1367 15.6268 13.6447 15.2168L9.6527 11.7848C8.9687 11.1838 8.0387 11.5668 8.0387 12.4688V15.0668H0.9027C0.3827 15.0668 -0.0003 15.4488 -0.0003 15.9688C-0.0003 16.4608 0.3827 16.8578 0.9027 16.8578H8.0387V19.4278C8.0387 20.3708 8.9957 20.7128 9.6527 20.1248Z"
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
            d="              M26.1267 7.7242C26.1267 3.1722 23.3787 0.0002 19.0997 0.0002C14.8067 0.0002 12.0587 3.1722 12.0587 7.7242V10.8282L16.2287 14.5192C17.6917 15.7912 17.6917 17.8962 16.2287 19.1812L12.0587 22.8872V26.0042C12.0587 30.5432 14.8067 33.7152 19.0997 33.7152C23.3787 33.7152 26.1267 30.5432 26.1267 26.0042ZM31.2537 7.7242C31.2537 3.3222 29.1347 0.4102 24.8007 0.0542C26.8657 1.7772 28.0687 4.4982 28.0687 7.7242V26.0042C28.0687 29.2172 26.8657 31.9512 24.8007 33.6742C29.1347 33.3182 31.2537 30.3922 31.2537 26.0042ZM14.9437 17.7322C15.5447 17.2132 15.5317 16.4742 14.9437 15.9692L10.6367 12.1542C9.7477 11.3752 8.5587 11.8812 8.5587 13.0562V15.5312H1.3267C0.5607 15.5312 -0.0003 16.1192 -0.0003 16.8712C-0.0003 17.6092 0.5607 18.1972 1.3267 18.1972H8.5587V20.6442C8.5587 21.8752 9.7887 22.3262 10.6367 21.5472Z"
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
            d="              M25.1427 7.3281C25.1427 3.0621 22.5447 0.0001 18.4977 0.0001C14.4377 0.0001 11.8397 3.0621 11.8397 7.3281V10.8421L15.9007 14.4511C17.3087 15.6681 17.3087 17.6781 15.9007 18.9221L11.8397 22.5451V26.0581C11.8397 30.3101 14.4377 33.3731 18.4977 33.3731C22.5447 33.3731 25.1427 30.3101 25.1427 26.0581ZM29.9137 7.3281C29.9137 3.1851 27.9867 0.4241 23.9257 0.0551C25.8677 1.7091 27.0017 4.3071 27.0017 7.3281V26.0581C27.0017 29.0801 25.8677 31.6781 23.9257 33.3321C27.9867 32.9631 29.9137 30.2011 29.9137 26.0581ZM14.6697 17.5271C15.2437 17.0211 15.2307 16.3381 14.6697 15.8461L10.5277 12.1681C9.6937 11.4301 8.5587 11.9081 8.5587 13.0291V15.5311H1.1757C0.5057 15.5311 -0.0003 16.0371 -0.0003 16.7071C-0.0003 17.3491 0.5057 17.8691 1.1757 17.8691H8.5587V20.3441C8.5587 21.5061 9.7347 21.9161 10.5277 21.1911Z"
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
            d="              M26.8927 8.0252C26.8927 3.2542 24.0217 0.0002 19.5647 0.0002C15.1077 0.0002 12.2367 3.2542 12.2367 8.0252V10.8282L16.4747 14.5602C17.9787 15.8732 17.9787 18.0472 16.4887 19.3862L12.2367 23.1462V25.9492C12.2367 30.7202 15.1077 33.9742 19.5647 33.9742C24.0217 33.9742 26.8927 30.7202 26.8927 25.9492ZM32.2927 8.0252C32.2927 3.4182 30.0097 0.3962 25.4707 0.0412C27.6177 1.8182 28.8747 4.6352 28.8747 8.0252V25.9492C28.8747 29.3262 27.6177 32.1562 25.4707 33.9332C30.0097 33.5922 32.2927 30.5562 32.2927 25.9492ZM15.1617 17.8962C15.7777 17.3632 15.7637 16.5842 15.1617 16.0512L10.7187 12.1402C9.8027 11.3342 8.5587 11.8532 8.5587 13.0702V15.5312H1.4497C0.6017 15.5312 -0.0003 16.1742 -0.0003 16.9942C-0.0003 17.8012 0.6017 18.4432 1.4497 18.4432H8.5587V20.8632C8.5587 22.1482 9.8167 22.6272 10.7187 21.8202Z"
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
            d="              M22.1897 5.8928C22.1897 2.4338 19.8657 -0.0002 16.4887 -0.0002C13.0977 -0.0002 10.7737 2.4338 10.7737 5.8928V11.5388L13.0707 13.4668C14.0407 14.2738 14.1097 15.7088 13.0977 16.5428L10.7737 18.4708V24.1168C10.7737 27.5758 13.0977 30.0098 16.4887 30.0098C19.8657 30.0098 22.1897 27.5758 22.1897 24.1168ZM25.6347 5.8928C25.6347 2.4878 24.1177 0.1368 20.5347 0.0138C22.3127 1.2578 23.4067 3.3628 23.4067 5.8928V24.1168C23.4067 26.6328 22.3127 28.7378 20.5347 29.9958C24.1177 29.8728 25.6347 27.5078 25.6347 24.1168ZM12.3047 15.5998C12.7147 15.2578 12.6877 14.7248 12.3047 14.4098L8.5037 11.2788C8.0257 10.8828 7.3417 11.1288 7.3417 11.7578V14.4788H0.5337C0.2187 14.4788 -0.0003 14.6968 -0.0003 15.0118C-0.0003 15.3128 0.2187 15.5448 0.5337 15.5448H7.3417V18.2518C7.3417 18.8948 8.0257 19.1268 8.5037 18.7308Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.376953125 29.0390625"
          className={className}
        >
          <path
            d="              M24.3767 5.4826C24.3767 2.2966 22.9957 0.0546 19.5507 -0.0004C21.2737 1.1206 22.3537 3.0896 22.3537 5.4826V23.5566C22.3537 25.9356 21.2737 27.8906 19.5507 29.0386C22.9957 28.9706 24.3767 26.7286 24.3767 23.5566ZM21.3277 5.4826C21.3277 2.2556 19.0857 -0.0004 15.9007 -0.0004C12.7017 -0.0004 10.4587 2.2556 10.4587 5.4826V11.7446L12.2497 13.1936C13.0977 13.8636 13.1657 15.1346 12.2777 15.8456L10.4587 17.2946V23.5566C10.4587 26.7836 12.7017 29.0256 15.9007 29.0256C19.0857 29.0256 21.3277 26.7836 21.3277 23.5566ZM11.6207 15.0386C11.9767 14.7386 11.9497 14.2596 11.6207 13.9996L7.9157 11.0336C7.5337 10.7186 6.9867 10.9106 6.9867 11.3886V14.1636H0.3557C0.1367 14.1636 -0.0003 14.3006 -0.0003 14.5196C-0.0003 14.7246 0.1367 14.8746 0.3557 14.8746H6.9867V17.6506C6.9867 18.1286 7.5337 18.3066 7.9157 18.0056Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
