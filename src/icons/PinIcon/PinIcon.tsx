import { IconProps } from "../../types"

export default function PinIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.228515625 35.041015625"
          className={className}
        >
          <path
            d="              M2.6935 24.2267H9.6245V31.0217C9.6245 32.2107 11.0745 35.0407 11.6075 35.0407C12.1545 35.0407 13.6035 32.2107 13.6035 31.0217V24.2267H20.5355C22.1345 24.2267 23.2285 23.1597 23.2285 21.5737C23.2285 18.3887 20.7535 15.4767 17.1715 13.9457L16.7345 7.2187C18.6345 5.9477 20.1245 4.7027 20.8085 3.8557C21.2595 3.3087 21.4925 2.6657 21.4925 2.0917C21.4925 0.8747 20.5625 -0.0003 19.2495 -0.0003H3.9785C2.6655 -0.0003 1.7365 0.8747 1.7365 2.0917C1.7365 2.6657 1.9685 3.3087 2.4195 3.8557C3.1035 4.7027 4.5935 5.9477 6.4945 7.2187L6.0565 13.9457C2.4745 15.4767 -0.0005 18.3887 -0.0005 21.5737C-0.0005 23.1597 1.0935 24.2267 2.6935 24.2267ZM10.0895 5.7557C10.1035 5.3597 9.9945 5.0997 9.6525 4.9217C8.6815 4.3887 7.9025 3.9097 7.2185 3.4997C7.0955 3.4177 7.1235 3.2677 7.2465 3.2677H15.9825C16.1055 3.2677 16.1325 3.4177 16.0095 3.4997C15.3265 3.9097 14.5465 4.3887 13.5765 4.9217C13.2345 5.0997 13.1245 5.3597 13.1385 5.7557L13.5355 12.9607C12.9065 12.8787 12.2635 12.8237 11.6075 12.8237C10.9645 12.8237 10.3225 12.8787 9.6935 12.9607ZM3.6775 20.7947C3.5685 20.7947 3.5275 20.7127 3.5545 20.6037C4.0195 18.2107 7.5605 16.1737 11.6075 16.1737C15.6675 16.1737 19.2085 18.2107 19.6735 20.6037C19.7015 20.7127 19.6605 20.7947 19.5505 20.7947Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.23046875 33.455078125"
          className={className}
        >
          <path
            d="              M2.3519 22.928H9.5159V29.518C9.5159 31.158 10.6779 33.455 11.1149 33.455C11.5529 33.455 12.7149 31.158 12.7149 29.518V22.928H19.8789C21.2869 22.928 22.2309 22.012 22.2309 20.644C22.2309 17.609 19.8379 14.697 16.2559 13.234L15.8179 6.658C17.6369 5.455 19.2089 4.197 19.8929 3.309C20.3029 2.803 20.4939 2.256 20.4939 1.764C20.4939 0.738 19.7149 0 18.5799 0H3.6499C2.5159 0 1.7359 0.738 1.7359 1.764C1.7359 2.256 1.9279 2.803 2.3379 3.309C3.0219 4.197 4.6079 5.455 6.4119 6.658L5.9749 13.234C2.3929 14.697 -0.0001 17.609 -0.0001 20.644C-0.0001 22.012 0.9429 22.928 2.3519 22.928ZM11.1149 12.236C10.3499 12.236 9.6109 12.291 8.8999 12.414L9.2969 5.428C9.3109 5.127 9.2419 4.977 9.0099 4.84C7.4919 4.047 6.3169 3.199 5.9199 2.844C5.7969 2.721 5.8789 2.584 6.0159 2.584H16.2289C16.3649 2.584 16.4339 2.721 16.3109 2.844C15.9139 3.199 14.7379 4.047 13.2209 4.84C12.9879 4.977 12.9199 5.127 12.9339 5.428L13.3299 12.414C12.6189 12.291 11.8809 12.236 11.1149 12.236ZM3.1169 20.18C2.9119 20.18 2.8169 20.057 2.8579 19.811C3.2399 17.391 6.5759 14.902 11.1149 14.902C15.6539 14.902 18.9899 17.391 19.3729 19.811C19.4139 20.057 19.3179 20.18 19.1129 20.18Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.75 34.302734375"
          className={className}
        >
          <path
            d="              M2.5289 23.6246H9.5699V30.3106C9.5699 31.7186 10.8829 34.3026 11.3749 34.3026C11.8669 34.3026 13.1799 31.7186 13.1799 30.3106V23.6246H20.2209C21.7379 23.6246 22.7499 22.6266 22.7499 21.1506C22.7499 18.0336 20.3169 15.1216 16.7339 13.6176L16.2969 6.9586C18.1559 5.7286 19.6879 4.4706 20.3709 3.6096C20.7949 3.0766 21.0269 2.4746 21.0269 1.9416C21.0269 0.8206 20.1519 -0.0004 18.9359 -0.0004H3.8149C2.5979 -0.0004 1.7229 0.8206 1.7229 1.9416C1.7229 2.4746 1.9419 3.0766 2.3789 3.6096C3.0629 4.4706 4.5939 5.7286 6.4529 6.9586L6.0159 13.6176C2.4339 15.1216 -0.0001 18.0336 -0.0001 21.1506C-0.0001 22.6266 1.0119 23.6246 2.5289 23.6246ZM9.7069 5.6056C9.7339 5.2636 9.6389 5.0446 9.3519 4.8946C8.1079 4.2386 7.1509 3.5816 6.6039 3.1996C6.4809 3.0896 6.5219 2.9536 6.6579 2.9536H16.0919C16.2149 2.9536 16.2699 3.0896 16.1469 3.1996C15.5999 3.5816 14.6289 4.2386 13.3989 4.8946C13.1109 5.0446 13.0159 5.2636 13.0429 5.6056L13.4399 12.7016C12.7699 12.6056 12.0719 12.5506 11.3749 12.5506C10.6639 12.5506 9.9809 12.6056 9.3109 12.7016ZM3.4039 20.5076C3.2539 20.5076 3.1859 20.4126 3.2269 20.2346C3.6509 17.8286 7.0959 15.5856 11.3749 15.5856C15.6539 15.5856 19.0999 17.8286 19.5239 20.2346C19.5649 20.4126 19.4959 20.5076 19.3319 20.5076Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.3984375 31.30859375"
          className={className}
        >
          <path
            d="              M1.7777 20.9179H9.2287V28.1369C9.2287 29.8459 9.9117 31.3089 10.1997 31.3089C10.4867 31.3089 11.1697 29.8459 11.1697 28.1369V20.9179H18.6207C19.7007 20.9179 20.3987 20.2479 20.3987 19.2639C20.3987 16.3519 18.1017 13.4939 14.5467 12.1679L14.1097 5.7149C15.6677 4.7029 17.3357 3.4039 18.0337 2.4469C18.3477 2.0369 18.4977 1.6269 18.4977 1.2719C18.4977 0.5469 17.9237 -0.0001 17.0627 -0.0001H3.3357C2.4747 -0.0001 1.9137 0.5469 1.9137 1.2719C1.9137 1.6269 2.0507 2.0369 2.3657 2.4469C3.0627 3.4039 4.7307 4.7029 6.2887 5.7149L5.8517 12.1679C2.2967 13.4939 -0.0003 16.3519 -0.0003 19.2639C-0.0003 20.2479 0.6977 20.9179 1.7777 20.9179ZM7.9707 4.9899C7.9977 4.8129 7.9707 4.7439 7.8477 4.6899C5.9477 3.6779 4.1567 2.2149 4.0877 1.8049C4.0057 1.6269 4.1157 1.5039 4.2927 1.5039H16.1057C16.2837 1.5039 16.3927 1.6269 16.3247 1.8049C16.2427 2.2149 14.4507 3.6779 12.5507 4.6899C12.4417 4.7439 12.4137 4.8129 12.4277 4.9899L12.8377 11.6759C12.0037 11.4979 11.1287 11.4019 10.1997 11.4019C9.2837 11.4019 8.3947 11.4979 7.5607 11.6759ZM2.1327 19.3179C1.8187 19.3179 1.6407 19.1269 1.6817 18.7579C1.8727 15.9009 5.3187 12.9609 10.1997 12.9609C15.0797 12.9609 18.5257 15.9009 18.7167 18.7579C18.7577 19.1269 18.5797 19.3179 18.2657 19.3179Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.587890625 32.45703125"
          className={className}
        >
          <path
            d="              M2.1329 22.1215H9.4469V28.5875C9.4469 30.5155 10.4179 32.4575 10.8009 32.4575C11.1699 32.4575 12.1409 30.5155 12.1409 28.5875V22.1215H19.4549C20.7539 22.1215 21.5879 21.3005 21.5879 20.0705C21.5879 17.1305 19.2499 14.2185 15.6819 12.7965L15.2309 6.3305C16.9939 5.1675 18.6079 3.8825 19.3049 2.9805C19.6879 2.5015 19.8649 2.0095 19.8649 1.5725C19.8649 0.6695 19.1679 0.0005 18.1429 0.0005H3.4449C2.4199 0.0005 1.7229 0.6695 1.7229 1.5725C1.7229 2.0095 1.8999 2.5015 2.2829 2.9805C2.9809 3.8825 4.6079 5.1675 6.3579 6.3305L5.9199 12.7965C2.3379 14.2185 -0.0001 17.1305 -0.0001 20.0705C-0.0001 21.3005 0.8339 22.1215 2.1329 22.1215ZM8.7909 5.2365C8.8049 5.0035 8.7639 4.9085 8.5999 4.8125C6.7399 3.8555 5.3049 2.7485 5.0859 2.4475C4.9769 2.2965 5.0719 2.1735 5.2229 2.1735H16.3789C16.5159 2.1735 16.6109 2.2965 16.5019 2.4475C16.2969 2.7485 14.8479 3.8555 12.9879 4.8125C12.8239 4.9085 12.7829 5.0035 12.7969 5.2365L13.2069 12.0855C12.4279 11.9495 11.6349 11.8675 10.8009 11.8675C9.9669 11.8675 9.1599 11.9495 8.3809 12.0855ZM2.7619 19.8105C2.4879 19.8105 2.3519 19.6605 2.4059 19.3325C2.7339 16.8845 5.9609 14.1095 10.8009 14.1095C15.6409 14.1095 18.8539 16.8845 19.1819 19.3325C19.2359 19.6605 19.0999 19.8105 18.8399 19.8105Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.232421875 31.869140625"
          className={className}
        >
          <path
            d="              M2.0103 21.656H9.4063V28.041C9.4063 30.133 10.2813 31.869 10.6233 31.869C10.9513 31.869 11.8263 30.133 11.8263 28.041V21.656H19.2223C20.4533 21.656 21.2323 20.891 21.2323 19.729C21.2323 16.844 18.9223 13.945 15.3533 12.537L14.9023 6.125C16.6383 4.99 18.2793 3.705 18.9763 2.775C19.3453 2.311 19.5103 1.846 19.5103 1.449C19.5103 0.615 18.8673 0 17.9103 0H3.3363C2.3653 0 1.7363 0.615 1.7363 1.449C1.7363 1.846 1.9003 2.311 2.2563 2.775C2.9533 3.705 4.6073 4.99 6.3303 6.125L5.8793 12.537C2.3103 13.945 0.0003 16.844 0.0003 19.729C0.0003 20.891 0.7793 21.656 2.0103 21.656ZM10.6233 11.648C9.7483 11.648 8.9003 11.73 8.1073 11.895L8.5173 5.113C8.5313 4.922 8.5043 4.854 8.3673 4.785C6.3163 3.732 4.7303 2.488 4.6213 2.215C4.5113 2.037 4.6213 1.928 4.7713 1.928H16.4613C16.6113 1.928 16.7203 2.037 16.6113 2.215C16.5023 2.488 14.9163 3.732 12.8653 4.785C12.7423 4.854 12.7013 4.922 12.7283 5.113L13.1383 11.895C12.3323 11.73 11.4983 11.648 10.6233 11.648ZM2.5563 19.592C2.2423 19.592 2.1053 19.414 2.1603 19.045C2.4613 16.584 5.6053 13.645 10.6233 13.645C15.6273 13.645 18.7713 16.584 19.0723 19.045C19.1273 19.414 18.9903 19.592 18.6763 19.592Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.875 32.880859375"
          className={className}
        >
          <path
            d="              M2.2283 22.4762H9.4883V28.9842C9.4883 30.7892 10.5273 32.8812 10.9372 32.8812C11.3472 32.8812 12.3863 30.7892 12.3863 28.9842V22.4762H19.6462C20.9862 22.4762 21.8753 21.6152 21.8753 20.3162C21.8753 17.3362 19.5103 14.4372 15.9273 12.9882L15.4903 6.4672C17.2673 5.2912 18.8672 4.0192 19.5643 3.1172C19.9473 2.6252 20.1383 2.1192 20.1383 1.6542C20.1383 0.6972 19.4143 0.0002 18.3343 0.0002H3.5413C2.4612 0.0002 1.7363 0.6972 1.7363 1.6542C1.7363 2.1192 1.9273 2.6252 2.3103 3.1172C3.0083 4.0192 4.6073 5.2912 6.3852 6.4672L5.9473 12.9882C2.3652 14.4372 0.0003 17.3362 0.0003 20.3162C0.0003 21.6152 0.8883 22.4762 2.2283 22.4762ZM10.9372 12.0312C10.1313 12.0312 9.3513 12.0992 8.6133 12.2222L9.0102 5.3182C9.0373 5.0582 8.9823 4.9352 8.7773 4.8262C7.0683 3.9372 5.7423 2.9392 5.4552 2.6252C5.3323 2.4742 5.4273 2.3512 5.5642 2.3512H16.3103C16.4473 2.3512 16.5433 2.4742 16.4203 2.6252C16.1333 2.9392 14.8063 3.9372 13.0972 4.8262C12.8923 4.9352 12.8382 5.0582 12.8653 5.3182L13.2613 12.2222C12.5233 12.0992 11.7443 12.0312 10.9372 12.0312ZM2.9123 19.9742C2.6662 19.9742 2.5563 19.8382 2.5973 19.5372C2.9533 17.1032 6.2342 14.4512 10.9372 14.4512C15.6403 14.4512 18.9222 17.1032 19.2633 19.5372C19.3183 19.8382 19.2093 19.9742 18.9633 19.9742Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.3046875 30.5703125"
          className={className}
        >
          <path
            d="              M1.4761 19.9337H8.9821V28.2457C8.9821 29.4767 9.4471 30.5707 9.6521 30.5707C9.8571 30.5707 10.3221 29.4767 10.3221 28.2457V19.9337H17.8281C18.7301 19.9337 19.3051 19.4137 19.3051 18.6347C19.3051 15.6817 17.0081 12.8927 13.4941 11.6897L13.0841 5.1817C14.4101 4.3067 16.0921 3.0217 16.7891 1.9957C17.0351 1.6547 17.1581 1.3257 17.1581 1.0387C17.1581 0.4377 16.6931 -0.0003 15.9691 -0.0003H3.3361C2.6111 -0.0003 2.1461 0.4377 2.1461 1.0387C2.1461 1.3257 2.2831 1.6547 2.5151 1.9957C3.2131 3.0217 4.8941 4.3067 6.2341 5.1817L5.8101 11.6897C2.2971 12.8927 0.0001 15.6817 0.0001 18.6347C0.0001 19.4137 0.5881 19.9337 1.4761 19.9337ZM9.6521 11.0607C8.6681 11.0607 7.7241 11.1697 6.8361 11.3887L7.2731 4.8257C7.2871 4.6617 7.2601 4.6077 7.1641 4.5527C5.4691 3.6097 3.4041 1.8457 3.3771 1.2577C3.3491 1.0937 3.4451 0.9567 3.6641 0.9567H15.6401C15.8591 0.9567 15.9551 1.0937 15.9281 1.2577C15.9141 1.8457 13.8361 3.6097 12.1401 4.5527C12.0451 4.6077 12.0171 4.6617 12.0451 4.8257L12.4691 11.3887C11.5801 11.1697 10.6501 11.0607 9.6521 11.0607ZM1.5861 18.9497C1.2581 18.9497 1.0391 18.7307 1.0531 18.3747C1.1211 14.9977 4.9351 12.0317 9.6521 12.0317C14.3691 12.0317 18.1971 14.9977 18.2521 18.3747C18.2651 18.7307 18.0601 18.9497 17.7191 18.9497Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.73046875 30.201171875"
          className={className}
        >
          <path
            d="              M1.3125 19.4416H8.8595V28.3146C8.8595 29.2856 9.1875 30.2016 9.3655 30.2016C9.5295 30.2016 9.8715 29.2856 9.8715 28.3146V19.4416H17.4175C18.2105 19.4416 18.7305 18.9906 18.7305 18.3206C18.7305 15.3396 16.4475 12.5916 12.9475 11.4436L12.5375 4.9216C13.7535 4.1156 15.4355 2.8296 16.1465 1.7776C16.3515 1.4626 16.4745 1.1756 16.4745 0.9296C16.4745 0.3966 16.0505 -0.0004 15.3945 -0.0004H3.3355C2.6795 -0.0004 2.2555 0.3966 2.2555 0.9296C2.2555 1.1756 2.3785 1.4626 2.5835 1.7776C3.2815 2.8296 4.9765 4.1156 6.1935 4.9216L5.7835 11.4436C2.2835 12.5916 -0.0005 15.3396 -0.0005 18.3206C-0.0005 18.9906 0.5195 19.4416 1.3125 19.4416ZM6.8905 4.7446C6.9175 4.6076 6.8905 4.5526 6.8085 4.4976C5.2085 3.5686 3.0075 1.6546 3.0075 0.9846C3.0075 0.8206 3.0895 0.6696 3.3355 0.6696H15.3805C15.6265 0.6696 15.7225 0.8206 15.7225 0.9846C15.7225 1.6546 13.5075 3.5686 11.9215 4.4976C11.8265 4.5526 11.8125 4.6076 11.8265 4.7446L12.2635 11.2516C11.3615 11.0196 10.3905 10.8966 9.3655 10.8966C8.3395 10.8966 7.3695 11.0196 6.4665 11.2516ZM1.2985 18.7576C0.9575 18.7576 0.7245 18.5386 0.7245 18.1836C0.7105 14.5336 4.7305 11.5666 9.3655 11.5666C13.9995 11.5666 18.0055 14.5336 18.0055 18.1836C18.0055 18.5386 17.7735 18.7576 17.4315 18.7576Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
