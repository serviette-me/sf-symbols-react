import { IconProps } from "../../types"

export default function MacbookIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 43.99609375 25.662109375"
          className={className}
        >
          <path
            d="              M-0.0003 23.078C-0.0003 24.486 1.1897 25.662 2.5837 25.662H41.3987C42.8067 25.662 43.9957 24.486 43.9957 23.078C43.9957 21.67 42.8067 20.508 41.3987 20.508H38.9517V4.867C38.9517 1.791 37.1597 0 34.0837 0H9.9117C6.8357 0 5.0317 1.791 5.0317 4.867V20.508H2.5837C1.1897 20.508 -0.0003 21.67 -0.0003 23.078ZM9.8847 20.508V5.961C9.8847 5.168 10.2537 4.854 10.9927 4.854H17.3907C17.6097 4.854 17.7327 4.977 17.7327 5.209V5.715C17.7327 6.426 18.2247 6.904 18.9087 6.904H25.0747C25.7847 6.904 26.2497 6.426 26.2497 5.715V5.209C26.2497 4.977 26.3727 4.854 26.6057 4.854H33.0037C33.7287 4.854 34.0977 5.168 34.0977 5.961V20.508Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41.712890625 23.953125"
          className={className}
        >
          <path
            d="              M-0.0003 21.8887C-0.0003 23.0237 0.9437 23.9527 2.0647 23.9527H39.6487C40.7697 23.9527 41.7127 23.0237 41.7127 21.8887C41.7127 20.7537 40.7697 19.8247 39.6487 19.8247H36.9277V3.8827C36.9277 1.3947 35.5197 -0.0003 33.0317 -0.0003H8.6817C6.2477 -0.0003 4.7847 1.3947 4.7847 3.8827V19.8247H2.0647C0.9437 19.8247 -0.0003 20.7537 -0.0003 21.8887ZM8.3127 19.8247V4.7437C8.3127 3.9097 8.7227 3.5277 9.5297 3.5277H16.6657C16.8707 3.5277 16.9937 3.6507 16.9937 3.8687V4.2107C16.9937 4.8397 17.4177 5.2777 18.0607 5.2777H23.6657C24.3087 5.2777 24.7187 4.8397 24.7187 4.2107V3.8687C24.7187 3.6507 24.8277 3.5277 25.0607 3.5277H32.1837C32.9907 3.5277 33.4007 3.9097 33.4007 4.7437V19.8247Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 42.916015625 24.85546875"
          className={className}
        >
          <path
            d="              M-0.0003 22.5178C-0.0003 23.7888 1.0667 24.8558 2.3377 24.8558H40.5647C41.8497 24.8558 42.9157 23.7888 42.9157 22.5178C42.9157 21.2328 41.8497 20.1798 40.5647 20.1798H37.9937V4.4028C37.9937 1.5998 36.3807 -0.0002 33.5917 -0.0002H9.3247C6.5627 -0.0002 4.9217 1.5998 4.9217 4.4028V20.1798H2.3377C1.0667 20.1798 -0.0003 21.2328 -0.0003 22.5178ZM9.1467 20.1798V5.3868C9.1467 4.5668 9.5297 4.2248 10.2947 4.2248H17.0487C17.2677 4.2248 17.3907 4.3478 17.3907 4.5668V5.0038C17.3907 5.6738 17.8417 6.1388 18.5117 6.1388H24.4177C25.0877 6.1388 25.5257 5.6738 25.5257 5.0038V4.5668C25.5257 4.3478 25.6487 4.2248 25.8677 4.2248H32.6077C33.3867 4.2248 33.7697 4.5668 33.7697 5.3868V20.1798Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.30859375 21.533203125"
          className={className}
        >
          <path
            d="              M-0.0003 20.2072C-0.0003 20.9452 0.5747 21.5332 1.3127 21.5332H36.9957C37.7347 21.5332 38.3087 20.9452 38.3087 20.2072C38.3087 19.4692 37.7347 18.8812 36.9957 18.8812H34.0017V2.7892C34.0017 0.9432 33.0317 0.0002 31.1997 0.0002H7.1097C5.3317 0.0002 4.2927 0.9432 4.2927 2.7892V18.8812H1.3127C0.5747 18.8812 -0.0003 19.4692 -0.0003 20.2072ZM5.9887 18.8812V3.2132C5.9887 2.1872 6.4937 1.6812 7.5197 1.6812H15.6547C15.8457 1.6812 15.9547 1.7912 15.9547 1.9822V2.1332C15.9547 2.6522 16.2837 2.9942 16.8027 2.9942H21.5337C22.0387 2.9942 22.3677 2.6522 22.3677 2.1332V1.9822C22.3677 1.7912 22.4627 1.6812 22.6677 1.6812H30.7887C31.8007 1.6812 32.3207 2.1872 32.3207 3.2132V18.8812Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.25 22.859375"
          className={className}
        >
          <path
            d="              M-0.0003 21.1231C-0.0003 22.0801 0.7797 22.8591 1.7227 22.8591H38.5277C39.4707 22.8591 40.2497 22.0801 40.2497 21.1231C40.2497 20.1661 39.4707 19.3731 38.5277 19.3731H35.6287V3.2541C35.6287 1.1211 34.4667 0.0001 32.3477 0.0001H7.9027C5.8657 0.0001 4.6207 1.1211 4.6207 3.2541V19.3731H1.7227C0.7797 19.3731 -0.0003 20.1661 -0.0003 21.1231ZM7.3007 19.3731V3.9511C7.3007 3.0901 7.7387 2.6801 8.5857 2.6801H16.2017C16.4067 2.6801 16.5157 2.7751 16.5157 3.0081V3.2401C16.5157 3.8281 16.9117 4.2241 17.5137 4.2241H22.7637C23.3517 4.2241 23.7347 3.8281 23.7347 3.2401V3.0081C23.7347 2.7751 23.8437 2.6801 24.0767 2.6801H31.6637C32.5257 2.6801 32.9497 3.0901 32.9497 3.9511V19.3731Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.4296875 22.244140625"
          className={className}
        >
          <path
            d="              M-0.0003 20.6857C-0.0003 21.5467 0.6977 22.2437 1.5447 22.2437H37.8847C38.7327 22.2437 39.4297 21.5467 39.4297 20.6857C39.4297 19.8247 38.7327 19.1267 37.8847 19.1267H34.8907V2.8987C34.8907 0.9847 33.8657 -0.0003 31.9647 -0.0003H7.4647C5.6597 -0.0003 4.5387 0.9847 4.5387 2.8987V19.1267H1.5447C0.6977 19.1267 -0.0003 19.8247 -0.0003 20.6857ZM6.7407 19.1267V3.5137C6.7407 2.6387 7.1777 2.2017 8.0527 2.2017H15.9277C16.1327 2.2017 16.2427 2.2967 16.2427 2.5297V2.6797C16.2427 3.2537 16.6247 3.6367 17.1997 3.6367H22.2577C22.8187 3.6367 23.1737 3.2537 23.1737 2.6797V2.5297C23.1737 2.2967 23.2837 2.2017 23.5157 2.2017H31.3767C32.2517 2.2017 32.6897 2.6387 32.6897 3.5137V19.1267Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.87890625 23.337890625"
          className={className}
        >
          <path
            d="              M-0.0003 21.4512C-0.0003 22.4902 0.8477 23.3382 1.8727 23.3382H39.0057C40.0317 23.3382 40.8787 22.4902 40.8787 21.4512C40.8787 20.4262 40.0317 19.5782 39.0057 19.5782H36.1897V3.5272C36.1897 1.2442 34.9177 0.0002 32.6487 0.0002H8.2437C6.0297 0.0002 4.6897 1.2442 4.6897 3.5272V19.5782H1.8727C0.8477 19.5782 -0.0003 20.4262 -0.0003 21.4512ZM7.7387 19.5782V4.3062C7.7387 3.4452 8.1617 3.0492 8.9957 3.0492H16.3927C16.6117 3.0492 16.7207 3.1582 16.7207 3.3902V3.6642C16.7207 4.2652 17.1307 4.6892 17.7457 4.6892H23.1467C23.7617 4.6892 24.1587 4.2652 24.1587 3.6642V3.3902C24.1587 3.1582 24.2677 3.0492 24.4997 3.0492H31.8827C32.7167 3.0492 33.1407 3.4452 33.1407 4.3062V19.5782Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.818359375 20.603515625"
          className={className}
        >
          <path
            d="              M-0.0003 19.5913C-0.0003 20.1663 0.4237 20.6033 0.9977 20.6033H35.8207C36.3947 20.6033 36.8187 20.1663 36.8187 19.5913C36.8187 19.0043 36.3947 18.5663 35.8207 18.5663H32.8397V2.6523C32.8397 0.9023 31.9377 0.0003 30.1737 0.0003H6.6447C4.9087 0.0003 3.9927 0.9023 3.9927 2.6523V18.5663H0.9977C0.4237 18.5663 -0.0003 19.0043 -0.0003 19.5913ZM5.0037 18.5663V2.8163C5.0037 1.6133 5.6057 1.0253 6.8087 1.0253H15.2847C15.4627 1.0253 15.5587 1.1073 15.5587 1.2853V1.4083C15.5587 1.8453 15.8457 2.1463 16.2837 2.1463H20.5767C21.0137 2.1463 21.2867 1.8453 21.2867 1.4083V1.2853C21.2867 1.1073 21.3827 1.0253 21.5607 1.0253H30.0097C31.2127 1.0253 31.8147 1.6133 31.8147 2.8163V18.5663Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.06640625 20.111328125"
          className={className}
        >
          <path
            d="              M-0.0003 19.2633C-0.0003 19.7563 0.3417 20.1112 0.8477 20.1112H35.2187C35.7247 20.1112 36.0667 19.7563 36.0667 19.2633C36.0667 18.7583 35.7247 18.4023 35.2187 18.4023H32.2387V2.5843C32.2387 0.8753 31.3637 0.0003 29.6547 0.0003H6.3987C4.6897 0.0003 3.8277 0.8753 3.8277 2.5843V18.4023H0.8477C0.3417 18.4023 -0.0003 18.7583 -0.0003 19.2633ZM4.4977 18.4023V2.5972C4.4977 1.2993 5.1407 0.6702 6.4397 0.6702H15.0937C15.2717 0.6702 15.3537 0.7523 15.3537 0.9163V1.0392C15.3537 1.4353 15.6137 1.7093 16.0097 1.7093H20.0837C20.4807 1.7093 20.7407 1.4353 20.7407 1.0392V0.9163C20.7407 0.7523 20.8227 0.6702 20.9867 0.6702H29.6137C30.9117 0.6702 31.5687 1.2993 31.5687 2.5972V18.4023Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
