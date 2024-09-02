import { IconProps } from "../../types"

export default function RectangleDashedIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.03125 27.111328125"
          className={className}
        >
          <path
            d="              M-0.0003 7.5063H4.8537V6.0972C4.8537 5.1953 5.2637 4.8532 6.0977 4.8532H7.5057V0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592ZM33.0317 7.5063V5.3592C33.0317 1.9683 31.0487 0.0003 27.6717 0.0003H25.5257V4.8532H26.9337C27.7677 4.8532 28.1777 5.1953 28.1777 6.0972V7.5063ZM10.0767 4.8532H15.2307V0.0003H10.0767ZM17.8007 4.8532H22.9547V0.0003H17.8007ZM-0.0003 17.0213H4.8537V10.0763H-0.0003ZM33.0317 17.0213V10.0763H28.1777V17.0213ZM5.3597 27.1113H7.5057V22.2583H6.0977C5.2637 22.2583 4.8537 21.9023 4.8537 21.0003V19.5923H-0.0003V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM27.6717 27.1113C31.0487 27.1113 33.0317 25.1293 33.0317 21.7523V19.5923H28.1777V21.0003C28.1777 21.9023 27.7677 22.2583 26.9337 22.2583H25.5257V27.1113ZM10.0767 27.1113H15.2307V22.2583H10.0767ZM17.8007 27.1113H22.9547V22.2583H17.8007Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.634765625 26.140625"
          className={className}
        >
          <path
            d="              M-0.0003 7.3687H3.5277V5.2367C3.5277 4.0737 4.1157 3.5277 5.2087 3.5277H7.3277V-0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987ZM32.6347 7.3687V4.7987C32.6347 1.6957 30.9257 -0.0003 27.8087 -0.0003H25.3067V3.5277H27.4257C28.5197 3.5277 29.1077 4.0737 29.1077 5.2367V7.3687ZM9.5567 3.5277H15.2027V-0.0003H9.5567ZM17.4317 3.5277H23.0917V-0.0003H17.4317ZM-0.0003 16.5707H3.5277V9.5837H-0.0003ZM32.6347 16.5707V9.5837H29.1077V16.5707ZM4.8267 26.1407H7.3277V22.6137H5.2087C4.1157 22.6137 3.5277 22.0797 3.5277 20.9177V18.7847H-0.0003V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM27.8087 26.1407C30.9257 26.1407 32.6347 24.4457 32.6347 21.3417V18.7847H29.1077V20.9177C29.1077 22.0797 28.5197 22.6137 27.4257 22.6137H25.3067V26.1407ZM9.5567 26.1407H15.2027V22.6137H9.5567ZM17.4317 26.1407H23.0917V22.6137H17.4317Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.83984375 26.66015625"
          className={className}
        >
          <path
            d="              M-0.0003 7.4515H4.2247V5.7015C4.2247 4.6755 4.7167 4.2385 5.6877 4.2385H7.4237V-0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995ZM32.8397 7.4515V5.0995C32.8397 1.8455 30.9937 -0.0005 27.7267 -0.0005H25.4157V4.2385H27.1657C28.1227 4.2385 28.6157 4.6755 28.6157 5.7015V7.4515ZM9.8297 4.2385H15.2167V-0.0005H9.8297ZM17.6227 4.2385H23.0097V-0.0005H17.6227ZM-0.0003 16.8165H4.2247V9.8575H-0.0003ZM32.8397 16.8165V9.8575H28.6157V16.8165ZM5.1137 26.6605H7.4237V22.4355H5.6877C4.7167 22.4355 4.2247 21.9985 4.2247 20.9725V19.2225H-0.0003V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM27.7267 26.6605C30.9937 26.6605 32.8397 24.8145 32.8397 21.5605V19.2225H28.6157V20.9725C28.6157 21.9985 28.1227 22.4355 27.1657 22.4355H25.4157V26.6605ZM9.8297 26.6605H15.2167V22.4355H9.8297ZM17.6227 26.6605H23.0097V22.4355H17.6227Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.01953125 24.759765625"
          className={className}
        >
          <path
            d="              M-0.0003 7.1775H1.6957V4.0875C1.6957 2.5155 2.5297 1.6955 4.0607 1.6955H7.1367V0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055ZM32.0197 7.1775V4.0055C32.0197 1.3535 30.6527 0.0005 27.9867 0.0005H24.8827V1.6955H27.9587C29.4907 1.6955 30.3247 2.5155 30.3247 4.0875V7.1775ZM8.7227 1.6955H15.2167V0.0005H8.7227ZM16.8027 1.6955H23.2967V0.0005H16.8027ZM-0.0003 16.0095H1.6957V8.7635H-0.0003ZM32.0197 16.0095V8.7635H30.3247V16.0095ZM4.0337 24.7595H7.1367V23.0645H4.0607C2.5297 23.0645 1.6957 22.2575 1.6957 20.6715V17.5955H-0.0003V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM27.9867 24.7595C30.6527 24.7595 32.0197 23.4065 32.0197 20.7675V17.5955H30.3247V20.6715C30.3247 22.2575 29.4907 23.0645 27.9587 23.0645H24.8827V24.7595ZM8.7227 24.7595H15.2167V23.0645H8.7227ZM16.8027 24.7595H23.2967V23.0645H16.8027Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.388671875 25.525390625"
          className={className}
        >
          <path
            d="              M-0.0003 7.2593H2.6797V4.6623C2.6797 3.3363 3.3767 2.6793 4.6487 2.6793H7.2187V0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433ZM32.3887 7.2593V4.4433C32.3887 1.5173 30.8437 0.0003 27.9047 0.0003H25.1697V2.6793H27.7407C29.0117 2.6793 29.7087 3.3363 29.7087 4.6623V7.2593ZM9.2147 2.6793H15.1897V0.0003H9.2147ZM17.1857 2.6793H23.1737V0.0003H17.1857ZM-0.0003 16.2693H2.6797V9.2563H-0.0003ZM32.3887 16.2693V9.2563H29.7087V16.2693ZM4.4847 25.5253H7.2187V22.8453H4.6487C3.3767 22.8453 2.6797 22.1753 2.6797 20.8493V18.2523H-0.0003V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM27.9047 25.5253C30.8437 25.5253 32.3887 24.0083 32.3887 21.0823V18.2523H29.7087V20.8493C29.7087 22.1753 29.0117 22.8453 27.7407 22.8453H25.1697V25.5253ZM9.2147 25.5253H15.1897V22.8453H9.2147ZM17.1857 25.5253H23.1737V22.8453H17.1857Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.23828125 25.169921875"
          className={className}
        >
          <path
            d="              M-0.0003 7.2055H2.2017V4.3475C2.2017 2.9255 2.9527 2.2015 4.3207 2.2015H7.1507V-0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385ZM32.2387 7.2055V4.2385C32.2387 1.4085 30.8027 -0.0005 27.9457 -0.0005H25.0877V2.2015H27.9177C29.2847 2.2015 30.0367 2.9255 30.0367 4.3475V7.2055ZM9.0237 2.2015H15.1897V-0.0005H9.0237ZM17.0487 2.2015H23.2147V-0.0005H17.0487ZM-0.0003 16.0915H2.2017V9.0785H-0.0003ZM32.2387 16.0915V9.0785H30.0367V16.0915ZM4.2927 25.1695H7.1507V22.9685H4.3207C2.9527 22.9685 2.2017 22.2445 2.2017 20.8225V17.9645H-0.0003V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM27.9457 25.1695C30.8027 25.1695 32.2387 23.7615 32.2387 20.9315V17.9645H30.0367V20.8225C30.0367 22.2445 29.2847 22.9685 27.9177 22.9685H25.0877V25.1695ZM9.0237 25.1695H15.1897V22.9685H9.0237ZM17.0487 25.1695H23.2147V22.9685H17.0487Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.498046875 25.78515625"
          className={className}
        >
          <path
            d="              M-0.0003 7.314H3.0487V4.908C3.0487 3.65 3.6917 3.049 4.8947 3.049H7.2597V0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594ZM32.4977 7.314V4.594C32.4977 1.6 30.8847 0 27.8637 0H25.2247V3.049H27.6037C28.8067 3.049 29.4497 3.65 29.4497 4.908V7.314ZM9.3517 3.049H15.2027V0H9.3517ZM17.2947 3.049H23.1327V0H17.2947ZM-0.0003 16.393H3.0487V9.406H-0.0003ZM32.4977 16.393V9.406H29.4497V16.393ZM4.6347 25.785H7.2597V22.75H4.8947C3.6917 22.75 3.0487 22.135 3.0487 20.877V18.484H-0.0003V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM27.8637 25.785C30.8847 25.785 32.4977 24.199 32.4977 21.205V18.484H29.4497V20.877C29.4497 22.135 28.8067 22.75 27.6037 22.75H25.2247V25.785ZM9.3517 25.785H15.2027V22.75H9.3517ZM17.2947 25.785H23.1327V22.75H17.2947Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.71875 24.19921875"
          className={className}
        >
          <path
            d="              M-0.0003 7.1094H1.0117V3.7324C1.0117 1.9414 1.9417 1.0114 3.7187 1.0114H7.0957V0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774ZM31.7187 7.1094V3.6774C31.7187 1.2574 30.4607 0.0004 28.0407 0.0004H24.6227V1.0114H27.9997C29.7777 1.0114 30.7067 1.9414 30.7067 3.7324V7.1094ZM8.3267 1.0114H15.2577V0.0004H8.3267ZM16.4747 1.0114H23.4067V0.0004H16.4747ZM-0.0003 15.8734H1.0117V8.3264H-0.0003ZM31.7187 15.8734V8.3264H30.7067V15.8734ZM3.6917 24.1994H7.0957V23.1874H3.7187C1.9417 23.1874 1.0117 22.2574 1.0117 20.4804V17.0894H-0.0003V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM28.0407 24.1994C30.4607 24.1994 31.7187 22.9414 31.7187 20.5354V17.0894H30.7067V20.4804C30.7067 22.2574 29.7777 23.1874 27.9997 23.1874H24.6227V24.1994ZM8.3267 24.1994H15.2577V23.1874H8.3267ZM16.4747 24.1994H23.4067V23.1874H16.4747Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.568359375 23.912109375"
          className={className}
        >
          <path
            d="              M-0.0003 7.082H0.6697V3.541C0.6697 1.641 1.6547 0.67 3.5407 0.67H7.0817V0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514ZM31.5687 7.082V3.514C31.5687 1.217 30.3517 0 28.0687 0H24.4867V0.67H28.0277C29.9277 0.67 30.8987 1.641 30.8987 3.541V7.082ZM8.1207 0.67H15.2717V0H8.1207ZM16.2967 0.67H23.4607V0H16.2967ZM-0.0003 15.805H0.6697V8.107H-0.0003ZM31.5687 15.805V8.107H30.8987V15.805ZM3.5137 23.912H7.0817V23.242H3.5407C1.6547 23.242 0.6697 22.258 0.6697 20.371V16.83H-0.0003V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM28.0687 23.912C30.3517 23.912 31.5687 22.695 31.5687 20.398V16.83H30.8987V20.371C30.8987 22.258 29.9277 23.242 28.0277 23.242H24.4867V23.912ZM8.1207 23.912H15.2717V23.242H8.1207ZM16.2967 23.912H23.4607V23.242H16.2967Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
