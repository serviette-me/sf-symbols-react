import { IconProps } from "../../types"

export default function NineAltSquareFillIconIcon({
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
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM7.6157 11.7303C7.6157 8.8453 9.9667 6.8083 13.6587 6.8083C17.4587 6.8083 19.7697 8.8183 19.7697 12.0313C19.7697 14.0953 18.9907 15.4633 17.6367 17.3633C17.4177 17.6503 16.8987 18.3612 16.5157 18.8403C15.8727 19.6603 15.2307 20.2613 13.9867 20.2613C12.6327 20.2613 11.7987 19.3863 11.7987 18.4433C11.7987 17.7323 12.1267 17.1993 12.5097 16.8303C12.7427 16.5703 13.0017 16.2833 13.2347 15.9963C13.5217 15.7093 13.7947 15.3813 13.9727 15.1353H13.7677C13.2887 15.5863 12.4827 15.7913 11.6757 15.7913C9.3247 15.7913 7.6157 14.0543 7.6157 11.7303ZM12.0317 11.4843C12.0317 12.2093 12.7287 12.7153 13.6587 12.7153C14.6017 12.7153 15.2847 12.2093 15.2847 11.4843C15.2847 10.7463 14.6017 10.2403 13.6587 10.2403C12.7287 10.2403 12.0317 10.7463 12.0317 11.4843Z"
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
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM7.6567 11.0467C7.6567 8.2847 9.8437 6.3297 13.1527 6.3297C16.5157 6.3297 18.6617 8.2717 18.6617 11.2387C18.6617 13.0427 17.9787 14.4507 16.6387 16.2557C16.1597 16.9117 15.3677 17.9507 14.8067 18.6487C14.2867 19.3047 13.8497 19.7697 12.9607 19.7697C12.0037 19.7697 11.4027 19.1267 11.4027 18.4437C11.4027 17.9507 11.6207 17.5547 11.9217 17.2267C12.4547 16.5837 13.0567 15.8867 13.5627 15.2437C13.8637 14.9157 14.0957 14.6017 14.2457 14.3687H14.0547C13.5767 14.8477 12.6737 15.1207 11.7987 15.1207C9.4067 15.1207 7.6567 13.3847 7.6567 11.0467ZM10.8687 10.8687C10.8687 11.9897 11.8397 12.7827 13.1527 12.7827C14.4517 12.7827 15.4217 11.9897 15.4217 10.8827C15.4217 9.7617 14.4517 8.9547 13.1387 8.9547C11.8397 8.9547 10.8687 9.7617 10.8687 10.8687Z"
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
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM7.6427 11.4165C7.6427 8.5855 9.9117 6.5895 13.4117 6.5895C17.0217 6.5895 19.2497 8.5725 19.2497 11.6625C19.2497 13.6035 18.5117 14.9985 17.1717 16.8435C16.8297 17.3085 16.1737 18.1695 15.7087 18.7575C15.1207 19.4965 14.5747 20.0425 13.5077 20.0425C12.3317 20.0425 11.6077 19.2775 11.6077 18.4435C11.6077 17.8415 11.8947 17.3765 12.2367 17.0215C12.6057 16.5835 13.0297 16.1055 13.3987 15.6545C13.6857 15.3535 13.9457 15.0255 14.1097 14.7795H13.9047C13.4257 15.2445 12.5777 15.4765 11.7307 15.4765C9.3657 15.4765 7.6427 13.7535 7.6427 11.4165ZM11.4847 11.1975C11.4847 12.1135 12.3047 12.7425 13.4257 12.7425C14.5337 12.7425 15.3537 12.1135 15.3537 11.2105C15.3537 10.2945 14.5337 9.6385 13.4117 9.6385C12.3047 9.6385 11.4847 10.2815 11.4847 11.1975Z"
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
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM7.7927 10.1175C7.7927 7.6015 9.7067 5.8245 12.4687 5.8245C15.2437 5.8245 17.1717 7.6155 17.1717 10.1995C17.1717 11.6755 16.5567 13.0565 15.2577 14.8065C14.6017 15.6815 13.3847 17.2405 12.6467 18.1695C12.3187 18.5805 12.1267 18.8535 11.7027 18.8535C11.2517 18.8535 10.9647 18.5395 10.9647 18.2105C10.9647 17.9785 11.0607 17.7735 11.2387 17.5685C12.3457 16.2015 13.2477 15.0805 13.9317 14.2055C14.2597 13.8085 14.4517 13.5215 14.6157 13.2615H14.4517C13.9177 13.7815 12.9337 14.1095 11.9627 14.1095C9.5427 14.1095 7.7927 12.4275 7.7927 10.1175ZM9.3377 10.0485C9.3377 11.6755 10.6777 12.8515 12.4957 12.8515C14.2867 12.8515 15.6137 11.6895 15.6137 10.0765C15.6137 8.4495 14.2457 7.2465 12.4547 7.2465C10.6777 7.2465 9.3377 8.4355 9.3377 10.0485Z"
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
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM7.6837 10.5953C7.6837 7.9163 9.7477 6.0293 12.8247 6.0293C15.9007 6.0293 17.9647 7.9163 17.9647 10.7323C17.9647 12.3593 17.3227 13.7813 16.0097 15.5583C15.3537 16.4203 14.3967 17.6643 13.7267 18.5113C13.2757 19.0723 12.9747 19.4413 12.3047 19.4413C11.5937 19.4413 11.1427 18.9493 11.1427 18.4293C11.1427 18.0883 11.2927 17.7733 11.5527 17.4863C12.2777 16.5973 13.0837 15.6273 13.7677 14.7523C14.0687 14.3963 14.3007 14.0953 14.4237 13.8773H14.2327C13.7537 14.3693 12.7967 14.6703 11.8807 14.6703C9.4607 14.6703 7.6837 12.9473 7.6837 10.5953ZM10.1177 10.4723C10.1177 11.8403 11.2797 12.8103 12.8247 12.8103C14.3557 12.8103 15.5177 11.8403 15.5177 10.4863C15.5177 9.1333 14.3417 8.1213 12.8107 8.1213C11.2797 8.1213 10.1177 9.1193 10.1177 10.4723Z"
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
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM7.6977 10.3355C7.6977 7.6975 9.7067 5.8515 12.6327 5.8515C15.5587 5.8515 17.5687 7.7105 17.5687 10.4455C17.5687 11.9765 16.9527 13.4125 15.6547 15.1485C14.9027 16.1465 13.8357 17.5135 13.1117 18.4295C12.7017 18.9355 12.4827 19.2635 11.9357 19.2635C11.3617 19.2635 10.9927 18.8535 10.9927 18.4295C10.9927 18.1565 11.1017 17.8965 11.3477 17.6225C12.1677 16.5975 13.0977 15.4765 13.8907 14.4785C14.1917 14.1095 14.4097 13.8085 14.5197 13.6035H14.3417C13.8637 14.0955 12.8657 14.4235 11.9357 14.4235C9.4887 14.4235 7.6977 12.7015 7.6977 10.3355ZM9.6937 10.2535C9.6937 11.7445 10.9647 12.8375 12.6467 12.8375C14.3007 12.8375 15.5587 11.7575 15.5587 10.2535C15.5587 8.7775 14.2867 7.6565 12.6327 7.6565C10.9647 7.6565 9.6937 8.7635 9.6937 10.2535Z"
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
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM7.6697 10.787C7.6697 8.08 9.7887 6.152 12.9607 6.152C16.1597 6.152 18.2657 8.066 18.2657 10.951C18.2657 12.66 17.6097 14.068 16.2837 15.859C15.6957 16.639 14.8207 17.787 14.1917 18.566C13.7127 19.168 13.3577 19.578 12.5917 19.578C11.7717 19.578 11.2517 19.031 11.2517 18.443C11.2517 18.02 11.4297 17.691 11.7167 17.377C12.3457 16.598 13.0707 15.736 13.6857 14.971C13.9727 14.629 14.2187 14.314 14.3557 14.096H14.1637C13.6717 14.574 12.7427 14.861 11.8537 14.861C9.4337 14.861 7.6697 13.139 7.6697 10.787ZM10.4457 10.65C10.4457 11.895 11.5257 12.797 12.9607 12.797C14.3967 12.797 15.4767 11.908 15.4767 10.65C15.4767 9.406 14.3827 8.49 12.9607 8.49C11.5257 8.49 10.4457 9.406 10.4457 10.65Z"
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
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM7.9027 9.8164C7.9027 7.4374 9.6937 5.7694 12.2497 5.7694C14.8337 5.7694 16.6387 7.4644 16.6387 9.8714C16.6387 11.2524 16.0237 12.5644 14.7247 14.3414C14.2047 15.0394 12.7837 16.8574 12.0447 17.8144C11.8127 18.1014 11.6757 18.3064 11.3747 18.3064C11.0877 18.3064 10.9377 18.0884 10.9377 17.8964C10.9377 17.7324 11.0057 17.6094 11.1157 17.4724C12.5647 15.6684 13.4527 14.5474 13.9867 13.8364C14.3277 13.3984 14.5197 13.1254 14.7247 12.7974L14.6017 12.7834C13.9997 13.3434 13.0017 13.6724 12.0037 13.6724C9.6117 13.6724 7.9027 12.0584 7.9027 9.8164ZM8.8727 9.7754C8.8727 11.5664 10.2947 12.8514 12.3047 12.8514C14.2597 12.8514 15.6817 11.5934 15.6817 9.8164C15.6817 8.0254 14.2047 6.6724 12.2367 6.6724C10.2947 6.6724 8.8727 7.9984 8.8727 9.7754Z"
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
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM7.9567 9.652C7.9567 7.355 9.6937 5.729 12.1407 5.729C14.6157 5.729 16.3787 7.383 16.3787 9.707C16.3787 11.047 15.7497 12.318 14.4517 14.096C13.9997 14.711 12.4827 16.666 11.7307 17.623C11.5527 17.842 11.4437 18.02 11.2107 18.02C11.0197 18.02 10.9097 17.869 10.9097 17.732C10.9097 17.609 10.9787 17.514 11.0467 17.432C12.6877 15.381 13.5627 14.26 14.0277 13.645C14.3687 13.193 14.5467 12.934 14.7797 12.564L14.6697 12.537C14.0407 13.111 13.0427 13.453 12.0177 13.453C9.6387 13.453 7.9567 11.867 7.9567 9.652ZM8.6267 9.639C8.6267 11.512 10.1037 12.852 12.1957 12.852C14.2457 12.852 15.7227 11.539 15.7227 9.693C15.7227 7.793 14.1777 6.371 12.1267 6.371C10.1037 6.371 8.6267 7.766 8.6267 9.639Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
