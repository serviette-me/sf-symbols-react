import { IconProps } from "../../types"

export default function ArrowUpToLineCompactIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.560546875 26.373046875"
          className={className}
        >
          <path
            d="              M10.7737 26.3728C12.4277 26.3728 13.5217 25.2248 13.5217 23.4748V15.6678L13.2347 13.0018L14.7797 14.8208L16.4477 16.4468C16.9397 16.9398 17.5547 17.3628 18.4157 17.3628C19.8787 17.3628 20.9997 16.2968 20.9997 14.6428C20.9997 14.0138 20.7127 13.3028 20.1387 12.7698L12.7837 5.9608C12.3867 5.5778 11.8537 5.2908 11.2247 5.1958H18.9497C20.3987 5.1958 21.5607 4.0198 21.5607 2.5978C21.5607 1.1618 20.3987 -0.0002 18.9497 -0.0002H2.5977C1.1487 -0.0002 -0.0003 1.1618 -0.0003 2.5978C-0.0003 4.0198 1.1487 5.1958 2.5977 5.1958H10.3227C9.7067 5.2908 9.1597 5.5778 8.7637 5.9608L1.4217 12.7698C0.8617 13.3028 0.5747 14.0138 0.5747 14.6428C0.5747 16.2968 1.6957 17.3628 3.1587 17.3628C4.0197 17.3628 4.6077 16.9668 5.1267 16.4468L6.7817 14.8208L8.3127 13.0018L8.0387 15.6678V23.4748C8.0387 25.2248 9.1187 26.3728 10.7737 26.3728Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.19140625 25.224609375"
          className={className}
        >
          <path
            d="              M10.5957 25.2246C11.7847 25.2246 12.5777 24.4046 12.5777 23.1736V12.3726L12.3867 9.5706L15.2167 12.7286L17.5817 15.0526C17.9377 15.4086 18.4027 15.6816 19.0037 15.6816C20.0837 15.6816 20.8907 14.8886 20.8907 13.7266C20.8907 13.2346 20.6857 12.7426 20.2617 12.3316L12.0587 4.3886C11.7717 4.1016 11.3887 3.8966 10.9647 3.8146H19.2907C20.3707 3.8146 21.1917 2.9806 21.1917 1.9006C21.1917 0.8336 20.3707 -0.0004 19.2907 -0.0004H1.8867C0.8207 -0.0004 -0.0003 0.8336 -0.0003 1.9006C-0.0003 2.9806 0.8207 3.8146 1.8867 3.8146H10.2127C9.8027 3.8966 9.4197 4.1016 9.1327 4.3886L0.9437 12.3316C0.5197 12.7426 0.3147 13.2346 0.3147 13.7266C0.3147 14.8886 1.1207 15.6816 2.2017 15.6816C2.7887 15.6816 3.2537 15.4216 3.6227 15.0526L5.9747 12.7286L8.8047 9.5706L8.6137 12.3726V23.1736C8.6137 24.4046 9.4067 25.2246 10.5957 25.2246Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.3828125 25.853515625"
          className={className}
        >
          <path
            d="              M10.6917 25.854C12.1267 25.854 13.0707 24.855 13.0707 23.352V14.123L12.8377 11.389L14.9847 13.85L16.9807 15.791C17.4177 16.228 17.9517 16.57 18.6897 16.57C19.9747 16.57 20.9457 15.641 20.9457 14.219C20.9457 13.658 20.6997 13.057 20.1937 12.564L12.4417 5.223C12.0997 4.895 11.6347 4.648 11.1157 4.553H19.1137C20.3847 4.553 21.3827 3.541 21.3827 2.283C21.3827 1.025 20.3847 0 19.1137 0H2.2557C0.9977 0 -0.0003 1.025 -0.0003 2.283C-0.0003 3.541 0.9977 4.553 2.2557 4.553H10.2677C9.7477 4.648 9.2837 4.895 8.9417 5.223L1.2027 12.564C0.6977 13.057 0.4517 13.658 0.4517 14.219C0.4517 15.641 1.4217 16.57 2.7067 16.57C3.4457 16.57 3.9647 16.242 4.4157 15.791L6.3987 13.85L8.5447 11.389L8.3127 14.123V23.352C8.3127 24.855 9.2557 25.854 10.6917 25.854Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.603515625 23.857421875"
          className={className}
        >
          <path
            d="              M10.3087 23.857C10.8417 23.857 11.2247 23.488 11.2247 22.941V7.615L11.1567 4.662L14.8747 8.641L18.8947 12.647C19.0727 12.824 19.3317 12.92 19.5917 12.92C20.1117 12.92 20.4937 12.537 20.4937 12.018C20.4937 11.73 20.3707 11.498 20.1527 11.266L10.9927 2.133C10.8687 1.996 10.7047 1.9 10.5407 1.846H19.6877C20.2347 1.846 20.6037 1.463 20.6037 0.916C20.6037 0.383 20.2347 0 19.6877 0H0.9027C0.3687 0 -0.0003 0.383 -0.0003 0.916C-0.0003 1.463 0.3687 1.846 0.9027 1.846H10.0627C9.8987 1.9 9.7477 1.996 9.6117 2.133L0.4647 11.266C0.2457 11.498 0.1227 11.73 0.1227 12.018C0.1227 12.537 0.5057 12.92 1.0257 12.92C1.2847 12.92 1.5447 12.824 1.7227 12.647L5.7287 8.641L9.4607 4.648L9.3787 7.615V22.941C9.3787 23.488 9.7617 23.857 10.3087 23.857Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.958984375 24.513671875"
          className={className}
        >
          <path
            d="              M10.4867 24.5141C11.3617 24.5141 11.9767 23.8981 11.9767 22.9961V10.2671L11.8397 7.3961L15.4907 11.4021L18.3067 14.1641C18.5797 14.4371 18.9627 14.6151 19.3867 14.6151C20.2067 14.6151 20.8227 14.0001 20.8227 13.1521C20.8227 12.7561 20.6587 12.3871 20.3297 12.0581L11.5937 3.4041C11.3747 3.1721 11.1017 3.0081 10.8007 2.9531H19.4957C20.3437 2.9531 20.9587 2.3241 20.9587 1.4761C20.9587 0.6291 20.3437 0.0001 19.4957 0.0001H1.4357C0.6017 0.0001 -0.0003 0.6291 -0.0003 1.4761C-0.0003 2.3241 0.6017 2.9531 1.4357 2.9531H10.1587C9.8577 3.0081 9.5837 3.1721 9.3657 3.4041L0.6287 12.0581C0.3007 12.3871 0.1507 12.7561 0.1507 13.1521C0.1507 14.0001 0.7517 14.6151 1.5857 14.6151C2.0097 14.6151 2.3787 14.4511 2.6657 14.1641L5.4687 11.4021L9.1187 7.3831L8.9827 10.2671V22.9961C8.9827 23.8981 9.5977 24.5141 10.4867 24.5141Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.822265625 24.103515625"
          className={className}
        >
          <path
            d="              M10.4177 24.104C11.1287 24.104 11.6347 23.598 11.6347 22.887V9.078L11.5387 6.152L15.6547 10.65L18.7167 13.672C18.9357 13.891 19.2637 14.014 19.5917 14.014C20.2757 14.014 20.7817 13.494 20.7817 12.811C20.7817 12.482 20.6447 12.182 20.3707 11.895L11.3337 2.844C11.1427 2.639 10.9237 2.516 10.6917 2.447H19.6187C20.3297 2.447 20.8227 1.941 20.8227 1.23C20.8227 0.52 20.3297 0 19.6187 0H1.1757C0.4787 0 -0.0003 0.52 -0.0003 1.23C-0.0003 1.941 0.4787 2.447 1.1757 2.447H10.1307C9.8987 2.516 9.6797 2.639 9.5017 2.844L0.4517 11.895C0.1917 12.182 0.0547 12.482 0.0547 12.811C0.0547 13.494 0.5467 14.014 1.2437 14.014C1.5727 14.014 1.8867 13.891 2.1187 13.672L5.1817 10.65L9.2967 6.139L9.1877 9.078V22.887C9.1877 23.598 9.6937 24.104 10.4177 24.104Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.0546875 24.814453125"
          className={className}
        >
          <path
            d="              M10.5277 24.8145C11.5387 24.8145 12.2367 24.1175 12.2367 23.0645V11.1695L12.0727 8.3265L15.3677 11.9765L17.9927 14.5465C18.3067 14.8615 18.7167 15.0665 19.2227 15.0665C20.1527 15.0665 20.8497 14.3825 20.8497 13.3985C20.8497 12.9605 20.6717 12.5375 20.3027 12.1675L11.7987 3.8285C11.5387 3.5685 11.2247 3.3905 10.8687 3.3225H19.4137C20.3577 3.3225 21.0547 2.5975 21.0547 1.6545C21.0547 0.7105 20.3577 0.0005 19.4137 0.0005H1.6267C0.6977 0.0005 -0.0003 0.7105 -0.0003 1.6545C-0.0003 2.5975 0.6977 3.3225 1.6267 3.3225H10.1857C9.8297 3.3905 9.5157 3.5685 9.2697 3.8285L0.7657 12.1675C0.3967 12.5375 0.2187 12.9605 0.2187 13.3985C0.2187 14.3825 0.9157 15.0665 1.8457 15.0665C2.3517 15.0665 2.7617 14.8615 3.0767 14.5465L5.6877 11.9765L8.9827 8.3125L8.8187 11.1695V23.0645C8.8187 24.1175 9.5157 24.8145 10.5277 24.8145Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.31640625 23.583984375"
          className={className}
        >
          <path
            d="              M10.1587 23.5843C10.4727 23.5843 10.6917 23.3653 10.6917 23.0513V5.6873L10.6367 2.7072L13.8497 6.0292L19.1407 11.3343C19.2497 11.4433 19.4137 11.5113 19.5777 11.5113C19.8927 11.5113 20.1247 11.2933 20.1247 10.9782C20.1247 10.7733 20.0157 10.6233 19.8517 10.4723L10.5547 1.2173C10.4867 1.1623 10.4177 1.1073 10.3357 1.0663H19.7837C20.0977 1.0663 20.3167 0.8612 20.3167 0.5332C20.3167 0.2183 20.0977 0.0003 19.7837 0.0003H0.5197C0.2047 0.0003 -0.0003 0.2183 -0.0003 0.5332C-0.0003 0.8612 0.2047 1.0663 0.5197 1.0663H9.9807C9.8987 1.1073 9.8167 1.1623 9.7617 1.2173L0.4647 10.4723C0.3147 10.6233 0.2047 10.7733 0.2047 10.9782C0.2047 11.2933 0.4377 11.5113 0.7387 11.5113C0.9027 11.5113 1.0797 11.4433 1.1897 11.3343L6.4667 6.0292L9.6657 2.7072L9.6247 5.6873V23.0513C9.6247 23.3653 9.8437 23.5843 10.1587 23.5843Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.166015625 23.419921875"
          className={className}
        >
          <path
            d="              M10.0767 23.4202C10.2817 23.4202 10.4177 23.2832 10.4177 23.0922V4.7032L10.3767 1.6952L13.3297 4.6762L19.2637 10.6362C19.3457 10.7192 19.4547 10.7732 19.5777 10.7732C19.7837 10.7732 19.9337 10.6362 19.9337 10.4452C19.9337 10.2672 19.8247 10.1722 19.7017 10.0492L10.3357 0.7382C10.2947 0.7112 10.2537 0.6832 10.2127 0.6702H19.8247C20.0297 0.6702 20.1657 0.5332 20.1657 0.3282C20.1657 0.1362 20.0297 0.0002 19.8247 0.0002H0.3277C0.1367 0.0002 -0.0003 0.1362 -0.0003 0.3282C-0.0003 0.5332 0.1367 0.6702 0.3277 0.6702H9.9397C9.8987 0.6832 9.8577 0.7112 9.8297 0.7382L0.4647 10.0492C0.3557 10.1722 0.2457 10.2672 0.2457 10.4452C0.2457 10.6362 0.3967 10.7732 0.6017 10.7732C0.7107 10.7732 0.8337 10.7192 0.9157 10.6362L6.8357 4.6762L9.7757 1.6952L9.7477 4.7032V23.0922C9.7477 23.2832 9.8847 23.4202 10.0767 23.4202Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
