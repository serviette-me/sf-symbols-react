import { IconProps } from "../../types"

export default function ProjectiveIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.83984375 22.845703125"
          className={className}
        >
          <path
            d="              M3.0487 22.8454C4.0467 22.8454 4.8127 22.4214 5.3727 21.7934L12.9197 13.3304L20.4667 21.7934C21.0407 22.4354 21.8067 22.8454 22.7907 22.8454C24.4867 22.8454 25.8397 21.3964 25.8397 19.7014C25.8397 19.0044 25.7027 18.3754 25.0057 17.5954L15.3807 6.9454C14.7927 6.2894 14.1777 5.9474 13.4397 5.8384H22.4497C24.1997 5.8384 25.4157 4.5524 25.4157 2.9254C25.4157 1.2854 24.1997 0.0004 22.4497 0.0004H3.4177C1.6677 0.0004 0.4377 1.3124 0.4377 2.9254C0.4377 4.5524 1.6677 5.8384 3.4177 5.8384H12.4007C11.6617 5.9474 11.0467 6.2894 10.4727 6.9454L0.8337 17.5954C0.1367 18.3754 -0.0003 19.0044 -0.0003 19.7014C-0.0003 21.3964 1.3677 22.8454 3.0487 22.8454Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.80078125 19.318359375"
          className={className}
        >
          <path
            d="              M2.1467 19.3188C2.8167 19.3188 3.3497 19.0448 3.7597 18.6078L12.4007 9.3928L21.0407 18.6078C21.4377 19.0448 21.9847 19.3188 22.6547 19.3188C23.8577 19.3188 24.8007 18.3208 24.8007 17.1168C24.8007 16.5838 24.6637 16.1328 24.1997 15.6268L14.0817 4.8668C13.7127 4.4568 13.3027 4.2248 12.8247 4.1428H22.2847C23.5157 4.1428 24.3637 3.2398 24.3637 2.0648C24.3637 0.8888 23.5157 -0.0002 22.2847 -0.0002H2.5157C1.2847 -0.0002 0.4237 0.9158 0.4237 2.0648C0.4237 3.2398 1.2847 4.1428 2.5157 4.1428H11.9767C11.4977 4.2248 11.0877 4.4568 10.7187 4.8808L0.6017 15.6268C0.1367 16.1328 -0.0003 16.5838 -0.0003 17.1168C-0.0003 18.3208 0.9567 19.3188 2.1467 19.3188Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.34765625 21.19140625"
          className={className}
        >
          <path
            d="              M2.6247 21.1916C3.4727 21.1916 4.1157 20.8356 4.6077 20.2886L12.6737 11.4706L20.7407 20.2886C21.2327 20.8356 21.8887 21.1916 22.7227 21.1916C24.1857 21.1916 25.3477 19.9476 25.3477 18.4846C25.3477 17.8696 25.2107 17.3226 24.6227 16.6656L14.7657 5.9746C14.2867 5.4276 13.7677 5.1406 13.1527 5.0446H22.3677C23.8707 5.0446 24.9237 3.9376 24.9237 2.5156C24.9237 1.1076 23.8707 -0.0004 22.3677 -0.0004H2.9937C1.4907 -0.0004 0.4377 1.1206 0.4377 2.5156C0.4377 3.9376 1.4907 5.0446 2.9937 5.0446H12.2087C11.5937 5.1406 11.0747 5.4276 10.5817 5.9746L0.7247 16.6656C0.1367 17.3226 -0.0003 17.8696 -0.0003 18.4846C-0.0003 19.9476 1.1757 21.1916 2.6247 21.1916Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.791015625 14.68359375"
          className={className}
        >
          <path
            d="              M0.9437 14.6832C1.2027 14.6832 1.4357 14.6012 1.6137 14.4102L11.4027 4.1292L21.1637 14.4102C21.3417 14.5882 21.5877 14.6832 21.8477 14.6832C22.3947 14.6832 22.7907 14.2732 22.7907 13.7402C22.7907 13.4672 22.6817 13.2612 22.5037 13.0702L12.1407 2.1462C11.9907 2.0102 11.8267 1.9002 11.6487 1.8452H21.4647C21.9977 1.8452 22.3807 1.4492 22.3807 0.9162C22.3807 0.3832 21.9977 0.0002 21.4647 0.0002H1.2987C0.7797 0.0002 0.3967 0.3832 0.3967 0.9162C0.3967 1.4492 0.7797 1.8452 1.2987 1.8452H11.1427C10.9647 1.9002 10.8007 1.9962 10.6507 2.1462L0.2867 13.0562C0.1097 13.2482 -0.0003 13.4672 -0.0003 13.7402C-0.0003 14.2732 0.4097 14.6832 0.9437 14.6832Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.130859375 17.048828125"
          className={className}
        >
          <path
            d="              M1.5727 17.0486C2.0367 17.0486 2.4197 16.8846 2.7207 16.5706L12.0727 6.8766L21.4097 16.5706C21.6977 16.8706 22.0937 17.0486 22.5587 17.0486C23.4477 17.0486 24.1307 16.3516 24.1307 15.4626C24.1307 15.0526 23.9937 14.6976 23.6797 14.3556L13.2617 3.5406C13.0157 3.2816 12.7287 3.1176 12.4137 3.0486H22.1757C23.0777 3.0486 23.7067 2.4066 23.7067 1.5316C23.7067 0.6426 23.0777 -0.0004 22.1757 -0.0004H1.9277C1.0387 -0.0004 0.4237 0.6566 0.4237 1.5316C0.4237 2.4066 1.0387 3.0486 1.9277 3.0486H11.7167C11.4027 3.1176 11.1287 3.2816 10.8687 3.5546L0.4517 14.3556C0.1227 14.6976 -0.0003 15.0526 -0.0003 15.4626C-0.0003 16.3516 0.6837 17.0486 1.5727 17.0486Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.748046875 15.77734375"
          className={className}
        >
          <path
            d="              M1.2437 15.7772C1.5997 15.7772 1.9007 15.6682 2.1327 15.4222L11.8807 5.4552L21.6157 15.4222C21.8477 15.6542 22.1487 15.7772 22.5037 15.7772C23.2287 15.7772 23.7477 15.2442 23.7477 14.5332C23.7477 14.1782 23.6117 13.8902 23.3787 13.6442L12.7967 2.8032C12.6187 2.6252 12.4137 2.5022 12.1677 2.4472H22.1207C22.8317 2.4472 23.3247 1.9282 23.3247 1.2172C23.3247 0.5062 22.8317 0.0002 22.1207 0.0002H1.5997C0.9027 0.0002 0.4237 0.5062 0.4237 1.2172C0.4237 1.9282 0.9027 2.4472 1.5997 2.4472H11.5797C11.3477 2.5022 11.1427 2.6252 10.9517 2.8032L0.3687 13.6442C0.1227 13.8902 -0.0003 14.1782 -0.0003 14.5332C-0.0003 15.2442 0.5337 15.7772 1.2437 15.7772Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.41796875 18.033203125"
          className={className}
        >
          <path
            d="              M1.8187 18.0334C2.3787 18.0334 2.8167 17.8144 3.1717 17.4454L12.2087 7.9574L21.2457 17.4454C21.5877 17.8144 22.0387 18.0334 22.5997 18.0334C23.6247 18.0334 24.4177 17.1994 24.4177 16.1734C24.4177 15.7094 24.2817 15.3264 23.8987 14.9024L13.6177 4.1154C13.3167 3.8004 12.9747 3.5954 12.5917 3.5274H22.2167C23.2557 3.5274 23.9937 2.7614 23.9937 1.7634C23.9937 0.7524 23.2557 0.0004 22.2167 0.0004H2.1737C1.1487 0.0004 0.4237 0.7654 0.4237 1.7634C0.4237 2.7614 1.1487 3.5274 2.1737 3.5274H11.8267C11.4437 3.5954 11.1157 3.8004 10.8007 4.1294L0.5197 14.9024C0.1227 15.3124 -0.0003 15.7094 -0.0003 16.1734C-0.0003 17.1994 0.8067 18.0334 1.8187 18.0334Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.51953125 13.220703125"
          className={className}
        >
          <path
            d="              M0.5337 13.2202C0.6837 13.2202 0.8207 13.1932 0.9157 13.0842L10.7737 2.3512L20.5897 13.0842C20.6857 13.1792 20.8357 13.2202 20.9867 13.2202C21.2867 13.2202 21.5197 12.9882 21.5197 12.6872C21.5197 12.5232 21.4517 12.4282 21.3417 12.3042L11.2657 1.2852C11.1697 1.1892 11.0607 1.1072 10.9377 1.0662H20.6037C20.9047 1.0662 21.1227 0.8342 21.1227 0.5332C21.1227 0.2322 20.9047 0.0002 20.6037 0.0002H0.9027C0.6017 0.0002 0.3827 0.2322 0.3827 0.5332C0.3827 0.8342 0.6017 1.0662 0.9027 1.0662H10.5687C10.4587 1.1072 10.3497 1.1762 10.2537 1.2712L0.1917 12.2912C0.0817 12.4142 -0.0003 12.5232 -0.0003 12.6872C-0.0003 12.9882 0.2327 13.2202 0.5337 13.2202Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.876953125 12.482421875"
          className={className}
        >
          <path
            d="              M0.3277 12.4822C0.4097 12.4822 0.5197 12.4692 0.5607 12.4002L10.4457 1.4352L20.2887 12.4002C20.3577 12.4692 20.4527 12.4822 20.5347 12.4822C20.7267 12.4822 20.8767 12.3322 20.8767 12.1542C20.8767 12.0452 20.8227 12.0042 20.7537 11.9222L10.8147 0.8472C10.7457 0.7652 10.6637 0.6972 10.5817 0.6562H20.1527C20.3297 0.6562 20.4937 0.5062 20.4937 0.3282C20.4937 0.1502 20.3297 0.0002 20.1527 0.0002H0.6977C0.5197 0.0002 0.3687 0.1502 0.3687 0.3282C0.3687 0.5062 0.5197 0.6562 0.6977 0.6562H10.2677C10.1997 0.6972 10.1307 0.7522 10.0487 0.8342L0.1367 11.8942C0.0687 11.9762 -0.0003 12.0452 -0.0003 12.1542C-0.0003 12.3322 0.1507 12.4822 0.3277 12.4822Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}