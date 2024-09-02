import { IconProps } from "../../types"

export default function InfoBubbleFillIconIcon({
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
            d="              M10.1857 31.1168C10.8967 31.1168 11.5117 30.8438 12.3727 30.0918L17.6777 25.4978H25.7307C30.0237 25.4978 32.8677 22.6408 32.8677 18.3478V7.1508C32.8677 2.8578 30.0237 -0.0002 25.7307 -0.0002H7.1367C2.8437 -0.0002 -0.0003 2.8578 -0.0003 7.1508V18.3478C-0.0003 22.6408 3.1587 25.4978 6.6587 25.4978H8.5037V29.2848C8.5037 30.4198 9.1597 31.1168 10.1857 31.1168ZM16.5157 9.1878C15.2987 9.1878 14.2737 8.1488 14.2737 6.9458C14.2737 5.6738 15.2987 4.6758 16.5157 4.6758C17.7327 4.6758 18.7577 5.6738 18.7577 6.9458C18.7577 8.1488 17.7327 9.1878 16.5157 9.1878ZM13.9317 19.8648C13.0707 19.8648 12.4137 19.2778 12.4137 18.3888C12.4137 17.5688 13.0707 16.9118 13.9317 16.9118H15.2577V13.6038H14.2187C13.3437 13.6038 12.6877 13.0018 12.6877 12.1268C12.6877 11.3068 13.3437 10.6508 14.2187 10.6508H16.9257C18.0337 10.6508 18.6077 11.4028 18.6077 12.5778V16.9118H19.3727C20.2347 16.9118 20.8907 17.5688 20.8907 18.3888C20.8907 19.2778 20.2347 19.8648 19.3727 19.8648Z"
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
            d="              M9.1597 29.7365C9.7757 29.7365 10.2817 29.4625 11.0337 28.7935L16.1597 24.2265H24.8007C28.9847 24.2265 31.4997 21.6835 31.4997 17.5415V6.6995C31.4997 2.5435 28.9847 0.0005 24.8007 0.0005H6.6997C2.5157 0.0005 -0.0003 2.5435 -0.0003 6.6995V17.5415C-0.0003 21.6835 2.6797 24.2265 6.4667 24.2265H7.6977V28.1235C7.6977 29.1075 8.2437 29.7365 9.1597 29.7365ZM15.7367 8.0805C14.6567 8.0805 13.7537 7.1775 13.7537 6.1115C13.7537 4.9905 14.6567 4.1155 15.7367 4.1155C16.8297 4.1155 17.7047 4.9905 17.7047 6.1115C17.7047 7.1775 16.8297 8.0805 15.7367 8.0805ZM13.3577 19.3325C12.6597 19.3325 12.1267 18.8535 12.1267 18.1285C12.1267 17.4595 12.6597 16.9395 13.3577 16.9395H14.8337V12.3045H13.6177C12.9197 12.3045 12.3727 11.8125 12.3727 11.0875C12.3727 10.4315 12.9197 9.8985 13.6177 9.8985H16.2017C17.0897 9.8985 17.5547 10.5135 17.5547 11.4575V16.9395H18.7437C19.4417 16.9395 19.9747 17.4595 19.9747 18.1285C19.9747 18.8535 19.4417 19.3325 18.7437 19.3325Z"
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
            d="              M9.7067 30.461C10.3767 30.461 10.9237 30.201 11.7437 29.49L16.9667 24.897H25.2927C29.5317 24.897 32.2247 22.189 32.2247 17.965V6.945C32.2247 2.721 29.5317 0 25.2927 0H6.9317C2.6937 0 -0.0003 2.707 -0.0003 6.945V17.965C-0.0003 22.203 2.9397 24.897 6.5627 24.897H8.1207V28.738C8.1207 29.805 8.7227 30.461 9.7067 30.461ZM16.1467 8.668C14.9977 8.668 14.0277 7.697 14.0277 6.549C14.0277 5.359 14.9977 4.416 16.1467 4.416C17.3087 4.416 18.2517 5.359 18.2517 6.549C18.2517 7.697 17.3087 8.668 16.1467 8.668ZM13.6587 19.619C12.8787 19.619 12.2777 19.086 12.2777 18.266C12.2777 17.527 12.8787 16.926 13.6587 16.926H15.0527V12.988H13.9317C13.1387 12.988 12.5367 12.441 12.5367 11.635C12.5367 10.897 13.1387 10.309 13.9317 10.309H16.5837C17.5957 10.309 18.1017 10.979 18.1017 12.059V16.926H19.0727C19.8517 16.926 20.4667 17.527 20.4667 18.266C20.4667 19.086 19.8517 19.619 19.0727 19.619Z"
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
            d="              M7.6567 27.699C8.0937 27.699 8.4087 27.467 8.9007 27.016L13.8497 22.6H23.8707C27.5767 22.6 29.6817 20.453 29.6817 16.803V5.811C29.6817 2.146 27.5767 0 23.8707 0H5.8107C2.1057 0 -0.0003 2.133 -0.0003 5.811V16.803C-0.0003 20.467 2.1057 22.6 5.8107 22.6H6.6717V26.564C6.6717 27.248 7.0407 27.699 7.6567 27.699ZM14.7797 6.521C13.9867 6.521 13.3437 5.893 13.3437 5.1C13.3437 4.307 13.9867 3.664 14.7797 3.664C15.5727 3.664 16.2017 4.307 16.2017 5.1C16.2017 5.893 15.5727 6.521 14.7797 6.521ZM12.5367 18.443C12.1137 18.443 11.7987 18.129 11.7987 17.719C11.7987 17.322 12.1137 16.994 12.5367 16.994H14.3827V10.336H12.7017C12.2907 10.336 11.9627 10.021 11.9627 9.598C11.9627 9.201 12.2907 8.873 12.7017 8.873H15.1897C15.7087 8.873 15.9827 9.242 15.9827 9.775V16.994H17.8277C18.2517 16.994 18.5797 17.322 18.5797 17.719C18.5797 18.129 18.2517 18.443 17.8277 18.443Z"
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
            d="              M8.4907 28.8479C9.0647 28.8479 9.4887 28.5739 10.1717 27.9589L15.1757 23.4339H24.2127C28.3147 23.4339 30.6247 21.0819 30.6247 17.0219V6.4119C30.6247 2.3519 28.3147 -0.0001 24.2127 -0.0001H6.4257C2.3107 -0.0001 -0.0003 2.3519 -0.0003 6.4119V17.0219C-0.0003 21.0819 2.3657 23.4339 6.3297 23.4339H7.1917V27.3709C7.1917 28.2739 7.6697 28.8479 8.4907 28.8479ZM15.2437 7.3829C14.2457 7.3829 13.4397 6.5759 13.4397 5.5779C13.4397 4.5529 14.2457 3.7459 15.2437 3.7459C16.2427 3.7459 17.0347 4.5529 17.0347 5.5779C17.0347 6.5759 16.2427 7.3829 15.2437 7.3829ZM13.0017 19.0039C12.4007 19.0039 11.9357 18.5799 11.9357 17.9649C11.9357 17.4039 12.4007 16.9529 13.0017 16.9529H14.5607V11.4709H13.2207C12.6327 11.4709 12.1817 11.0469 12.1817 10.4449C12.1817 9.8709 12.6327 9.4199 13.2207 9.4199H15.7367C16.4747 9.4199 16.8707 9.9399 16.8707 10.7319V16.9529H18.3337C18.9357 16.9529 19.3867 17.4039 19.3867 17.9649C19.3867 18.5799 18.9357 19.0039 18.3337 19.0039Z"
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
            d="              M8.1207 28.3688C8.6547 28.3688 9.0507 28.0958 9.6937 27.4938L14.6287 22.9828H23.8707C27.9457 22.9828 30.1327 20.7398 30.1327 16.7348V6.2618C30.1327 2.2558 27.9457 -0.0002 23.8707 -0.0002H6.2617C2.1877 -0.0002 -0.0003 2.2418 -0.0003 6.2618V16.7348C-0.0003 20.7538 2.1877 22.9828 6.2617 22.9828H6.9047V26.9608C6.9047 27.8088 7.3417 28.3688 8.1207 28.3688ZM14.9567 6.9998C14.0137 6.9998 13.2477 6.2348 13.2477 5.2778C13.2477 4.3198 14.0137 3.5548 14.9567 3.5548C15.9137 3.5548 16.6657 4.3198 16.6657 5.2778C16.6657 6.2348 15.9137 6.9998 14.9567 6.9998ZM12.7967 18.8258C12.2497 18.8258 11.8397 18.4298 11.8397 17.8828C11.8397 17.3768 12.2497 16.9668 12.7967 16.9668H14.4097V11.0058H13.0157C12.4827 11.0058 12.0587 10.6228 12.0587 10.0758C12.0587 9.5698 12.4827 9.1598 13.0157 9.1598H15.4767C16.1327 9.1598 16.4887 9.6388 16.4887 10.3358V16.9668H18.1017C18.6487 16.9668 19.0587 17.3768 19.0587 17.8828C19.0587 18.4298 18.6487 18.8258 18.1017 18.8258Z"
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
            d="              M8.7777 29.2443C9.3787 29.2443 9.8297 28.9703 10.5407 28.3283L15.5997 23.7753H24.4587C28.6017 23.7753 31.0077 21.3413 31.0077 17.2543V6.5483C31.0077 2.4473 28.6017 0.0003 24.4587 0.0003H6.5347C2.4067 0.0003 -0.0003 2.4473 -0.0003 6.5483V17.2543C-0.0003 21.3553 2.5017 23.7753 6.3847 23.7753H7.4097V27.6993C7.4097 28.6423 7.9157 29.2443 8.7777 29.2443ZM15.4627 7.6973C14.4237 7.6973 13.5767 6.8493 13.5767 5.8103C13.5767 4.7443 14.4237 3.9103 15.4627 3.9103C16.4887 3.9103 17.3227 4.7443 17.3227 5.8103C17.3227 6.8493 16.4887 7.6973 15.4627 7.6973ZM13.1527 19.1543C12.5097 19.1543 12.0177 18.7033 12.0177 18.0473C12.0177 17.4453 12.5097 16.9533 13.1527 16.9533H14.6697V11.8393H13.3987C12.7557 11.8393 12.2637 11.3753 12.2637 10.7323C12.2637 10.1173 12.7557 9.6383 13.3987 9.6383H15.9277C16.7477 9.6383 17.1717 10.1993 17.1717 11.0603V16.9533H18.5117C19.1547 16.9533 19.6467 17.4453 19.6467 18.0473C19.6467 18.7033 19.1547 19.1543 18.5117 19.1543Z"
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
            d="              M7.0407 26.8105C7.3417 26.8105 7.5747 26.6325 7.8617 26.3865L12.8247 22.0935H23.8707C27.0977 22.0935 29.0797 20.0705 29.0797 16.8845V5.2085C29.0797 2.0235 27.0977 -0.0005 23.8707 -0.0005H5.2087C1.9827 -0.0005 -0.0003 1.9965 -0.0003 5.2085V16.8845C-0.0003 20.0975 1.9827 22.0935 5.2087 22.0935H6.3707V26.0445C6.3707 26.5095 6.6447 26.8105 7.0407 26.8105ZM14.5337 5.9065C13.9457 5.9065 13.4667 5.4555 13.4667 4.8675C13.4667 4.2795 13.9457 3.8005 14.5337 3.8005C15.1077 3.8005 15.5857 4.2795 15.5857 4.8675C15.5857 5.4555 15.1077 5.9065 14.5337 5.9065ZM12.2087 17.9515C11.9217 17.9515 11.7307 17.7465 11.7307 17.4865C11.7307 17.2405 11.9217 17.0215 12.2087 17.0215H14.3557V9.4335H12.3047C12.0317 9.4335 11.8397 9.2285 11.8397 8.9685C11.8397 8.7225 12.0317 8.5035 12.3047 8.5035H14.8207C15.1347 8.5035 15.3127 8.7365 15.3127 9.0235V17.0215H17.4587C17.7327 17.0215 17.9237 17.2405 17.9237 17.4865C17.9237 17.7465 17.7327 17.9515 17.4587 17.9515Z"
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
            d="              M6.7267 26.3455C6.9457 26.3455 7.1367 26.2095 7.3147 26.0585L12.2907 21.8345H23.8707C26.8517 21.8345 28.7657 19.8785 28.7657 16.9255V4.8945C28.7657 1.9555 26.8517 0.0005 23.8707 0.0005H4.8947C1.9137 0.0005 -0.0003 1.9145 -0.0003 4.8945V16.9255C-0.0003 19.9195 1.9137 21.8345 4.8947 21.8345H6.2207V25.7715C6.2207 26.1265 6.4397 26.3455 6.7267 26.3455ZM14.3967 5.5915C13.9177 5.5915 13.5217 5.2225 13.5217 4.7445C13.5217 4.2655 13.9177 3.8695 14.3967 3.8695C14.8747 3.8695 15.2717 4.2655 15.2717 4.7445C15.2717 5.2225 14.8747 5.5915 14.3967 5.5915ZM12.0317 17.6915C11.8267 17.6915 11.7027 17.5415 11.7027 17.3635C11.7027 17.1995 11.8267 17.0355 12.0317 17.0355H14.3417V8.9685H12.0997C11.8947 8.9685 11.7717 8.8185 11.7717 8.6405C11.7717 8.4765 11.8947 8.3125 12.0997 8.3125H14.6427C14.8337 8.3125 14.9567 8.4625 14.9567 8.6405V17.0355H17.2677C17.4727 17.0355 17.5957 17.1995 17.5957 17.3635C17.5957 17.5415 17.4727 17.6915 17.2677 17.6915Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
