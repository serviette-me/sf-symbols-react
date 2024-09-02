import { IconProps } from "../../types"

export default function BoltSquareFillIconIcon({
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
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM7.7107 14.3963C7.7107 14.1363 7.8067 13.8773 7.9847 13.6723L15.3267 4.9222C16.1597 3.9653 17.4587 4.6762 17.0217 5.8652L14.7927 11.5803H18.9627C19.4687 11.5803 19.8787 11.9633 19.8787 12.4683C19.8787 12.7153 19.7837 12.9743 19.6057 13.1793L12.2777 21.9293C11.4297 22.9003 10.1307 22.1763 10.5817 20.9862L12.7967 15.2853H8.6267C8.1207 15.2853 7.7107 14.8883 7.7107 14.3963Z"
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
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM7.0687 13.9727C7.0687 13.7537 7.1637 13.5217 7.3147 13.3297L14.8477 4.1147C15.5727 3.2677 16.7067 3.8687 16.3107 4.9077L13.9177 11.1977H18.4027C18.8397 11.1977 19.1817 11.5117 19.1817 11.9487C19.1817 12.1677 19.0857 12.3867 18.9217 12.5777L11.3887 21.8067C10.6777 22.6547 9.5427 22.0527 9.9397 20.9997L12.3187 14.7247H7.8477C7.4097 14.7247 7.0687 14.3967 7.0687 13.9727Z"
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
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM7.4097 14.2055C7.4097 13.9585 7.5057 13.7125 7.6697 13.5215L15.1077 4.5525C15.8727 3.6365 17.1037 4.3065 16.6797 5.4275L14.3827 11.4025H18.6897C19.1677 11.4025 19.5507 11.7575 19.5507 12.2225C19.5507 12.4685 19.4547 12.7145 19.2907 12.9065L11.8537 21.8745C11.0747 22.7915 9.8437 22.1215 10.2817 20.9995L12.5777 15.0255H8.2577C7.7797 15.0255 7.4097 14.6695 7.4097 14.2055Z"
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
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM6.2067 13.3985C6.2067 13.2485 6.2757 13.0705 6.4257 12.8925L14.2737 3.0355C14.7927 2.3925 15.6407 2.8305 15.3267 3.6235L12.7147 10.6505H17.5817C17.8967 10.6505 18.1287 10.8695 18.1287 11.1695C18.1287 11.3205 18.0607 11.4985 17.9237 11.6755L10.0767 21.5335C9.5567 22.1755 8.7087 21.7385 9.0097 20.9455L11.6207 13.9175H6.7677C6.4527 13.9175 6.2067 13.7125 6.2067 13.3985Z"
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
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM6.6587 13.6853C6.6587 13.4943 6.7407 13.2893 6.8907 13.1113L14.5467 3.5823C15.1897 2.8023 16.2287 3.3363 15.8597 4.2933L13.3707 10.9373H18.0337C18.4297 10.9373 18.7307 11.2243 18.7307 11.6073C18.7307 11.7993 18.6487 12.0043 18.4847 12.1953L10.8277 21.7113C10.1997 22.4903 9.1597 21.9573 9.5297 21.0003L12.0177 14.3553H7.3557C6.9587 14.3553 6.6587 14.0683 6.6587 13.6853Z"
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
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM6.4257 13.5355C6.4257 13.3575 6.5077 13.1525 6.6587 12.9745L14.3827 3.2815C14.9707 2.5565 15.9547 3.0485 15.5997 3.9515L13.0567 10.8005H17.8277C18.1977 10.8005 18.4707 11.0605 18.4707 11.4155C18.4707 11.5935 18.3887 11.7985 18.2517 11.9625L10.5137 21.6565C9.9257 22.3945 8.9547 21.9025 9.2967 20.9995L11.8537 14.1505H7.0687C6.7127 14.1505 6.4257 13.8905 6.4257 13.5355Z"
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
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM6.8357 13.809C6.8357 13.617 6.9177 13.385 7.0817 13.207L14.6837 3.814C15.3537 3.008 16.4337 3.568 16.0507 4.566L13.6037 11.047H18.1977C18.6077 11.047 18.9217 11.348 18.9217 11.758C18.9217 11.949 18.8397 12.182 18.6757 12.359L11.0747 21.752C10.4047 22.559 9.3247 21.998 9.7067 21L12.1547 14.52H7.5607C7.1507 14.52 6.8357 14.219 6.8357 13.809Z"
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
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM5.9197 13.2074C5.9197 13.0974 5.9747 12.9474 6.1117 12.7834L14.1227 2.7074C14.5467 2.1734 15.2307 2.5294 14.9707 3.1724L12.2777 10.4454H17.2537C17.4997 10.4454 17.6917 10.5954 17.6917 10.8414C17.6917 10.9514 17.6227 11.1014 17.4997 11.2654L9.4887 21.3414C9.0507 21.8754 8.3807 21.5194 8.6407 20.8774L11.3337 13.6034H6.3577C6.0977 13.6034 5.9197 13.4534 5.9197 13.2074Z"
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
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM5.7697 13.111C5.7697 13.002 5.8247 12.893 5.9477 12.715L14.0547 2.529C14.4237 2.064 15.0117 2.379 14.7927 2.939L12.0447 10.336H17.0767C17.3087 10.336 17.4587 10.459 17.4587 10.664C17.4587 10.76 17.4047 10.883 17.2817 11.061L9.1877 21.246C8.8047 21.711 8.2167 21.397 8.4357 20.822L11.1837 13.439H6.1527C5.9337 13.439 5.7697 13.316 5.7697 13.111Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}