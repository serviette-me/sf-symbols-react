import { IconProps } from "../../types"

export default function FourSquareFillIconIcon({
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
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM15.6547 20.2343C14.4927 20.2343 13.7127 19.5643 13.7127 18.2113V18.0883H10.0347C8.3537 18.0883 7.3147 17.1443 7.3147 15.6403C7.3147 14.9843 7.4517 14.2733 7.8207 13.3983C8.3397 12.2913 9.2017 10.7602 10.0487 9.3383C11.1427 7.4653 12.2087 6.8083 14.2597 6.8083C16.1597 6.8083 17.6097 8.0663 17.6097 9.7343V14.5473H17.8007C19.0727 14.5473 19.8107 15.2303 19.8107 16.3243C19.8107 17.4183 19.0587 18.0883 17.7867 18.0883H17.6097V18.2113C17.6097 19.5643 16.8297 20.2343 15.6547 20.2343ZM13.7127 14.5473V9.9533H13.5767C12.8107 11.4433 11.8807 13.3023 11.3477 14.4513V14.5473Z"
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
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM15.0527 19.6187C14.1367 19.6187 13.5627 19.0587 13.5627 18.0197V17.2397H9.1877C7.9027 17.2397 7.0957 16.4887 7.0957 15.3127C7.0957 14.7797 7.2047 14.2457 7.5467 13.5757C8.3807 12.0727 9.6797 10.0217 10.8417 8.2027C11.6617 6.8357 12.5097 6.3297 14.0277 6.3297C15.4767 6.3297 16.5567 7.2597 16.5567 8.5447V14.5327H17.1857C18.1017 14.5327 18.6617 15.0667 18.6617 15.8867C18.6617 16.7067 18.0877 17.2397 17.1717 17.2397H16.5567V18.0197C16.5567 19.0727 15.9687 19.6187 15.0527 19.6187ZM13.5627 14.5327V8.8317H13.4397C12.3187 10.6917 10.9647 12.9477 10.1587 14.4507V14.5327Z"
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
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM15.3677 19.9475C14.3277 19.9475 13.6447 19.3325 13.6447 18.1285V17.6915H9.6387C8.1347 17.6915 7.2047 16.8435 7.2047 15.4905C7.2047 14.9025 7.3277 14.2595 7.6977 13.4945C8.3677 12.1955 9.4197 10.4175 10.4177 8.8045C11.3887 7.1775 12.3457 6.5895 14.1507 6.5895C15.8457 6.5895 17.1037 7.6975 17.1037 9.1735V14.5465H17.5137C18.6207 14.5465 19.2637 15.1625 19.2637 16.1195C19.2637 17.0895 18.6077 17.6915 17.4997 17.6915H17.1037V18.1285C17.1037 19.3455 16.4197 19.9475 15.3677 19.9475ZM13.6447 14.5465V9.4335H13.5217C12.5777 11.0875 11.4437 13.1385 10.7867 14.4515V14.5465Z"
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
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM14.1227 18.6755C13.6307 18.6755 13.3167 18.3205 13.3167 17.7595V15.9145H8.1617C7.4237 15.9145 6.9727 15.4765 6.9727 14.8065C6.9727 14.4785 7.0687 14.1915 7.2737 13.8355C8.4087 11.9905 10.5407 8.8325 11.9217 6.7815C12.3727 6.0975 12.8517 5.8245 13.6177 5.8245C14.4237 5.8245 14.9567 6.3025 14.9567 7.0005V14.4515H16.2427C16.6797 14.4515 16.9807 14.7515 16.9807 15.1895C16.9807 15.6135 16.6797 15.9145 16.2427 15.9145H14.9567V17.7595C14.9567 18.3345 14.6567 18.6755 14.1227 18.6755ZM13.3167 14.4515V7.3285H13.2347C11.9497 9.2425 9.6387 12.6735 8.6267 14.3695V14.4515Z"
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
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM14.6567 19.2093C13.9177 19.2093 13.4527 18.7303 13.4527 17.8833V16.6793H8.6547C7.6157 16.6793 6.9587 16.0643 6.9587 15.1073C6.9587 14.6423 7.0547 14.2323 7.3687 13.6853C8.4087 11.9223 9.9937 9.5433 11.3477 7.4653C12.0037 6.4253 12.7017 6.0293 13.8767 6.0293C15.0527 6.0293 15.8727 6.7543 15.8727 7.7793V14.5193H16.7887C17.4867 14.5193 17.9237 14.9573 17.9237 15.6133C17.9237 16.2563 17.4727 16.6793 16.7887 16.6793H15.8727V17.8833C15.8727 18.7443 15.4217 19.2093 14.6567 19.2093ZM13.4527 14.5193V8.0933H13.3577C12.0037 10.1993 10.3767 12.7013 9.3927 14.4373V14.5193Z"
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
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM14.4377 18.9905C13.7947 18.9905 13.3987 18.5395 13.3987 17.8005V16.3655H8.3397C7.4517 16.3655 6.8767 15.8185 6.8767 14.9845C6.8767 14.5605 6.9727 14.2185 7.2597 13.7405C8.4217 11.8395 10.1587 9.2695 11.6347 7.0545C12.1817 6.2065 12.8107 5.8515 13.7947 5.8515C14.8067 5.8515 15.5037 6.4535 15.5037 7.3415V14.5055H16.5707C17.1307 14.5055 17.4997 14.8885 17.4997 15.4495C17.4997 15.9965 17.1177 16.3655 16.5707 16.3655H15.5037V17.8005C15.5037 18.5525 15.1077 18.9905 14.4377 18.9905ZM13.3987 14.5055V7.6835H13.3027C11.8267 9.9125 10.0347 12.5785 8.9547 14.4235V14.5055Z"
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
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM14.8207 19.387C14.0137 19.387 13.4937 18.867 13.4937 17.937V16.926H8.8867C7.7387 16.926 7.0137 16.242 7.0137 15.189C7.0137 14.697 7.1227 14.232 7.4377 13.631C8.3947 11.99 9.8577 9.748 11.1287 7.793C11.8537 6.604 12.6187 6.152 13.9317 6.152C15.2307 6.152 16.1737 6.973 16.1737 8.107V14.533H16.9667C17.7457 14.533 18.2387 14.998 18.2387 15.736C18.2387 16.447 17.7327 16.926 16.9527 16.926H16.1737V17.937C16.1737 18.881 15.6547 19.387 14.8207 19.387ZM13.4937 14.533V8.408H13.3847C12.1407 10.404 10.6227 12.811 9.7207 14.437V14.533Z"
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
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM13.7267 18.2384C13.4257 18.2384 13.2207 18.0334 13.2207 17.7054V15.2984H7.9157C7.3967 15.2984 7.1097 15.0114 7.1097 14.5604C7.1097 14.3554 7.1777 14.1504 7.3007 13.9594C8.3947 12.1684 11.0467 8.2444 12.3187 6.3984C12.6327 5.9334 12.9197 5.7694 13.3847 5.7694C13.9177 5.7694 14.2327 6.0704 14.2327 6.5354V14.3554H15.8187C16.0917 14.3554 16.2837 14.5604 16.2837 14.8344C16.2837 15.0934 16.0917 15.2984 15.8187 15.2984H14.2327V17.7054C14.2327 18.0334 14.0407 18.2384 13.7267 18.2384ZM13.2207 14.3554V6.8224H13.1387C12.0997 8.3394 9.0917 12.7974 8.2027 14.2874V14.3554Z"
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
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM13.5217 18.02C13.3167 18.02 13.1657 17.869 13.1657 17.664V14.971H7.7927C7.3827 14.971 7.1637 14.779 7.1637 14.438C7.1637 14.287 7.2327 14.123 7.3007 14.014C8.3807 12.25 11.3067 7.943 12.5237 6.193C12.7557 5.852 12.9607 5.729 13.2617 5.729C13.6587 5.729 13.8637 5.961 13.8637 6.289V14.301H15.5857C15.7907 14.301 15.9277 14.451 15.9277 14.643C15.9277 14.82 15.7907 14.971 15.5857 14.971H13.8637V17.664C13.8637 17.869 13.7407 18.02 13.5217 18.02ZM13.1657 14.301V6.576H13.0977C12.1817 7.875 8.8187 12.865 7.9847 14.232V14.301Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
