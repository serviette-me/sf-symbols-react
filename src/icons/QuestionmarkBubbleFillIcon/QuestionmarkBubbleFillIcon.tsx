import { IconProps } from "../../types"

export default function QuestionmarkBubbleFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.8671875 31.1171875"
          className={className}
        >
          <path
            d="              M10.1857 31.1168C10.8967 31.1168 11.5117 30.8438 12.3727 30.0918L17.6777 25.4978H25.7307C30.0237 25.4978 32.8677 22.6408 32.8677 18.3478V7.1508C32.8677 2.8578 30.0237 -0.0002 25.7307 -0.0002H7.1367C2.8437 -0.0002 -0.0003 2.8578 -0.0003 7.1508V18.3478C-0.0003 22.6408 3.1587 25.4978 6.6587 25.4978H8.5037V29.2848C8.5037 30.4198 9.1597 31.1168 10.1857 31.1168ZM15.9957 15.2028C14.4517 15.2028 13.6037 14.6148 13.6037 13.4808V13.4398C13.6037 12.5918 14.2457 11.9488 15.2577 11.2518C16.3107 10.5138 16.9257 10.1988 16.9257 9.5568C16.9257 9.1188 16.4607 8.6818 15.9277 8.6818C15.4907 8.6818 15.1207 8.8188 14.6977 9.3518L14.6157 9.4468C14.2327 9.9808 13.6587 10.1858 12.9607 10.1858C11.8677 10.1858 11.1427 9.3518 11.1427 8.4358C11.1427 8.0798 11.2247 7.7798 11.3617 7.4788C12.0727 5.9748 13.9867 5.0308 16.4887 5.0308C19.5917 5.0308 21.9437 6.8088 21.9437 9.2558C21.9437 10.7598 21.3417 11.5388 19.7697 12.5098C19.1267 12.9198 18.4297 13.3578 18.1837 13.8498C18.1697 13.8908 18.1567 13.9588 18.1427 14.0138C17.9377 14.7108 17.0897 15.2028 15.9957 15.2028ZM16.0097 20.2618C14.6567 20.2618 13.6447 19.5238 13.6447 18.2518C13.6447 16.9938 14.6567 16.2418 16.0097 16.2418C17.3637 16.2418 18.3337 17.0078 18.3337 18.2518C18.3337 19.5238 17.3637 20.2618 16.0097 20.2618Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.5 29.736328125"
          className={className}
        >
          <path
            d="              M9.1597 29.7365C9.7757 29.7365 10.2817 29.4625 11.0337 28.7935L16.1597 24.2265H24.8007C28.9847 24.2265 31.4997 21.6835 31.4997 17.5415V6.6995C31.4997 2.5435 28.9847 0.0005 24.8007 0.0005H6.6997C2.5157 0.0005 -0.0003 2.5435 -0.0003 6.6995V17.5415C-0.0003 21.6835 2.6797 24.2265 6.4667 24.2265H7.6977V28.1235C7.6977 29.1075 8.2437 29.7365 9.1597 29.7365ZM15.3947 14.7935C14.2597 14.7935 13.6307 14.3145 13.6307 13.3715V13.2615C13.6307 12.1545 14.3277 11.4575 15.3397 10.7465C16.4887 9.9535 17.0897 9.5565 17.0897 8.7635C17.0897 8.0115 16.4337 7.4375 15.5317 7.4375C14.8477 7.4375 14.3007 7.7245 13.8357 8.4085L13.6717 8.6265C13.3437 9.0645 12.9067 9.2835 12.3187 9.2835C11.5387 9.2835 10.9237 8.6955 10.9237 7.9165C10.9237 7.6155 10.9927 7.3555 11.0877 7.0825C11.6487 5.6875 13.3987 4.6485 15.8597 4.6485C18.6077 4.6485 20.8357 6.1525 20.8357 8.5585C20.8357 10.1585 20.0427 10.9645 18.5667 11.8945C17.7597 12.4145 17.1857 12.8925 17.0627 13.5355C17.0487 13.5765 17.0487 13.6445 17.0347 13.6995C16.9257 14.3285 16.2967 14.7935 15.3947 14.7935ZM15.3807 19.4275C14.3007 19.4275 13.4397 18.7305 13.4397 17.6915C13.4397 16.6525 14.2867 15.9555 15.3807 15.9555C16.4747 15.9555 17.3087 16.6525 17.3087 17.6915C17.3087 18.7445 16.4747 19.4275 15.3807 19.4275Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.224609375 30.4609375"
          className={className}
        >
          <path
            d="              M9.7067 30.461C10.3767 30.461 10.9237 30.201 11.7437 29.49L16.9667 24.897H25.2927C29.5317 24.897 32.2247 22.189 32.2247 17.965V6.945C32.2247 2.721 29.5317 0 25.2927 0H6.9317C2.6937 0 -0.0003 2.707 -0.0003 6.945V17.965C-0.0003 22.203 2.9397 24.897 6.5627 24.897H8.1207V28.738C8.1207 29.805 8.7227 30.461 9.7067 30.461ZM15.7087 15.012C14.3557 15.012 13.6177 14.479 13.6177 13.439V13.357C13.6177 12.387 14.2867 11.717 15.2987 11.02C16.3927 10.254 17.0077 9.898 17.0077 9.188C17.0077 8.6 16.4477 8.094 15.7497 8.094C15.1897 8.094 14.7247 8.299 14.2867 8.914L14.1777 9.064C13.8087 9.543 13.3027 9.762 12.6597 9.762C11.7167 9.762 11.0337 9.051 11.0337 8.189C11.0337 7.861 11.1157 7.588 11.2387 7.301C11.8677 5.852 13.7127 4.854 16.1877 4.854C19.1267 4.854 21.4097 6.508 21.4097 8.941C21.4097 10.473 20.7267 11.279 19.1957 12.223C18.4847 12.688 17.8417 13.139 17.6507 13.713C17.6507 13.74 17.6367 13.809 17.6227 13.877C17.4587 14.533 16.7207 15.012 15.7087 15.012ZM15.7087 19.865C14.4927 19.865 13.5487 19.154 13.5487 17.992C13.5487 16.844 14.4787 16.106 15.7087 16.106C16.9527 16.106 17.8417 16.844 17.8417 17.992C17.8417 19.154 16.9397 19.865 15.7087 19.865Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.681640625 27.69921875"
          className={className}
        >
          <path
            d="              M7.6567 27.699C8.0937 27.699 8.4087 27.467 8.9007 27.016L13.8497 22.6H23.8707C27.5767 22.6 29.6817 20.453 29.6817 16.803V5.811C29.6817 2.146 27.5767 0 23.8707 0H5.8107C2.1057 0 -0.0003 2.133 -0.0003 5.811V16.803C-0.0003 20.467 2.1057 22.6 5.8107 22.6H6.6717V26.564C6.6717 27.248 7.0407 27.699 7.6567 27.699ZM14.5747 14.137C14.0277 14.137 13.7127 13.836 13.7127 13.275V12.961C13.7127 11.689 14.3557 10.965 15.4087 10.213C16.6937 9.324 17.2407 8.805 17.2407 7.848C17.2407 6.713 16.3247 5.92 14.8887 5.92C13.7127 5.92 12.8247 6.644 12.4957 7.588L12.3317 7.861C12.1547 8.162 11.9087 8.353 11.5117 8.353C11.1287 8.353 10.7457 8.08 10.7457 7.574C10.7457 7.355 10.7867 7.164 10.8417 6.959C11.1567 5.605 12.6467 4.416 14.9567 4.416C17.2537 4.416 19.1267 5.66 19.1267 7.766C19.1267 9.297 18.3067 10.117 16.9117 11.047C15.8867 11.73 15.4497 12.236 15.4497 13.07V13.344C15.4497 13.795 15.1207 14.137 14.5747 14.137ZM14.5467 18.129C13.8497 18.129 13.2477 17.555 13.2477 16.871C13.2477 16.174 13.8357 15.6 14.5467 15.6C15.2717 15.6 15.8597 16.16 15.8597 16.871C15.8597 17.568 15.2577 18.129 14.5467 18.129Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.625 28.84765625"
          className={className}
        >
          <path
            d="              M8.4907 28.8479C9.0647 28.8479 9.4887 28.5739 10.1717 27.9589L15.1757 23.4339H24.2127C28.3147 23.4339 30.6247 21.0819 30.6247 17.0219V6.4119C30.6247 2.3519 28.3147 -0.0001 24.2127 -0.0001H6.4257C2.3107 -0.0001 -0.0003 2.3519 -0.0003 6.4119V17.0219C-0.0003 21.0819 2.3657 23.4339 6.3297 23.4339H7.1917V27.3709C7.1917 28.2739 7.6697 28.8479 8.4907 28.8479ZM15.0117 14.5469C14.1367 14.5469 13.6447 14.1229 13.6447 13.3159V13.1659C13.6447 11.8669 14.3827 11.1429 15.3947 10.4319C16.5977 9.5979 17.1997 9.1599 17.1997 8.2579C17.1997 7.3149 16.4197 6.6449 15.2847 6.6449C14.4377 6.6449 13.7677 7.0409 13.2757 7.8199L13.0567 8.1069C12.7837 8.4769 12.4277 8.7089 11.9087 8.7089C11.3207 8.7089 10.7737 8.2719 10.7737 7.5879C10.7737 7.3279 10.8417 7.0819 10.9237 6.8359C11.3617 5.5099 13.0157 4.4019 15.4497 4.4019C17.9787 4.4019 20.1247 5.7419 20.1247 8.1209C20.1247 9.7749 19.2087 10.5959 17.8007 11.5119C16.8847 12.1129 16.3787 12.5919 16.3377 13.3299C16.3377 13.3849 16.3377 13.4529 16.3247 13.5079C16.2967 14.0959 15.7907 14.5469 15.0117 14.5469ZM14.9847 18.8949C14.0687 18.8949 13.3027 18.2379 13.3027 17.3359C13.3027 16.4469 14.0547 15.7769 14.9847 15.7769C15.9137 15.7769 16.6527 16.4339 16.6527 17.3359C16.6527 18.2519 15.9007 18.8949 14.9847 18.8949Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.1328125 28.369140625"
          className={className}
        >
          <path
            d="              M8.1207 28.3688C8.6547 28.3688 9.0507 28.0958 9.6937 27.4938L14.6287 22.9828H23.8707C27.9457 22.9828 30.1327 20.7398 30.1327 16.7348V6.2618C30.1327 2.2558 27.9457 -0.0002 23.8707 -0.0002H6.2617C2.1877 -0.0002 -0.0003 2.2418 -0.0003 6.2618V16.7348C-0.0003 20.7538 2.1877 22.9828 6.2617 22.9828H6.9047V26.9608C6.9047 27.8088 7.3417 28.3688 8.1207 28.3688ZM14.7927 14.4098C14.0547 14.4098 13.6587 14.0278 13.6587 13.2888V13.1118C13.6587 11.7168 14.4237 10.9788 15.4217 10.2678C16.6657 9.4058 17.2537 8.9418 17.2537 7.9848C17.2537 6.9178 16.4197 6.1938 15.1347 6.1938C14.2047 6.1938 13.4667 6.6578 12.9607 7.4788L12.7147 7.8198C12.4547 8.1488 12.1547 8.3808 11.6757 8.3808C11.1977 8.3808 10.6917 8.0388 10.6917 7.4098C10.6917 7.1638 10.7457 6.9318 10.8147 6.7128C11.2107 5.4138 12.7967 4.2788 15.2307 4.2788C17.6367 4.2788 19.7287 5.5238 19.7287 7.8748C19.7287 9.5698 18.7437 10.3908 17.3767 11.2928C16.3927 11.9358 15.9277 12.4418 15.9277 13.2348V13.3988C15.9277 13.9588 15.5037 14.4098 14.7927 14.4098ZM14.7517 18.6078C13.9457 18.6078 13.2347 17.9648 13.2347 17.1448C13.2347 16.3378 13.9317 15.6818 14.7517 15.6818C15.5857 15.6818 16.2837 16.3238 16.2837 17.1448C16.2837 17.9788 15.5727 18.6078 14.7517 18.6078Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.0078125 29.244140625"
          className={className}
        >
          <path
            d="              M8.7777 29.2443C9.3787 29.2443 9.8297 28.9703 10.5407 28.3283L15.5997 23.7753H24.4587C28.6017 23.7753 31.0077 21.3413 31.0077 17.2543V6.5483C31.0077 2.4473 28.6017 0.0003 24.4587 0.0003H6.5347C2.4067 0.0003 -0.0003 2.4473 -0.0003 6.5483V17.2543C-0.0003 21.3553 2.5017 23.7753 6.3847 23.7753H7.4097V27.6993C7.4097 28.6423 7.9157 29.2443 8.7777 29.2443ZM15.1757 14.6563C14.1917 14.6563 13.6447 14.2183 13.6447 13.3433V13.2203C13.6447 12.0043 14.3687 11.2933 15.3677 10.5823C16.5567 9.7613 17.1447 9.3383 17.1447 8.4903C17.1447 7.6153 16.4337 6.9863 15.3947 6.9863C14.6157 6.9863 13.9997 7.3413 13.5217 8.0803L13.3297 8.3393C13.0297 8.7363 12.6327 8.9553 12.0857 8.9553C11.4157 8.9553 10.8417 8.4633 10.8417 7.7383C10.8417 7.4513 10.8967 7.2053 10.9927 6.9593C11.4847 5.5913 13.1797 4.5253 15.6267 4.5253C18.2517 4.5253 20.4257 5.9333 20.4257 8.3263C20.4257 9.9393 19.5647 10.7593 18.1287 11.6893C17.2677 12.2503 16.7207 12.7283 16.6527 13.4253C16.6387 13.4803 16.6387 13.5353 16.6387 13.5893C16.5707 14.2053 16.0097 14.6563 15.1757 14.6563ZM15.1617 19.1403C14.1637 19.1403 13.3577 18.4573 13.3577 17.5003C13.3577 16.5433 14.1637 15.8593 15.1617 15.8593C16.1597 15.8593 16.9397 16.5433 16.9397 17.5003C16.9397 18.4703 16.1467 19.1403 15.1617 19.1403Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.080078125 26.810546875"
          className={className}
        >
          <path
            d="              M7.0407 26.8105C7.3417 26.8105 7.5747 26.6325 7.8617 26.3865L12.8247 22.0935H23.8707C27.0977 22.0935 29.0797 20.0705 29.0797 16.8845V5.2085C29.0797 2.0235 27.0977 -0.0005 23.8707 -0.0005H5.2087C1.9827 -0.0005 -0.0003 1.9965 -0.0003 5.2085V16.8845C-0.0003 20.0975 1.9827 22.0935 5.2087 22.0935H6.3707V26.0445C6.3707 26.5095 6.6447 26.8105 7.0407 26.8105ZM14.3007 13.7945C13.9867 13.7945 13.7817 13.5895 13.7817 13.2615V12.7835C13.7817 11.6485 14.2737 10.9375 15.3947 10.1445C16.7347 9.2145 17.2127 8.6265 17.2127 7.6835C17.2127 6.4535 16.1877 5.5645 14.5607 5.5645C13.0567 5.5645 11.9767 6.6305 11.8677 7.7385L11.8127 7.9295C11.7577 8.1625 11.5667 8.3125 11.3067 8.3125C11.0467 8.3125 10.8277 8.1345 10.8277 7.8065C10.8277 7.6015 10.8417 7.4515 10.8687 7.2875C11.0747 5.8655 12.4547 4.6215 14.6017 4.6215C16.7477 4.6215 18.3337 5.8515 18.3337 7.6155C18.3337 8.9275 17.7327 9.7475 16.2967 10.7185C15.2027 11.4565 14.8207 11.9765 14.8207 12.8515V13.2755C14.8207 13.5765 14.6157 13.7945 14.3007 13.7945ZM14.2867 17.4865C13.7267 17.4865 13.2757 17.0215 13.2757 16.4885C13.2757 15.9555 13.7267 15.4905 14.2867 15.4905C14.8477 15.4905 15.2987 15.9555 15.2987 16.4885C15.2987 17.0215 14.8477 17.4865 14.2867 17.4865Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.765625 26.345703125"
          className={className}
        >
          <path
            d="              M6.7267 26.3455C6.9457 26.3455 7.1367 26.2095 7.3147 26.0585L12.2907 21.8345H23.8707C26.8517 21.8345 28.7657 19.8785 28.7657 16.9255V4.8945C28.7657 1.9555 26.8517 0.0005 23.8707 0.0005H4.8947C1.9137 0.0005 -0.0003 1.9145 -0.0003 4.8945V16.9255C-0.0003 19.9195 1.9137 21.8345 4.8947 21.8345H6.2207V25.7715C6.2207 26.1265 6.4397 26.3455 6.7267 26.3455ZM14.1637 13.6175C13.9587 13.6175 13.8087 13.4665 13.8087 13.2485V12.6735C13.8087 11.6215 14.2187 10.9235 15.3947 10.1035C16.7617 9.1605 17.2127 8.5315 17.2127 7.5875C17.2127 6.3025 16.1187 5.3735 14.3827 5.3735C12.7147 5.3735 11.5387 6.6175 11.5527 7.8065V7.9575C11.5527 8.1625 11.4027 8.2855 11.1977 8.2855C10.9927 8.2855 10.8557 8.1485 10.8557 7.9165C10.8557 7.7245 10.8557 7.6015 10.8827 7.4515C11.0337 6.0015 12.3457 4.7165 14.4237 4.7165C16.4887 4.7165 17.9237 5.9475 17.9237 7.5335C17.9237 8.7505 17.4317 9.5425 15.9827 10.5415C14.8617 11.3205 14.4927 11.8395 14.4927 12.7285V13.2485C14.4927 13.4665 14.3687 13.6175 14.1637 13.6175ZM14.1507 17.1585C13.6587 17.1585 13.2887 16.7485 13.2887 16.2965C13.2887 15.8325 13.6587 15.4355 14.1507 15.4355C14.6287 15.4355 15.0117 15.8325 15.0117 16.2965C15.0117 16.7485 14.6287 17.1585 14.1507 17.1585Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}