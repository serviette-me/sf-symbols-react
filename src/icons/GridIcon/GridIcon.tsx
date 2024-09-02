import { IconProps } from "../../types"

export default function GridIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.748046875 29.408203125"
          className={className}
        >
          <path
            d="              M2.4747 22.8864H6.8357V26.9334C6.8357 28.4234 8.0387 29.4084 9.3517 29.4084C10.6227 29.4084 11.8397 28.4234 11.8397 26.9334V22.8864H18.8947V26.9334C18.8947 28.4234 20.0977 29.4084 21.4097 29.4084C22.6817 29.4084 23.8847 28.4234 23.8847 26.9334V22.8864H28.2737C29.7637 22.8864 30.7477 21.6834 30.7477 20.3984C30.7477 19.0864 29.7637 17.8824 28.2737 17.8824H23.8847V11.8124H28.2737C29.7637 11.8124 30.7477 10.6094 30.7477 9.3374C30.7477 8.0254 29.7637 6.8224 28.2737 6.8224H23.8847V2.4744C23.8847 0.9844 22.6817 0.0004 21.4097 0.0004C20.0977 0.0004 18.8947 0.9844 18.8947 2.4744V6.8224H11.8397V2.4744C11.8397 0.9844 10.6227 0.0004 9.3517 0.0004C8.0387 0.0004 6.8357 0.9844 6.8357 2.4744V6.8224H2.4747C0.9847 6.8224 -0.0003 8.0254 -0.0003 9.3374C-0.0003 10.6094 0.9847 11.8124 2.4747 11.8124H6.8357V17.8824H2.4747C0.9847 17.8824 -0.0003 19.0864 -0.0003 20.3984C-0.0003 21.6834 0.9847 22.8864 2.4747 22.8864ZM11.8397 17.8824V11.8124H18.8947V17.8824Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.587890625 27.658203125"
          className={className}
        >
          <path
            d="              M1.7777 20.8904H6.9867V25.8804C6.9867 26.9614 7.7797 27.6584 8.7637 27.6584C9.7207 27.6584 10.5137 26.9614 10.5137 25.8804V20.8904H18.0197V25.8804C18.0197 26.9614 18.8267 27.6584 19.7967 27.6584C20.7537 27.6584 21.5607 26.9614 21.5607 25.8804V20.8904H26.8107C27.8907 20.8904 28.5877 20.0844 28.5877 19.1274C28.5877 18.1564 27.8907 17.3634 26.8107 17.3634H21.5607V10.4724H26.8107C27.8907 10.4724 28.5877 9.6794 28.5877 8.7224C28.5877 7.7384 27.8907 6.9454 26.8107 6.9454H21.5607V1.7774C21.5607 0.6974 20.7537 0.0004 19.7967 0.0004C18.8267 0.0004 18.0197 0.6974 18.0197 1.7774V6.9454H10.5137V1.7774C10.5137 0.6974 9.7207 0.0004 8.7637 0.0004C7.7797 0.0004 6.9867 0.6974 6.9867 1.7774V6.9454H1.7777C0.6977 6.9454 -0.0003 7.7384 -0.0003 8.7224C-0.0003 9.6794 0.6977 10.4724 1.7777 10.4724H6.9867V17.3634H1.7777C0.6977 17.3634 -0.0003 18.1564 -0.0003 19.1274C-0.0003 20.0844 0.6977 20.8904 1.7777 20.8904ZM10.5137 17.3634V10.4724H18.0197V17.3634Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.72265625 28.587890625"
          className={className}
        >
          <path
            d="              M2.1467 21.9566H6.9047V26.4416C6.9047 27.7406 7.9157 28.5876 9.0777 28.5876C10.1997 28.5876 11.2107 27.7406 11.2107 26.4416V21.9566H18.4847V26.4416C18.4847 27.7406 19.4957 28.5876 20.6447 28.5876C21.7797 28.5876 22.7907 27.7406 22.7907 26.4416V21.9566H27.5767C28.8747 21.9566 29.7227 20.9316 29.7227 19.8106C29.7227 18.6626 28.8747 17.6506 27.5767 17.6506H22.7907V11.1976H27.5767C28.8747 11.1976 29.7227 10.1856 29.7227 9.0506C29.7227 7.9026 28.8747 6.8906 27.5767 6.8906H22.7907V2.1606C22.7907 0.8616 21.7797 -0.0004 20.6447 -0.0004C19.4957 -0.0004 18.4847 0.8616 18.4847 2.1606V6.8906H11.2107V2.1606C11.2107 0.8616 10.1997 -0.0004 9.0777 -0.0004C7.9157 -0.0004 6.9047 0.8616 6.9047 2.1606V6.8906H2.1467C0.8477 6.8906 -0.0003 7.9026 -0.0003 9.0506C-0.0003 10.1856 0.8477 11.1976 2.1467 11.1976H6.9047V17.6506H2.1467C0.8477 17.6506 -0.0003 18.6626 -0.0003 19.8106C-0.0003 20.9316 0.8477 21.9566 2.1467 21.9566ZM11.2107 17.6506V11.1976H18.4847V17.6506Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.126953125 25.771484375"
          className={className}
        >
          <path
            d="              M0.8477 18.443H7.3687V24.924C7.3687 25.457 7.6837 25.771 8.1897 25.771C8.6677 25.771 8.9827 25.457 8.9827 24.924V18.443H17.0217V24.924C17.0217 25.457 17.3227 25.771 17.8277 25.771C18.3067 25.771 18.6207 25.457 18.6207 24.924V18.443H25.2797C25.8127 18.443 26.1267 18.143 26.1267 17.637C26.1267 17.144 25.8127 16.844 25.2797 16.844H18.6207V8.969H25.2797C25.8127 8.969 26.1267 8.654 26.1267 8.162C26.1267 7.67 25.8127 7.369 25.2797 7.369H18.6207V0.848C18.6207 0.314 18.3067 0 17.8277 0C17.3227 0 17.0217 0.314 17.0217 0.848V7.369H8.9827V0.848C8.9827 0.314 8.6677 0 8.1897 0C7.6837 0 7.3687 0.314 7.3687 0.848V7.369H0.8477C0.3147 7.369 -0.0003 7.67 -0.0003 8.162C-0.0003 8.654 0.3147 8.969 0.8477 8.969H7.3687V16.844H0.8477C0.3147 16.844 -0.0003 17.144 -0.0003 17.637C-0.0003 18.143 0.3147 18.443 0.8477 18.443ZM8.9827 16.844V8.969H17.0217V16.844Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.220703125 26.537109375"
          className={className}
        >
          <path
            d="              M1.3397 19.6055H7.0817V25.1975C7.0817 26.0315 7.6157 26.5375 8.3807 26.5375C9.1327 26.5375 9.6797 26.0315 9.6797 25.1975V19.6055H17.4727V25.1975C17.4727 26.0315 18.0057 26.5375 18.7717 26.5375C19.5237 26.5375 20.0567 26.0315 20.0567 25.1975V19.6055H25.8807C26.7017 19.6055 27.2207 19.0725 27.2207 18.3205C27.2207 17.5545 26.7017 17.0215 25.8807 17.0215H20.0567V9.6245H25.8807C26.7017 9.6245 27.2207 9.0785 27.2207 8.3265C27.2207 7.5605 26.7017 7.0275 25.8807 7.0275H20.0567V1.3395C20.0567 0.5195 19.5237 -0.0005 18.7717 -0.0005C18.0057 -0.0005 17.4727 0.5195 17.4727 1.3395V7.0275H9.6797V1.3395C9.6797 0.5195 9.1327 -0.0005 8.3807 -0.0005C7.6157 -0.0005 7.0817 0.5195 7.0817 1.3395V7.0275H1.3397C0.5197 7.0275 -0.0003 7.5605 -0.0003 8.3265C-0.0003 9.0785 0.5197 9.6245 1.3397 9.6245H7.0817V17.0215H1.3397C0.5197 17.0215 -0.0003 17.5545 -0.0003 18.3205C-0.0003 19.0725 0.5197 19.6055 1.3397 19.6055ZM9.6797 17.0215V9.6245H17.4727V17.0215Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.44140625 25.908203125"
          className={className}
        >
          <path
            d="              M1.0937 18.8944H7.1367V24.8284C7.1367 25.4984 7.5197 25.9084 8.1757 25.9084C8.8047 25.9084 9.2017 25.4984 9.2017 24.8284V18.8944H17.1587V24.8284C17.1587 25.4984 17.5407 25.9084 18.1977 25.9084C18.8267 25.9084 19.2227 25.4984 19.2227 24.8284V18.8944H25.3477C26.0317 18.8944 26.4417 18.4984 26.4417 17.8554C26.4417 17.2134 26.0317 16.8304 25.3477 16.8304H19.2227V9.1324H25.3477C26.0317 9.1324 26.4417 8.7364 26.4417 8.1074C26.4417 7.4644 26.0317 7.0684 25.3477 7.0684H19.2227V1.0934C19.2227 0.4234 18.8267 0.0004 18.1977 0.0004C17.5407 0.0004 17.1587 0.4234 17.1587 1.0934V7.0684H9.2017V1.0934C9.2017 0.4234 8.8047 0.0004 8.1757 0.0004C7.5197 0.0004 7.1367 0.4234 7.1367 1.0934V7.0684H1.0937C0.4097 7.0684 -0.0003 7.4644 -0.0003 8.1074C-0.0003 8.7364 0.4097 9.1324 1.0937 9.1324H7.1367V16.8304H1.0937C0.4097 16.8304 -0.0003 17.2134 -0.0003 17.8554C-0.0003 18.4984 0.4097 18.8944 1.0937 18.8944ZM9.2017 16.8304V9.1324H17.1587V16.8304Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.80859375 27.015625"
          className={className}
        >
          <path
            d="              M1.5317 20.1526H7.0407V25.4846C7.0407 26.4136 7.6837 27.0156 8.5447 27.0156C9.3787 27.0156 10.0347 26.4136 10.0347 25.4846V20.1526H17.7047V25.4846C17.7047 26.4136 18.3617 27.0156 19.2227 27.0156C20.0567 27.0156 20.7127 26.4136 20.7127 25.4846V20.1526H26.2777C27.2207 20.1526 27.8087 19.4956 27.8087 18.6626C27.8087 17.8006 27.2207 17.1586 26.2777 17.1586H20.7127V9.9806H26.2777C27.2207 9.9806 27.8087 9.3246 27.8087 8.4906C27.8087 7.6286 27.2207 6.9866 26.2777 6.9866H20.7127V1.5176C20.7127 0.5876 20.0567 -0.0004 19.2227 -0.0004C18.3617 -0.0004 17.7047 0.5876 17.7047 1.5176V6.9866H10.0347V1.5176C10.0347 0.5876 9.3787 -0.0004 8.5447 -0.0004C7.6837 -0.0004 7.0407 0.5876 7.0407 1.5176V6.9866H1.5317C0.5877 6.9866 -0.0003 7.6286 -0.0003 8.4906C-0.0003 9.3246 0.5877 9.9806 1.5317 9.9806H7.0407V17.1586H1.5317C0.5877 17.1586 -0.0003 17.8006 -0.0003 18.6626C-0.0003 19.4956 0.5877 20.1526 1.5317 20.1526ZM10.0347 17.1586V9.9806H17.7047V17.1586Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.703125 25.59375"
          className={className}
        >
          <path
            d="              M0.5197 17.8687H7.6837V25.0747C7.6837 25.4027 7.8747 25.5937 8.1897 25.5937C8.4767 25.5937 8.6817 25.4027 8.6817 25.0747V17.8687H16.8297V25.0747C16.8297 25.4027 17.0217 25.5937 17.3357 25.5937C17.6227 25.5937 17.8147 25.4027 17.8147 25.0747V17.8687H25.1837C25.5117 17.8687 25.7027 17.6777 25.7027 17.3637C25.7027 17.0757 25.5117 16.8847 25.1837 16.8847H17.8147V8.7637H25.1837C25.5117 8.7637 25.7027 8.5727 25.7027 8.2577C25.7027 7.9707 25.5117 7.7797 25.1837 7.7797H17.8147V0.5197C17.8147 0.2047 17.6227 -0.0003 17.3357 -0.0003C17.0217 -0.0003 16.8297 0.2047 16.8297 0.5197V7.7797H8.6817V0.5197C8.6817 0.2047 8.4767 -0.0003 8.1897 -0.0003C7.8747 -0.0003 7.6837 0.2047 7.6837 0.5197V7.7797H0.5197C0.1917 7.7797 -0.0003 7.9707 -0.0003 8.2577C-0.0003 8.5727 0.1917 8.7637 0.5197 8.7637H7.6837V16.8847H0.5197C0.1917 16.8847 -0.0003 17.0757 -0.0003 17.3637C-0.0003 17.6777 0.1917 17.8687 0.5197 17.8687ZM8.6817 16.8847V8.7637H16.8297V16.8847Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.498046875 25.51171875"
          className={className}
        >
          <path
            d="              M0.3557 17.568H7.8477V25.156C7.8477 25.375 7.9847 25.512 8.2027 25.512C8.3807 25.512 8.5177 25.375 8.5177 25.156V17.568H16.7207V25.156C16.7207 25.375 16.8577 25.512 17.0767 25.512C17.2677 25.512 17.4047 25.375 17.4047 25.156V17.568H25.1427C25.3617 17.568 25.4977 17.432 25.4977 17.213C25.4977 17.035 25.3617 16.898 25.1427 16.898H17.4047V8.654H25.1427C25.3617 8.654 25.4977 8.518 25.4977 8.299C25.4977 8.121 25.3617 7.984 25.1427 7.984H17.4047V0.355C17.4047 0.137 17.2677 0 17.0767 0C16.8577 0 16.7207 0.137 16.7207 0.355V7.984H8.5177V0.355C8.5177 0.137 8.3807 0 8.2027 0C7.9847 0 7.8477 0.137 7.8477 0.355V7.984H0.3557C0.1367 7.984 -0.0003 8.121 -0.0003 8.299C-0.0003 8.518 0.1367 8.654 0.3557 8.654H7.8477V16.898H0.3557C0.1367 16.898 -0.0003 17.035 -0.0003 17.213C-0.0003 17.432 0.1367 17.568 0.3557 17.568ZM8.5177 16.898V8.654H16.7207V16.898Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
