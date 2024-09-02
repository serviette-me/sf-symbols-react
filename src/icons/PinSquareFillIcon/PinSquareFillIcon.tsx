import { IconProps } from "../../types"

export default function PinSquareFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.111328125 27.111328125"
          className={className}
        >
          <path
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM8.0257 15.9273C8.0257 14.4373 9.5017 13.1113 11.3207 12.3863L11.5257 9.3103C10.4867 8.7093 9.7887 8.1213 9.4747 7.7383C9.2697 7.4923 9.1597 7.1913 9.1597 6.9312C9.1597 6.3713 9.6117 5.9743 10.1857 5.9743H17.2677C17.8417 5.9743 18.2927 6.3713 18.2927 6.9312C18.2927 7.1913 18.1697 7.4782 17.9787 7.7383C17.6917 8.1483 16.9667 8.7093 15.9277 9.3103L16.1327 12.3863C17.9517 13.1113 19.4277 14.4373 19.4277 15.9273C19.4277 16.6662 18.9217 17.1443 18.1977 17.1443H15.0257V19.5233C15.0257 20.3023 14.0957 22.2033 13.7267 22.2033C13.3437 22.2033 12.4277 20.3023 12.4277 19.5233V17.1443H9.2557C8.5317 17.1443 8.0257 16.6662 8.0257 15.9273Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.140625 26.140625"
          className={className}
        >
          <path
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM7.5467 15.5727C7.5467 14.0817 8.8867 12.6187 10.8007 11.8947L11.0197 8.7087C9.9937 8.1207 9.2287 7.5057 8.8727 7.0687C8.6677 6.8087 8.5587 6.5347 8.5587 6.2887C8.5587 5.7967 8.9547 5.4277 9.4887 5.4277H16.8437C17.3767 5.4277 17.7737 5.7967 17.7737 6.2887C17.7737 6.5347 17.6637 6.8087 17.4727 7.0547C17.1307 7.5057 16.3517 8.1207 15.3127 8.7087L15.5317 11.8947C17.4457 12.6187 18.7987 14.0817 18.7987 15.5727C18.7987 16.2557 18.3337 16.6937 17.6637 16.6937H14.2597V19.1407C14.2597 20.2887 13.4807 21.8887 13.1657 21.8887C12.8517 21.8887 12.0727 20.2887 12.0727 19.1407V16.6937H8.6677C7.9977 16.6937 7.5467 16.2557 7.5467 15.5727Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.66015625 26.66015625"
          className={className}
        >
          <path
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM7.7927 15.7635C7.7927 14.2875 9.2147 12.8785 11.0747 12.1675L11.2927 9.0375C10.2537 8.4355 9.5297 7.8335 9.1877 7.4235C8.9827 7.1775 8.8867 6.8905 8.8867 6.6445C8.8867 6.0975 9.2967 5.7285 9.8577 5.7285H17.0627C17.6227 5.7285 18.0467 6.0975 18.0467 6.6445C18.0467 6.8905 17.9237 7.1645 17.7327 7.4235C17.4317 7.8475 16.6657 8.4355 15.6407 9.0375L15.8457 12.1675C17.7187 12.8785 19.1267 14.2875 19.1267 15.7635C19.1267 16.4745 18.6487 16.9395 17.9377 16.9395H14.6567V19.3595C14.6567 20.3025 13.8087 22.0665 13.4667 22.0665C13.1117 22.0665 12.2637 20.3025 12.2637 19.3595V16.9395H8.9827C8.2717 16.9395 7.7927 16.4745 7.7927 15.7635Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.759765625 24.759765625"
          className={className}
        >
          <path
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM6.9177 15.1485C6.9177 13.5895 8.1617 11.9905 10.1587 11.3065L10.3907 7.8615C9.5157 7.3415 8.6677 6.7125 8.2717 6.2075C8.0667 5.9475 7.9437 5.6875 7.9437 5.4685C7.9437 5.0725 8.2577 4.7985 8.7087 4.7985H16.0647C16.5297 4.7985 16.8297 5.0725 16.8297 5.4685C16.8297 5.6875 16.7347 5.9195 16.5427 6.1665C16.1467 6.6855 15.2847 7.3415 14.3967 7.8615L14.6287 11.3065C16.6247 11.9905 17.8687 13.5895 17.8687 15.1485C17.8687 15.6955 17.4997 16.0375 16.9257 16.0375H13.0977V18.8945C13.0977 20.1665 12.6057 21.2465 12.3867 21.2465C12.1677 21.2465 11.6757 20.1665 11.6757 18.8945V16.0375H7.8477C7.2867 16.0375 6.9177 15.6955 6.9177 15.1485Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.525390625 25.525390625"
          className={className}
        >
          <path
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM7.2327 15.3533C7.2327 13.8493 8.4907 12.2913 10.4587 11.5803L10.6917 8.3123C9.6657 7.7383 8.8597 7.0953 8.4907 6.6313C8.2847 6.3713 8.1757 6.1113 8.1757 5.8653C8.1757 5.4143 8.5317 5.0723 9.0507 5.0723H16.5707C17.0897 5.0723 17.4457 5.4143 17.4457 5.8653C17.4457 6.1113 17.3357 6.3713 17.1447 6.6173C16.7757 7.0823 15.9547 7.7243 14.9297 8.3123L15.1487 11.5803C17.1307 12.2913 18.3887 13.8493 18.3887 15.3533C18.3887 15.9963 17.9647 16.4063 17.3227 16.4063H13.7677V18.8943C13.7677 20.2893 13.0837 21.6703 12.8107 21.6703C12.5237 21.6703 11.8537 20.2893 11.8537 18.8943V16.4063H8.2987C7.6567 16.4063 7.2327 15.9963 7.2327 15.3533Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.169921875 25.169921875"
          className={className}
        >
          <path
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM7.0547 15.2165C7.0547 13.7265 8.2577 12.1135 10.2817 11.4025L10.4997 8.0935C9.4887 7.5195 8.6547 6.8635 8.2717 6.3845C8.0667 6.1245 7.9567 5.8655 7.9567 5.6325C7.9567 5.1955 8.2987 4.8805 8.8047 4.8805H16.4067C16.9117 4.8805 17.2537 5.1955 17.2537 5.6325C17.2537 5.8655 17.1447 6.1115 16.9667 6.3715C16.5837 6.8495 15.7367 7.5055 14.7107 8.0935L14.9437 11.4025C16.9527 12.1135 18.1567 13.7265 18.1567 15.2165C18.1567 15.8455 17.7597 16.2285 17.1177 16.2285H13.4807V18.7445C13.4807 20.2755 12.8657 21.5465 12.6057 21.5465C12.3457 21.5465 11.7307 20.2755 11.7307 18.7445V16.2285H8.0937C7.4647 16.2285 7.0547 15.8455 7.0547 15.2165Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.78515625 25.78515625"
          className={className}
        >
          <path
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM7.3687 15.449C7.3687 13.959 8.6547 12.428 10.6097 11.717L10.8277 8.49C9.8027 7.902 9.0097 7.273 8.6547 6.822C8.4497 6.562 8.3397 6.303 8.3397 6.057C8.3397 5.578 8.7227 5.236 9.2427 5.236H16.6797C17.2127 5.236 17.5817 5.578 17.5817 6.057C17.5817 6.289 17.4727 6.549 17.2817 6.809C16.9257 7.273 16.1187 7.902 15.0937 8.49L15.3127 11.717C17.2677 12.428 18.5667 13.959 18.5667 15.449C18.5667 16.105 18.1287 16.529 17.4587 16.529H13.9727V19.004C13.9727 20.289 13.2617 21.766 12.9607 21.766C12.6597 21.766 11.9497 20.289 11.9497 19.004V16.529H8.4627C7.7927 16.529 7.3687 16.105 7.3687 15.449Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.19921875 24.19921875"
          className={className}
        >
          <path
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM6.7407 15.0394C6.7407 13.3984 8.0117 11.8264 9.9937 11.1704L10.2407 7.5474C9.5427 7.1094 8.7087 6.4944 8.2717 5.9474C8.0667 5.6874 7.9437 5.4414 7.9437 5.2364C7.9437 4.8944 8.2027 4.6624 8.5997 4.6624H15.6137C16.0237 4.6624 16.2697 4.8944 16.2697 5.2364C16.2697 5.4274 16.1737 5.6604 15.9957 5.8924C15.5727 6.4394 14.6977 7.0954 13.9727 7.5474L14.2187 11.1704C16.2017 11.8264 17.4727 13.3984 17.4727 15.0394C17.4727 15.4904 17.1447 15.7634 16.6527 15.7634H12.6057V19.0584C12.6057 19.9884 12.2637 20.8224 12.0997 20.8224C11.9357 20.8224 11.6077 19.9884 11.6077 19.0584V15.7634H7.5337C7.0547 15.7634 6.7407 15.4904 6.7407 15.0394Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.92578125 23.912109375"
          className={className}
        >
          <path
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM6.6447 14.984C6.6447 13.303 7.9437 11.73 9.9117 11.088L10.1587 7.383C9.5567 6.986 8.7227 6.371 8.2847 5.811C8.0667 5.551 7.9297 5.305 7.9297 5.113C7.9297 4.799 8.1757 4.594 8.5317 4.594H15.3807C15.7637 4.594 15.9827 4.799 15.9827 5.113C15.9827 5.291 15.8867 5.51 15.7087 5.742C15.2717 6.316 14.3967 6.959 13.7537 7.383L13.9997 11.088C15.9827 11.73 17.2677 13.303 17.2677 14.984C17.2677 15.381 16.9807 15.613 16.5297 15.613H12.3457V19.141C12.3457 19.906 12.0857 20.604 11.9497 20.604C11.8127 20.604 11.5797 19.906 11.5797 19.141V15.613H7.3827C6.9457 15.613 6.6447 15.381 6.6447 14.984Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
