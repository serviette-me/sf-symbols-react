import { IconProps } from "../../types"

export default function ApplepencilIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.092095048748515 27.08241249221302"
          className={className}
        >
          <path
            d="              M2.3377 21.6098L5.4547 24.7408L6.6717 24.0848L26.3457 4.4248C27.3437 3.3858 27.3437 1.7718 26.3317 0.7608C25.3067 -0.2512 23.6657 -0.2512 22.6677 0.7468L2.9797 20.3938ZM0.0957 25.7938C-0.3013 26.5318 0.6287 27.3528 1.2577 26.9968L3.8687 25.6028L1.4757 23.2098Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.433060439481327 24.34040496251457"
          className={className}
        >
          <path
            d="              M2.057 19.7236L4.641 22.3076L5.653 21.7746L23.809 3.6586C24.643 2.8116 24.643 1.4576 23.796 0.6376C22.962 -0.2104 21.594 -0.2104 20.774 0.6236L2.604 18.7256ZM0.075 23.3876C-0.226 23.9616 0.444 24.5356 0.936 24.2766L3.26 23.0456L1.319 21.1046Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.84118670303938 25.79361855404701"
          className={className}
        >
          <path
            d="              M2.2148 20.727L5.0718 23.598L6.1928 22.996L25.1558 4.074C26.0718 3.117 26.0718 1.627 25.1418 0.711C24.1988 -0.232 22.6948 -0.232 21.7788 0.684L2.8028 19.605ZM0.0818 24.664C-0.2602 25.32 0.5468 26.031 1.1068 25.717L3.5818 24.391L1.4078 22.217Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.73662129873272 21.595353161541503"
          className={className}
        >
          <path
            d="              M1.6972 18.2057L3.4472 19.9417L4.1712 19.5317L21.3162 2.4697C21.8772 1.9087 21.8772 0.9797 21.3162 0.4327C20.7422 -0.1423 19.8262 -0.1423 19.2652 0.4187L2.1212 17.4947ZM0.0432 21.0907C-0.1218 21.4047 0.2202 21.7057 0.4942 21.5557L2.4492 20.4757L1.1642 19.1767Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.736957458867394 22.591734676467407"
          className={className}
        >
          <path
            d="              M1.8905 18.5203L4.1195 20.7623L4.9945 20.2843L22.1935 3.1803C22.9185 2.4423 22.9185 1.2663 22.1935 0.5553C21.4555 -0.1827 20.2795 -0.1827 19.5545 0.5413L2.3695 17.6593ZM0.0585 21.8423C-0.1735 22.3073 0.3325 22.7453 0.7285 22.5403L2.8615 21.4053L1.2205 19.7503Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.775036785289156 21.60587580223188"
          className={className}
        >
          <path
            d="              M1.7906 17.8398L3.8276 19.8908L4.6336 19.4668L21.2726 2.9108C21.9426 2.2408 21.9426 1.1608 21.2726 0.5038C20.6026 -0.1662 19.5366 -0.1662 18.8796 0.4908L2.2276 17.0608ZM0.0536 20.9848C-0.1514 21.3808 0.2726 21.7368 0.6006 21.5588L2.6516 20.4928L1.1616 19.0018Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.460808648351083 23.33966804571418"
          className={className}
        >
          <path
            d="              M1.957 19.0435L4.349 21.4225L5.279 20.9295L22.888 3.3885C23.654 2.5955 23.654 1.3515 22.875 0.5865C22.095 -0.1935 20.837 -0.1935 20.086 0.5725L2.462 18.1135ZM0.07 22.5025C-0.204 23.0085 0.384 23.5135 0.808 23.2815L3.037 22.1055L1.259 20.3285Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.67052262551564 21.5823133118724"
          className={className}
        >
          <path
            d="              M1.5827 18.6892L2.9227 20.0292L3.5517 19.6332L21.3527 1.9002C21.7767 1.4762 21.7767 0.7522 21.3527 0.3282C20.9157 -0.1098 20.1907 -0.1098 19.7667 0.3282L1.9797 18.0602ZM0.0387 21.2192C-0.0983 21.4512 0.1617 21.6702 0.3527 21.5472L2.1847 20.4532L1.1457 19.4142Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.643172748557816 21.582348342678895"
          className={className}
        >
          <path
            d="              M1.5146 18.9393L2.6636 20.0733L3.2506 19.6913L21.3666 1.6163C21.7356 1.2613 21.7356 0.6323 21.3666 0.2773C21.0106 -0.0927 20.3956 -0.0927 20.0266 0.2773L1.8976 18.3513ZM0.0246 21.2903C-0.0714 21.4683 0.1336 21.6593 0.2846 21.5503L2.0616 20.4563L1.1456 19.5403Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
